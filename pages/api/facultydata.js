import mongoose from "mongoose";
import facultypersonaldata from "../../models/facultypersonaldata";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
export default async function handler(req, res) {
 
            
            let data=await facultypersonaldata.find({});
            // console.log();
            res.status(200).json(data); 
        
}