import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import TableRows from './tablerows'
import Facultyrows from './facultyrows'
import { ToastContainer, toast } from 'react-toastify'
export default function Index(){
    const [norecord, setnorecord] = useState('')
        const [rowsData, setrowsData] = useState([]);
        const [norecord1, setnorecord1] = useState('')
        const [rowsData1, setrowsData1] = useState([])
        const [norecord2, setnorecord2] = useState('')
        const [rowsData2, setrowsData2] = useState([])
        const [save1, setsave1] = useState('cursor-not-allowed opacity-50')
        const [save2, setsave2] = useState('cursor-not-allowed opacity-50')
        const [save3, setsave3] = useState('cursor-not-allowed opacity-50')
        const [save4, setsave4] = useState('cursor-not-allowed opacity-50')
        const [spin, setspin] = useState('hidden')
        const [show, setshow] = useState('hidden')
        const [disable, setdisable] = useState(true)
        const [disable1, setdisable1] = useState(true)
        const [disable2, setdisable2] = useState(true)
        const [disable3, setdisable3] = useState(true)
        const [norecord3, setnorecord3] = useState('')
        const [rowsData3, setrowsData3] = useState([])
          useEffect(() => {
    const url = "http://localhost:3000/api/studentcredentials";
    const url1 = "http://localhost:3000/api/facultycredentials";
    const url2 = "http://localhost:3000/api/librarycredentials";
    const url3 = "http://localhost:3000/api/clubcredentials";

    const fetchData = async () => {
      try {
        setspin('')
        const response = await fetch(url);
        const json = await response.json();

        // console.log(json[0].data[0]);
        setrowsData(json[0].data)
        // console.log(json[0].data.length);
        if(json[0].data.length!=0){
          setnorecord('hidden')
        }
            
        const response1 = await fetch(url1);
        const json1 = await response1.json();
        // console.log(json1);
        setrowsData1(json1[0].data)
        // console.log(json1[0].data.length);
        if(json1[0].data.length!=0){
          setnorecord1('hidden')
        }
        const response2 = await fetch(url2);
        const json2 = await response2.json();
        // console.log(json2);
        setrowsData2(json2[0].data)
        // console.log(json2[0].data.length);
        if(json2[0].data.length!=0){
          setnorecord2('hidden')
        }
        const response3 = await fetch(url3);
        const json3 = await response3.json();
        // console.log(json2);
        setrowsData3(json2[0].data)
        // console.log(json2[0].data.length);
        if(json3[0].data.length!=0){
          setnorecord3('hidden')
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
            fathername:'',  
            mothername:'',  
            userid:'',  
            password:'',  
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
   
     const handleChange = (index, evnt)=>{
      
      const { name, value } = evnt.target;
      const rowsInput = [...rowsData];
      rowsInput[index][name] = value;
      setrowsData(rowsInput);
    
   
   
  }

    const addTableRows1 = ()=>{
        setnorecord1('hidden')
        setdisable1(false)
        setsave2('cursor-pointer')
          const rowsInput={
            facultyname:'',
            facultyid:'',  
            department:'',  
            designation:'',  
            userid:'',  
            password:'',  
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
   
     const handleChange1 = (index, evnt)=>{
      
      const { name, value } = evnt.target;
      const rowsInput = [...rowsData1];
      rowsInput[index][name] = value;
      setrowsData1(rowsInput);
    
   
   
  }
 
    const addTableRows2 = ()=>{
        setnorecord2('hidden')
        setdisable2(false)
        setsave3('cursor-pointer')
          const rowsInput={
            facultyname:'',
            facultyid:'',  
            department:'',  
            designation:'',  
            userid:'',  
            password:'',  
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
   
     const handleChange2 = (index, evnt)=>{
      
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
            facultyname:'',
            facultyid:'',  
            department:'',  
            designation:'',  
            userid:'',  
            password:'',  
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
   
     const handleChange3 = (index, evnt)=>{
      
      const { name, value } = evnt.target;
      const rowsInput = [...rowsData3];
      rowsInput[index][name] = value;
      setrowsData3(rowsInput);
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
  const faculty=async(e)=>{
e.preventDefault();
setdisable1(true)
setsave2('cursor-not-allowed opacity-50')
// let data={rowsData[0][studentname],}
const res=await fetch('http://localhost:3000/api/facultycredentials', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(rowsData1)
              })
              let response=await res.json();
              // console.log(response);
  }
  const library=async(e)=>{
e.preventDefault();
setdisable2(true)
setsave3('cursor-not-allowed opacity-50')
// let data={rowsData[0][studentname],}
const res=await fetch('http://localhost:3000/api/librarycredentials', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(rowsData2)
              })
              let response=await res.json();
              // console.log(response);
  }
  const club=async(e)=>{
e.preventDefault();
setdisable3(true)
setsave4('cursor-not-allowed opacity-50')
const res=await fetch('http://localhost:3000/api/clubcredentials', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(rowsData3)
              })
              let response=await res.json();
              // console.log(response);
  }
    return(<>
    <div className='h-screen overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-400 '>
        <Navbar/>
<div className={`text-center flex justify-center items-center h-[85.3%] ${spin}`}>
<div className="spinner-border" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
</div>
        <div className={`${show} pb-4`}>
        <div className="text-center text-2xl font-serif mt-5 ">Student Credential Management</div>
        <div className="flex justify-end space-x-2 text-white pr-2"><button disabled={disable} className={`bg-blue-600 p-2 rounded ${save1}`} onClick={student}>Save Changes</button><button onClick={addTableRows} className="bg-blue-600 p-2 rounded">+Add Question</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2 py-2 border-slate-300 text-center px-2">Sr No.</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Student Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Roll No</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">DOB</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Father's Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Mother's Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">User Id</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Password</th>
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
                      </tbody>
                    </table>
                          </div>
        </div>
        <div className="text-center text-2xl font-serif mt-5">Faculty Credential Management</div>
        <div className="flex justify-end space-x-2 text-white pr-2"><button disabled={disable1} className={`bg-blue-600 p-2 rounded ${save2}`} onClick={faculty}>Save Changes</button><button onClick={addTableRows1} className="bg-blue-600 p-2 rounded">+Add Question</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sr No.</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Faculty Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Faculty Id</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Department</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Designation</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">User Id</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Password</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="">
                      <tr className={`${norecord1}`}>
                          <td colSpan="9"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <Facultyrows rowsData={rowsData1} deleteTableRows={deleteTableRows1} handleChange={handleChange1} />
                      </tbody>
                    </table>
                          </div>
        </div>
        <div className="text-center text-2xl font-serif mt-5">Library Credential Management</div>
        <div className="flex justify-end space-x-2 text-white pr-2"><button disabled={disable2} className={`bg-blue-600 p-2 rounded ${save3}`} onClick={library}>Save Changes</button><button onClick={addTableRows2} className="bg-blue-600 p-2 rounded">+Add Question</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sr No.</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Faculty Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Faculty Id</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Department</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Designation</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">User Id</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Password</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="">
                      <tr className={`${norecord2}`}>
                          <td colSpan="9"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <Facultyrows rowsData={rowsData2} deleteTableRows={deleteTableRows2} handleChange={handleChange2} />
                      </tbody>
                    </table>
                          </div>
        </div>
        <div className="text-center text-2xl font-serif mt-5">Club Credential Management</div>
        <div className="flex justify-end space-x-2 text-white pr-2"><button disabled={disable3} className={`bg-blue-600 p-2 rounded ${save4}`} onClick={club}>Save Changes</button><button onClick={addTableRows3} className="bg-blue-600 p-2 rounded">+Add Question</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Sr No.</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Faculty Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Faculty Id</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Department</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Designation</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">User Id</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Password</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="">
                      <tr className={`${norecord3}`}>
                          <td colSpan="9"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <Facultyrows rowsData={rowsData3} deleteTableRows={deleteTableRows3} handleChange={handleChange3} />
                      </tbody>
                    </table>
                          </div>
        </div>

        </div>


    </div>
    </>)
}