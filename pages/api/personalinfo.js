import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import facultypersonaldata from "../../models/facultypersonaldata";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
export default async function handler(req, res) {
        let token=req.cookies.login;
        token=token.toString()
        if(req.method=='POST'){

            await facultypersonaldata.findOneAndUpdate({userid:token},{          
                phone:req.body.phone,
                email:req.body.email,
                linkedin:req.body.linkedin,
            })
            res.status(200).json({success:"success"})
        } 
        else{
            
            let data=await facultypersonaldata.find({userid:token});
            res.status(200).json(data); 
        }
}