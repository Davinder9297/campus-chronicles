import mongoose from "mongoose";
import submittedassignments from "../../models/submittedassignments";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){
        
            let p=new submittedassignments(req.body);
        await p.save();
        res.status(200).json({success:"success"}) 

    }
    
    else{  
        // let sem=req.cookies.sem;
        // let subject=req.query
        let user=req.cookies.login;
            let data1=await submittedassignments.find({userid:user})
            res.status(200).json(data1);
    }      
}