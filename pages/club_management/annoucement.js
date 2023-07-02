import {RiDeleteBin5Line} from "react-icons/ri"
function Announcementrows({rowsData, deleteTableRows, handleChange}) {
    return(  
        rowsData.map((data, index)=>{
            const {title,doc,date}= data;
            return(<>
                <tr key={index}>
                <td className="border-2  border-slate-300 h-20 w-28 space-y-2">
               <input type="file"   onChange={(evnt)=>(handleChange(index, evnt))} name="doc" className="py-0 px-1 form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={title} onChange={(evnt)=>(handleChange(index, evnt))} name="title" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
                <input type="date" value={date} onChange={(evnt)=>(handleChange(index, evnt))} name="date" className=" form-control"/>
  
                     </td>
                
                <td className="border-2  border-slate-300"><button  className="text-black" onClick={(e)=>(deleteTableRows(index))} ><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

export default Announcementrows;