import mongoose from "mongoose";
import login from "../../models/login";
mongoose.set("strictQuery", false);
import jwt from 'jsonwebtoken'
import facultycredentials from "../../models/facultycredentials";
import studentcredentials from "../../models/studentcredentials";
import librarycredentials from "../../models/librarycredentials";
import clubcredentials from "../../models/clubcredentials";
import { setCookie } from "cookies-next";
import placementcredentials from "../../models/placementcredentials";
import studentmanager from "../../models/studentmanager";
// import {cookies} from "next/headers"
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    const password=req.body.password;
    const user=req.body.user;
    const profession=req.body.profession;
    let totaldata;
    if(profession=="Faculty"){
         totaldata= await facultycredentials.find({userid:user,password:password});
    }
   else if(profession=="Student Manager"){
        totaldata= await studentmanager.find({userid:user,password:password});
    }
   else if(profession=="Student"){
        totaldata= await studentcredentials.find({userid:user,password:password});
    }
   else if(profession=="Librarian"){
        totaldata= await librarycredentials.find({userid:user,password:password});
    }
   else if(profession=="Club Manager"){
        totaldata= await clubcredentials.find({userid:user,password:password});
    }
   else if(profession=="Placement Manager"){
        totaldata= await placementcredentials.find({userid:user,password:password});
    }
    else{
        res.json({error:"Choose your role"})
    }
    if(totaldata.length>0){
        let token=jwt.sign({user: totaldata.userid},"campuschronicleslogin");
res.status(200).json({totaldata,token});
    }
    else{
        res.json({error:"Invaild Credentials"})
        
    }      
}