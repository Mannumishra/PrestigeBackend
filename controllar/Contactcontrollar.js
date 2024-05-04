const contact = require("../model/ContactModel")

const createContact = async (req, res) => {
    try {
        const { name, email, phone, address, message } = req.body
        if (!name || !email || !phone || !address || !message) {
            return res.status(401).json({
                success: false,
                mess: "Please fill all  fileld"
            })
        }
        let data = new contact({ name, email, phone, address, message })
        await data.save()
        res.status(200).json({
            success: true,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        })
    }
}

module.exports = {
    createContact:createContact
}