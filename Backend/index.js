const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Hello this is udyogSakhi Backend running on Port 5000");
});


const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});