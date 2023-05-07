import mongoose from "mongoose";
import ebooks from "../../models/ebooks";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    if(req.method==='POST'){
        let da=req.body;
        await ebooks.remove();
        da.map(async(dat)=>{
            let p=new ebooks(dat);
        await p.save();
        })
        res.status(200).json({success:"success"}) 

    }
    
    else{  
            let data1=await ebooks.find({});
            res.status(200).json(data1);
    }      
}