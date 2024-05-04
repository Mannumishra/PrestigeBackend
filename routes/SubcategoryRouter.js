const { createCategory, getsinglrRecord, getRecord, updateCategory, deleteCategory } = require("../controllar/SuncategoryControllar")

const subcategoryRouter = require("express").Router()

subcategoryRouter.post("/subcategory" , createCategory)
subcategoryRouter.get("/subcategory/:_id" , getsinglrRecord)
subcategoryRouter.get("/subcategory" , getRecord)
subcategoryRouter.put("/subcategory/:_id" , updateCategory)
subcategoryRouter.delete("/subcategory/:_id" , deleteCategory)

module.exports = subcategoryRouter