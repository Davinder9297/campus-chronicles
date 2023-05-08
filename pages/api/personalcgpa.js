import mongoose from "mongoose";
import performance from "../../models/performance";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);


        let token =req.cookies.rollno;
        console.log(token);
            let data1=await performance.findOne({rollno:token});
            res.status(200).json(data1);
        
}