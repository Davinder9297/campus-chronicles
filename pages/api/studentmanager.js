import mongoose from "mongoose";
import studentmanager from "../../models/studentmanager";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){
        let da=req.body;
        await studentmanager.remove();
        da.map(async(dat)=>{
            let p=new studentmanager(dat);
        await p.save();
        })
res.status(200).json({success:"success"}) 
}

    else{
        // let ans=await studentmanager.countDocuments({}).exec();
        // if(ans>0){
            let data1=await studentmanager.find({});
            res.status(200).json(data1);
        // }
    }      
}