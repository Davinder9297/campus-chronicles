import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "./sidebar";
import Addbookrows from "./addbookrows"
export default function Addbook(){
    const [rowsData, setrowsData] = useState([])
    const [norecord, setnorecord] = useState('')
    const [disable, setdisable] = useState(true)
    const [opac, setopac] = useState('cursor-not-allowed opacity-50')
    const [show, setshow] = useState('hidden')
    const [spin2, setspin2] = useState('hidden')
    // const [save, setsave] = useState('')
    const [spin, setspin] = useState('')
    
    const addTableRows = ()=>{
        setnorecord('hidden')
        setdisable(false)
        setopac('cursor-pointer')
          const rowsInput={
            bookname:'',
            image:'',
            authorname:'',
            isbn:''
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
   
     const handleChange = async(index, evnt)=>{
      setdisable(false)
      setopac('cursor-pointer')
      const { name, value } = evnt.target;
      const rowsInput = [...rowsData];
      // rowsInput[index][name] = value;
      // setrowsData(rowsInput);
      if(name=="image"){
        setspin2('opacity-50')
        setopac('hidden')
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
        setopac('cursor-pointer')
      rowsInput[index][name] = res2.url;
      // console.log(rowsInput);
      setrowsData(rowsInput)
    
      }
      else{
        rowsInput[index][name] = value;
      setrowsData(rowsInput);
      }
  }
    const savedata=async(e)=>{
        // console.log(category);
        e.preventDefault()
        setdisable(true)
        setopac('cursor-not-allowed opacity-50')
        const res=await fetch('http://localhost:3000/api/addbooks', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                            body:JSON.stringify(rowsData)
                        })
                        let response=await res.json();

    }
    useEffect(() => {
      const url = "http://localhost:3000/api/addbooks";
      const fetchData = async () => {
        try {
          setspin('')
          let response = await fetch(url);
          let json = await response.json();
    
          setrowsData(json)
          if(json.length!=0){   
            setnorecord('hidden')
          }
          
          setspin('hidden')
          setshow('')
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
            <div className="flex-col w-[100%] h-[93.3%]  overflow-y-auto scrollbar-thin  scrollbar-track-slate-100 scrollbar-thumb-slate-500">

            <div className={` pb-4`}>
        <div className="text-center text-2xl font-serif mt-5 ">Add Book's Details</div>
        <div className="flex justify-end space-x-2 text-white pr-2">
        <button className={`bg-blue-600 p-2 rounded space-x-1 ${spin2}`} type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Uploading...
</button>
          <button disabled={disable} className={`bg-blue-600 p-2 rounded ${opac}`} onClick={savedata}>Save Changes</button><button onClick={addTableRows} className="bg-blue-600 p-2 rounded">+Add New Record</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[90%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
        <div className={`text-center flex w-full justify-center items-center h-full absolute top-0 left-28
 z-10 ${spin} `}>
<div className="spinner-border" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
</div>
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
                      <tbody className={`${show} `}>

                      <tr className={`${norecord}`}>
                          <td colSpan="5"  className="bg-slate-400 text-center  h-28">
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