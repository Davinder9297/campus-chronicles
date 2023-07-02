import { useEffect, useState } from "react";
import Navbarres from "../../components/navbarres";
import {RiDeleteBin5Line} from "react-icons/ri"
import TableRows from "./tablerows";
import Link from "next/link";
import Announcementrows from "./annoucement";
import Eventsrows from "./events";
export default function Club_management(){
  const [rowsData, setRowsData ]= useState([]);
  const [rowsData1, setRowsData1 ]= useState([]);
  const [rowsData2, setRowsData2 ]= useState([]);
  const [norecord1, setnorecord1] = useState('')
  const [norecord2, setnorecord2] = useState('')
  const [norecord, setnorecord] = useState('')
  const [spin, setspin] = useState('')
  const [spin1, setspin1] = useState('')
  const [spin2, setspin2] = useState('hidden')
  const [spin3, setspin3] = useState('hidden')
  const [show, setshow] = useState('hidden')
  const [disable, setdisable] = useState(true)
  const [disable1, setdisable1] = useState(true)
  const [disable2, setdisable2] = useState(true)
  const [save, setsave] = useState('opacity-50 cursor-not-allowed')
  const [save1, setsave1] = useState('opacity-50 cursor-not-allowed')
  const [save2, setsave2] = useState('opacity-50 cursor-not-allowed')
  const addTableRows = (e)=>{
    e.preventDefault();
    setnorecord('hidden')
    setdisable(false)
    setsave('cursor-pointer')
      const rowsInput={
       image:"",
       name:"",
       year:"",
       club:"",
       role:""
      } 
      setRowsData([...rowsData, rowsInput])

      // console.log(rowsData.length);
       
    
  }
 const deleteTableRows = (index)=>{
  setdisable(false)
  setsave('cursor-pointer')
      const rows = [...rowsData];
      rows.splice(index, 1);
      setRowsData(rows);
      // console.log(rowsData.length);
      if(rowsData.length==1){
        setnorecord('')
      }
 }
 const handleChange = async(index, evnt)=>{
  setdisable(false)
  setsave('cursor-pointer')
  const rowsInput = [...rowsData];
  const { name, value } = evnt.target;
  if(name=='image'){
      const formdata=new FormData()
      console.log(evnt.target.files);
      formdata.append("file",evnt.target.files[0]);
      formdata.append("upload_preset","mystore")
    const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
      method:"POST",
      body:formdata,
    })
    const res2=await res.json();
  rowsInput[index][name] = res2.url;
  setRowsData(rowsInput)

  }
  else{
    rowsInput[index][name] = value;
  setRowsData(rowsInput);
  }
}
const savedata=async(e)=>{
  e.preventDefault();
setdisable(true)
setsave('cursor-not-allowed opacity-50')
const res=await fetch('http://localhost:3000/api/coordinator', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(rowsData)
              })
              let response=await res.json();
}
  const addTableRows1 = (e)=>{
    e.preventDefault();
    setnorecord1('hidden')
    setdisable1(false)
    setsave1('cursor-pointer')
      const rowsInput={
       doc:"",
       title:"",
       date:"",
      } 
      setRowsData1([...rowsData1, rowsInput])

      // console.log(rowsData.length);
       
    
  }
 const deleteTableRows1 = (index)=>{
  setdisable1(false)
  setsave1('cursor-pointer')
      const rows = [...rowsData1];
      rows.splice(index, 1);
      setRowsData1(rows);
      // console.log(rowsData.length);
      if(rowsData1.length==1){
        setnorecord1('')
      }
 }
 const handleChange1 = async(index, evnt)=>{
  setdisable1(false)
  setsave1('cursor-pointer')
  const rowsInput = [...rowsData1];
  const { name, value } = evnt.target;

  if(name=="doc"){
    setspin2('opacity-50')
    setsave1('hidden')
    // setdisable1(true)
    // setsave1('cursor-not-allowed opacity-50')
      const formdata=new FormData()
      formdata.append("file",evnt.target.files[0]);
      formdata.append("upload_preset","mystore")
    const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
      method:"POST",
      body:formdata,

    })
    const res2=await res.json();
    // console.log(res2);
    // setdisable1(false)
    setspin2('hidden ')
    setsave1('cursor-pointer')
  rowsInput[index][name] = res2.url;
  console.log(rowsInput);
  setRowsData1(rowsInput)

  }
  else{
    rowsInput[index][name] = value;
  setRowsData1(rowsInput);
  }

}
const saveannouncement=async(e)=>{
  e.preventDefault();
setdisable1(true)
// console.log(rowsData1);
setsave1('cursor-not-allowed opacity-50')
const res=await fetch('http://localhost:3000/api/clubannouncement', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(rowsData1)
              })
              let response=await res.json();
}
  const addTableRows2 = (e)=>{
    e.preventDefault();
    setnorecord2('hidden')
    setdisable2(false)
    setsave2('cursor-pointer')
      const rowsInput={
       image:"",
       eventname:"",
       description:"",
       title:"",
       club:"",
       date:"",
      } 
      setRowsData2([...rowsData2, rowsInput])

      // console.log(rowsData.length);
       
    
  }
 const deleteTableRows2 = (index)=>{
  setdisable2(false)
  setsave2('cursor-pointer')
      const rows = [...rowsData2];
      rows.splice(index, 1);
      setRowsData2(rows);
      // console.log(rowsData.length);
      if(rowsData2.length==1){
        setnorecord2('')
      }
 }
 const handleChange2 = async(index, evnt)=>{
  setdisable2(false)
  setsave2('cursor-pointer')
  const rowsInput = [...rowsData2];
  const { name, value } = evnt.target;
  // if(name=='date'){
  //   value=value.substring(8,10)+value.substring(4,8)+value.substring(0,4);
  // }
  if(name=="image"){
    setspin3('opacity-50')
    setsave2('hidden')
    // setdisable1(true)
    // setsave1('cursor-not-allowed opacity-50')
      const formdata=new FormData()
      formdata.append("file",evnt.target.files[0]);
      formdata.append("upload_preset","mystore")
    const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
      method:"POST",
      body:formdata,

    })
    const res2=await res.json();
    // console.log(res2);
    // setdisable1(false)
    setspin3('hidden ')
    setsave2('cursor-pointer')
  rowsInput[index][name] = res2.url;
  // console.log(rowsInput);
  setRowsData2(rowsInput)

  }
  else{
    rowsInput[index][name] = value;
  setRowsData2(rowsInput);
  }

}
const saveevents=async(e)=>{
  e.preventDefault();
setdisable2(true)
// console.log(rowsData1);
setsave2('cursor-not-allowed opacity-50')
const res=await fetch('http://localhost:3000/api/events', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(rowsData2)
              })
              let response=await res.json();
}
useEffect(() => {
  const url = "http://localhost:3000/api/coordinator";
  const url1 = "http://localhost:3000/api/clubannouncement";
  const url2 = "http://localhost:3000/api/events";


  const fetchData = async () => {
    try {
      setspin('')
      let response = await fetch(url);
      let json = await response.json();

      setRowsData(json)
      if(json.length!=0){
        setnorecord('hidden')
      }
      let response1 = await fetch(url1);
      let json1 = await response1.json();

      setRowsData1(json1)
      if(json1.length!=0){
        setnorecord1('hidden')
      }
      let response2 = await fetch(url2);
      let json2 = await response2.json();

      setRowsData2(json2)
      if(json2.length!=0){
        setnorecord2('hidden')
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
   <div className='h-screen overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-400 '>
        <Navbarres/>
        <div className={`text-center flex w-full justify-center items-center h-[85.3%]  ${spin}`}>
<div className="spinner-border" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
</div>
        <div className={`${show} pb-4`}>
        <div className="text-center text-2xl font-serif mt-5 ">Coordinator's Details Management</div>
        <div className="flex justify-end space-x-2 text-white pr-2">

          <button disabled={disable} className={`bg-yellow-400 p-2 rounded ${save}`} onClick={savedata}>Save Changes</button><button onClick={addTableRows} className="bg-amber-800 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Image</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Current Year</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Club</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Role</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className={``}>

                      <tr className={`${norecord}`}>
                          <td colSpan="9"  className="bg-slate-400 text-center  h-28">
                          <a href="" download="/st.jpg">No records found</a>
                          </td>
                          </tr>
                        <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                      </tbody>
                    </table>
                          </div>
        </div>


        <div className="text-center text-2xl font-serif mt-5 ">Anouncement Generation</div>
        <div className="flex justify-end space-x-2 text-white pr-2">
        <button className={`bg-yellow-400 p-2 rounded space-x-1 ${spin2}`} type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Uploading...
</button>
          <button disabled={disable1} className={`bg-yellow-400 p-2 rounded ${save1}`} onClick={saveannouncement}>Save Changes</button><button onClick={addTableRows1} className="bg-amber-800 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Document</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Title</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Date</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className={``}>

                      <tr className={`${norecord1}`}>
                          <td colSpan="9"  className="bg-slate-400 text-center  h-28">
                          <a href="" download="/st.jpg">No records found</a>
                          </td>
                          </tr>
                        <Announcementrows rowsData={rowsData1} deleteTableRows={deleteTableRows1} handleChange={handleChange1} />
                      </tbody>
                    </table>
                          </div>
        </div>

        <div className="text-center text-2xl font-serif mt-5 ">Upload Events</div>
        <div className="flex justify-end space-x-2 text-white pr-2">
        <button  className={`bg-yellow-400 p-2 rounded space-x-1 ${spin3}`} type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span classNamea="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Uploading...
</button>
          <button disabled={disable2} className={`bg-yellow-400 p-2 rounded ${save2}`} onClick={saveevents}>Save Changes</button><button onClick={addTableRows2} className="bg-amber-800 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Image</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Event Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Title</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Description</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Organized by</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Date</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className={``}>

                      <tr className={`${norecord2}`}>
                          <td colSpan="9"  className="bg-slate-400 text-center  h-28">
                          <a href="" download="/st.jpg">No records found</a>
                          </td>
                          </tr>
                        <Eventsrows rowsData={rowsData2} deleteTableRows={deleteTableRows2} handleChange={handleChange2} />
                      </tbody>
                    </table>
                          </div>
        </div>




        </div>
    </div>
    </>)
}