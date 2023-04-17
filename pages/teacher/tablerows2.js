import {RiDeleteBin5Line} from "react-icons/ri"
export default function Experiencerow({rowsData2, deleteTableRows2, handleChange2}) {
    return(  
             
        rowsData2.map((data, index)=>{
            const {role,institution,duration}= data;
            
            return(

                <tr key={index}>
                <td className="border-2  border-slate-300">
               <textarea rows="2"   value={role} onChange={(evnt)=>(handleChange2(index, evnt))} name="role" className=" form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="2"   value={institution} onChange={(evnt)=>(handleChange2(index, evnt))} name="institution" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="2"   value={duration} onChange={(evnt)=>(handleChange2(index, evnt))} name="duration" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300"><button className="text-black" onClick={()=>(deleteTableRows2(index))}><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            )
        })
   
    )
    
}

