import Link from "next/link"
import Navbar from "../../../components/navbar"
import { FaPowerOff } from "react-icons/fa"
import { GrView } from "react-icons/gr"
import { FaDownload } from "react-icons/fa"
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { useEffect, useState } from "react"
import { CgShapeRhombus } from 'react-icons/cg'
import Cookies from "js-cookie"
import { Router, useRouter } from "next/router"
// import { useRouter } from "next/router"


export default function View_assign(props) {
let router=useRouter();
const [data, setdata] = useState([])

const showassignment=(da)=>{
Cookies.set('subject',da)
// Router.push('')
router.push('/student/view_assignment/view_assignment_main')
}
useEffect(() => {
 let first=["math","physics"]
 let second=["chem","bee"]
 let sem=Cookies.get('sem')
 if(sem=='6th'){
    setdata(first)
 }
 else{
    setdata(second)
 }
}, [])

    return (<>
        <div className="h-screen ">
            <Navbar class="shadow-md" />
            <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 " />
                <div className="logout_stu text-base">Logout</div>
            </div>
            <div className=" w-[95%] m-auto h-[80%]">
                <div className=" m-auto text-center text-4xl font-semibold p-4 overflow-hidden h-[100%] ">
                    View Assignment
                    <div className=" w-[95%] shadow-md shadow-slate-400 text-[60%] h-[100%] m-auto mt-3 ">
                        
                        <div className={`m-auto  h-[80%] w-[95%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-900 text-sm px-2 `}>
                            <div className="bg-slate-200 p-2 text-xl rounded-2xl">
                                Select Subject
                            </div>
                            <div className="flex justify-center space-x-3 mt-4 w-[100%] m-auto flex-wrap ">
                                {data.map((da)=>{
                                    return(<>
                                    <button onClick={()=>(showassignment(da))} className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg">
                                           {da}
                                        </div>
                                    </button>
                                    </>)
                                })}
                                {/* <Link href="/student/view_assignment/view_assignment_main" target="_blank">
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg">
                                            Math 1
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/student/view_assignment/view_assignment_main"} target="_blank">
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg">
                                            Bee
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/student/view_assignment/view_assignment_main"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg">
                                            Physics
                                        </div>
                                    </div>
                                </Link>
                                <Link href={"/student/view_assignment/view_assignment_main"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg">
                                            Subject 4
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/student/view_assignment/view_assignment_main"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg">
                                            Subject 5
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/student/view_assignment/view_assignment_main"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg">
                                            Subject 6
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/student/view_assignment/view_assignment_main"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg">
                                            Subject 7 / 8
                                        </div>
                                    </div>
                                </Link> */}


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>)


}
