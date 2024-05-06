const category = require("../model/Category")
const fs = require("fs")
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: 'dglihfwse',
    api_key: '939345957566958',
    api_secret: 'q-Pg0dyWquxjatuRb62-PtFzkM0'
});
const uploadCloundanary = async (file) => {
    try {
        const uploadFile = await cloudinary.uploader.upload(file)
        return uploadFile.secure_url
    } catch (error) {
        console.log(error)
    }
}
const createCategory = async (req, res) => {
    try {
        console.log(req.body)
        const { categoryname, description } = req.body
        if (!categoryname || description) {
           return res.status(401).json({
                success: false,
                mess: "Please fill All field"
            })
        }
        const data = new category({ categoryname, description })
        console.log(req.files)
        if (req.files.image) {
            const url = await uploadCloundanary(req.files.image[0].path)
            data.image = url
        }
        if (req.files.image1) {
            const url = await uploadCloundanary(req.files.image1[0].path)
            data.image1 = url
        }
        if (req.files.image2) {
            const url = await uploadCloundanary(req.files.image2[0].path)
            data.image2 = url
        }
        if (req.files.image3) {
            const url = await uploadCloundanary(req.files.image3[0].path)
            data.image3 = url
        }
        await data.save()
        res.status(200).json({
            success: true,
            mess: "Category Created",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            mess: "Internal server error"
        })
    }
}
const getRecord = async (req, res) => {
    try {
        const data = await category.find()
        res.status(200).json({
            success: true,
            mess: "Category Created",
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
        const data = await category.findOne({ _id: req.params._id })
        res.status(200).json({
            success: true,
            mess: "Category found",
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
        const data = await category.findOne({ _id: req.params._id })
        console.log(data)
        if (data) {
            data.categoryname = req.body.categoryname ?? data.categoryname
            data.description = req.body.description ?? data.description
            if (req.files.image) {
                try {
                    fs.unlinkSync(data.image)
                } catch (error) { }
                const url = await uploadCloundanary(req.files.image[0].path)
                data.image = url
            }
            if (req.files.image1) {
                try {
                    fs.unlinkSync(data.image1)
                } catch (error) { }
                const url = await uploadCloundanary(req.files.image1[0].path)
                data.image1 = url
            }
            if (req.files.image2) {
                try {
                    fs.unlinkSync(data.image2)
                } catch (error) { }
                const url = await uploadCloundanary(req.files.image2[0].path)
                data.image2 = url
            }
            if (req.files.image3) {
                try {
                    fs.unlinkSync(data.image3)
                } catch (error) { }
                const url = await uploadCloundanary(req.files.image3[0].path)
                data.image3 = url
            }
            await data.save()
            res.status(200).json({
                success: true,
                mess: "Category Created",
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
        const data = await category.findOne({ _id: req.params._id })
        if (data) {
            await data.deleteOne()
            res.status(200).json({
                success: true,
                mess: "Category Deleted Successfully"
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