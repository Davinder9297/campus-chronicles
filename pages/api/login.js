import mongoose from "mongoose";
import login from "../../models/login";
mongoose.set("strictQuery", false);
import jwt from 'jsonwebtoken'
import facultycredentials from "../../models/facultycredentials";
import studentcredentials from "../../models/studentcredentials";
import librarycredentials from "../../models/librarycredentials";
import clubcredentials from "../../models/clubcredentials";
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    const password=req.body.password;
    const user=req.body.user;
    const profession=req.body.profession;
    let totaldata;
    if(profession=="Faculty"){
         totaldata= await facultycredentials.find({data: {$elemMatch: {userid:user, password:password}}});
    }
   else if(profession=="Student"){
        totaldata= await studentcredentials.find({data: {$elemMatch: {userid:user, password:password}}});
    }
   else if(profession=="Librarian"){
        totaldata= await librarycredentials.find({data: {$elemMatch: {userid:user, password:password}}});
    }
   else if(profession=="Club Admin"){
        totaldata= await clubcredentials.find({data: {$elemMatch: {userid:user, password:password}}});
    }
    else{
        res.json({error:"Choose your role"})
    }
    if(user && password && profession && totaldata){
        let token=jwt.sign({user: totaldata._id},"campuschronicleslogin");
res.status(200).json({totaldata,token});
    }
    else{
        res.json({error:"Invaild email address or password"})
    }      
}