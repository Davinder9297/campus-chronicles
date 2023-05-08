import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
const ourschema=new mongoose.Schema({
    rollno:{
        type:String
    },
    sem1:{
        type:String
    },  
    sem2:{
        type:String
    },  
    sem3:{
        type:String
    },  
    sem4:{
        type:String
    },  
    sem5:{
        type:String
    },  
    sem6:{
        type:String
    },  
    sem7:{
        type:String
    },  
    sem8:{
        type:String
    },  

});
mongoose.models={};
export default mongoose.model("performance",ourschema);