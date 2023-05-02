import {RiDeleteBin5Line} from "react-icons/ri"
import {GrClose} from 'react-icons/gr'
import {ImWarning} from 'react-icons/im'
import { useState } from "react";
function TableRows2({rowsData, deleteTableRows, handleChange}) {
    return(  
        
        rowsData.map((data, index)=>{
            const {title,description,example,task,difficulty,company}= data;
            // const [ind, setind] = useState(0)
            return(<>
                <tr key={index}>
                <td className="border-2  border-slate-300">
               <textarea rows="4" cols="20"  value={title} onChange={(evnt)=>(handleChange(index, evnt))} name="title" className=" form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="4"   value={description} onChange={(evnt)=>(handleChange(index, evnt))} name="description" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="4"  value={example} onChange={(evnt)=>(handleChange(index, evnt))} name="example" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea  rows="4" value={task} onChange={(evnt)=>(handleChange(index, evnt))} name="task" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea  rows="4" value={company} onChange={(evnt)=>(handleChange(index, evnt))} name="company" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
                <select value={difficulty} onChange={(evnt)=>(handleChange(index, evnt))} name="difficulty"  className="outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
   <option className="" value="">--Select Difficulty--</option >
  <option className="" value="Easy">Easy</option >
  <option className="" value="Medium">Medium</option >
  <option className="" value="Hard">Hard</option >

</select>                </td>
                <td className="border-2  border-slate-300"><button  className="text-black" onClick={(e)=>(deleteTableRows(index))} ><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

export default TableRows2;