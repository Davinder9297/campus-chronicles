import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
const ourschema=new mongoose.Schema({
    sem:{
        type:String
    },  
    title:{
        type:String
    },  
    subject:{
        type:String
    },
    attachment:{
        type:String
    }

},);
mongoose.models={};
export default mongoose.model("notes",ourschema);