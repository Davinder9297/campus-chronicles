import {RiDeleteBin5Line} from "react-icons/ri"
function Eventsrows({rowsData, deleteTableRows, handleChange}) {
    return(  
        rowsData.map((data, index)=>{
            const {image,eventname,club,title,description,date}= data;
            // date=date.format('dd/mm/yyyy')
            return(<>
                <tr key={index}>
                <td className="border-2  border-slate-300 h-20 w-28 space-y-2">
                <div className="flex justify-center w-full"><img src={`${image}`} className="max-h-16 w-fit" alt="" /></div>
               <input type="file"   onChange={(evnt)=>(handleChange(index, evnt))} name="image" className="py-0 px-1 form-control"/>
                </td>
                <td className="border-2  border-slate-300 ">
               <input value={eventname}   onChange={(evnt)=>(handleChange(index, evnt))} name="eventname" className="form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={title} onChange={(evnt)=>(handleChange(index, evnt))} name="title" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={description} onChange={(evnt)=>(handleChange(index, evnt))} name="description" className=" form-control"/>
                </td>
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
                <input type="date"   value={date} onChange={(evnt)=>(handleChange(index, evnt))} name="date" className=" form-control"/>
  
                     </td>
                
                <td className="border-2  border-slate-300"><button  className="text-black" onClick={(e)=>(deleteTableRows(index))} ><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

export default Eventsrows;