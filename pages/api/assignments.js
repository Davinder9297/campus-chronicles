import mongoose from "mongoose";
import assignments from "../../models/assignments";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){
        
            let p=new assignments(req.body);
        await p.save();
        res.status(200).json({success:"success"}) 

    }
    
    else{  
            let data1=await assignments.find({})
            res.status(200).json(data1);
    }      
}