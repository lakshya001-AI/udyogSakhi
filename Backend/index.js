const express = require("express");
const cors = require("cors");
const connectMongoDB = require("./Database/connectDB");
const userModel = require("./Database/userSchema");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const path = require("path");
const jwt = require("jsonwebtoken");
const app = express();

dotenv.config();
connectMongoDB();




app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));


const JWT_SECRET = process.env.JWT_SECRET || "mySuperSecretKey12345!@";



app.get("/", (req, res)=>{
    res.send("Hello this is udyogSakhi Backend running on Port 5000");
});


app.post("/createAccount", async (req, res) => {
    const {
        fullName,
        mobileNumber,
        email,
        password,
        region,
        preferredLanguage,
        education,
        industry,
        governmentId
    } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            fullName,
            mobileNumber,
            email,
            password:hashPassword,
            region,
            preferredLanguage,
            education,
            industry,
            governmentId
        });

        await newUser.save();
        res.status(201).json({ message: "Account created successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/loginUser", async (req, res) => {
    const { emailOrMobile, password } = req.body;

    try {
        const user = await userModel.findOne({
            $or: [{ email: emailOrMobile }, { mobileNumber: emailOrMobile }],
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({id: user._id, email:user.email},JWT_SECRET,{expiresIn: "1h"});

        return res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Server error. Please try again later." });
    }
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});