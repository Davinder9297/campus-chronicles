import mongoose from "mongoose";
import studentcredentials from "../../models/studentcredentials";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);
    let token=req.cookies.login;


        // let ans=await studentcredentials.countDocuments({}).exec();
        // if(ans>0){
            let data1=await studentcredentials.findOne({userid:token});
            res.status(200).json(data1);
        // }

}