import mongoose from "mongoose";
import librarycredentials from "../../models/librarycredentials";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){
        let da=req.body;
        await librarycredentials.remove();
        da.map(async(dat)=>{
            let p=new librarycredentials(dat);
        await p.save();
        })
    }
    
    else{  
            let data1=await librarycredentials.find({});
            res.status(200).json(data1);
    }      
}