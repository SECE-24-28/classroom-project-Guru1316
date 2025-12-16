const User = require("../Models/UserModel.js")

// const fs = require("fs");

// let jsonData = JSON.parse(fs.readFileSync("./Users.json","utf-8"));

// exports.createUser = (req, res) => {
//     const user = { id: jsonData.length? jsonData[jsonData.length - 1].id + 1: 1, ...req.body };
//     jsonData.push(user);
//     fs.writeFile("./Users.json", JSON.stringify(jsonData, null, 2) ,"utf-8", (err) => {
//         if(err)
//         {
//             return res.status(400).json({
//                 status : "Failed",
//                 message : "cannot write the data in the file"
//             })
//         }
//         return res.status(201).json({
//             status :"Success",
//             message : "Written Successfully",
//             data : user
//         })
//     })
// }

exports.createUser = async(req, res) => 
{
    try
    {
        const user = await User.create(req.body);
        res.status(201).json({
            status: "True",
            data : user
        })
    }
    catch(err)
    {
        res.status(400).json({
            status: "Failed to write",
            message : err
        })
    }
}

// exports.getAllUsers = (req, res) => {
//     res.status(200).json({
//         status : "Success",
//         users : jsonData
//     })
// }

exports.getAllUsers = async(req, res) => {
    try
    {
        const users = await User.find();
        res.status(200).json({
            status : "Success",
            data : users
        })
    }
    catch(err)
    {
        res.status(404).json({
            status : "Failed",
            message : err
        })
    }
}

// exports.getUser = (req, res) => {
//     const userId = req.params.id;
//     const data = jsonData.find((e) => e.id === Number(userId));
//     if(!data)
//     {
//         return res.status(404).json({
//             status : "Failed",
//             message : "Please check the id"
//         })
//     }
//     return res.status(200).json({
//         status : "Success",
//         user : data 
//     })
// }

exports.getUser = async(req, res) => {
    try
    {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: "Success",
            data: user
        })
    }
    catch(err)
    {
        res.status(404).json({
            status : "Failed",
            message : err
        })
    }
}

// exports.updateUser = (req, res) => {
//     const userId = req.params.id;
//     const data = jsonData.find((e) => e.id === Number(userId));
//     const user = req.body;
//     if(!data)
//     {
//         return res.status(404).json({
//             status : "Failed",
//             message : "Please check the id"
//         })
//     }
//     Object.assign(data, user);
//     fs.writeFile("./Users.json", JSON.stringify(jsonData, null, 2) ,"utf-8", (err) => {
//         if(err)
//         {
//             return res.status(400).json({
//                 status : "Failed",
//                 message : "Cannot write the data in the file"
//             })
//         }
//         return res.status(200).json({
//             status :"Success",
//             message : "Updated Successfully",
//             data : data
//         })
//     })
// }

exports.updateUser = async(req, res) => {
    try
    {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators: true
        })
        res.status(201).json({
            status: "Success",
            data : user
        })
    }
    catch(err)
    {
        res.status(400).json({
            status: "Failed",
            message: err
        })
    }
}


// exports.deleteUser = (req, res) => {
//     const userId = req.params.id;
//     const dataIndex = jsonData.findIndex((e) => e.id === Number(userId));
//     if(dataIndex === -1)
//     {
//         return res.status(404).json({
//             status : "Failed",
//             message : "Please check the id"
//         })
//     }
//     const deletedUser = jsonData.splice(dataIndex, 1);

//     fs.writeFile("./Users.json", JSON.stringify(jsonData, null, 2) ,"utf-8", (err) => {
//         if(err)
//         {
//             return res.status(400).json({
//                 status : "Failed",
//                 message : "Cannot write the data in the file"
//             })
//         }
//         return res.status(200).json({
//             status :"Success",
//             message : "Deleted Successfully",
//             data: deletedUser
//         })
//     })
// }

exports.deleteUser = async(req, res) => {
    try
    {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "Success",
            data: null
        })
    }
    catch(err)
    {
        res.status(400).json({
            status: "Failed",
            message: null
        })
    }
}