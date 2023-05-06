import Link from "next/link"
import Navbar from "../../../components/navbar"
import { FaPowerOff } from "react-icons/fa"
import { FaDownload } from "react-icons/fa"
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { useState } from "react"
import { CgShapeRhombus } from 'react-icons/cg'


export default function View_material() {

    return (<>
        <div className="h-screen ">
            <Navbar class="shadow-md" />
            <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 " />
                <div className="logout_stu text-base">Logout</div>
            </div>
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
                                    <div className="flex hover:bg-yellow-50 border-b-2 border-solid border-zinc-300 p-2 text-lg">
                                        <div className="sem1 text-left ml-5 w-[70%]">
                                            Notes 1
                                        </div>
                                        <div className="w-[30%] flex">
                                            <div className="w-[50%] flex justify-end ">
                                                <a href="/syllabus_sem3.pdf" ><FaDownload className=" hover:opacity-80 h-full w-6 cursor-pointer  text-amber-900" /></a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="flex hover:bg-yellow-50 border-b-2 border-solid border-zinc-300 p-2 text-lg">
                                        <div className="sem1 text-left ml-5 w-[70%]">
                                            Notes 2
                                        </div>
                                        <div className="w-[30%] flex">
                                            <div className="w-[50%] flex justify-end ">
                                                <a href="/syllabus_sem3.pdf" ><FaDownload className=" text-amber-900 hover:opacity-80 h-full w-6 cursor-pointer" /></a>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="flex hover:bg-yellow-50 border-b-2 border-solid border-zinc-300 p-2 text-lg">
                                        <div className="sem1 text-left ml-5 w-[70%]">
                                            Notes 3
                                        </div>
                                        <div className="w-[30%] flex">
                                            <div className="w-[50%] flex justify-end ">
                                                <a href="/syllabus_sem3.pdf" ><FaDownload className=" text-amber-900 hover:opacity-80 h-full w-6 cursor-pointer" /></a>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>



                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>

    </>)


}
