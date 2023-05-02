import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
const ourschema=new mongoose.Schema({
    title:{
        type:String
    },
    doc:{
        type:String
    },  
    date:{
        type:String,
        default:new Date()
    }, 
});
mongoose.models={};
export default mongoose.model("placementannouncements",ourschema);