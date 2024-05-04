const { createCategory, updateCategory, getsinglrRecord, getRecord, deleteCategory } = require("../controllar/CategoryControllar")

const categoryrouter = require("express").Router()
const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Public/category')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

categoryrouter.post("/category", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 }
]), createCategory)
categoryrouter.put("/category/:_id", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 }
]), updateCategory)
categoryrouter.get("/category/:_id", getsinglrRecord)
categoryrouter.get("/category", getRecord)
categoryrouter.delete("/category/:_id", deleteCategory)



module.exports = categoryrouter