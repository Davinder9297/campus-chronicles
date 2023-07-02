import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
const ourschema=new mongoose.Schema({
    facultyname:{
        type:String
    },
    image:{
        type:String,
        default:"/user.png"
    },
    facultyid:{
        type:String
    },  
    department:{
        type:String
    },  
    designation:{
        type:String
    },  
    phone:{
        type:String
    },
    email:{
        type:String
    },
    linkedin:{
        type:String
    },
    userid:{
        type:String
    },  
    password:{
        type:String
    }, 
},);
mongoose.models={};
export default mongoose.model("facultycredentials",ourschema);