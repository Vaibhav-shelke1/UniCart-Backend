import mongoose from "mongoose";

const url="mongodb+srv://vaibhavshelke218:pass123@cluster0.70vsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo=async ()=>{
    try {
        await mongoose.connect(url)
            console.log("connected to server");
    } catch (error) {
        console.error("Database connection failed:", error.message);
      }
}

export default connectToMongo;

