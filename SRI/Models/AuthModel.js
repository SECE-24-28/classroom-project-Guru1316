const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt =  require("bcrypt");

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
    confirmPassword :{
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

authSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword=undefined;
    next();
})

authSchema.methods.correctPassword=async function(candidatePassword, userPassword)
{
    return await bcrypt.compare(candidatePassword, userPassword);
}

const Auth = mongoose.model("Auth", authSchema);
model.exports = Auth;