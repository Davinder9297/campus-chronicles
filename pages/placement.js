// import Navbar from "../components/navbar";
export default function Placement(){
    return (<>
    <div className="flex justify-between flex-row my-2 border-2">
      <div className="  flex-col h-80 w-64 bg-slate-300 border-2  border-rose-500">
    
        <div className="ml-5 text-2xl bg-black text-gray-800 font-bold">Home</div>
        <div className="   bg-slate-500">Interview Related questions</div>
        
        <div className="   ">Past details about visited companies</div>
        <div className="   text-center">Take Mock Test</div>

      </div> 
      {/* <div className=" flex border-solid border-4 bg-slate-500 w-60" >

    </div>*/}
     
    </div>
    </>)
}