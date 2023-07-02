import Link from "next/link"
import Navbar from "../../components/navbar"
import {FaPowerOff} from "react-icons/fa"
import {ImWarning} from "react-icons/im"
import {GrClose} from "react-icons/gr"
import {IoMdDownload} from "react-icons/io"
import { useEffect } from "react";
import { useState } from "react";
// import Marquee from "react-fast-marquee";
import cookie from "js-cookie"
import Cookies from "js-cookie"
import { useRouter } from "next/router"



export default function Student() {
    // this.props.abc="fdf"
    const [announcement, setannouncement] = useState([])
    const [spin, setspin] = useState('')
    const [show, setshow] = useState('opacity-50')
const [data, setdata] = useState([])
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
        const url1 = "http://localhost:3000/api/studentpersonaldata";
        const fetchData = async () => {
          try {
            setspin('')
            let response = await fetch(url);
            let json = await response.json();
            setannouncement(json)
            let response1 = await fetch(url1);
            let json1 = await response1.json();
            

            setdata(json1)
            Cookies.set('sem',json1.sem)
            Cookies.set('rollno',json1.rollno)
            // console.log(json1);
            // Cookies.set('year',)

            // if(json.length!=0){   
            //   setnorecord('hidden')
            // }
            setshow('')
            setspin('hidden')
          } catch (error) {
            setshow('opacity-50')
            setspin('')
            console.log("error", error);
          }
        };
      
        fetchData();
      }, []);
      let router=useRouter();
      const yesbutton=()=>{
        cookie.remove('token')
        router.push('/');
      }
    return (<>
    <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content bg-orange-100">
      <div className="modal-header">
        <h5 className="modal-title font-semibold flex text-xl  items-center" id="exampleModalLabel"><ImWarning className='mr-2 text-2xl' />Confirmation</h5>
        <button type="button" className="btn-close text-black font-bold" data-bs-dismiss="modal" aria-label="Close"><GrClose/></button>
      </div>
      <div className="modal-body font-medium text-md ">
        Are you sure to log out?
      </div>
      <div className="modal-footer">
        <button type="button" className=" font-medium btn px-3 bg-orange-200" data-bs-dismiss="modal">No</button>
        <button onClick={yesbutton}  type="button" className="btn font-medium  bg-orange-500 "  data-bs-dismiss="modal">Yes</button>
      </div>
    </div>
  </div>
</div>
        <div className="h-screen overflow-hidden">
            <Navbar class="shadow-sm bg-yellow-2" />

            <div className=" w-[95%] m-auto text-center text-4xl font-semibold shadow-md shadow-slate-600 p-4">
                <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <button type="button" className= {`font-serif font-semibold  `} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 "  /></button>
                        <div className="logout_stu text-base">Logout</div>
                </div>


                <div className="p-2">
                    Welcome...  &nbsp; {data.studentname}
                </div>
                <div className="flex justify-between mt-4 font-normal text-xl">
                    <div className="w-[68%] ">
                        <div className="rounded-2xl bg-slate-200 p-1">
                            What would you like to do?
                        </div>

                        <div className="flex justify-between mt-5 ">
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

                            <Link href={"/library"}>
                            <div className="h-28 w-[30%] rounded-lg  flex cursor-pointer hover:scale-105 transition duration-150 bg-cyan-500">
                                <img src="book_issued.png" className="h-24  align-middle m-auto" />
                                <div className=" m-auto pr-3 ">
                                    Library
                                </div>
                            </div>
                            </Link>

                        </div>

                        <div className="flex mt-5 justify-between ">
                            <Link href={"/student/update_profile"}>
                                <div className="h-28 w-[30%] rounded-lg  mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-yellow-300">
                                    <img src="/update_info.png" className="h-24  align-middle m-auto p-2" />
                                    <div className=" m-auto pr-3 ">
                                        Update Profile
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/student/subjects"} year="1">
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
                        
                    </div>
                    <div className={`shadow-sm shadow-neutral-900 w-[30%] ${show} `}>
                        <div className="pb-2 pt-1 bg-gray-200 rounded-3xl">
                            Notifications
                        </div>

                        <div>
                        <div className={`text-center text-base flex w-full justify-center items-center h-full relative top-10 left-0
 z-10  ${spin}`}>
<div className="spinner-border" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
</div>
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