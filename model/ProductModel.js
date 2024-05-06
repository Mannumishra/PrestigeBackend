const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    categoryname: {
        type: String,
        required: [true, "Category name is must required"]
    },
    subcategoryname: {
        type: String,
        required: [true, "SubCategory name is must required"]
    },
    productname: {
        type: String,
        required: [true, "Product Name is must Required"]
    },
    businesstype: {
        type: String,
        required: [true, "Business type is must required"]
    },
    material: {
        type: String,
        required: [true, "Material is must Reuired"]
    },
    length: {
        type: String,
        required: [true, "Length is must Required"]
    },
    volteage: {
        type: String,
        required: [true, "Voltage is must required"]
    },
    application: {
        type: String,
        required: [true, "Application is must required"]
    },
    image: {
        type: String,
        required: [true, "image is must Required"]
    },
    image1: {
        type: String,
    },
    image2: {
        type: String,
    },
    image3: {
        type: String,
    }

})

const product = mongoose.model("product", productSchema)

module.exports = product