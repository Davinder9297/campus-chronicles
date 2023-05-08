import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import facultycredentials from "../../models/facultycredentials";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
export default async function handler(req, res) {
        let token=req.cookies.facultyname;

            let data=await facultycredentials.findOne({facultyname:token});
            res.status(200).json(data); 
        
}