const { createProduct, getRecord, getSingleRecord, deleteRecord, updateRecord } = require("../controllar/ProductControllar")

const productrouter = require("express").Router()
const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Public/Product')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

productrouter.post("/product", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 }
]), createProduct)
productrouter.get("/product", getRecord)
productrouter.get("/product/:_id", getSingleRecord)
productrouter.put("/product/:_id", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 }
]), updateRecord)
productrouter.delete("/product/:_id", deleteRecord)

module.exports = productrouter