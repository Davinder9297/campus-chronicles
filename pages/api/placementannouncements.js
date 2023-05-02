import mongoose from "mongoose";
import placementannouncements from "../../models/placementannouncements";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){
        let da=req.body;
        // console.log(da);
        await placementannouncements.remove();
        da.map(async(dat)=>{
            let p=new placementannouncements(dat);
        await p.save();
        })
        res.status(200).json({success:"success"}) 

    }
    
    else{  
            let data1=await placementannouncements.find({}).sort({date:-1});
            res.status(200).json(data1);
    }      
}