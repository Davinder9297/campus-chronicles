import mongoose from "mongoose";
import clubcredentials from "../../models/clubcredentials";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);
    console.log(req)

    if(req.method==='POST'){
        let ans=await clubcredentials.countDocuments({}).exec();
if(ans==0){
    let p=new clubcredentials({
        data:req.body,
       
});
await p.save();
res.status(200).json({success:"success"}) 
}
else{
    await clubcredentials.updateOne({data:req.body})
    res.status(200).json({success:"success"}) 

}

               
        }
    else{
        let data=await clubcredentials.find({});
        res.status(200).json(data);
    }      
}