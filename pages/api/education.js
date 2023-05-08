import mongoose from "mongoose";
import education from "../../models/education";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);
    let token=req.cookies.login;
    let facultyname=req.cookies.facultyname;

    if(req.method==='POST'){
        let ans=await education.countDocuments({userid:token}).exec();
if(ans==0){
    let p=new education({
        educationdata:req.body,
        userid:token,
        facultyname:facultyname
       
});
await p.save();
res.status(200).json({success:"success"}) 
}
else{
    await education.findOneAndDelete({userid:token})
    let newdata=new education({
        educationdata:req.body,
        userid:token,
        facultyname:facultyname
       
});
await newdata.save();
    res.status(200).json({success:"success"}) 

}

               
        }
    else{
        let ans=await education.countDocuments({userid:token}).exec();
        if(ans>0){
            let data1=await education.find({userid:token});
            // console.log(data1[0].educationdata);
            res.status(200).json(data1[0].educationdata);
        }
        else{
            res.status(200).json([])
        }
    }      
}