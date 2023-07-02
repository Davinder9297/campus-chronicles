import { useState } from "react";
import Navbarres from "../../components/navbarres";
import Sidebar from "./sidebar";
import { useEffect } from "react";

export default function Requestedbooks(){
  const [norecord, setnorecord] = useState('')
  const [spin, setspin] = useState('')
  const [show, setshow] = useState('hidden')
  const [rowsdata, setrowsdata] = useState([])
  useEffect(() => {
    const url = "http://localhost:3000/api/requestbook";
    // const url1 = "http://localhost:3000/api/placementevents";
  
  
    const fetchData = async () => {
      try {
        setspin('')
        let response = await fetch(url);
        let json = await response.json();
        // console.log(json);
        setrowsdata(json)
   
        
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
            <div className="flex-col w-[100%] h-[93.3%]  overflow-y-auto scrollbar-thin  scrollbar-track-slate-100 scrollbar-thumb-slate-500">

                <div className=" flex w-[100%]  h-[93.5%] justify-center items-center  p-2">
                    <div className="w-[100%]">
                        <div className="text-center text-2xl font-serif ">Requested Books</div>
                        <div className="pt-2   res_table  ">
                                                <div className={`text-center  flex w-full justify-center items-center h-full relative top-24  left-0 
 z-10  ${spin}`}>
<div className="spinner-border" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
</div>
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Student Name </th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Roll No. </th>
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Book Title</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Author</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Publisher</th>
                        </tr>
                      </thead>
                      <tbody className={show}>

                      <tr className={`${norecord}`}>
                          <td colSpan="3"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                          { rowsdata.map((data, index)=>{
            const {studentname,rollno,title,author,publisher}= data;            
            return(
                <tr key={index}>
                <td className="border-2  border-slate-300 w-36">
                  {studentname}
                </td>
                <td className="border-2  border-slate-300 w-20">
                  {rollno}
                </td>
                <td className="border-2  border-slate-300">
                  {title}
                </td>
                <td className="border-2  border-slate-300 w-56">
                  {author}
                </td>
                <td className="border-2  border-slate-300 w-60">
                  {publisher}
                </td>
                
            </tr>
            )
        })
   }

                        
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