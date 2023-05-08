import mongoose from "mongoose";
import studentcredentials from "../../models/studentcredentials";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);
    let token=req.cookies.login;
    if(req.method==='POST'){
        let da=req.body;
        await studentcredentials.remove();
        da.map(async(dat)=>{
            let p=new studentcredentials(dat);
        await p.save();
        })
res.status(200).json({success:"success"}) 
}

    else{
        // let ans=await studentcredentials.countDocuments({}).exec();
        // if(ans>0){
            let data1=await studentcredentials.find({});
            res.status(200).json(data1);
        // }
    }      
}