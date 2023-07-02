import {RiDeleteBin5Line} from "react-icons/ri"
function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(  
        
        rowsData.map((data, index)=>{
            const {image,studentname,rollno,dob,fathername,mothername,userid,password,sem}= data;
            // const [ind, setind] = useState(0)
            return(<>
                <tr key={index}>
                    <td>{index+1}</td>
                <td className="border-2  border-slate-300 h-20 w-28 space-y-2">
                    <div className="flex justify-center w-full"><img src={`${image}`} className="max-h-16 w-fit" alt="" /></div>
               <input type="file"   onChange={(evnt)=>(handleChange(index, evnt))} name="image" className="py-0 px-1 form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={studentname} onChange={(evnt)=>(handleChange(index, evnt))} name="studentname" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={rollno} onChange={(evnt)=>(handleChange(index, evnt))} name="rollno" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
                <select value={sem} onChange={(evnt)=>(handleChange(index, evnt))} name="sem"  className="outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
   <option className="" value="">--Select Semester--</option >
  <option className="" value="1st">1st</option >
  <option className="" value="2nd">2nd</option >
  <option className="" value="3rd">3rd</option >
  <option className="" value="4th">4th</option >
  <option className="" value="5th">5th</option >
  <option className="" value="6th">6th</option >
  <option className="" value="7th">7th</option >
  <option className="" value="8th">8th</option >
  
</select>                </td>
                <td className="border-2  border-slate-300">
               <input type="date" value={dob} onChange={(evnt)=>(handleChange(index, evnt))} name="dob" className=" form-control"/>
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