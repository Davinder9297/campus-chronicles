import mongoose from "mongoose";
import performance from "../../models/performance";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){
        let da=req.body;
        await performance.remove();
        da.map(async(dat)=>{
            let p=new performance(dat);
        await p.save();
        })
res.status(200).json({success:"success"}) 
}
    else{
        let token =req.cookies.rollno;
        console.log(token);
            let data1=await performance.find({});
            res.status(200).json(data1);
    }      
}