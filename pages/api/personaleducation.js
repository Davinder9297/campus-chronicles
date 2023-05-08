import mongoose from "mongoose";
import education from "../../models/education";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);
    let token=req.cookies.facultyname;


            let data1=await education.find({});
            // console.log(data1[0].educationdata);
            res.status(200).json(data1);
            console.log(data1);
   
         
}