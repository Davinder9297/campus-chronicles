import Navbarres from "../../components/navbarres";
import Sidebar from "./sidebar";
import {FiSave} from "react-icons/fi"
import TableRows from "./tablerows";
import { useEffect, useState } from "react";
export default function Issued_book(){
    const rowsInput1={
        bookname:"dfaf",
        isbn:"dfafa",
        studentname:"eef",  
        studentroll:"ser",  
        issueddate:"ddd",  
        returndate:"fff",
        fine:'5',  
        returned:false 
      } 
    const [rowsData, setRowsData] = useState([rowsInput1]);
    const [norecord, setnorecord] = useState('');
    const [spin, setspin] = useState('');
    const [show, setshow] = useState('hidden');
    const [disable, setdisable] = useState(true);
    const [opac, setopac] = useState('cursor-not-allowed opacity-50');
//  const [bookname, setbookname] = useState('')
//  const [isbn, setisbn] = useState('')
//  const [studentname, setstudentname] = useState('')
//  const [studentroll, setstudentroll] = useState('')
//  const [issueddate, setissueddate] = useState('')
//  const [returndate, setreturndate] = useState('')
useEffect(() => {
  
    if(rowsData.length>0){
        setnorecord('hidden')
     }

}, [])

//  const [fine, setfine] = useState('')
//  const [returned, setreturned] = useState()
    const addTableRows = ()=>{
      setnorecord('hidden')
  setdisable(false)
  setopac('cursor-pointer')
        const rowsInput={
          bookname:'',
          isbn:'',
          studentname:'',  
          studentroll:'',  
          issueddate:'',  
          returndate:'',
          fine:'',  
          returned:false 
        } 
        setRowsData([...rowsData, rowsInput])
        // console.log(rowsData.length);
         
      
    }
   const deleteTableRows = (index)=>{
    setdisable(false)
    setopac('cursor-pointer')
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
        // console.log(rowsData.length);
        if(rowsData.length==1){
          setnorecord('')
        }
   }
 
   const handleChange = (index, evnt)=>{
    setdisable(false)
    setopac('cursor-pointer')
    const { name, value } = evnt.target;
    if(name=="returned"){
        value=evnt.target.checked;
    }
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);

}
const save=async(e)=>{
  e.preventDefault()
setdisable(true)
setopac('cursor-not-allowed opacity-50')
const res=await fetch('http://localhost:3000/api/issuedbooks', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                    body:JSON.stringify(rowsData)
                })
                let response=await res.json();
}
useEffect(() => {
  const url = "http://localhost:3000/api/issuedbooks";
  const fetchData = async () => {
    try {
      setspin('')
      let response = await fetch(url);
      let json = await response.json();

      setRowsData(json)
      if(json.length!=0){
        setnorecord('hidden')
      }
      
      setspin('hidden')
      setshow('')
    } catch (error) {
      setshow('hidden')
      setspin('')
      console.log("error", error);
    }
  };

  fetchData();
}, []);
    return(<>
    <div className="h-screen overflow-y-hidden">
        <Navbarres/>
        <div className="flex h-[91.5%] ">
            <Sidebar/>
            <div className="flex justify-center items-center w-[100%] ">
                <div className="w-full mt-3 ">
                <div className=" flex-col  h-[93.3%]  container outline outline-1 outline-gray-300 px-3 py-2">
                    <div className="flex justify-between  items-center w-full">
                        <div className="text-xl font-semibold">Issued Books Details</div>
                        <div className="flex justify-end space-x-2 text-white pr-2"><button disabled={disable} className={`bg-yellow-400 p-2 rounded ${opac}`} onClick={save}>Save Changes</button><button onClick={addTableRows} className="bg-amber-800 p-2 rounded">+Add New Record</button></div>

                    </div>
                    
                    <div className="pt-2 pb-2 res_table  h-96 overflow-y-auto  scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500">
                    <div className={`text-center flex w-full justify-center items-center h-full absolute top-0 left-28
 z-10 ${spin} `}>
<div className="spinner-border" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
</div>
                          <table className="border-collapse border   w-full">
                      <thead className="shadow-2xl shadow-gray-200 ">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Student Name </th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Roll No.</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Year</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Book Title</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">ISBN No.</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Issue Date</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Return Date</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Fine</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Returned</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className={show}>
                      <tr className={`${norecord}`}>
                          <td colSpan="9"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                     {/* <tr>
                          <td className="border-2 max-w-0   h-auto border-slate-300 ">Haar wavelet</td>
                          <td className="border-2 max-w-0  h-auto border-slate-300 ">Harpreet Kaur, R.C. Mittal and Vinod Mishra</td>
                          <td className="border-2 max-w-0   h-auto border-slate-300 ">Computer Physics Communications</td>
                          <td className="border-2 max-w-xs   h-auto border-slate-300 ">201gfgfgfgg3</td>
                          <td className="border-2 max-w-0   h-auto border-slate-300 ">00-10-4655</td>
                          <td className="border-2 max-w-0   h-auto border-slate-300 ">00-10-4655</td>
                          <td className="border-2 max-w-0   h-auto border-slate-300 ">00f</td>
                          <td className="border-2 max-w-0   h-auto border-slate-300 ">00f</td>
                          <td className="border-2 max-w-0   h-auto border-slate-300 ">del</td>
                        </tr> */}
                     
                        
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