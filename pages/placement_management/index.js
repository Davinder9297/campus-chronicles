import { useState } from "react";
import Navbar from "../../components/navbar";
import TableRows from "./Tablerows";
import TableRows2 from "./tablerows2";

export default function Index(){
    const [norecord, setnorecord] = useState('')
    const [norecord1, setnorecord1] = useState('')
    const [rowsData, setrowsData] = useState([])
    const [rowsData1, setrowsData1] = useState([])
    
    const addTableRows = ()=>{
      setnorecord('hidden')
        const rowsInput={
          title:'',
          description:'',  
        } 
        setrowsData([...rowsData, rowsInput])
        // console.log(rowsData.length);
         
      
    }
   const deleteTableRows = (index)=>{
   
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
        const rowsInput={
          title:'',
          description:'',
          company:''  
        } 
        setrowsData1([...rowsData1, rowsInput])
        // console.log(rowsData.length);
         
      
    }
   const deleteTableRows1 = (index)=>{
   
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
const [title, settitle] = useState('')
const [doc, setdoc] = useState('')
const [eventtitle, seteventtitle] = useState('')
const [eventdescription, seteventdescription] = useState('')
const [eventdoc, seteventdoc] = useState('')

const uploadannouncement=(e)=>{
  e.preventDefault();
  console.log(title,doc);
}
const uploadevent=(e)=>{
  e.preventDefault();
  console.log(eventtitle,eventdoc,eventdescription);
}
    return(<>
    


    <div className="h-screen overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
        <Navbar/>
        <div className="text-center text-2xl font-serif mt-3">Interview Related Question Management</div>
        <div className="flex justify-end space-x-2 text-white pr-2"><button className="bg-blue-600 p-2 rounded">Save Changes</button><button onClick={addTableRows} className="bg-blue-600 p-2 rounded">+Add Question</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[80%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
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
        <div className="flex justify-end space-x-2 text-white pr-2"><button className="bg-blue-600 p-2 rounded">Save Changes</button><button onClick={addTableRows1} className="bg-blue-600 p-2 rounded">+Add Question</button></div>
        <div className="flex justify-center w-full ">
        <div className="mt-2 res_table w-[80%] bg-slate-500 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500 ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Title</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Description</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Company</th>
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
            
        <div className="flex justify-around w-full container ">
    <div className="announcement-side space-y-5 w-[40%] py-4">
    <div className="text-center font-serif text-2xl mt-3">Announcement Generator</div>

    <div className="flex justify-center ">
                    <form action="" method="post" className="flex-col space-y-2 font-serif  bg-pink-200 rounded outline-1 px-3 outline-gray-300 shadow-xl shadow-black py-2   outline">
                      <div className="flex-col space-y-1">
                        <div className=" text-lg">Title</div>
                        <div><textarea value={title} onChange={(e)=>{settitle(e.target.value)}} className=" outline-1 outline-gray-300 rounded outline focus:outline-gray-400  resize-none bg-white" name="" id="" cols="40" rows="5" ></textarea></div>
                      </div>
                    
       
                      <div className="flex-col space-y-1">
                        <div className=" text-lg">Attach Document</div>
                        <div className="max-w-full "><input value={doc} onChange={(e)=>{setdoc(e.target.value)}} className="hover:cursor-pointer" type="file" /></div>
                      </div>
                  <button onClick={uploadannouncement} className="font-serif  outline  outline-1 px-2 rounded-sm py-[6px] w-full bg-pink-400 text-base text-gray-900 outline-gray-300 ">Upload</button>
                    </form>
                    </div>
            </div>
    <div className="event-side space-y-5  w-[40%] py-4">
    <div className="text-center font-serif text-2xl mt-3">Upload Events</div>

                    <div className="flex justify-center ">
                    <form action="" method="post" className="flex-col space-y-2 font-serif  bg-pink-200 rounded outline-1 px-3 outline-gray-300 shadow-xl shadow-black py-2   outline">
                      <div className="flex-col space-y-1">
                        <div className=" text-lg">Title</div>
                        <div><textarea value={eventtitle} onChange={(e)=>{seteventtitle(e.target.value)}} className=" outline-1 outline-gray-300 rounded outline focus:outline-gray-400  resize-none bg-white" name="title" id="" cols="40" rows="5" ></textarea></div>
                      </div>
                    
                      <div className="flex-col space-y-1">
                        <div className=" text-lg">Description</div>
                        <div><textarea value={eventdescription} onChange={(e)=>{seteventdescription(e.target.value)}} className=" outline-1 outline-gray-300 rounded outline focus:outline-gray-400  resize-none bg-white" name="" id="" cols="40" rows="5" ></textarea></div>
                      </div>
       
                      <div className="flex-col space-y-1">
                        <div className=" text-lg">Attach Document</div>
                        <div className="max-w-full "><input value={eventdoc} onChange={(e)=>{seteventdoc(e.target.value)}} className="hover:cursor-pointer" type="file" /></div>
                      </div>
                  <button className="font-serif  outline  outline-1 px-2 rounded-sm py-[6px] w-full bg-pink-400 text-base text-gray-900 outline-gray-300 " onClick={uploadevent}>Upload</button>
                    </form>
                    </div>
            </div>


    </div>
    </div>
    </>)
}