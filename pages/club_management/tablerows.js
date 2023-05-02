import {RiDeleteBin5Line} from "react-icons/ri"
function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(  
        rowsData.map((data, index)=>{
            const {image,name,currentyear,club,role}= data;
            return(<>
                <tr key={index}>
                <td className="border-2  border-slate-300 h-20 w-28 space-y-2">
                    <div className="flex justify-center w-full"><img src={`${image}`} className="max-h-16 w-fit" alt="" /></div>
               <input type="file"   onChange={(evnt)=>(handleChange(index, evnt))} name="image" className="py-0 px-1 form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={name} onChange={(evnt)=>(handleChange(index, evnt))} name="name" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
                <select value={currentyear} onChange={(evnt)=>(handleChange(index, evnt))} name="currentyear"   className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
  <option className="" value="">--Select Current Year--</option >
  <option className="" value="1st Year">1st Year</option >
  <option className="" value="2nd Year">2nd Year</option >
  <option className="" value="3rd Year">3rd Year</option >
  <option className="" value="4th Year">4th Year</option >
</select>                </td>
                <td className="border-2  border-slate-300">
                <select value={club} onChange={(evnt)=>(handleChange(index, evnt))} name="club"  className="outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
   <option className="" value="">--Select Club Name--</option >
  <option className="" value="Personality Club">Personality Club</option >
  <option className="" value="Cultural Club">Cultural Club</option >
  <option className="" value="Coding Club">Coding Club</option >
  <option className="" value="Editorial Club">Editorial Club</option >
  <option className="" value="Sports Club">Sports Club</option >
  <option className="" value="Training & Placement Cell">Training & Placement Cell</option >
  <option className="" value="Enterpreneurship Cell">Enterpreneurship Cell</option >
  <option className="" value="Core Committee">Core Committee</option >
</select>                </td>
                <td className="border-2  border-slate-300">
                <select value={role} onChange={(evnt)=>(handleChange(index, evnt))} name="role"  className="outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
   <option className="" value="">--Select Role--</option >
  <option className="" value="Incharge">Incharge</option >
  <option className="" value="President">President</option >
  <option className="" value="Leading Role">Leading Role</option >
</select>                </td>   
                <td className="border-2  border-slate-300"><button  className="text-black" onClick={(e)=>(deleteTableRows(index))} ><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

export default TableRows;