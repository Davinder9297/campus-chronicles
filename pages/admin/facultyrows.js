import {RiDeleteBin5Line} from "react-icons/ri"
export default function Facultyrows({rowsData, deleteTableRows, handleChange}) {
    return(  
        
        rowsData.map((data, index)=>{
            const {facultyname,facultyid,department,designation,userid,password}= data;
            // const [ind, setind] = useState(0)
            return(<>
                <tr key={index}>
                    <td className="border-2  border-slate-300">{index+1}</td>
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

