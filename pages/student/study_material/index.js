import Link from "next/link"
import Navbar from "../../../components/navbar"
import { FaPowerOff } from "react-icons/fa"
import { GrView } from "react-icons/gr"
import { FaDownload } from "react-icons/fa"
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { useState } from "react"
import { CgShapeRhombus } from 'react-icons/cg'


export default function Study_material() {
    const [pinfo, setpinfo] = useState('')
    const [edqu, setedqu] = useState('hidden')
    const [exre, setexre] = useState('hidden')
    const [piclass, setpiclass] = useState('border-b-4 border-black text-black ')
    const [edeqclass, setedeqclass] = useState('text-white')
    const [exreclass, setexreclass] = useState('text-white')
    const [read, setread] = useState(true)
    const [disable, setdisable] = useState(true)

    const [point, setpoint] = useState('opacity-50 cursor-not-allowed')

    const pi = () => {
        setedqu('hidden');
        setexre('hidden');
        setpinfo('');
        setpiclass('border-b-4 border-black text-black ')
        setedeqclass('text-white')
        setexreclass('text-white')
    }
    const eq = () => {
        setedqu('flex ');
        setexre('hidden');
        setpinfo('hidden');
        setpiclass('text-white')
        setedeqclass('border-b-4 border-black text-black ')
        setexreclass('text-white')
    }
    const er = () => {
        setedqu('hidden');
        setexre('');
        setpinfo('hidden');
        setpiclass('text-white')
        setedeqclass('text-white')
        setexreclass('border-b-4 border-black text-black ')
    }


    return (<>
        <div className="h-screen ">
            <Navbar class="shadow-md" />
            {/* <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 " />
                <div className="logout_stu text-base">Logout</div>
            </div> */}
            <div className=" w-[95%] m-auto h-[80%]">
                <div className=" m-auto text-center text-4xl font-semibold p-4 overflow-hidden h-[100%] xsm:text-2xl ">
                    Study Material
                    <div className=" w-[95%] shadow-md shadow-slate-400 text-[60%] h-[100%] m-auto mt-3 ">
                        <div className=" w-[100%] flex ">
                            <div onClick={pi} className={` w-[33.3%] m-auto bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer ${piclass}`} >
                                Syllabus
                            </div>
                            <div onClick={eq} className={`bg-amber-800 w-[33.3%] m-auto p-1  hover:bg-amber-700 cursor-pointer ${edeqclass}`}>
                                Notes
                            </div>
                            <div onClick={er} className={` bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer w-[33.3%] m-auto ${exreclass}`}>
                                Previous Year
                            </div>
                        </div>

                        <div className={`m-auto  h-[80%] w-[95%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-900 text-sm px-2 ${pinfo}`}>
                            <div className="bg-slate-200 p-2 text-xl rounded-2xl xsm:text-lg">
                                Select Semester
                            </div>
                            <div className="flex justify-between mt-4 w-[100%] m-auto flex-wrap ">

                                <Link href="/syllabus_sem1.pdf">
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 1
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/syllabus_sem2.pdf"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 2
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/syllabus_sem3.pdf"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 3
                                        </div>
                                    </div>
                                </Link>
                                <Link href={"/syllabus_sem4.pdf"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 4
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/syllabus_sem5.pdf"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 5
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/syllabus_sem6.pdf"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 6
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/syllabus_sem7-8.pdf"}>
                                    <div className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 7 / 8
                                        </div>
                                    </div>
                                </Link>


                            </div>

                        </div>

                        <div className={` m-auto flex-col h-[80%] w-[95%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${edqu}`}>
                            <div className="bg-slate-200 p-2 text-xl rounded-2xl  xsm:text-lg">
                                Select Semester
                            </div>
                            <div className="flex justify-between mt-4 w-[100%] m-auto flex-wrap ">

                            <Link href="/student/study_material/select_subject?sem=1" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 1
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/select_subject?sem=2" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 2
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/select_subject?sem=3" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 3
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/select_subject?sem=4" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 4
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/select_subject?sem=5" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 5
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/select_subject?sem=6" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 6
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/select_subject?sem=7" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 7 / 8
                                        </div>
                                    </div></a>
                                </Link>


                            </div>
                        </div>

                        <div className={` m-auto flex-col h-[80%] w-[95%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${exre}`}>
                            <div className="bg-slate-200 p-2 text-xl rounded-2xl xsm:text-lg">
                                Select Semester
                            </div>
                            <div className="flex justify-between mt-4 w-[100%] m-auto flex-wrap ">

                            <Link href="/student/study_material/subjects?sem=1" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 1
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/subjects?sem=2" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 2
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/subjects?sem=3" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 3
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/subjects?sem=4" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 4
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/subjects?sem=5" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 5
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/subjects?sem=6" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 6
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                                <Link href="/student/study_material/subjects?sem=7" >
                                    <a className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className="m-auto">
                                        <div className=" m-auto pr-3 text-lg xsm:text-sm">
                                            Semester 7 / 8
                                        </div>
                                    </div></a>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)


}
