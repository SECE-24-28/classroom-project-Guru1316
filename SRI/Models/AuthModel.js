const mongoose = require("mongoose");
const validator = require("validator");

const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: [true, "Email already exist use another"],
        lowercase: true,
        validate: [validator.isEmail, "Please enter a correct email"]
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    password:{
        type: String,
        required: [true, "Please enter password"],
        minlength: [8, "Password must be greater than 8 characters"],
        select: false,
    },
    passwordConfirm:{
        type: String,
        required: [true, "Please enter correct password"],
        validate:{
            validator: function(el){
                return el === this.password;
            },
            message: "Password and confirm password is not same"
        }
    },
},
{
    timestamps: true,
})