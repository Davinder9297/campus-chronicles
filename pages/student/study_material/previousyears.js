import Link from "next/link"
import Navbar from "../../../components/navbar"
import { FaPowerOff } from "react-icons/fa"
import { FaDownload } from "react-icons/fa"
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { useState } from "react"
import { CgShapeRhombus } from 'react-icons/cg'
import { useEffect } from "react"


export default function View_material() {
    const [data, setdata] = useState([])
    const [norecord, setnorecord] = useState('')
    useEffect(() => {
        let href=window.location.search;
const queryParams = new URLSearchParams(href)
// console.log(queryParams.get("q"))
let subject=queryParams.get("subject")
        const url = "http://localhost:3000/api/previousyears?subject="+subject;
        // const url1 = "http://localhost:3000/api/placementevents";
      
      
        const fetchData = async () => {
          try {
            // setspin('')
            let response = await fetch(url);
            let json = await response.json();
            console.log(json);
            setdata(json)
            // setdata1(json)
            
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
      const download=(doc,title)=>{
        if(doc==''){
            alert('No file attached')
        }
        else{
            fetch(doc).then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let abutton = document.createElement('a');
                    abutton.href = fileURL;
                    abutton.download = title;
                    abutton.click();
                  
                })
            })
        }
        
      }
    return (<>
        <div className="h-screen ">
            <Navbar class="shadow-md" />
            {/* <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 " />
                <div className="logout_stu text-base">Logout</div>
            </div> */}
            <div className=" w-[95%] m-auto h-[80%]">
                <div className=" m-auto text-center text-4xl font-semibold p-4 overflow-hidden h-[100%] ">
                    Study Material
                    <div className=" w-[95%] shadow-md shadow-slate-400 text-[60%] h-[100%] m-auto mt-3 ">

                        <div className={`m-auto  h-[80%] w-[95%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-900 text-sm px-2 `}>
                            <div className="bg-slate-200 p-2 text-xl rounded-2xl">
                                Subject Notes
                            </div>
                            <div className=" mt-4 w-[80%] m-auto  ">

                                {/* <div className="  align-middle w-[80%]"> */}
                                <div className={`text-center text-xl text-gray-700 pt-[10%] ${norecord}`}>No Record Found</div>
                                    {data.map((d)=>{
                                        return(<>
                                        <div className="flex hover:bg-yellow-50 border-b-2 border-solid border-zinc-300 p-2 text-lg">
                                        <div className="sem1 text-left ml-5 w-[70%]">
                                            {d.title}
                                        </div>
                                        <div className="w-[30%] flex">
                                            <div className="w-[50%] flex justify-end ">
                                            <button onClick={(e)=>{download(d.attachment,d.title)}}><FaDownload className=" hover:opacity-80 h-full w-6 cursor-pointer  text-amber-900" /></button>
                                              
                                            </div>
                                            
                                        </div>
                                    </div>
                                        </>)
                                        
                                    })}
                                    
                                   
                                    
                                </div>
                            </div>



                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>

    </>)


}
