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
                        <div className="flex justify-between
                         mt-4 border-2 border-solid border-emerald-800 w-[90%] m-auto flex-wrap ">
                            <Link href={"/student/view_assignment"}>
                                <div className="h-28 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0]  rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                    <div className=" m-auto pr-3 ">
                                        Subject 1
                                    </div>
                                </div>
                            </Link>

                            <Link href={"/student/study_material"}>
                            <div className="h-28 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                <div className=" m-auto pr-3 ">
                                    Subject 2
                                </div>
                            </div>
                            </Link>
                            <div className="h-28 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                <div className=" m-auto pr-3 ">
                                    Subject 3
                                </div>
                            </div>

                            <div className="h-28 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                <div className=" m-auto pr-3 ">
                                    Subject 4
                                </div>
                            </div>
                            <div className="h-28 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                <div className=" m-auto pr-3 ">
                                    Subject 5
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>)


}
