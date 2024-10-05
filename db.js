import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 

const url = process.env.mongo_url;

const connectToMongo = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to server");
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
}

export default connectToMongo;
