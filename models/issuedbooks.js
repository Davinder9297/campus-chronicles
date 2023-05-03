import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
const ourschema=new mongoose.Schema({
    studentname:{
        type:String
    },
    studentroll:{
        type:String
    },  
    bookname:{
        type:String
    },
    isbn:{
        type:String
    },
    issueddate:{
        type:String
    },  
    returndate:{
        type:String
        
    },  
    fine:{
        type:String
        
    },  
    returned:{
        type:Boolean
        
    },  
});
mongoose.models={};
export default mongoose.model("issuedbooks",ourschema);