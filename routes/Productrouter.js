const { createProduct, getRecord, getSingleRecord, deleteRecord, updateRecord } = require("../controllar/ProductControllar");
const productrouter = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Define multer disk storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const directory = './Public/Product';
        checkDirectorySync(directory);
        cb(null, directory);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Define multer upload middleware
const upload = multer({ storage: storage });

// Middleware to check if directory exists, if not, create it
const checkDirectorySync = (directory) => {
    try {
        fs.statSync(directory);
    } catch (error) {
        fs.mkdirSync(directory, { recursive: true });
    }
};

// Middleware to remove files if directory doesn't exist
const removeFilesIfDirectoryNotPresent = (files, directory) => {
    try {
        fs.readdirSync(directory);
    } catch (error) {
        if (error.code === "ENOENT") {
            files.forEach((file) => {
                fs.unlinkSync(file.path);
            });
        }
    }
};

// Middleware to handle file upload and unlink if directory doesn't exist
const handleFileUpload = (req, res, next) => {
    const directory = './Public/Product';
    checkDirectorySync(directory);
    removeFilesIfDirectoryNotPresent(req.files, directory);
    next();
};

// Routes
productrouter.post("/product", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 }
]), handleFileUpload, createProduct);

productrouter.get("/product", getRecord);
productrouter.get("/product/:_id", getSingleRecord);

productrouter.put("/product/:_id", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 }
]), handleFileUpload, updateRecord);

productrouter.delete("/product/:_id", deleteRecord);

module.exports = productrouter;
