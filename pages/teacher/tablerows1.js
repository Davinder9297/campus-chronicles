import {RiDeleteBin5Line} from "react-icons/ri"

export default function Newrow({rowsData1, deleteTableRows1, handleChange1}) {
    return(         
        rowsData1.map((data, index)=>{
            const {title,authorname,journal,year,issn,link }= data;
            
            return(

                <tr key={index}>
                <td className="border-2  border-slate-300">
               <textarea rows="2"  value={title} onChange={(evnt)=>(handleChange1(index, evnt))} name="title" className=" form-control  resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="2"   value={authorname} onChange={(evnt)=>(handleChange1(index, evnt))} name="authorname" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="2"   value={journal} onChange={(evnt)=>(handleChange1(index, evnt))} name="journal" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="2"   value={year} onChange={(evnt)=>(handleChange1(index, evnt))} name="year" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="2"   value={issn} onChange={(evnt)=>(handleChange1(index, evnt))} name="issn" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300">
               <textarea rows="2"   value={link} onChange={(evnt)=>(handleChange1(index, evnt))} name="link" className="form-control resize-none "></textarea>
                </td>
                <td className="border-2  border-slate-300"><button className="text-black" onClick={()=>(deleteTableRows1(index))}><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            )
        })
   
    )
      }