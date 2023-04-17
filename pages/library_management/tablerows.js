import {RiDeleteBin5Line} from "react-icons/ri"
function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(  
             
        rowsData.map((data, index)=>{
            const {bookname,isbn,studentname,studentroll,issueddate,returndate,fine,returned }= data;
            
            return(

                <tr key={index}>
                <td className="border-2  border-slate-300">
                    {bookname}
                </td>
                <td className="border-2  border-slate-300">
                    {isbn}
                </td>
                <td className="border-2  border-slate-300">
                    {studentname}
                </td>
                <td className="border-2  border-slate-300">
                    {studentroll}
                </td>
                <td className="border-2  border-slate-300">
                    {issueddate}
                </td>
                <td className="border-2  border-slate-300">
                    {returndate}
                </td>
           
                <td className="border-2  border-slate-300">
               <input type="text"  value={fine} onChange={(evnt)=>(handleChange(index, evnt))} name="fine" className="form-control "/>
                </td>
                <td className="">
               <input type="checkbox"  value={returned} onChange={(evnt)=>(handleChange(index, evnt),evnt.target.value=evnt.target.checked)} name="returned" className=" "/>
                </td>
                <td className="border-2  border-slate-300"><button className="text-black" onClick={()=>(deleteTableRows(index))}><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            )
        })
   
    )
    
}

export default TableRows;