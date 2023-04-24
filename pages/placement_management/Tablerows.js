import {RiDeleteBin5Line} from "react-icons/ri"
import {GrClose} from 'react-icons/gr'
import {ImWarning} from 'react-icons/im'
import { useState } from "react";
function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(  
        
        rowsData.map((data, index)=>{
            const {title,description}= data;
            // const [ind, setind] = useState(0)
            return(<>
                <tr key={index}>
                <td className="border-2  border-slate-300">
               <textarea rows="3" cols="20"  value={title} onChange={(evnt)=>(handleChange(index, evnt))} name="title" className=" form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="3"   value={description} onChange={(evnt)=>(handleChange(index, evnt))} name="description" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300"><button  className="text-black" onClick={(e)=>(deleteTableRows(index))} ><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

export default TableRows;