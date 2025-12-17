const Menu = require("../Models/MenuModel.js");

exports.createMenu = async(req, res) => {
    try
    {
        const { title, itemCards } = req.body;

        const menu = await Menu.findOneAndUpdate(
            { title },                     
            { $push: { itemCards: { $each: itemCards } } }, 
            { new: true, upsert: true }      
        );
        res.status(201).json({
            status : "Success",
            data : menu
        })
    }
    catch(err)
    {
        res.status(400).json({
            status: "Failed to write",
            message : err.message
        })
    }
}

exports.getAllMenus = async(req, res) => {
    try
    {
        const menus = await Menu.find();
        res.status(200).json({
            status : "Success",
            data : menus
        })
    }
    catch(err)
    {
        res.status(404).json({
            status : "Failed",
            message : err.message
        })
    }
}

exports.getMenu = async(req, res) => {
    try
    {
        const menu = await Menu.findById(req.params.id);
        if(!menu)
        {
            return res.status(404).json({
                status: "Failed",
                message: "Cannot find menu"
            })
        }
        res.status(200).json({
            status: "Success",
            data: menu
        })
    }
    catch(err)
    {
        res.status(404).json({
            status : "Failed",
            message : err.message
        })
    }
}

exports.getMenuItem = async (req, res) => {
    try 
    {
        const itemId = req.params.id;
        const menu = await Menu.findOne({ "itemCards._id": itemId }, { "itemCards.$": 1, title: 1 });
        if (!menu) {
            return res.status(404).json({
                status: "Failed",
                message: "Item not found"
            });
        }
        res.status(200).json({
            status: "Success",
            data: menu
        });
    } 
    catch (err) 
    {
        res.status(400).json({
            status: "Failed",
            message: err.message
        });
    }
}

exports.updateMenu = async (req, res) => {
    try
    {
        const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators: true
        })
        res.status(201).json({
            status: "Success",
            data : menu
        })
    }
    catch(err)
    {
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}

exports.updateMenuItem = async (req, res) => {
    try
    {
        const itemId = req.params.id;
        const updateFields = {};
        for (const key in req.body) {
            updateFields[`itemCards.$.${key}`] = req.body[key];
        }
        const menu = await Menu.findOneAndUpdate(
            { "itemCards._id": itemId },          
            { $set: updateFields }, 
            { new: true, runValidators: true }
        );
        res.status(201).json({
            status: "Success",
            data : menu
        })
    }
    catch(err)
    {
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}

exports.deleteMenu = async (req, res) => {
    try
    {
        await Menu.findByIdAndDelete(req.params.id);
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

exports.deleteMenuItem = async (req, res) => {
    try
    {
        const itemId = req.params.id;
        const menu = await Menu.findOneAndUpdate(
            { "itemCards._id": itemId },
            { $pull: { itemCards: { _id: itemId } } },
            { new: true }
        );

        if (!menu) {
            return res.status(404).json({
                status: "Failed",
                message: "Item not found"
            });
        }
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