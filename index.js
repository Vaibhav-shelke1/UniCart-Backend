import express from "express"
import connectToMongo from "./db.js";

const app=express();
const port=5000;

connectToMongo();

app.listen(port,()=>{
    console.log(`server is running on ${port} port.`)
})
