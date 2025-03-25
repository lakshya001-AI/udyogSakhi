const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    preferredLanguage: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        required: true,
    },
    creditScore: {
        type: String,
    },
    governmentId: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const userModel = mongoose.model("UserModel", userSchema);
module.exports = userModel;
