import mongoose from "mongoose";
import interviewquestions from "../../models/interviewquesions"
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){
        let da=req.body;
        await interviewquestions.remove();
        da.map(async(dat)=>{
            let p=new interviewquestions(dat);
        await p.save();
        })
res.status(200).json({success:"success"}) 
}
    else{
        
            let data1=await interviewquestions.find({});
            res.status(200).json(data1);
    }      
}