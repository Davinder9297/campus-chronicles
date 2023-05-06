import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import studentcredentials from "../../models/studentcredentials";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
export default async function handler(req, res) {
        let token=req.cookies.login;
        token=token.toString()
        if(req.method=='POST'){

            await studentcredentials.findOneAndUpdate({userid:token},{          
                phone:req.body.phone,
                email:req.body.email,
                linkedin:req.body.linkedin,
                address:req.body.address,
            })
            res.status(200).json({success:"success"})
        } 
        
}