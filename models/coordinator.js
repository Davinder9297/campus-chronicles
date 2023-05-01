import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
const ourschema=new mongoose.Schema({
    name:{
        type:String
    },
    currentyear:{
        type:String
    },  
    image:{
        type:String
    },
    club:{
        type:String
    },  
    role:{
        type:String
    },  
});
mongoose.models={};
export default mongoose.model("coordinator",ourschema);