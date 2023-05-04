import mongoose from "mongoose";
import addbooks from "../../models/addbooks";
import issuedbooks from "../../models/issuedbooks";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    let totalbooks=await addbooks.countDocuments({}).exec();
    let issued=await issuedbooks.countDocuments({}).exec();
    
            let notreturned=await issuedbooks.find({returned:false}).countDocuments({}).exec();
            res.status(200).json({totalbooks,issued,notreturned});
        
}