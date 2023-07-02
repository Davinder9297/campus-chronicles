import mongoose from "mongoose";
import coordinator from "../../models/coordinator";
import clubcredentials from "../../models/clubcredentials";
import events from "../../models/events";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {  
    let club=req.cookies.club;
    // console.log(club);
            let leadingrole=await coordinator.find({role:"Leading Role",club:club});
            let president=await coordinator.find({role:"President",club:club});
            let incharge=await coordinator.findOne({club:club,role:"Incharge"});
            let event=await events.find({club:club}).sort({date:-1});
            // console.log(incharge);
            res.status(200).json({leadingrole,president,incharge,event});
   
}