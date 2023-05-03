import {RiDeleteBin5Line} from "react-icons/ri"
function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(  
             
        rowsData.map((data, index)=>{
            const {bookname,isbn,studentname,studentroll,issueddate,returndate,fine,returned }= data;
            
            return(

                <tr key={index}>
                <td className="border-2  border-slate-300">
                <input type="text"  value={studentname} onChange={(evnt)=>(handleChange(index, evnt))} name="studentname" className="form-control "/>
                </td>
                <td className="border-2  border-slate-300">
                <input type="text"  value={studentroll} onChange={(evnt)=>(handleChange(index, evnt))} name="studentroll" className="form-control "/>
                </td>
                <td className="border-2  border-slate-300">
                <input type="text"  value={bookname} onChange={(evnt)=>(handleChange(index, evnt))} name="bookname" className="form-control "/>
                </td>
                <td className="border-2  border-slate-300">
                <input type="text"  value={isbn} onChange={(evnt)=>(handleChange(index, evnt))} name="isbn" className="form-control "/>
                </td>
                <td className="border-2  border-slate-300">
                <input type="date"  value={issueddate} onChange={(evnt)=>(handleChange(index, evnt))} name="issueddate" className="form-control "/>
                </td>
                <td className="border-2  border-slate-300">
                <input type="date"  value={returndate} onChange={(evnt)=>(handleChange(index, evnt))} name="returndate" className="form-control "/>
                </td>
                <td className="border-2 w-16 border-slate-300">
               <input type="text"  value={fine} onChange={(evnt)=>(handleChange(index, evnt))} name="fine" className="form-control "/>
                </td>
                <td className="border-2 w-2 h-2 border-slate-300  pt-2">
               <input type="checkbox"  value={returned} onChange={(evnt)=>(handleChange(index, evnt),evnt.target.value=evnt.target.checked)}  name="returned" className="w-full h-full bg-slate-500 "/>
                </td>
                <td className="border-2  border-slate-300"><button className="text-black" onClick={()=>(deleteTableRows(index))}><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            )
        })
   
    )
    
}

export default TableRows;