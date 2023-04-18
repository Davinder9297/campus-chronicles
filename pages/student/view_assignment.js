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



export default function Study_material() {
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
                        <div className=" w-[100%] flex ">
                            <div onClick={pi} className={` w-[50%] m-auto bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer ${piclass}`} >
                                Current Assignments
                            </div>
                            <div onClick={eq} className={`bg-amber-800 w-[50%] m-auto p-1  hover:bg-amber-700 cursor-pointer ${edeqclass}`}>
                                Submitted Assignments
                            </div>

                        </div>

                        
                        <div className={` m-auto flex-col h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${edqu}`}>
                        <div className="flex-col w-[100%] h-auto p-3">
                                <div className='text-3xl border-2 border-solid border-emerald-600 p-1 rounded bg-zinc-300 mb-3'>Assignments </div>
                                <div>
                                    <div className="accordion " id="accordionFlushExample">
                                        <div className="accordion-item focus-within:bg-white">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed hover:bg-slate-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Assignment 1
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <div className={`shadow-sm shadow-gray-500 w-[100%] m-auto text-base  p-3`}>
                                                        <div className="w-[100%] text-start ml-5 mb-4 p-2 border-b-2 border-zinc-400 border-solid flex">
                                                        <div className="w-[70%]">
                                                                View Submitted Assignment
                                                                </div>
                                                                <div className="w-[30%] flex justify-center ">
                                                                <GrView className=" hover:opacity-80 h-full w-6 cursor-pointer flex justify-end" />
                                                            </div></div>
                                                        <div className="flex">
                                                            <div className="w-[50%] text-start ml-7 ">
                                                                Submission Date
                                                            </div>
                    
                                                        </div>
                                                        
                                                    </div></div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Accordion Item #2
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Accordion Item #3
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`m-auto  h-[80%] w-[95%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-900 text-sm px-2 ${pinfo}`}>
                            <div className="flex-col w-[100%] h-auto p-3">
                                <div className='text-3xl border-2 border-solid border-emerald-600 p-1 rounded bg-zinc-300 mb-3'>Assignments </div>
                                <div>
                                    <div className="accordion " id="accordionFlushExample">
                                        <div className="accordion-item focus-within:bg-white">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed hover:bg-slate-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Assignment 1
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <div className={`shadow-sm shadow-gray-500 w-[100%] m-auto text-base  p-3`}>
                                                        <div className="w-[100%] text-start ml-5 mb-4 p-2 border-b-2 border-zinc-400 border-solid flex">
                                                        <div className="w-[70%]">
                                                                View Assignment
                                                                </div>
                                                                <div className="w-[30%] flex justify-center ">
                                                                <GrView className=" hover:opacity-80 h-full w-6 cursor-pointer flex justify-end" />
                                                            </div></div>
                                                        <div className="flex">
                                                            <div className="w-[50%] text-start ml-7 ">
                                                                Attach File
                                                            </div>
                                                            <div className="w-[50%] text-center">
                                                                <input type="file" className="text-sm border-2 border-solid border-zinc-200"></input>

                                                            </div>
                                                        </div>
                                                        <div className="m-auto w-[40%] bg-zinc-200 p-1 text-center rounded-full hover:bg-zinc-300 cursor-pointer mt-4">
                                                            <button className="">Submit</button>
                                                        </div>
                                                    </div></div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Accordion Item #2
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Accordion Item #3
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                            </div>
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
