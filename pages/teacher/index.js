import Navbar from "../../components/navbar";

export default function Teacher(){
    return(<>
    <div className="teacherbg h-screen text-white">
        <Navbar class=""/>
    <div className="text-center font-serif  text-4xl pt-3">Welcome Ms.Jaspreet Kaur</div>
    <div className="text-center text-xl mt-4 font-s">What Would You Like To Do?</div>
   <div className="flex justify-center mt-4">
    <div className="flex flex-wrap justify-around max-w-5xl w-auto ">
        <div className="h-32 w-44 text-center flex justify-center items-center bg-white profile m-4">View Profile</div>
        <div className="h-32 w-44 bg-slate-400 assignment m-4">Post An Assignment</div>
        <div className="h-32 w-44 bg-slate-400 m-4">Student Records</div>
        <div className="h-32 w-44 bg-slate-400 m-4">Attendence</div>
        <div className="h-32 w-44 bg-slate-400 m-4">Upload Reasearch Papers</div>
        <div className="h-32 w-44 bg-slate-400 m-4">Announcement Generation</div>
        <div className="h-32 w-44 bg-slate-400 m-4">FDFA</div>
        <div className="h-32 w-44 bg-slate-400 m-4">df</div>
    </div>
   </div>
    </div>
    </>)
}