import { FaDownload } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import Link from "next/link"
import Navbar from "../../components/navbar"
import TeacherNavbar from "../../components/teacher_navbar"
import Navbarres from "../../components/navbarres";

export default function Student_record() {

    return (<>

        <div className="">
            <Navbarres />
            <TeacherNavbar />

            <div className="">
                <div className=" m-auto text-center text-4xl font-yearibold p-4 overflow-hidden w-[100%] mb-2">
                    Student Record
                </div>
                <div className=" w-[90%] mx-auto ">
                    <div className="bg-slate-200 p-2 text-xl rounded-2xl font-medium shadow-inner shadow-slate-400 text-center">
                        Select Year
                    </div>
                    <div className="w-[90%] mx-auto">
                        <div className="accordion mt-5" id="accordionFlushExample">
                            <div className="accordion-item focus-within:bg-white">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed hover:bg-slate-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        First Year (1st)
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    All Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_all.xlsx" download={true}><FaDownload /></a>
                                                </div>
                                            </div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    Group 1 Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_g1.xlsx"><FaDownload /></a>
                                                </div>
                                            </div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    Group 2 Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_g2.xlsx"><FaDownload /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed  hover:bg-slate-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Second Year (2nd)
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                    <div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    All Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_all.xlsx" download={true}><FaDownload /></a>
                                                </div>
                                            </div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    Group 1 Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_g1.xlsx"><FaDownload /></a>
                                                </div>
                                            </div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    Group 2 Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_g2.xlsx"><FaDownload /></a>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed  hover:bg-slate-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Third Year (3rd)
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                    <div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    All Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_all.xlsx" download={true}><FaDownload /></a>
                                                </div>
                                            </div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    Group 1 Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_g1.xlsx"><FaDownload /></a>
                                                </div>
                                            </div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    Group 2 Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_g2.xlsx"><FaDownload /></a>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed  hover:bg-slate-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Fourth Year (4th)
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                    <div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    All Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_all.xlsx" download={true}><FaDownload /></a>
                                                </div>
                                            </div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    Group 1 Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_g1.xlsx"><FaDownload /></a>
                                                </div>
                                            </div>
                                            <div className="flex p-2 border-b-2 mb-2 border-solid border-zinc-300 hover:bg-slate-100 cursor-pointer">
                                                <div className="w-[50%] ml-16">
                                                    Group 2 Students
                                                </div>
                                                <div className="w-[50%] flex justify-end fill-amber-800 mr-24"><a href="/4th_year_g2.xlsx"><FaDownload /></a>
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
        </div>

    </>)
}
