const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Minimum 2 Characters required"]
    },
    category : {
        type: String,
        required: [true, "Category is required"],
        trim: true
    },
    imgName : {
        type: String,
        required: [true, "imgName is required"],
        trim: true
    },
    description : {
        type: String,
        required: [true, "Description is required"],
        trim: true
    },
    imageId : {
        type: String,
        required: [true, "imageId is required"],
        trim: true
    },
    inStock : {
        type: Number,
        required: [true, "Stock is required"]
    },
    isVeg : {
        type: Boolean,
        required: [true, "Choice is required"],
        default: false
    },
    rating : {
        type: String,
        required: [true, "Rating is required"],
        trim: true
    },
    ratingCount : {
        type: String,
        required: [true, "Rating Count is required"],
        trim: true
    },
    defaultPrice : {
        type: Number,
        default: 12500
    }
})

const sectionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        trim : true
    },
    itemCards : [itemSchema]
})

const Menu = mongoose.model("Menu", sectionSchema);
module.exports = Menu;