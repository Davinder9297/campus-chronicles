import Link from "next/link"
import Navbar from "../../components/navbar"
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
            <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 " />
                <div className="logout_stu text-base">Logout</div>
            </div>
            <div className=" w-[95%] m-auto h-[80%]">
                <div className=" m-auto text-center text-4xl font-semibold shadow-md shadow-slate-600 p-4 overflow-hidden h-[100%] ">
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
                            <div className="bg-slate-200 p-2 text-xl rounded-2xl">
                                Select Semester
                            </div>
                            <div className="border-b-2 border-solid border-zinc-300 p-2 text-lg mt-2 flex align-middle w-[80%] m-auto hover:bg-yellow-50">
                                <div className="sem1 text-left ml-5 w-[70%]">
                                    Semester 1
                                </div>
                                <div className="w-[30%] flex ">
                                    <div className="w-[50%] flex justify-end ">
                                        <a href="/syllabus_sem3.pdf" target="_blank"><GrView className=" hover:opacity-80 h-full w-6 cursor-pointer" /></a>
                                    </div>
                                    <div className="w-[50%] justify-end flex ">
                                        <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-6 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle w-[80%] m-auto hover:bg-yellow-50">
                                <div className="sem1 text-left ml-5 w-[70%]">
                                    Semester 2
                                </div>
                                <div className="w-[30%] flex">
                                    <div className="w-[50%] flex justify-end ">
                                        <a href="/syllabus_sem3.pdf" target="_blank"><GrView className=" hover:opacity-80 h-full w-6 cursor-pointer" /></a>
                                    </div>
                                    <div className="w-[50%] justify-end flex ">
                                        <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-6 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle w-[80%] m-auto hover:bg-yellow-50">
                                <div className="sem1 text-left ml-5 w-[70%]">
                                    Semester 3
                                </div>
                                <div className="w-[30%] flex">
                                    <div className="w-[50%] flex justify-end ">
                                        <a href="/syllabus_sem3.pdf" target="_blank"><GrView className=" hover:opacity-80 h-full w-6 cursor-pointer" /></a>
                                    </div>
                                    <div className="w-[50%] justify-end flex ">
                                        <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-6 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle w-[80%] m-auto hover:bg-yellow-50">
                                <div className="sem1 text-left ml-5 w-[70%]">
                                    Semester 4
                                </div>
                                <div className="w-[30%] flex">
                                    <div className="w-[50%] flex justify-end ">
                                        <a href="/syllabus_sem3.pdf" target="_blank"><GrView className=" hover:opacity-80 h-full w-6 cursor-pointer" /></a>
                                    </div>
                                    <div className="w-[50%] justify-end flex ">
                                        <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-6 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle w-[80%] m-auto hover:bg-yellow-50">
                                <div className="sem1 text-left ml-5 w-[70%]">
                                    Semester 5
                                </div>
                                <div className="w-[30%] flex">
                                    <div className="w-[50%] flex justify-end ">
                                        <a href="/syllabus_sem3.pdf" target="_blank"><GrView className=" hover:opacity-80 h-full w-6 cursor-pointer" /></a>
                                    </div>
                                    <div className="w-[50%] justify-end flex ">
                                        <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-6 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle w-[80%] m-auto hover:bg-yellow-50">
                                <div className="sem1 text-left ml-5 w-[70%]">
                                    Semester 6
                                </div>
                                <div className="w-[30%] flex">
                                    <div className="w-[50%] flex justify-end ">
                                        <a href="/syllabus_sem3.pdf" target="_blank"><GrView className=" hover:opacity-80 h-full w-6 cursor-pointer" /></a>
                                    </div>
                                    <div className="w-[50%] justify-end flex ">
                                        <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-6 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle w-[80%] m-auto hover:bg-yellow-50">
                                <div className="sem1 text-left ml-5 w-[70%]">
                                    Semester 7/8
                                </div>
                                <div className="w-[30%] flex">
                                    <div className="w-[50%] flex justify-end ">
                                        <a href="/syllabus_sem3.pdf" target="_blank"><GrView className=" hover:opacity-80 h-full w-6 cursor-pointer" /></a>
                                    </div>
                                    <div className="w-[50%] justify-end flex ">
                                        <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-6 cursor-pointer" />
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className={` m-auto flex-col h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${edqu}`}>
                            <div className="bg-slate-200 p-2 text-xl rounded-2xl">
                                Select Semester
                            </div>
                            <div className="sem1 w-[80%] mx-auto mt-2 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 1
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>


                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className="sem1 w-[80%] mx-auto mt-1">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 2
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="sem1 w-[80%] mx-auto mt-1 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 3
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="sem1 w-[80%] mx-auto mt-1 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 4
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="sem1 w-[80%] mx-auto mt-1 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 5
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="sem1 w-[80%] mx-auto mt-1 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 6
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="sem1 w-[80%] m-auto mt-1 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 7 / 8
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-lg hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-lg hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-lg hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <div className={` m-auto flex-col h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${exre}`}>
                            <div className="bg-slate-200 p-2 text-xl rounded-2xl">
                                Select Semester
                            </div>
                            <div className="sem1 w-[80%] mx-auto mt-2 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 1
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>


                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className="sem1 w-[80%] mx-auto mt-1">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 2
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="sem1 w-[80%] mx-auto mt-1 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 3
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="sem1 w-[80%] mx-auto mt-1 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 4
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="sem1 w-[80%] mx-auto mt-1 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 5
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="sem1 w-[80%] mx-auto mt-1 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 6
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-base hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="sem1 w-[80%] m-auto mt-1 ">
                                <div className="sem1 border-b-2 border-solid border-zinc-300 p-2 text-lg flex align-middle hover:bg-yellow-50">
                                    <div className="sem1 text-left ml-5 w-[70%]">
                                        Semester 7 / 8
                                    </div>
                                    <div className="sem1 w-[30%] flex justify-center">
                                        <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-lg hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 1
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-lg hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 2
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="notes_sem_sub p-2 text-sm block flex-col border-b-2 border-solid border-zinc-300 ">
                                    <div className="notes_sem_sub p-2 text-lg hover:bg-zinc-100 ">
                                        <div className="notes_sem_sub text-left ml-5 w-[70%] ">
                                            Subject 3
                                        </div>
                                        <div className=" w-[30%] flex justify-center">
                                            <IoIosArrowDropdownCircle className=" hover:opacity-80 h-full w-6 cursor-pointer text-amber-900 " />
                                        </div>
                                    </div>

                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 hover:font-semibold ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="notes_sem_sub_1 border-b-2 border-solid border-zinc-500 p-2 text-lg hover:bg-zinc-50 ">
                                        <div className="notes_sem_sub_1 text-left ml-10 w-[70%]  text-base">
                                            <a href="#">Notes 1</a>
                                        </div>
                                        <div className="w-[30%] justify-center flex ">
                                            <FaDownload className=" hover:opacity-80 text-amber-900 h-full w-5 cursor-pointer" />
                                        </div>
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
