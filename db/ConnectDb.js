const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        // await mongoose.connect("mongodb://localhost:27017/presties")
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connectd Successfully");
    } catch (error) {
        console.log(error);
    }
}

connectDb()