import mongoose from "mongoose";
import facultycredentials from "../../models/facultycredentials";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){
        let ans=await facultycredentials.countDocuments({}).exec();
if(ans==0){
    let p=new facultycredentials({
        data:req.body,
       
});
await p.save();
res.status(200).json({success:"success"}) 
}
else{
    await facultycredentials.updateOne({data:req.body})
    res.status(200).json({success:"success"}) 

}

               
        }
    else{
        let data=await facultycredentials.find({});
        res.status(200).json(data);
    }      
}