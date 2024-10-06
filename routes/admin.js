import express from "express";
import Admin from "../model/Admin.js";
// import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";



const router = express.Router();

router.post("/createAdmin", async (req, res) => {
    const { name, email, password,role } = req.body;
     
    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(password,salt)
    try {
        const user = await Admin.create({
            name: name,
            email: email,
            password: secPass,
            role:role
        });
        return res.send({ user });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

export default router;
