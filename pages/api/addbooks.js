import mongoose from "mongoose";
import addbooks from "../../models/addbooks";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);
    // console.log(req)

    if(req.method==='POST'){
        let da=req.body;
        await addbooks.remove();
        da.map(async(dat)=>{
            let p=new addbooks(dat);
        await p.save();
        })
        res.status(200).json({success:"success"}) 

    }
    
    else{  
            let data1=await addbooks.find({}).sort({date:-1});
            res.status(200).json(data1);
    }      
}