import Link from "next/link"
import Navbar from "../../../components/navbar"
import { FaPowerOff } from "react-icons/fa"
import { GrView } from "react-icons/gr"
import { FaDownload } from "react-icons/fa"
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { useState } from "react"
import { CgShapeRhombus } from 'react-icons/cg'


export default function Fees_records() {

    return (<>
        <div className="h-screen ">
            <Navbar class="shadow-md" />
            {/* <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 " />
                <div className="logout_stu text-base">Logout</div>
            </div> */}
            <div className=" w-[95%] m-auto h-[80%]">
                <div className=" m-auto text-center text-4xl font-semibold p-4 overflow-hidden h-[100%] xsm:text-2xl">
                    Fees Records
                    <div className=" w-[95%] shadow-md shadow-slate-400 text-[60%] h-[100%] m-auto mt-3 ">
                        
                        <div className={`m-auto  h-[80%] w-[95%] overflow-auto scrollbar-thin pt-2 scrollbar-thumb-zinc-900 text-sm px-2 xsm:h-auto`}>
                            <div className="bg-slate-200 p-2 text-xl rounded-2xl xsm:text-lg">
                                Select Semester
                            </div>
                            <div className="flex justify-between mt-4 w-[100%] xsm:mt-0 m-auto flex-wrap ">

                                <Link href="/student/fees_records/records" target="_blank">
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 1
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/student/fees_records/records"} target="_blank">
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 2
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/student/fees_records/records"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 3
                                        </div>
                                    </div>
                                </Link>
                                <Link href={"/student/fees_records/records"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 4
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/student/fees_records/records"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 5
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/student/fees_records/records"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 6
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/student/fees_records/records"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 7
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/student/fees_records/records"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 8
                                        </div>
                                    </div>
                                </Link>

                                <div className="h-20 w-[30%] bg-white rounded-lg mx-2 my-2  text-white ">
                                    <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                        8
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>)


}
