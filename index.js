import express from "express"
import connectToMongo from "./db.js";
import adminRouter from "./routes/admin.js";

const app=express();
const port=5000;

connectToMongo();
app.use(express.json());
app.use('api/admin/',adminRouter);




app.listen(port,()=>{
    console.log(`server is running on ${port} port.`)
})
