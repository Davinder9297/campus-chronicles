import { useRouter } from "next/router";
import Navbar from "../../components/navbar"
// import Navbar from '../components/navbar'
// import Document from "next/document";
import { useEffect, useState } from "react";
import {IoMdDownload} from "react-icons/io"
import Cookies from "js-cookie";
// import Head from 'next/head'
{/* <option className="" value="Personality Club">Personality Club</option >
  <option className="" value="Cultural Club">Cultural Club</option >
  <option className="" value="Coding Club">Coding Club</option >
  <option className="" value="Editorial Club">Editorial Club</option >
  <option className="" value="Sports Club">Sports Club</option >
  <option className="" value="Training & Placement Cell">Training & Placement Cell</option >
  <option className="" value="Enterpreneurship Cell">Enterpreneurship Cell</option >
  <option className="" value="Core Committee">Core Committee</option > */}
export default function Club() {
    const [data, setdata] = useState([])
    useEffect(() => {
        const url = "http://localhost:3000/api/clubannouncement";     
        const fetchData = async () => {
          try {
            // setspin('')
            let response = await fetch(url);
            let json = await response.json();
      
            setdata(json)
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
      let router=useRouter()
      const opennext=(path,club)=>{
        Cookies.set('club',club);
router.push(path)

      }
    return (<>

<Navbar class=""/>
        <div className="flex justify-between w-full ">
            <div className=" flex-col-reverse flex-wrap  w-[24%] mr-1 ">
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <button onClick={()=>(opennext('/club/cultural',"Cultural Club"))} >
                        <img className="rounded-xl h-full w-full" src="/cultural_logo.png" />
                    </button>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <button onClick={()=>(opennext('/club/personality',"Personality Club"))} >
                        <img className="rounded-xl h-full w-full" src="/personality.png" />
                    </button>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <button onClick={()=>(opennext('/club/editorial',"Editorial Club"))} >
                        <img className="rounded-xl h-full w-full" src="/editorial.jpg" />
                    </button>
                </div>
            </div>


            <div className="flex-col justify-between w-[44%]">
                <div className=" p-3 font-jass text-2xl text-center font-bold ">

                    Current Notifications...
                    <div className="border-solid border-2 h-[300px] overflow-y-auto mt-2">
                        {data.map((d,index)=>{
                            const {title,doc,date}=d;
                            // const [show, setshow] = useState('')
                            let show='';
                            let dat=new Date(date);
                            let newdate=new Date();
                            let formatted=date.substring(8,10)+date.substring(4,8)+date.substring(0,4);
                            // console.log();
                            let diff=(newdate.getTime()-dat.getTime())/(1000 * 60 * 60 * 24);
                            if(diff>=1){
                                // setshow('hidden')
                                show='hidden';
                            }
                            // console.log(dat.getTime());
                            return(<>
                               <div className="border-solid border-1 border-slate-200 h-15 p-2 text-sm flex flex-row justify-between ">
                            <div className=" ">{index+1}.</div>
                            <div className="flex space-x-1 text-left  w-[30%]" ><div className={`mt-2 ${show}`}><img className='' src="new.gif" alt="" /></div> <div>{title}</div></div>
                            <div className=" ">{formatted}</div>
                            <div className=" text-2xl"><button onClick={(e)=>{download(doc,title)}}><IoMdDownload/></button></div>
                        </div>
                            </>)
                        })}
                        {/* <div className="border-solid border-1 border-slate-200 h-15 p-1 text-sm flex flex-row justify-between">
                            <div className=" ">S.no.</div>
                            <div className=" ">Subject</div>
                            <div className=" ">Date</div>
                            <div className=" ">Download</div>
                        </div> */}
                        {/* <marquee id="scroll_new" onmouseover="this.stop();"
            direction="up" height="80%" behaviour="scroll" scrollamount="4"> */}
                     
                        {/* <div className="border-solid border-1 border-slate-200 h-15 p-2 text-sm flex flex-row justify-between ">
                            <div className="">2.</div>
                            <div className='flex space-x-1 '><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
                            <div className=" ">28.02.2023</div>
                            <div className=" ">28.02.2023</div>
                        </div> */}
                        {/* </marquee> */}
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-evenly mt-2">
                    <div className="border-solid border-2 m-2 border-pink-600 h-auto text-center rounded-xl w-[45%] justify-items-center shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                        <button onClick={()=>(opennext('/club/sport',"Sports Club"))}>
                        <img className="flex  rounded-xl h-full w-full" src="sports1.jpg" />
                    </button>
                    </div>
                    <div className="border-solid border-2 m-2 border-pink-600 h-[173px] text-center rounded-xl w-[45%] shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <button onClick={()=>(opennext('/club/core_commitee',"Core Committee"))}>
                        <img className="rounded-xl h-full w-full" src="core-committee.png" />
                    </button>
                    </div>
                </div>
            </div>


            <div className="flex-col flex-wrap w-[24%]">
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] text-center rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <button onClick={()=>(opennext('/club/training_placement_club',"Training & Placement Cell"))}>
                        <img className="rounded-xl h-full w-full" src="placement.jpg" />
                    </button>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <button onClick={()=>(opennext('/club/e',"Enterpreneurship Cell"))} >
                        <img className="rounded-xl h-full w-full" src="e-cell.png" />
                    </button>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <button  onClick={()=>(opennext('/club/coding_and_tech',"Coding Club"))} >
                        <img className="rounded-xl h-full w-full" src="coding.png" />
                    </button>
                </div>
            </div>
        </div>

    </>)
}



