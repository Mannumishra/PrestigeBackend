const { createContact } = require("../controllar/Contactcontrollar")

const contactRouter = require("express").Router()

contactRouter.post("/contact" , createContact)

module.exports = contactRouter