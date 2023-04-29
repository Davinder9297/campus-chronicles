import Link from "next/link"
import Navbar from "../../components/navbar"
import { FaPowerOff } from 'react-icons/fa'


export default function Time_table() {

    return (<>
        <div className="h-screen">
            <Navbar class="shadow-md" />
            <div className=" w-[95%] m-auto text-center text-4xl font-semibold p-4">
            <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 "  />
                        <div className="logout_stu text-base">Logout</div>
                </div>
                <div className="font-semibold text-4xl text-center p-2">
                    Time Table ....
                </div>

                <div className=" h-[90%] mt-6 mb-5">
                    <table className="border-collapse border border-white w-[95%] m-auto text-lg text-center">
                        <thead className="">
                            <tr className=" ">
                                <th className=" border-2  py-2 border-slate-300 text-center px-2">Time </th>
                                <th className=" border-2 py-2 border-slate-300 px-2 text-center">Monday</th>
                                <th className=" border-2 py-2 border-slate-300 px-2 text-center">Tuesday</th>
                                <th className=" border-2 py-2 border-slate-300 px-2 text-center">Wednesday</th>
                                <th className=" border-2 py-2 border-slate-300 px-2 text-center">Thursday</th>
                                <th className=" border-2 py-2 border-slate-300 px-2 text-center">Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=" p-2 border-2 font-semibold text-base w-[20%] h-auto border-slate-300 ">9:00am - 10:00am</td>
                                <td className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">Compiler Design(L)</td>
                                <td rowSpan={2} className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">
                                    <div className="flex p-0 ">
                                        <div className="border-r-slate-300 border-r-2 w-[50%] h-auto"> Project (G1)</div>
                                        <div className=" w-[50%] h-auto"> Project(G2)</div>
                                    </div>
                                </td>
                                <td className=" p-2 border-2 text-base w-[15%]  h-auto border-slate-300">Cloud Computing (L)</td>
                                <td className=" p-2 border-2 text-base w-[15%]  h-auto border-slate-300">Cloud Computing (L)</td>
                                <td className=" p-2 border-2 text-base w-[15%]  h-auto border-slate-300">Machine Learning (L)</td>
                            </tr>
                            <tr>
                                <td className=" p-2 border-2 font-semibold text-base w-[20%] h-auto border-slate-300 ">10:00am - 11:00am</td>
                                <td className=" p-2 border-2 text-base w-[15%] h-auto border-slate-300 ">Artificial Intelligence(L)</td>
                                <td rowSpan={2} className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">
                                    <div className="flex p-0 ">
                                        <div className="border-r-slate-300 border-r-2 w-[50%] h-auto"> Compiler Design Lab (G1)</div>
                                        <div className=" w-[50%] h-auto"> </div>
                                    </div>
                                </td>
                                <td className=" p-2 border-2 text-base w-[15%] h-auto border-slate-300 ">Compiler Design (L)</td>
                                <td rowSpan={2} className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">
                                    <div className="flex p-0 ">
                                        <div className="border-r-slate-300 border-r-2 w-[50%] h-auto"> Cloud Computing Lab (G1)</div>
                                        <div className=" w-[50%] h-auto"> Machine Learning Lab (G2)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className=" p-2 border-2 font-semibold text-base w-[20%] h-auto border-slate-300 ">11:00am - 12:00pm</td>
                                <td rowSpan={2} className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">
                                    <div className="flex p-0 ">
                                        <div className="border-r-slate-300 border-r-2 w-[50%] h-auto"> Machine Learning Lab (G1)</div>
                                        <div className=" w-[50%] h-auto"> Cloud Computing Lab (G2)</div>
                                    </div>
                                </td>
                                <td rowSpan={2} className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">
                                    <div className="flex p-0 ">
                                        <div className="border-r-slate-300 border-r-2 w-[50%] h-auto"> </div>
                                        <div className=" w-[50%] h-auto"> Compiler Design Lab (G2)</div>
                                    </div>
                                </td>
                                <td rowSpan={2} className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">
                                    <div className="flex p-0 ">
                                        <div className="border-r-slate-300 border-r-2 w-[50%] h-auto"> Project (G1)</div>
                                        <div className=" w-[50%] h-auto"> </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className=" p-2 border-2 font-semibold text-base w-[20%] h-auto border-slate-300 ">12:00pm - 1:00pm</td>
                                <td className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">Cloud Computing (L)</td>
                                <td className=" p-2 border-2 text-base w-[15%]  h-auto border-slate-300">Compiler Design (L)</td>
                            </tr>
                            <tr>
                                <td className=" p-2 border-2 font-semibold text-base w-[20%] h-auto border-slate-300 ">1:00pm - 2:00pm</td>
                                <td colSpan={5} className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">BREAK</td>
                            </tr>
                            <tr>
                                <td className=" p-2 border-2 font-semibold text-base w-[20%] h-auto border-slate-300 ">2:00pm - 3:00pm</td>
                                <td className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">Open Elective</td>
                                <td className=" p-2 border-2 text-base w-[15%] h-auto border-slate-300 ">Machine Learning (L)</td>
                                <td className=" p-2 border-2 text-base w-[15%]  h-auto border-slate-300">Artificial Intelligence (L)</td>
                                <td rowSpan={2} className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">
                                    <div className="flex p-0 ">
                                        <div className="border-r-slate-300 border-r-2 w-[50%] h-auto"> Project (G1)</div>
                                        <div className=" w-[50%] h-auto"> Project (G2)</div>
                                    </div>
                                </td>
                                <td rowSpan={2} className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">
                                    <div className="flex p-0 ">
                                        <div className=" border-r-slate-300 border-r-2 w-[50%] h-auto"> </div>
                                        <div className="w-[50%] h-auto"> Artificial Intelligence Lab (G2)</div>
                                    </div>
                                </td>                            
                            </tr>
                            <tr>
                                <td className=" p-2 border-2 font-semibold text-base w-[20%] h-auto border-slate-300 ">3:00pm - 4:00pm</td>
                                <td className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">Open Elective</td>
                                <td className=" p-2 border-2 text-base w-[15%] h-auto border-slate-300 ">Artificial Intelligence (L)</td>
                                <td rowSpan={2} className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">
                                    <div className="flex p-0 ">
                                        <div className="border-r-slate-300 border-r-2 w-[50%] h-auto"> Artificial Intelligence Lab (G1)</div>
                                        <div className=" w-[50%] h-auto"> Project (G2)</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className=" p-2 border-2 font-semibold text-base w-[20%] h-auto border-slate-300 ">4:00pm - 5:00pm</td>
                                <td className=" p-2 border-2 text-base w-[15%] pl-3 h-auto border-slate-300 ">Open Elective</td>
                                <td className=" p-2 border-2 text-base w-[15%] h-auto border-slate-300 ">Machine Learning (L)</td>
                                <td className=" p-2 border-2 text-base w-[15%]  h-auto border-slate-300">Sports</td>
                                <td className=" p-2 border-2 text-base w-[15%]  h-auto border-slate-300">Sports</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>)
}