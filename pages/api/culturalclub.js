import mongoose from "mongoose";
import coordinator from "../../models/coordinator";
import clubcredentials from "../../models/clubcredentials";
import events from "../../models/events";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {  
            let leadingrole=await coordinator.find({role:"Leading Role",club:"Cultural Club"});
            let president=await coordinator.find({role:"President",club:"Cultural Club"});
            let incharge=await clubcredentials.findOne({club:"Cultural Club"});
            let event=await events.find({club:"Cultural Club"}).sort({date:-1});
            res.status(200).json({leadingrole,president,incharge,event});
   
}