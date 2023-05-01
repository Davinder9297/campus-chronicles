import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
const ourschema=new mongoose.Schema({
    eventname:{
        type:String
    },
    image:{
        type:String
    },  
    title:{
        type:String
    },
    club:{
        type:String
    },
    description:{
        type:String
    },  
    date:{
        type:String
    },  
});
mongoose.models={};
export default mongoose.model("events",ourschema);