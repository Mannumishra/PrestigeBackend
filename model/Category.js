const mongoose = require("mongoose")

const categorySchema =new  mongoose.Schema({
    categoryname: {
        type: String,
        require: [true, "Category Name is must Required"]
    },
    description:{
        type:String,
        required:[true,"Description is most important"]
    },
    image:{
        type:String,
        required:[true,"Image is must required"]
    },
    image1:{
        type:String,
        required:[true,"Image is must required"]
    },
    image2:{
        type:String,
    },
    image3:{
        type:String,
    }
})

const category = mongoose.model("category" , categorySchema)

module.exports = category