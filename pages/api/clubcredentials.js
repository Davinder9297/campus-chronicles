import mongoose from "mongoose";
import clubcredentials from "../../models/clubcredentials";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);
    console.log(req)

    if(req.method==='POST'){
        let da=req.body;
        await clubcredentials.remove();
        da.map(async(dat)=>{
            let p=new clubcredentials(dat);
        await p.save();
        })
    }
    
    else{  
            let data1=await clubcredentials.find({});
            res.status(200).json(data1);
    }      
}