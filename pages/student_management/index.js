import { useEffect, useState } from 'react'
import Navbarres from '../../components/navbarres'
import TableRows from './tablerows'
// import Facultyrows from './facultyrows'
import { ToastContainer, toast } from 'react-toastify'
import Announcementrows from './announcement'
import Performancerows from './performancerows'
import Notesrows from './notesrows'
// import Clubrows from './clubrows'
export default function Index(){
    const [norecord, setnorecord] = useState('')
        const [rowsData, setrowsData] = useState([]);
        const [norecord1, setnorecord1] = useState('')
        const [rowsData1, setrowsData1] = useState([])
        const [norecord2, setnorecord2] = useState('')
        const [norecord3, setnorecord3] = useState('')
        const [norecord4, setnorecord4] = useState('')
        const [rowsData2, setrowsData2] = useState([])
        const [rowsData3, setrowsData3] = useState([])
        const [rowsData4, setrowsData4] = useState([])
        const [save1, setsave1] = useState('cursor-not-allowed opacity-50')
        const [save2, setsave2] = useState('cursor-not-allowed opacity-50')
        const [save3, setsave3] = useState('cursor-not-allowed opacity-50')
        const [save4, setsave4] = useState('cursor-not-allowed opacity-50')
        const [save5, setsave5] = useState('cursor-not-allowed opacity-50')
        const [spin, setspin] = useState('hidden')
        const [spin2, setspin2] = useState('hidden')
        const [spin3, setspin3] = useState('hidden')
        const [spin4, setspin4] = useState('hidden')
        const [spin5, setspin5] = useState('hidden')
        const [show, setshow] = useState('hidden')
        const [disable, setdisable] = useState(true)
        const [disable1, setdisable1] = useState(true)
        const [disable2, setdisable2] = useState(true)
        const [disable3, setdisable3] = useState(true)
        const [disable4, setdisable4] = useState(true)

    
        const imageupload=async ()=>{
          const formdata=new FormData()
          formdata.append("file",image);
          formdata.append("upload_preset","mystore")
        const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
          method:"POST",
          body:formdata,
        })
        const res2=await res.json();
     return res2.url;
     
      }

          useEffect(() => {
    const url = "http://localhost:3000/api/studentcredentials";
    const url1 = "http://localhost:3000/api/studentannouncement";
    const url2 = "http://localhost:3000/api/performance";
    const url3 = "http://localhost:3000/api/notes";
    const url4 = "http://localhost:3000/api/previousyears";

    const fetchData = async () => {
      try {
        setspin('')
        let response = await fetch(url);
        let json = await response.json();
        // console.log(json[0].data);
        // console.log(json[0].data[0]);
        setrowsData(json)
        // console.log(json.length);
        if(json.length!=0){
          setnorecord('hidden')
        }
            
        const response1 = await fetch(url1);
        const json1 = await response1.json();
        console.log(json1);
        setrowsData1(json1)
        console.log(json1.length);
        if(json1.length!=0){
          setnorecord1('hidden')
        }
            
        const response2 = await fetch(url2);
        const json2 = await response2.json();
        // console.log(json1);
        setrowsData2(json2)
        // console.log(json1.length);
        if(json2.length!=0){
          setnorecord2('hidden')
        }
        const response3 = await fetch(url3);
        const json3 = await response3.json();
        // console.log(json1);
        setrowsData3(json3)
        // console.log(json1.length);
        if(json3.length!=0){
          setnorecord3('hidden')
        }
        const response4 = await fetch(url4);
        const json4 = await response4.json();
        // console.log(json1);
        setrowsData4(json4)
        // console.log(json1.length);
        if(json4.length!=0){
          setnorecord4('hidden')
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
          
        
        
    const addTableRows = ()=>{
        setnorecord('hidden')
        setdisable(false)
        setsave1('cursor-pointer')
          const rowsInput={
            studentname:'',
            rollno:'',  
            dob:'',  
            sem:'',
            fathername:'',  
            mothername:'',  
            userid:'',  
            password:'',  
            image:''
          } 
          setrowsData([...rowsData, rowsInput])
          // console.log(rowsData.length);
           
        
      }
     const deleteTableRows = (index)=>{
      setdisable(false)
      setsave1('cursor-pointer')
          const rows = [...rowsData];
          rows.splice(index, 1);
          setrowsData(rows);
          // console.log(rowsData.length);
          if(rowsData.length==1){
            setnorecord('')
          }
     }
   
     const handleChange = async(index, evnt)=>{
      setdisable(false)
      setsave1('cursor-pointer')
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
        console.log(res2.url);
      rowsInput[index][name] = res2.url;
      setrowsData(rowsInput)

      }
      else{
        rowsInput[index][name] = value;
      setrowsData(rowsInput);
      }
  }

    const addTableRows1 = ()=>{
        setnorecord1('hidden')
        setdisable1(false)
        setsave2('cursor-pointer')
          const rowsInput={
            title:'',
            doc:'',
            date:''  
          } 
          setrowsData1([...rowsData1, rowsInput])           
        
      }
     const deleteTableRows1 = (index)=>{
      setdisable1(false)
      setsave2('cursor-pointer')
          const rows = [...rowsData1];
          rows.splice(index, 1);
          setrowsData1(rows);
          // console.log(rowsData.length);
          if(rowsData1.length==1){
            setnorecord1('')
          }
     }
   
     const handleChange1 = async(index, evnt)=>{
      setdisable1(false)
        setsave2('cursor-pointer')
      const { name, value } = evnt.target;
      const rowsInput = [...rowsData1];
      if(name=='doc'){
        setspin2('opacity-50')
        setsave2('hidden')
          const formdata=new FormData()
          formdata.append("file",evnt.target.files[0]);
          formdata.append("upload_preset","mystore")
        const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
          method:"POST",
          body:formdata,
        })
        const res2=await res.json();
      rowsInput[index][name] = res2.url;
      setrowsData1(rowsInput)
      setspin2('hidden')
      setsave2('')
      }
      else{
        rowsInput[index][name] = value;
      setrowsData1(rowsInput);
      }
    
    
   
   
  }
    const addTableRows2 = ()=>{
        setnorecord2('hidden')
        setdisable2(false)
        setsave3('cursor-pointer')
          const rowsInput={
            rollno:'',
            sem1:'',
            sem2:'',
            sem3:'',
            sem4:'',
            sem5:'',
            sem6:'',
            sem7:'',
            sem8:'',
          } 
          setrowsData2([...rowsData2, rowsInput])           
        
      }
     const deleteTableRows2 = (index)=>{
      setdisable2(false)
      setsave3('cursor-pointer')
          const rows = [...rowsData2];
          rows.splice(index, 1);
          setrowsData2(rows);
          // console.log(rowsData.length);
          if(rowsData2.length==1){
            setnorecord2('')
          }
     }
   
     const handleChange2 = async(index, evnt)=>{
      setdisable2(false)
        setsave3('cursor-pointer')
      const { name, value } = evnt.target;
      const rowsInput = [...rowsData2];
      
        rowsInput[index][name] = value;
      setrowsData2(rowsInput);
      
    
    
   
   
  }
    const addTableRows3 = ()=>{
        setnorecord3('hidden')
        setdisable3(false)
        setsave4('cursor-pointer')
          const rowsInput={
        sem:'',
        subject:'',
        attachment:'',
        title:''
          } 
          setrowsData3([...rowsData3, rowsInput])           
        
      }
     const deleteTableRows3 = (index)=>{
      setdisable3(false)
      setsave4('cursor-pointer')
          const rows = [...rowsData3];
          rows.splice(index, 1);
          setrowsData3(rows);
          // console.log(rowsData.length);
          if(rowsData3.length==1){
            setnorecord3('')
          }
     }
  const handleChange3 = async(index, evnt)=>{
    setdisable3(false)
      setsave4('cursor-pointer')
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData3];
    if(name=='attachment'){
      setspin4('opacity-50')
      setsave4('hidden')
        const formdata=new FormData()
        formdata.append("file",evnt.target.files[0]);
        formdata.append("upload_preset","mystore")
      const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
        method:"POST",
        body:formdata,
      })
      const res2=await res.json();
    rowsInput[index][name] = res2.url;
    setrowsData3(rowsInput)
    setspin4('hidden')
    setsave4('')
    }
    else{
      rowsInput[index][name] = value;
    setrowsData3(rowsInput);
    }
  
  
 
 
}
    const addTableRows4 = ()=>{
        setnorecord4('hidden')
        setdisable4(false)
        setsave5('cursor-pointer')
          const rowsInput={
        sem:'',
        subject:'',
        attachment:'',
        title:''
          } 
          setrowsData4([...rowsData4, rowsInput])           
        
      }
     const deleteTableRows4 = (index)=>{
      setdisable4(false)
      setsave5('cursor-pointer')
          const rows = [...rowsData4];
          rows.splice(index, 1);
          setrowsData4(rows);
          // console.log(rowsData.length);
          if(rowsData4.length==1){
            setnorecord4('')
          }
     }
  const handleChange4 = async(index, evnt)=>{
    setdisable4(false)
      setsave5('cursor-pointer')
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData4];
    if(name=='attachment'){
      setspin5('opacity-50')
      setsave5('hidden')
        const formdata=new FormData()
        formdata.append("file",evnt.target.files[0]);
        formdata.append("upload_preset","mystore")
      const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
        method:"POST",
        body:formdata,
      })
      const res2=await res.json();
    rowsInput[index][name] = res2.url;
    setrowsData4(rowsInput)
    setspin5('hidden')
    setsave5('')
    }
    else{
      rowsInput[index][name] = value;
    setrowsData4(rowsInput);
    }
  
  
 
 
}



  const student=async(e)=>{
e.preventDefault();
setdisable(true)
setsave1('cursor-not-allowed opacity-50')
// let data={rowsData[0][studentname],}
const res=await fetch('http://localhost:3000/api/studentcredentials', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(rowsData)
              })
              let response=await res.json();
              console.log(response);
              
  }
  const announcement=async(e)=>{
e.preventDefault();
setdisable1(true)
setsave2('cursor-not-allowed opacity-50')
// let data={rowsData[0][studentname],}
const res=await fetch('http://localhost:3000/api/studentannouncement', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(rowsData1)
              })
              let response=await res.json();
              // console.log(response);
  }
  const performance=async(e)=>{
e.preventDefault();
setdisable2(true)
setsave3('cursor-not-allowed opacity-50')
// let data={rowsData[0][studentname],}
const res=await fetch('http://localhost:3000/api/performance', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(rowsData2)
              })
              let response=await res.json();
              // console.log(response);
  }
  const notes=async(e)=>{
e.preventDefault();
setdisable3(true)
setsave4('cursor-not-allowed opacity-50')
// let data={rowsData[0][studentname],}
const res=await fetch('http://localhost:3000/api/notes', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(rowsData3)
              })
              let response=await res.json();
              // console.log(response);
  }
  const previousyears=async(e)=>{
e.preventDefault();
setdisable4(true)
setsave5('cursor-not-allowed opacity-50')
// let data={rowsData[0][studentname],}
const res=await fetch('http://localhost:3000/api/previousyears', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(rowsData4)
              })
              let response=await res.json();
              // console.log(response);
  }

    return(<>
    <div className='h-screen overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-400 '>
        <Navbarres/>
<div className={`text-center flex justify-center items-center h-[85.3%] ${spin}`}>
<div className="spinner-border" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
</div>
        <div className={`${show} pb-4`}>
        <div className="text-center text-2xl font-serif mt-5 ">Student Credential Management</div>
        <div className="flex justify-end space-x-2 text-white pr-2"><button disabled={disable} className={`bg-yellow-400 p-2 rounded ${save1}`} onClick={student}>Save Changes</button><button onClick={addTableRows} className="bg-amber-800 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[95%] bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2 py-2 border-slate-300 text-center px-2">Sr No.</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Image</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Student Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Roll No</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Semester</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">DOB</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Father Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Mother Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">User Id</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Password</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="">
                      <tr className={`${norecord}`}>
                          <td colSpan="11"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                      </tbody>
                    </table>
                          </div>
        </div>
        <div className="text-center text-2xl font-serif mt-5">Announcement Generation</div>
        <div className="flex justify-end space-x-2 text-white pr-2">
        <button className={`bg-yellow-400 p-2 rounded space-x-1 ${spin2}`} type="button" disabled>
        {/* <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> */}
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Uploading...
</button>
          <button disabled={disable1} className={`bg-yellow-400 p-2 rounded ${save2}`} onClick={announcement}>Save Changes</button><button onClick={addTableRows1} className="bg-amber-800 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[95%] bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sr No.</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Attachment</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Title</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Date</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="">
                      <tr className={`${norecord1}`}>
                          <td colSpan="5"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <Announcementrows rowsData={rowsData1} deleteTableRows={deleteTableRows1} handleChange={handleChange1} />
                      </tbody>
                    </table>
                          </div>
        </div>
        
        <div className="text-center text-2xl font-serif mt-5">Performance Data</div>
        <div className="flex justify-end space-x-2 text-white pr-2">
        <button className={`bg-yellow-400 p-2 rounded space-x-1 ${spin3}`} type="button" disabled>
        {/* <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> */}
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Uploading...
</button>
          <button disabled={disable2} className={`bg-yellow-400 p-2 rounded ${save3}`} onClick={performance}>Save Changes</button><button onClick={addTableRows2} className="bg-amber-800 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[95%] bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Roll No.</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sem1</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sem2</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sem3</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sem4</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sem5</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sem6</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sem7</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sem8</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Action</th>
          
                        </tr>
                      </thead>
                      <tbody className="">
                      <tr className={`${norecord2}`}>
                          <td colSpan="10"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <Performancerows rowsData={rowsData2} deleteTableRows={deleteTableRows2} handleChange={handleChange2} />
                      </tbody>
                    </table>
                          </div>
        </div>
        
        <div className="text-center text-2xl font-serif mt-5">Upload Notes</div>
        <div className="flex justify-end space-x-2 text-white pr-2">
        <button className={`bg-yellow-400 p-2 rounded space-x-1 ${spin4}`} type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Uploading...
</button>
          <button disabled={disable3} className={`bg-yellow-400 p-2 rounded ${save4}`} onClick={notes}>Save Changes</button><button onClick={addTableRows3} className="bg-amber-800 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[95%] bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sr. No</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Attachment</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Title</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Semester</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Subject</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Action</th>
          
                        </tr>
                      </thead>
                      <tbody className="">
                      <tr className={`${norecord3}`}>
                          <td colSpan="10"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <Notesrows rowsData={rowsData3} deleteTableRows={deleteTableRows3} handleChange={handleChange3} />
                      </tbody>
                    </table>
                          </div>
        </div>
        <div className="text-center text-2xl font-serif mt-5">Upload Previous Years Question Papers</div>
        <div className="flex justify-end space-x-2 text-white pr-2">
        <button className={`bg-blue-600 p-2 rounded space-x-1 ${spin5}`} type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Uploading...
</button>
          <button disabled={disable4} className={`bg-blue-600 p-2 rounded ${save5}`} onClick={previousyears}>Save Changes</button><button onClick={addTableRows4} className="bg-blue-600 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[95%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sr. No</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Attachment</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Title</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Semester</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Subject</th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Action</th>
          
                        </tr>
                      </thead>
                      <tbody className="">
                      <tr className={`${norecord4}`}>
                          <td colSpan="10"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <Notesrows rowsData={rowsData4} deleteTableRows={deleteTableRows4} handleChange={handleChange4} />
                      </tbody>
                    </table>
                          </div>
        </div>
        

        </div>


    </div>
    </>)
}