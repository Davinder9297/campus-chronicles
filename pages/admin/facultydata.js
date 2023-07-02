import {RiDeleteBin5Line} from "react-icons/ri"
export default function Rows({rowsData, deleteTableRows, handleChange}) {
    return(  
        
        rowsData.map((data, index)=>{
            const {image,facultyname,department,facultyid,designation,userid,password}= data;
            // const [ind, setind] = useState(0)
            return(<>
                <tr key={index}>
                    <td className="border-2  border-slate-300">{index+1}</td>
                    <td className="border-2  border-slate-300 h-20 w-28 space-y-2">
                    <div className="flex justify-center w-full"><img src={`${image}`} className="max-h-16 w-fit" alt="" /></div>
               <input type="file"   onChange={(evnt)=>(handleChange(index, evnt))} name="image" className="py-0 px-1 form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={facultyname} onChange={(evnt)=>(handleChange(index, evnt))} name="facultyname" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={facultyid} onChange={(evnt)=>(handleChange(index, evnt))} name="facultyid" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={department} onChange={(evnt)=>(handleChange(index, evnt))} name="department" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={designation} onChange={(evnt)=>(handleChange(index, evnt))} name="designation" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={userid} onChange={(evnt)=>(handleChange(index, evnt))} name="userid" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={password} onChange={(evnt)=>(handleChange(index, evnt))} name="password" className=" form-control"/>
                </td>
              <td className="border-2  border-slate-300"><button  className="text-black" onClick={(e)=>(deleteTableRows(index))} ><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

