import Navbar from "../../components/navbar"
// import Navbar from '../components/navbar'
// import Document from "next/document";
import Link from "next/link";
import { useEffect, useState } from "react";
import {IoMdDownload} from "react-icons/io"
// import Head from 'next/head'
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
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = title;
                alink.click();
            })
        })
      }
    return (<>

<Navbar class=""/>
        <div className="flex justify-between w-full ">
            <div className=" flex-col-reverse flex-wrap  w-[24%] mr-1 ">
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/cultural_club'}>
                        <img className="rounded-xl h-full w-full" src="/cultural_logo.png" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/personality_club'}>
                        <img className="rounded-xl h-full w-full" src="/personality.png" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/editorial_club'}>
                        <img className="rounded-xl h-full w-full" src="editorial.jpg" />
                    </Link>
                </div>
            </div>


            <div className="flex-col justify-between w-[44%]">
                <div className=" p-3 font-jass text-2xl text-center font-bold ">

                    Current Notifications...
                    <div className="border-solid border-2 h-[300px] overflow-y-auto mt-2">
                        {data.map((d,index)=>{
                            const {title,doc,date}=d;
                            return(<>
                               <div className="border-solid border-1 border-slate-200 h-15 p-2 text-sm flex flex-row justify-between ">
                            <div className=" ">{index+1}</div>
                            <div className='flex space-x-1  '><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>{title}</div></div>
                            <div className=" ">{date}</div>
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
                        <Link href={'club/sports'}>
                        <img className="flex  rounded-xl h-full w-full" src="sports1.jpg" />
                    </Link>
                    </div>
                    <div className="border-solid border-2 m-2 border-pink-600 h-[173px] text-center rounded-xl w-[45%] shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/core_commitee'}>
                        <img className="rounded-xl h-full w-full" src="core-committee.png" />
                    </Link>
                    </div>
                </div>
            </div>


            <div className="flex-col flex-wrap w-[24%]">
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] text-center rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/training_placement_club'}>
                        <img className="rounded-xl h-full w-full" src="placement.jpg" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/e_club'}>
                        <img className="rounded-xl h-full w-full" src="e-cell.png" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/coding_and_tech_club'}>
                        <img className="rounded-xl h-full w-full" src="coding.png" />
                    </Link>
                </div>
            </div>
        </div>

    </>)
}



