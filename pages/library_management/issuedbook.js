import Navbar from "../../components/navbar";
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
      // setspin('')
      let response = await fetch(url);
      let json = await response.json();

      setRowsData(json)
      if(json.length!=0){
        setnorecord('hidden')
      }
      
      // setspin('hidden')
      // setshow('')
    } catch (error) {
      // setshow('hidden')
      // setspin('')
      console.log("error", error);
    }
  };

  fetchData();
}, []);
    return(<>
    <div className="h-screen overflow-y-hidden">
        <Navbar/>
        <div className="flex h-[91.5%] ">
            <Sidebar/>
            <div className="flex justify-center items-center w-[100%] ">
              {/* <div className="w-full  p-2">
                <div className="text-center text-xl font-serif">Issue A Book</div>
                
                <div className="flex justify-center space-x-2 font-serif">
                        <div className="flex-col space-y-5 pt-4 ">
                           <div className="p-1">Book's Title</div>
                           <div className="p-1">ISBN Number</div>
                           <div className="p-1">Student Name</div>
                           <div className="p-1">Student Roll No.</div>
                           <div className="p-1">Issued Date</div>
                           <div className="p-1">Return Date</div>
                        </div>

                        <div className="font-sans space-y-5 pt-4  w-[30%]">
                           <div className=" "><input  type="text" value={bookname} onChange={(e)=>{setbookname(e.target.value)}} name="bookname"  className="p-1  w-full  bg-slate-100 outline-1   outline-gray-300 rounded outline focus:outline-gray-400" /></div>
                           <div><input type="text" value={isbn} onChange={(e)=>{setisbn(e.target.value)}} name="isbn"  className="p-1   bg-slate-100 outline-1  w-full outline-gray-300 rounded outline focus:outline-gray-400"/></div>
                           <div><input type="text" value={studentname} onChange={(e)=>{setstudentname(e.target.value)}} name="studentname"  className="p-1   bg-slate-100 outline-1  w-full outline-gray-300 rounded outline focus:outline-gray-400" /></div>
                           <div><input type="text" value={studentroll} onChange={(e)=>{setstudentroll(e.target.value)}} name="studentroll"  className="p-1   bg-slate-100 outline-1  w-full outline-gray-300 rounded outline focus:outline-gray-400" /></div>
                           <div><input type="date" value={issueddate} onChange={(e)=>{setissueddate(e.target.value)}} name="issueddate"  className="p-1  bg-slate-100 outline-1  w-full outline-gray-300 rounded outline focus:outline-gray-400" /></div>
                           <div><input type="date" value={returndate} onChange={(e)=>{setreturndate(e.target.value)}} name="returndate"  className="p-1  bg-slate-100 outline-1  w-full outline-gray-300 rounded outline focus:outline-gray-400" /></div>
                           <div className="flex w-full space-x-5"> 
                            <button  onClick={addTableRows} className={`flex items-center justify-center w-full space-x-1 bg-blue-500 rounded text-white px-2 py-1 `}><div>ISSUE</div> <FiSave className="" /></button>
                             </div>
                         </div>
                    </div> 
                  </div> */}

                <div className="w-full mt-3 ">
                <div className=" flex-col  h-[93.3%]  container outline outline-1 outline-gray-300 px-3 py-2">
                    <div className="flex justify-between  items-center w-full">
                        <div className="text-xl font-semibold">Issued Books Details</div>
                        <div className="flex justify-end space-x-2 text-white pr-2"><button disabled={disable} className={`bg-blue-600 p-2 rounded ${opac}`} onClick={save}>Save Changes</button><button onClick={addTableRows} className="bg-blue-600 p-2 rounded">+Add New Record</button></div>

                    {/* <div className=" flex  w-[30%] ">
                <input
                    type="search"
                    className="relative m-0 -mr-px block w-96 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-blue-100  px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Search.."
                    aria-label="Search"
                    aria-describedby="button-addon1" />
                <button
                    className="relative z-[2] flex items-center rounded-r bg-blue-500 px-6 py-1 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd" />
                    </svg>
                </button>
                </div> */}
                    </div>
                    
                    <div className="pt-2 pb-2 res_table  h-96 overflow-y-auto  scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500">
                          <table className="border-collapse border   w-full">
                      <thead className="shadow-2xl shadow-gray-200 ">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Student Name </th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Student Roll No.</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Book's Title</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">ISBN No.</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Issue Date</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Return Date</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Fine</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Returned</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="">
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