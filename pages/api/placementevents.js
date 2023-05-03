import mongoose from "mongoose";
import events from "../../models/events";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    // if(req.method==='POST'){
    //     let da=req.body;
    //     await placementevents.remove();
    //     da.map(async(dat)=>{
    //         let p=new placementevents(dat);
    //     await p.save();
    //     })
    //     res.status(200).json({success:"success"}) 

    // }
    
    // else{  
            let data1=await events.find({club:"Training & Placement Cell"});
            res.status(200).json(data1);
    // }      
}