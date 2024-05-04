const { createContact, getRecord } = require("../controllar/Contactcontrollar")

const contactRouter = require("express").Router()

contactRouter.post("/contact" , createContact)
contactRouter.get("/contact" , getRecord)

module.exports = contactRouter