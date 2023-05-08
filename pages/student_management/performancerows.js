import {RiDeleteBin5Line} from "react-icons/ri"
import {GrView} from "react-icons/gr"
function Performancerows({rowsData, deleteTableRows, handleChange}) {

    return(  
        rowsData.map((data, index)=>{
            const {rollno,sem1,sem2,sem3,sem4,sem5,sem6,sem7,sem8}= data;
            return(<>
                <tr key={index}>
                    {/* <td className="border-2  border-slate-300 w-28" >{index+1}.</td> */}
                <td className="border-2  border-slate-300">
               <input  value={rollno} onChange={(evnt)=>(handleChange(index, evnt))} name="rollno" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={sem1} onChange={(evnt)=>(handleChange(index, evnt))} name="sem1" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={sem2} onChange={(evnt)=>(handleChange(index, evnt))} name="sem2" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={sem3} onChange={(evnt)=>(handleChange(index, evnt))} name="sem3" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={sem4} onChange={(evnt)=>(handleChange(index, evnt))} name="sem4" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={sem5} onChange={(evnt)=>(handleChange(index, evnt))} name="sem5" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={sem6} onChange={(evnt)=>(handleChange(index, evnt))} name="sem6" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={sem7} onChange={(evnt)=>(handleChange(index, evnt))} name="sem7" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={sem8} onChange={(evnt)=>(handleChange(index, evnt))} name="sem8" className=" form-control"/>
                </td>               
                <td className="border-2  border-slate-300"><button  className="text-black" onClick={(e)=>(deleteTableRows(index))} ><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

export default Performancerows;