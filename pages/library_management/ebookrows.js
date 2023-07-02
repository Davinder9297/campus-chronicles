import {RiDeleteBin5Line} from "react-icons/ri"
export default function Ebookrows({rowsData, deleteTableRows, handleChange}) {
    return(  
        rowsData.map((data, index)=>{
            const {doc,title,category}= data;
            // date=date.format('dd/mm/yyyy')
            return(<>
                <tr key={index}>
                <td className="border-2  border-slate-300 h-20 w-28 space-y-2">
               <input type="file"   onChange={(evnt)=>(handleChange(index, evnt))} name="doc" className="py-0 px-1 form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={title} onChange={(evnt)=>(handleChange(index, evnt))} name="title" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
                <select value={category} onChange={(evnt)=>(handleChange(index, evnt))} name="category"  className="outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
   <option className="" value="">--Select Category--</option >
  <option className="" value="Mathematics">Mathematics</option >
  <option className="" value="Physics">Physics</option >
  <option className="" value="Python">Python</option >
  <option className="" value="Java">Java</option >
  <option className="" value="C">C</option >
  <option className="" value="DBMS">DBMS</option >
  <option className="" value="Operating System">Operating System</option >
</select>                
</td>
                <td className="border-2  border-slate-300"><button  className="text-black" onClick={(e)=>(deleteTableRows(index))} ><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

