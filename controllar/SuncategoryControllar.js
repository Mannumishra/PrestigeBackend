const subcategory = require("../model/Subcategory")

const createCategory = async (req, res) => {
    try {
        console.log(req.body)
        const { categoryname ,subcategoryname } = req.body
        // if (!categoryname || !subcategoryname) {
        //     return res.status(401).json({
        //         success: false,
        //         mess: "Please fill All field"
        //     })
        // }
        const data = new subcategory({ categoryname ,subcategoryname })
        await data.save()
        res.status(200).json({
            success: true,
            mess: "Subcategory Created",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal server error"
        })
    }
}
const getRecord = async (req, res) => {
    try {
        const data = await subcategory.find()
        res.status(200).json({
            success: true,
            mess: "Subcategory Found Successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal server error"
        })
    }
}
const getsinglrRecord = async (req, res) => {
    try {
        const data = await subcategory.findOne({ _id: req.params._id })
        res.status(200).json({
            success: true,
            mess: "Subcategory found",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal server error"
        })
    }
}
const updateCategory = async (req, res) => {
    try {
        const data = await subcategory.findOne({ _id: req.params._id })
        console.log(data)
        if (data) {
            data.categoryname = req.body.categoryname ?? data.categoryname
            data.subcategoryname = req.body.subcategoryname ?? data.subcategoryname
            await data.save()
            res.status(200).json({
                success: true,
                mess: "Subcategory Updated",
                data: data
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal server error"
        })
    }
}
const deleteCategory = async (req, res) => {
    try {
        const data = await subcategory.findOne({ _id: req.params._id })
        if (data) {
            await data.deleteOne()
            res.status(200).json({
                success: true,
                mess: "subcategory Deleted Successfully"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal server error"
        })
    }
}



module.exports = {
    createCategory: createCategory,
    updateCategory: updateCategory,
    getsinglrRecord: getsinglrRecord,
    getRecord: getRecord,
    deleteCategory: deleteCategory
}