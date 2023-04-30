import mongoose from "mongoose";
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
const ourschema=new mongoose.Schema({
    user:{
        type:String,    
    },
    password:{
        type:String,   
    },
    profession:{
        type:String,   
    },

});
mongoose.models={};
export default mongoose.model("login",ourschema);