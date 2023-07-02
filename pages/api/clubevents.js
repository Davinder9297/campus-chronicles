import mongoose from "mongoose";
import coordinator from "../../models/coordinator";
import clubcredentials from "../../models/clubcredentials";
import events from "../../models/events";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {  
            // let 
   
}