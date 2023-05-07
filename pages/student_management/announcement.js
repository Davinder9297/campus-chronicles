import {RiDeleteBin5Line} from "react-icons/ri"
import {GrView} from "react-icons/gr"
function Announcementrows({rowsData, deleteTableRows, handleChange}) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    return(  
        rowsData.map((data, index)=>{
            const {title,doc,date}= data;
            return(<>
                <tr key={index}>
                    <td className="border-2  border-slate-300 w-28" >{index+1}.</td>
                <td className="border-2  border-slate-300 w-28 space-y-2">
                <button className=' text-2xl ' onClick={() => openInNewTab(doc)}><GrView/></button>
               <input type="file"   onChange={(evnt)=>(handleChange(index, evnt))} name="doc" className="py-0 px-1 form-control"/>
                </td>
                <td className="border-2  border-slate-300">
               <input  value={title} onChange={(evnt)=>(handleChange(index, evnt))} name="title" className=" form-control"/>
                </td>
                <td className="border-2  border-slate-300">
                <input type="date" value={date} onChange={(evnt)=>(handleChange(index, evnt))} name="date" className=" form-control"/>
  
                     </td>
                
                <td className="border-2  border-slate-300"><button  className="text-black" onClick={(e)=>(deleteTableRows(index))} ><RiDeleteBin5Line className="text-3xl"/></button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

export default Announcementrows;