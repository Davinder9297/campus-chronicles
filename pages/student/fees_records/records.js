import Link from "next/link"
import Navbar from "../../../components/navbar"
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
                <div className="logout_stu text- border-2 border-solid">Logout</div>
            </div> */}
            <div className=" w-[95%] m-auto h-[85%] ">
                <div className=" m-auto text-center  text-4xl font-semibold p-4 overflow-hidden h-[100%] xsm:text-2xl">
                    <div className="font-sans">Fees Records</div>
                    <div className=" w-[95%] shadow-md shadow-slate-400 text-[60%] h-[100%] m-auto mt-3 ">
                        <div className=" w-[100%] flex ">
                            <div onClick={pi} className={` w-[33.3%] m-auto text-2xl bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer xsm:text-lg ${piclass}`} >
                                Semester Fees 
                            </div>
                            <div onClick={eq} className={`bg-amber-800 text-xl w-[33.3%] m-auto p-1  hover:bg-amber-700 cursor-pointer xsm:text-sm ${edeqclass}`}>
                                Exam Form & University related funds
                            </div>
                            <div onClick={er} className={` w-[33.3%] m-auto text-2xl bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer xsm:text-lg ${exreclass}`} >
                                 Hostel related Fees
                            </div>

                        </div>

                        
                        <div className={` m-auto flex-col h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${edqu}`}>
                        <div className="flex-col w-[100%] h-auto p-3">
                            <div className="text-xl text-gray-500 pt-[10%]">No Record Found</div>
                                {/* <div className='text-3xl border-2 border-solid border-emerald-600 p-1 rounded bg-zinc-300 mb-3'>Assignments </div> */}
                                {/* <div>
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
                                </div> */}
                            </div>
                        </div>

                        <div className={`m-auto  h-[80%] w-[95%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-900 text-sm px-2 ${pinfo}`}>
                            <div className="flex-col w-[100%] h-auto p-3">
                            <div className="text-xl text-gray-500 pt-[10%]">No Record Found</div>
                                {/* <div>
                                    <div className="accordion " id="accordionFlushExample">
                                        <div className="accordion-item focus-within:bg-white">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed hover:bg-slate-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Assignment 1
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <div className={`shadow-sm shadow-gray-500 w-[100%] m-auto text-base  p-3 bg-slate-100`}>
                                                        <div className="w-[100%] text-start ml-5 mb-4 p-2 border-b-2 border-zinc-400 border-solid flex ">
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
                                                       <div className="w-[90%] flex justify-end  items-center mt-2">
                                                       <div className=" bg-amber-800 text-white w-[36%] p-1 text-center rounded hover:bg-amber-700 cursor-pointer ">
                                                            <button className="">Submit</button>
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
                                </div> */}
                            </div>
                        </div>

                        <div className={` m-auto flex-col h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${exre}`}>
                        <div className="flex-col w-[100%] h-auto p-3">
                        <div className="text-xl text-gray-500 pt-[10%]">No Record Found</div>
                                {/* <div>
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
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>)


}
