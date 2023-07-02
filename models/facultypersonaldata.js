import mongoose from "mongoose";
import Email from "next-auth/providers/email";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
const ourschema=new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String
    },
    department:{
        type:String
    },
    designation:{
        type:String
    },
    facultyid:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:Email
    },
    linkedin:{
        type:String
    },
    userid:{
        type:String,
    },
    password:{
        type:String,
    }

});
mongoose.models={};
export default mongoose.model("facultypersonaldata",ourschema);