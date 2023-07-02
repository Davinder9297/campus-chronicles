import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
const ourschema=new mongoose.Schema({
    userid:{
        type:String
    },  
    researchdata:{
        type:Array
    },    
    facultyname:{
        type:String
    }

},);
mongoose.models={};
export default mongoose.model("research",ourschema);