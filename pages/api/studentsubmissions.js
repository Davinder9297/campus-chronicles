import mongoose from "mongoose";
import submittedassignments from "../../models/submittedassignments";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {


        let rollno=req.cookies.rollno;
        let subject=req.cookies.subject;
            let data1=await submittedassignments.find({rollno:rollno,subject:subject})
            res.status(200).json(data1);
         
}