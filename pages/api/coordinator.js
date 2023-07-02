import mongoose from "mongoose";
import coordinator from "../../models/coordinator";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){
        let da=req.body;
        await coordinator.remove();
        da.map(async(dat)=>{
            let p=new coordinator(dat);
        await p.save();
        })
        res.status(200).json({success:"success"}) 

    }
    
    else{  
            let data1=await coordinator.find({});
            res.status(200).json(data1);
    }      
}