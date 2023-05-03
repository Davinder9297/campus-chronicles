import { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "./sidebar";
import Addbookrows from "./addbookrows"
export default function Addbook(){
    const [rowsData, setrowsData] = useState([])
    const [norecord, setnorecord] = useState('')
    const [disable, setdisable] = useState(true)
    const [opac, setopac] = useState('cursor-not-allowed opacity-50')
    const [show, setshow] = useState('')
    const [save, setsave] = useState('')
    
    const addTableRows = ()=>{
        setnorecord('hidden')
        setdisable(false)
        setopac('cursor-pointer')
          const rowsInput={
            bookname:'',
            image:'',
            aut:'',
            description:'',  
          } 
          setrowsData([...rowsData, rowsInput])
          // console.log(rowsData.length);
           
        
      }
     const deleteTableRows = (index)=>{
      setdisable(false)
      setopac('cursor-pointer')
          const rows = [...rowsData];
          rows.splice(index, 1);
          setrowsData(rows);
          // console.log(rowsData.length);
          if(rowsData.length==1){
            setnorecord('')
          }
     }
   
     const handleChange = (index, evnt)=>{
      setdisable(false)
      setopac('cursor-pointer')
      const { name, value } = evnt.target;
      const rowsInput = [...rowsData];
      rowsInput[index][name] = value;
      setrowsData(rowsInput);
  }
    const savedata=()=>{
        console.log(category);
    }
    return(<>
    <div className="h-screen overflow-y-hidden">
        <Navbar/>
        <div className="flex h-[91.5%] ">
            <Sidebar/>
            <div className="flex-col w-[82%] h-[93.3%]  overflow-y-auto scrollbar-thin  scrollbar-track-slate-100 scrollbar-thumb-slate-500">

            <div className={`${show} pb-4`}>
        <div className="text-center text-2xl font-serif mt-5 ">Coordinator's Details Management</div>
        <div className="flex justify-end space-x-2 text-white pr-2">

          <button disabled={disable} className={`bg-blue-600 p-2 rounded ${save}`} onClick={savedata}>Save Changes</button><button onClick={addTableRows} className="bg-blue-600 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Book Image</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Book Name </th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Author Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">ISBN Number</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className={``}>

                      <tr className={`${norecord}`}>
                          <td colSpan="9"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <Addbookrows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                      </tbody>
                    </table>
                          </div>
        </div>
            </div> 

        </div>
    </div>
    </div>
    </>)
}