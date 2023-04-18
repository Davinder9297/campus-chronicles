import Link from "next/link"
import Navbar from "../../components/navbar"
import { FaPowerOff } from "react-icons/fa"
import { GrView } from "react-icons/gr"
import { FaDownload } from "react-icons/fa"
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { AiOutlineFileDone } from "react-icons/ai"
import { useState } from "react"
import { CgShapeRhombus } from 'react-icons/cg'
import { FaQuestionCircle } from 'react-icons/fa'



export default function Study_material1() {
    const [pinfo, setpinfo] = useState('')
    const [edqu, setedqu] = useState('hidden')
    const [exx, setexx] = useState('hidden')
    const [exxclass, setexxclass] = useState('hidden')
    const [piclass, setpiclass] = useState('border-b-4 border-black text-black ')
    const [edeqclass, setedeqclass] = useState('text-white')
    const [read, setread] = useState(true)
    const [disable, setdisable] = useState(true)

    const [point, setpoint] = useState('opacity-50 cursor-not-allowed')

    const pi = () => {
        setedqu('hidden');
        setpinfo('');
        setpiclass('border-b-4 border-black text-black ')
        setedeqclass('text-white')
    }
    const eq = () => {
        setedqu('flex ');
        setpinfo('hidden');
        setpiclass('text-white')
        setedeqclass('border-b-4 border-black text-black ')
    }

    const ex = () => {
        setexx('hidden ');
        setexxclass('')
    }

    return (<>
        <div className="h-screen ">
            <Navbar class="shadow-md" />
            <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 " />
                <div className="logout_stu text- border-2 border-solid">Logout</div>
            </div>
            <div className=" w-[95%] m-auto h-[80%]">
                <div className=" m-auto text-center text-4xl font-semibold shadow-md shadow-slate-600 p-4 overflow-hidden h-[100%] ">
                    Assignment Submission ....
                    <div className=" w-[95%] shadow-md shadow-slate-400 text-[60%] h-[100%] m-auto mt-3 ">
                        <div className="border-2 border-solid border-emerald-800 text-2xl mt-2 p-1 bg-zinc-300 rounded">
                            Select Subject
                        </div>
                        <div className="flex justify-between mt-4 border-2 border-solid border-emerald-800 w-[90%] m-auto">
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

                    </div>
                </div>
            </div>
        </div>

    </>)


}
