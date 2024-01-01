import {RiDeleteBin5Line} from "react-icons/ri"
import {GrView} from "react-icons/gr"
import { useState } from "react"
import { useEffect } from "react"
function Notesrows({rowsData, deleteTableRows, handleChange}) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    //   const [options, setoptions] = useState([])
            const firstsem = [
                "Mathematics 1",
                "Engineering Drawing",
                "Semiconductor Physics",
                "Semiconductor Physics (Lab)",
                "Basic Electrical Engineering",
                "Basic Electrical Engineering (Lab)",
            ];
            const secondsem = [
                "English",
                "Chemistry",
                "English (Lab)",
                "Mathematics 2",
                "Chemistry (Lab)",
                "Workshop for Manufacturing",
                "Programming for Problem Solving",
                "Programming for Problem Solving (Lab)"
            ];
            
            const thirdsem = [
                "DE",
                "DSA",
                "OOP",
                "DE (Lab)",
                "DSA (Lab)",
                "OOP (Lab)",
                "Humanities",
                "IT Workshop",
                "Mathematics 3",
            ];
            
            const fourthsem = [
                "OS",
                "DAA",
                "COA",
                "OS (Lab)",
                "DAA (Lab)",
                "COA (Lab)",
                "Mathematics 4",
            ];
            
            const fifthsem = [
                "CN",
                "SE",
                "ERP",
                "FLAT",
                "DBMS",
                "SE (Lab)",
                "CN (Lab)",
                "DBMS (Lab)",
                "Programmming in Python",
                "Programmming in Python (Lab)",
            ];
            
            const sixthsem = [
                "AI",
                "ML",
                "CD",
                "CC",
                "HRM",
                "AI (Lab)",
                "ML (Lab)",
                "CD (Lab)",
                "CC (Lab)",
            ];
            
            const seventhsem = [
                "DL",
                "ML",
                "CD",
                "CC",
                "HRM",
                "ML (Lab)",
                "CD (Lab)",
                "DL (Lab)",
                "CC (Lab)",
            ];
            const options=[firstsem,secondsem,thirdsem,fourthsem,fifthsem,sixthsem,seventhsem]

    return(  
        
        rowsData.map((data, index)=>{
            const {subject,sem,attachment,title}= data;
            // setsemester(sem);
      
 
            return(<>
                <tr key={index}>
                <td className="border-2  border-slate-300 w-20">
                    {index+1}
</td>
                <td className="border-2  border-slate-300 w-44 space-y-2">
                <button className=' text-2xl ' onClick={() => openInNewTab(attachment)}><GrView/></button>
               <input type="file"   onChange={(evnt)=>(handleChange(index, evnt))} name="attachment" className="py-0 px-1 mx-auto form-control w-24"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={title} onChange={(evnt)=>(handleChange(index, evnt))} name="title" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300 w-44">
                <select value={sem} onChange={(evnt)=>(handleChange(index, evnt))}  name="sem"  className="outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
   <option className="" value="">--Select Semester--</option >
  <option className="" value={"1"}>1st</option >
  <option className="" value={"2"}>2nd</option >
  <option className="" value={"3"}>3rd</option >
  <option className="" value={"4"}>4th</option >
  <option className="" value={"5"}>5th</option >
  <option className="" value={"6"}>6th</option >
  <option className="" value={"7"}>7th</option >
  
</select>                </td>
                <td className="border-2  border-slate-300 w-44">
                <select value={subject} onChange={(evnt)=>(handleChange(index, evnt))} name="subject"  className="outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
                <option className="" value="">--Select Subject--</option >
{
    sem && options[sem-1].map((d,index)=><option key={index} className="" value={d}>{d}</option >
    )
}

  
</select>                </td>

                
   
                <td className="border-2  border-slate-300"><button  className="text-black" onClick={(e)=>(deleteTableRows(index))} ><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

export default Notesrows;