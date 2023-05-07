import mongoose from "mongoose";
import requestbook from "../../models/requestbook";
import studentcredentials from "../../models/studentcredentials";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){      
   let token=req.cookies.login;
        token=token.toString()
        const title=req.body.title;
        const author=req.body.author;
        if(title && author){
            let data=await studentcredentials.findOne({userid:token})
            let p=new requestbook({
                title:req.body.title,
                author:req.body.author,
                publisher:req.body.publisher,
               studentname:data.studentname,
               rollno:data.rollno}

                );
        await p.save();
        res.status(200).json({success:"success"}) 
        }
        else{
            res.status(200).json({error:"error"})
        }
    }
    else{  
            let data1=await requestbook.find({});
            res.status(200).json(data1);
    }      
}