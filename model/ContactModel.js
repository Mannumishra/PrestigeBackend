const mongoose = require("mongoose")

const contactschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is must Required"]
    },
    email: {
        type: String,
        required: [true, "Email is must Required"]
    },
    phone: {
        type: Number,
        required: [true, "Phone number is must required"]
    },
    address: {
        type: String,
        required: [true, "Address is must Required"]
    },
    message: {
        type: String,
        required: [true, "Message is must Required"]
    }
})

const contact = mongoose.model("contact" , contactschema)

module.exports = contact