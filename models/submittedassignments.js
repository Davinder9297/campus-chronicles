import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
const ourschema=new mongoose.Schema({
    studentname:{
        type:String
    },
    rollno:{
        type:String
    },  
    subject:{
        type:String,
    }, 
    userid:{
        type:String,
    },
    doc:{
        type:String,
    },
    
    sem:{
        type:String,
    }, 
    date:{
        type:String,
        default:new Date().toISOString()
    }
});
mongoose.models={};
export default mongoose.model("submittedassignments",ourschema);