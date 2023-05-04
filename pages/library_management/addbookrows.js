import {RiDeleteBin5Line} from "react-icons/ri"
export default function Addbookrows({rowsData, deleteTableRows, handleChange}) {
    return(  
        rowsData.map((data, index)=>{
            const {image,bookname,authorname,isbn}= data;
            // date=date.format('dd/mm/yyyy')
            return(<>
                <tr key={index}>
                <td className="border-2  border-slate-300 h-20 w-28 space-y-2">
                <div className="flex justify-center w-full"><img src={`${image}`} className="max-h-16 w-fit" alt="" /></div>
               <input type="file"   onChange={(evnt)=>(handleChange(index, evnt))} name="image" className="py-0 px-1 form-control"/>
                </td>
                <td className="border-2  border-slate-300 ">
               <input value={bookname}   onChange={(evnt)=>(handleChange(index, evnt))} name="bookname" className="form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={authorname} onChange={(evnt)=>(handleChange(index, evnt))} name="authorname" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={isbn} onChange={(evnt)=>(handleChange(index, evnt))} name="isbn" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300"><button  className="text-black" onClick={(e)=>(deleteTableRows(index))} ><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

