const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Minimum 2 Characters required"],
    } ,
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Pasword is required"]
    } ,
    college: {
        type: String,
        default: "Sri Eshwar College Of Engineering"
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;