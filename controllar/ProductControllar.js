const product = require("../model/ProductModel")
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

const createProduct = async (req, res) => {
    try {
        console.log("i am hit", req.body);
        console.log(req.files);
        const { categoryname, subcategoryname, productname, businesstype, material, length, volteage, application, } = req.body;
        const data = new product({ categoryname, subcategoryname, productname, businesstype, material, length, volteage, application })
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
        await data.save();
        res.status(200).json({
            success: true,
            mess: "Product created",
            data: data
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};

const getRecord = async (req, res) => {
    try {
        let data = await product.find()
        res.status(200).json({
            success: true,
            mess: "Product Found",
            data: data
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}
const getSingleRecord = async (req, res) => {
    try {
        let data = await product.findOne({ _id: req.params._id })
        res.status(200).json({
            success: true,
            mess: "Product Found",
            data: data
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}

const updateRecord = async (req, res) => {
    try {
        let data = await product.findOne({ _id: req.params._id })
        if (data) {
            data.categoryname = req.body.categoryname ?? data.categoryname
            data.subcategoryname = req.body.subcategoryname ?? data.subcategoryname
            data.material = req.body.material ?? data.material
            data.application = req.body.application ?? data.application
            data.productname = req.body.productname ?? data.productname
            data.businesstype = req.body.businesstype ?? data.businesstype
            data.length = req.body.length ?? data.length
            data.volteage = req.body.volteage ?? data.volteage
            data.categoryname = req.body.categoryname ?? data.categoryname
            data.categoryname = req.body.categoryname ?? data.categoryname
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
                mess: "Product Updated Successfully",
                data: data
            })
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const deleteRecord = async (req, res) => {
    console.log("i am hit");
    try {
        let data = await product.findOne({ _id: req.params._id })
        if (data) {
            console.log(data)
            try {
                fs.unlinkSync(data.image)
            } catch (error) { }
            try {
                fs.unlinkSync(data.image1)
            } catch (error) { }
            try {
                fs.unlinkSync(data.image2)
            } catch (error) { }
            try {
                fs.unlinkSync(data.image3)
            } catch (error) { }
            await data.deleteOne()
            res.status(200).json({
                success: true,
                mess: "Product Found",
                data: data
            });
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createProduct: createProduct,
    getRecord: getRecord,
    getSingleRecord: getSingleRecord,
    deleteRecord: deleteRecord,
    updateRecord: updateRecord
}
