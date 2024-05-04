const mongoose = require("mongoose")

const connectDb = async ()=>{
    try {
       await mongoose.connect("mongodb+srv://mannu22072000:UWF8B55TXS4jOhUr@cluster0.beqaasg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") 
       console.log("Database connectd Successfully");
    } catch (error) {
        console.log(error);
    }
}

connectDb()