import Link from "next/link"
import Navbar from "../../components/navbar"
import {FaPowerOff} from "react-icons/fa"


export default function Student() {
    
    function display(value)
    {
var ele = getElementById(value);
ele.hidden="false";
console.log('done');
    }
    return (<>
        <div className="h-screen overflow-hidden">
            <Navbar class="shadow-sm bg-yellow-2" />

            <div className=" w-[95%] m-auto text-center text-4xl font-semibold shadow-md shadow-slate-600 p-4 border-2 border-solid border-black">
                <div className="h-10 w-14  border-2 border-solid border-green-700 fixed right-7 top-24 cursor-pointer ">
                <FaPowerOff className="h-full w-full hover:opacity-80 addEventListener('click',display(aa))"  />
                    {/* <div className="absolute right-0 z-10 mt-1 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " aria-hidden="false" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"> */}
                        <div id="aa" class="py-1" role="none" hidden='true'>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" >Logout</a>
                        </div>
                    {/* </div> */}
                </div>
                <div className="p-2">
                    Welcome...  &nbsp;&nbsp; Ms. Jaspreet kaur
                </div>
                <div className="flex justify-between mt-4 font-normal text-xl">
                    <div className="w-[68%] ">
                        <div className="rounded-2xl bg-slate-200 p-1">
                            What would you like to do?
                        </div>

                        <div className="flex justify-between mt-4">
                            <Link href={"/student/my_profile"}>
                                <div className="h-28 w-[30%] rounded-lg  mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-red-600">
                                    <img src="stu.png" className="h-24  align-middle m-auto" />
                                    <div className=" m-auto pr-3 ">
                                        View Profile
                                    </div>
                                </div>
                            </Link>

                            <div className="h-28 w-[30%] rounded-lg mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-emerald-700">
                                <img src="study_material.png" className="h-32  align-middle m-auto" />
                                <div className=" m-auto pr-3 ">
                                    Study Material
                                </div>
                            </div>
                            <div className="h-28 w-[30%] rounded-lg  flex cursor-pointer hover:scale-105 transition duration-150 bg-cyan-500">
                                <img src="book_issued.png" className="h-24  align-middle m-auto" />
                                <div className=" m-auto pr-3 ">
                                    Books Issued
                                </div>
                            </div>

                        </div>

                        <div className="flex mt-4 justify-between">
                            <Link href={"/student/update_profile"}>
                                <div className="h-28 w-[30%] rounded-lg  mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-yellow-300">
                                    <img src="/update_info.png" className="h-24  align-middle m-auto p-2" />
                                    <div className=" m-auto pr-3 ">
                                        Update Profile
                                    </div>
                                </div>
                            </Link>
                            <div className="h-28 w-[30%] rounded-lg  mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-orange-500">
                                <img src="assignment.png" className="h-24  align-middle m-auto" />
                                <div className=" m-auto pr-3 ">
                                    View Assignment
                                </div>
                            </div>
                            <div className="h-28 w-[30%] rounded-lg  flex cursor-pointer hover:scale-105 transition duration-150 bg-teal-500">
                                <img src="fees_records.png" className="h-24  align-middle m-auto" />
                                <div className=" m-auto pr-3 ">
                                    Fees Records
                                </div>
                            </div>
                        </div>

                        <div className="flex  mt-4 justify-between">
                            <div className="h-28 w-[30%] rounded-lg  mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-green-600">
                                <img src="/timetable3.png" className="h-24  align-middle m-auto p-2" />
                                <div className=" m-auto pr-3 ">
                                    View Time Table
                                </div>
                            </div>
                            <div className="h-28 w-[30%] rounded-lg mr-2 cursor-pointer hover:scale-105 transition duration-150 flex bg-purple-600">
                                <img src="attendance.png" className="h-24  align-middle m-auto" />
                                <div className=" m-auto pr-3 ">
                                    Current Attendance
                                </div>
                            </div>
                            <div className="h-28 w-[30%] rounded-lg border-2 border-solid border-white text-white">
                                hfgh
                            </div>

                        </div>
                    </div>
                    <div className="shadow-sm shadow-neutral-900 w-[30%]">
                        <div className="pb-2 pt-1 bg-gray-200 rounded-3xl">
                            Notifications
                        </div>

                        <div>
                            <marquee width="100%" direction="up" height="100%" behaviour="scroll" scrollamount="4" className="space-y-5 h-[54vh] px-3 text-base ">
                                <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div>
                                </div>
                                {/* <div>fhebfjhgbejbef ehfbejrbj</div> */}
                                <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
                                <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
                                <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
                                {/* <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
                            <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
                            <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
                            <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div> */}

                            </marquee>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </>)
}