import Link from "next/link"
import Navbar from "../../components/navbar"
import {FaPowerOff} from "react-icons/fa"
import {IoMdDownload} from "react-icons/io"
import { useEffect } from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";


export default function Student() {
    const [announcement, setannouncement] = useState([])
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
    useEffect(() => {
        const url = "http://localhost:3000/api/studentannouncement";
        const fetchData = async () => {
          try {
            // setspin('')
            let response = await fetch(url);
            let json = await response.json();
      
            setannouncement(json)
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
    return (<>
        <div className="h-screen overflow-hidden">
            <Navbar class="shadow-sm bg-yellow-2" />

            <div className=" w-[95%] m-auto text-center text-4xl font-semibold shadow-md shadow-slate-600 p-4">
                <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 "  />
                        <div className="logout_stu text-base">Logout</div>
                </div>


                <div className="p-2">
                    Welcome...  &nbsp;&nbsp; Ms. Jaspreet kaur
                </div>
                <div className="flex justify-between mt-4 font-normal text-xl">
                    <div className="w-[68%] ">
                        <div className="rounded-2xl bg-slate-200 p-1">
                            What would you like to do?
                        </div>

                        <div className="flex justify-between mt-4">
                            <Link href={"/student/my_profile"}>
                                <div className="h-28 w-[30%] rounded-lg  mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-red-600">
                                    <img src="stu.png" className="h-24  align-middle m-auto" />
                                    <div className=" m-auto pr-3 ">
                                        View Profile
                                    </div>
                                </div>
                            </Link>

                            <Link href={"/student/study_material"}>
                            <div className="h-28 w-[30%] rounded-lg mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-emerald-700">
                                <img src="study_material.png" className="h-32  align-middle m-auto" />
                                <div className=" m-auto pr-3 ">
                                    Study Material
                                </div>
                            </div>
                            </Link>
                            <div className="h-28 w-[30%] rounded-lg  flex cursor-pointer hover:scale-105 transition duration-150 bg-cyan-500">
                                <img src="book_issued.png" className="h-24  align-middle m-auto" />
                                <div className=" m-auto pr-3 ">
                                    Books Issued
                                </div>
                            </div>

                        </div>

                        <div className="flex mt-4 justify-between">
                            <Link href={"/student/update_profile"}>
                                <div className="h-28 w-[30%] rounded-lg  mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-yellow-300">
                                    <img src="/update_info.png" className="h-24  align-middle m-auto p-2" />
                                    <div className=" m-auto pr-3 ">
                                        Update Profile
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/student/view_assignment"}>
                            <div className="h-28 w-[30%] rounded-lg  mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-orange-500">
                                <img src="assignment.png" className="h-24  align-middle m-auto" />
                                <div className=" m-auto pr-3 ">
                                    View Assignment
                                </div>
                            </div>
                            </Link>
                            <Link href={"/student/fees_records"}>
                            <div className="h-28 w-[30%] rounded-lg  flex cursor-pointer hover:scale-105 transition duration-150 bg-teal-500">
                                <img src="fees_records.png" className="h-24  align-middle m-auto" />
                                <div className=" m-auto pr-3 ">
                                    Fees Records
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div className="flex  mt-4 justify-between">
                        <Link href={"/student/time_table"}>
                            <div className="h-28 w-[30%] rounded-lg  mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-green-600">
                                <img src="/timetable3.png" className="h-24  align-middle m-auto p-2" />
                                <div className=" m-auto pr-3 ">
                                    View Time Table
                                </div>
                            </div>
                            </Link>
                            <div className="h-28 w-[30%] rounded-lg mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-purple-600">
                                <img src="attendance.png" className="h-24  align-middle m-auto" />
                                <div className=" m-auto pr-3 ">
                                    Current Attendance
                                </div>
                            </div>
                            <div className="h-28 w-[30%] rounded-lg border-2 border-solid border-white text-white">
                                hfgh
                            </div>

                        </div>
                    </div>
                    <div className="shadow-sm shadow-neutral-900 w-[30%]">
                        <div className="pb-2 pt-1 bg-gray-200 rounded-3xl">
                            Notifications
                        </div>

                        <div>
                            {/* <Marquee direction="down"> */}
                            {announcement.map((d,index)=>{
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
                            <div className="flex space-x-1 text-left   w-[40%]" ><div className={`mt-2 ${show}`}><img className='' src="new.gif" alt="" /></div> <div>{title}</div></div>
                            <div className=" ">{formatted}</div>
                            <div className=" text-2xl"><button onClick={(e)=>{download(doc,title)}}><IoMdDownload/></button></div>
                        </div>
                            </>)
                        })}

                            {/* </Marquee> */}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </>)
}