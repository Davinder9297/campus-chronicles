import {RiDeleteBin5Line} from "react-icons/ri"
function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(  
        
        rowsData.map((data, index)=>{
            const {studentname,rollno,dob,fathername,mothername,userid,password}= data;
            // const [ind, setind] = useState(0)
            return(<>
                <tr key={index}>
                    <td>{index+1}</td>
                <td className="border-2  border-slate-300">
               <input  value={studentname} onChange={(evnt)=>(handleChange(index, evnt))} name="studentname" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={rollno} onChange={(evnt)=>(handleChange(index, evnt))} name="rollno" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={dob} onChange={(evnt)=>(handleChange(index, evnt))} name="dob" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={fathername} onChange={(evnt)=>(handleChange(index, evnt))} name="fathername" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={mothername} onChange={(evnt)=>(handleChange(index, evnt))} name="mothername" className=" form-control"/>
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

export default TableRows;