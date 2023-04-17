import {RiDeleteBin5Line} from "react-icons/ri"
function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(  
             
        rowsData.map((data, index)=>{
            const {qualification,institution,university,year }= data;
            
            return(

                <tr key={index}>
                <td className="border-2  border-slate-300">
               <textarea rows="2"   value={qualification} onChange={(evnt)=>(handleChange(index, evnt))} name="qualification" className=" form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="2"   value={institution} onChange={(evnt)=>(handleChange(index, evnt))} name="institution" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="2"   value={university} onChange={(evnt)=>(handleChange(index, evnt))} name="university" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="2" cols="2"  value={year} onChange={(evnt)=>(handleChange(index, evnt))} name="year" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300"><button className="text-black" onClick={()=>(deleteTableRows(index))}><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            )
        })
   
    )
    
}

export default TableRows;