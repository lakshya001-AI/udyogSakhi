const mongoose = require("mongoose");

async function connectMongoDB(){
    await mongoose.connect("mongodb+srv://makodelakshya101:vAtstV9ayXNQJqIm@cluster0.eemsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log("MongoDB Database is connected");
    }).catch((error)=>{
        console.log("Error connecting Database: ", error);
    });
}

module.exports = connectMongoDB;