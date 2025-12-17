const jwt = require("jsonwebtoken");
const User = require("../Models/AuthModel.js");

const dotenv = require("dotenv");

dotenv.config({
    path: "./config.env"
})

// const users = [
//     {
//         id:1,
//         name:"Guruprasad K",
//         email:"guruprasadgdr1@gmail.com",
//         password:"Guru1613!",
//         confirmPassword:"Guru1613!",
//         role:"user"
//     },
//     {
//         id:2,
//         name:"Gurusaran K",
//         email:"gurusarangdr1@gmail.com",
//         password:"Guru1316!",
//         confirmPassword:"Guru1316!",
//         role:"admin"
//     }
// ]

const signToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRETKEY, {
        expiresIn : parseInt(process.env.JWT_EXPIRES),
    });
}

exports.allUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        status : "Success",
        data : users,
    })
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password)
    {
        res.status(404).json({
            status: "Failed",
            msg: "Email and password should not be empty",
        });
    }
    const user = await User.findOne({email}).select("+password");
    // const user = users.find((u)=> u.email===email && u.password===password);
    if(!user && !(await User.correctPassword(user.password, password)))
    {
        res.status(404).json({
            status : "Failed",
            message : "Invalid email or password",
        });
    };
    const token = signToken(user.id);
    res.status(200).json({
        status : "Success",
        token : token,
        data: {
            userId: user._id,
            email : user.email,
            name: user.name,
            role: user.role
        }
    })
};

exports.signup = async (req, res) => {
    const newUser = await User.create(req.body);
    // const {name, email, password, confirmPassword, role} = req.body;
    // const existingUser = users.find((u) => u.email===email);
    // if(existingUser)
    // {
    //     return res.status(400).json({
    //         status: "Failed",
    //         message: "User Already Exists",
    //     })
    // }
    // const newUser = {
    //     id: users.length + 1,
    //     name: name,
    //     email: email,
    //     password: password,
    //     role: role || "user",
    // }
    // users.push(newUser);
    const token = signToken(newUser.id);
    res.status(201).json({
        status: "Success",
        token: token,
        user: newUser
    })
};