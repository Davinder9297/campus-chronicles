import { useState } from "react";
import Navbar from "../../components/navbar";
import TableRows from "./Tablerows";
import TableRows2 from "./tablerows2";
import { useEffect } from "react";
import Announcementrows from "../club_management/annoucement";
import Eventsrows from "../club_management/events";

export default function Index(){
    const [norecord, setnorecord] = useState('')
    const [norecord1, setnorecord1] = useState('')
    const [norecord2, setnorecord2] = useState('')
    const [norecord3, setnorecord3] = useState('')
    const [rowsData, setrowsData] = useState([])
    const [rowsData1, setrowsData1] = useState([])
    const [rowsData2, setrowsData2] = useState([])
    const [rowsData3, setrowsData3] = useState([])
    const [opac, setopac] = useState('cursor-not-allowed opacity-50')
    const [opac1, setopac1] = useState('cursor-not-allowed opacity-50')
    const [disable, setdisable] = useState(true)
    const [disable1, setdisable1] = useState(true)
    const [disable2, setdisable2] = useState(true)
    const [disable3, setdisable3] = useState(true)
    const [save1, setsave1] = useState('cursor-not-allowed opacity-50')
    const [save2, setsave2] = useState('cursor-not-allowed opacity-50')
    // const [save3, setsave3] = useState('cursor-not-allowed opacity-50')
    const [spin, setspin] = useState('')
    const [spin1, setspin1] = useState('hidden')
    const [spin2, setspin2] = useState('hidden')
    // const [spin3, setspin3] = useState('hidden')
    const [show, setshow] = useState('hidden')
    const addTableRows = ()=>{
      setnorecord('hidden')
      setdisable(false)
      setopac('cursor-pointer')
        const rowsInput={
          title:'',
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
    const addTableRows1 = ()=>{
      setnorecord1('hidden')
      setdisable1(false)
      setopac1('cursor-pointer')
        const rowsInput={
          title:'',
          description:'',
          company:'',
          task:'',
          example:'',
          difficulty:'',
            
        } 
        setrowsData1([...rowsData1, rowsInput])
        // console.log(rowsData.length);
         
      
    }
   const deleteTableRows1 = (index)=>{
    setdisable1(false)
    setopac1('cursor-pointer')
        const rows = [...rowsData1];
        rows.splice(index, 1);
        setrowsData1(rows);
        // console.log(rowsData.length);
        if(rowsData1.length==1){
          setnorecord1('')
        }
   }
 
   const handleChange1 = (index, evnt)=>{
    setdisable1(false)
    setopac1('cursor-pointer')
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData1];
    rowsInput[index][name] = value;
    setrowsData1(rowsInput);
  
 
 
}
const addTableRows2 = (e)=>{
  e.preventDefault();
  setnorecord2('hidden')
  setdisable2(false)
  setsave1('cursor-pointer')
    const rowsInput={
     doc:"",
     date:"",
     title:"",

    } 
    setrowsData2([...rowsData2, rowsInput])

    // console.log(rowsData.length);
     
  
}
const deleteTableRows2 = (index)=>{
  setdisable2(false)
  setsave1('cursor-pointer')
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
  setsave1('cursor-pointer')
const rowsInput = [...rowsData2];
const { name, value } = evnt.target;
// if(name=='date'){
//   value=value.substring(8,10)+value.substring(4,8)+value.substring(0,4);
// }
if(name=="doc"){
  setspin1('opacity-50')
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
  setspin1('hidden ')
  setsave1('cursor-pointer')
rowsInput[index][name] = res2.url;
// console.log(rowsInput);
setrowsData2(rowsInput)

}
else{
  rowsInput[index][name] = value;
setrowsData2(rowsInput);
}

}
const uploadannouncement=async(e)=>{
  e.preventDefault();
  setdisable1(true)
  // console.log(rowsData1);
  setsave1('cursor-not-allowed opacity-50')
  const res=await fetch('http://localhost:3000/api/placementannouncements', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                    body:JSON.stringify(rowsData2)
                })
                let response=await res.json();
}
const uploadevents=(e)=>{
  e.preventDefault();
  console.log(eventtitle,eventdoc,eventdescription);
}
const saveinterview=async(e)=>{
  e.preventDefault();
  setdisable(true)
  setopac('cursor-not-allowed opacity-50')
  const res=await fetch('http://localhost:3000/api/interviewquestions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                    body:JSON.stringify(rowsData)
                })
                let response=await res.json();
}
const savecoding=async(e)=>{
  e.preventDefault();
  setdisable1(true)
  setopac1('cursor-not-allowed opacity-50')
  const res=await fetch('http://localhost:3000/api/codingquestions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                    body:JSON.stringify(rowsData1)
                })
                let response=await res.json();
}
// const addTableRows3 = (e)=>{
//   e.preventDefault();
//   setnorecord3('hidden')
//   setdisable3(false)
//   setsave2('cursor-pointer')
//     const rowsInput={
//      image:"",
//      eventname:"",
//      description:"",
//      title:"",
//      club:"",
//      date:"",
//     } 
//     setrowsData3([...rowsData3, rowsInput])

//     // console.log(rowsData.length);
     
  
// }
// const deleteTableRows3 = (index)=>{
//   setdisable3(false)
//   setsave2('cursor-pointer')
//     const rows = [...rowsData3];
//     rows.splice(index, 1);
//     setrowsData3(rows);
//     // console.log(rowsData.length);
//     if(rowsData3.length==1){
//       setnorecord3('')
//     }
// }
// const handleChange3 = async(index, evnt)=>{
//   setdisable3(false)
//   setsave2('cursor-pointer')
// const rowsInput = [...rowsData3];
// const { name, value } = evnt.target;
// // if(name=='date'){
// //   value=value.substring(8,10)+value.substring(4,8)+value.substring(0,4);
// // }
// if(name=="image"){
//   setspin2('opacity-50')
//   setsave2('hidden')
//   // setdisable1(true)
//   // setsave1('cursor-not-allowed opacity-50')
//     const formdata=new FormData()
//     formdata.append("file",evnt.target.files[0]);
//     formdata.append("upload_preset","mystore")
//   const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
//     method:"POST",
//     body:formdata,

//   })
//   const res2=await res.json();
//   // console.log(res2);
//   // setdisable1(false)
//   setspin2('hidden ')
//   setsave2('cursor-pointer')
// rowsInput[index][name] = res2.url;
// // console.log(rowsInput);
// setrowsData3(rowsInput)

// }
// else{
//   rowsInput[index][name] = value;
// setrowsData3(rowsInput);
// }

// }
// const saveevents=async(e)=>{
// e.preventDefault();
// setdisable2(true)
// // console.log(rowsData1);
// setsave2('cursor-not-allowed opacity-50')
// const res=await fetch('http://localhost:3000/api/placementevents', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//                 body:JSON.stringify(rowsData3)
//             })
//             let response=await res.json();
// }
useEffect(() => {
  const url = "http://localhost:3000/api/interviewquestions";
  const url1 = "http://localhost:3000/api/codingquestions";
  const url2 = "http://localhost:3000/api/placementannouncements";


  const fetchData = async () => {
    try {
      setspin('')
      let response = await fetch(url);
      let json = await response.json();

      setrowsData(json)
      if(json.length!=0){
        setnorecord('hidden')
      }
      let response1 = await fetch(url1);
      let json1 = await response1.json();

      setrowsData1(json1)
      if(json1.length!=0){
        setnorecord1('hidden')
      }
      let response2 = await fetch(url2);
      let json2 = await response2.json();

      setrowsData2(json2)
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
    <div className="h-screen overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
        <Navbar/>
        <div className={`text-center flex w-full justify-center items-center h-[85.3%]  ${spin}`}>
<div className="spinner-border" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
</div>
        <div className={`pb-4 ${show}`}>
        <div className="text-center text-2xl font-serif mt-3">Interview Related Question Management</div>
        <div className="flex justify-end space-x-2 text-white pr-2"><button disabled={disable} className={`bg-blue-600 p-2 rounded ${opac}`} onClick={saveinterview}>Save Changes</button><button onClick={addTableRows} className="bg-blue-600 p-2 rounded">+Add Question</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Title</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Description</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="">
                      <tr className={`${norecord}`}>
                          <td colSpan="8"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                     {/* <tr>
                          <td className="border-2 max-w-lg   h-auto border-slate-300 ">Haar wavelet approximate solutions for the generalized Lane Emden equations arising in astrophysics</td>
                          <td className="border-2 max-w-[200px]   h-auto border-slate-300 ">Harpreet Kaur, R.C. Mittal and Vinod Mishra</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">Computer Physics Communications</td>
                          <td className="border-2 max-w-xsm   h-auto border-slate-300 ">2013</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">00104655</td>
                          <td className="text-red-500 border-2 border-slate-300"><Link href="/" > Link</Link></td>
                        </tr> */}
                        
                      </tbody>
                    </table>
                          </div>
        </div>


        <div className="text-center text-2xl font-serif mt-5">Coding Question Management</div>
        <div className="flex justify-end space-x-2 text-white pr-2"><button disabled={disable1} className={`bg-blue-600 p-2 rounded ${opac1}`} onClick={savecoding}>Save Changes</button><button onClick={addTableRows1} className="bg-blue-600 p-2 rounded">+Add Question</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Title</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Description</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Example</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Task</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Company</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Difficulty</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="">
                      <tr className={`${norecord1}`}>
                          <td colSpan="8"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                        <TableRows2 rowsData={rowsData1} deleteTableRows={deleteTableRows1} handleChange={handleChange1} />
                     {/* <tr>
                          <td className="border-2 max-w-lg   h-auto border-slate-300 ">Haar wavelet approximate solutions for the generalized Lane Emden equations arising in astrophysics</td>
                          <td className="border-2 max-w-[200px]   h-auto border-slate-300 ">Harpreet Kaur, R.C. Mittal and Vinod Mishra</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">Computer Physics Communications</td>
                          <td className="border-2 max-w-xsm   h-auto border-slate-300 ">2013</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">00104655</td>
                          <td className="text-red-500 border-2 border-slate-300"><Link href="/" > Link</Link></td>
                        </tr> */}
                        
                      </tbody>
                    </table>
                          </div>
        </div>
            
        <div className="text-center text-2xl font-serif mt-5 ">Anouncement Generation</div>
        <div className="flex justify-end space-x-2 text-white pr-2">
        <button className={`bg-blue-600 p-2 rounded space-x-1 ${spin1}`} type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span classNamea="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Uploading...
</button>
          <button disabled={disable2} className={`bg-blue-600 p-2 rounded ${save1}`} onClick={uploadannouncement}>Save Changes</button><button onClick={addTableRows2} className="bg-blue-600 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
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

                      <tr className={`${norecord2}`}>
                          <td colSpan="9"  className="bg-slate-400 text-center  h-28">
                          <a href="" download="/st.jpg">No records found</a>
                          </td>
                          </tr>
                        <Announcementrows rowsData={rowsData2} deleteTableRows={deleteTableRows2} handleChange={handleChange2} />
                      </tbody>
                    </table>
                          </div>
        </div>

        {/* <div className="text-center text-2xl font-serif mt-5 ">Upload Events</div>
        <div className="flex justify-end space-x-2 text-white pr-2">
        <button  className={`bg-blue-600 p-2 rounded space-x-1 ${spin2}`} type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span classNamea="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Uploading...
</button>
          <button disabled={disable3} className={`bg-blue-600 p-2 rounded ${save2}`} onClick={uploadevents}>Save Changes</button><button onClick={addTableRows3} className="bg-blue-600 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
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

                      <tr className={`${norecord3}`}>
                          <td colSpan="9"  className="bg-slate-400 text-center  h-28">
                          <a href="" download="/st.jpg">No records found</a>
                          </td>
                          </tr>
                        <Eventsrows rowsData={rowsData3} deleteTableRows={deleteTableRows3} handleChange={handleChange3} />
                      </tbody>
                    </table>
                          </div>
        </div> */}


        </div>
    </div>
    </>)
}