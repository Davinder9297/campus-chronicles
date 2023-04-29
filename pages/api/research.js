import mongoose from "mongoose";
import research from "../../models/research";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);
    let token=req.cookies.login;

    if(req.method==='POST'){
        let ans=await research.countDocuments({userid:token}).exec();
if(ans==0){
    let p=new research({
        researchdata:req.body,
        userid:token
       
});
await p.save();
res.status(200).json({success:"success"}) 
}
else{
    await research.findOneAndDelete({userid:token})
    let newdata=new research({
        researchdata:req.body,
        userid:token
       
});
await newdata.save();
    res.status(200).json({success:"success"}) 

}

               
        }
    else{
        let ans=await research.countDocuments({userid:token}).exec();
        if(ans>0){
            let data1=await research.find({userid:token});
            // console.log(data1[0].researchdata);
            res.status(200).json(data1[0].researchdata);
        }
        else{
            res.status(200).json([])
        }
    }      
}