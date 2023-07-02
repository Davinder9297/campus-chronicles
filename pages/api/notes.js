import mongoose from "mongoose";
import notes from "../../models/notes";

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){
        let da=req.body;
        await notes.remove();
        da.map(async(dat)=>{
            let p=new notes(dat);
        await p.save();
        })
res.status(200).json({success:"success"}) 
}
    else{
        let subject=req.query.subject;
            if(subject){
                let data1=await notes.find({subject});
                res.status(200).json(data1);
            }
            else{
                let data1=await notes.find({});
                res.status(200).json(data1);
            }
            // console.log(req.query);
           
    }      
}