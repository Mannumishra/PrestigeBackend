const mongoose = require("mongoose")

const subcategorySchema = new mongoose.Schema({
    categoryname: {
        type: String,
        required: [true, "Category Name is must Required"]
    },
    subcategoryname: {
        type: String,
        required: [true, "Subcategory name is must required"]
    }
})

const subcategory = mongoose.model("subcategory", subcategorySchema)

module.exports = subcategory