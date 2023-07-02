import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import facultycredentials from "../../models/facultycredentials";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
export default async function handler(req, res) {
        let token=req.cookies.login;
        token=token.toString()
        if(req.method=='POST'){

            await facultycredentials.findOneAndUpdate({userid:token},{          
                phone:req.body.phone,
                email:req.body.email,
                linkedin:req.body.linkedin,
            })
            res.status(200).json({success:"success"})
        } 
        else{
            
            let data=await facultycredentials.find({userid:token});
            // console.log();
            res.status(200).json(data[0]); 
        }
}