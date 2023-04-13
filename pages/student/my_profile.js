import Link from "next/link"
import Navbar from "../../components/navbar"
import { useState } from "react"
import { FaEdit } from 'react-icons/fa'
import { FiSave } from 'react-icons/fi'
import { CgShapeRhombus } from 'react-icons/cg'
import { useEffect } from "react"
import { Chart } from "chart.js";
// password pending
export default function My_profile() {

    const [pinfo, setpinfo] = useState('')
    const [edqu, setedqu] = useState('hidden')
    const [piclass, setpiclass] = useState('border-b-4 border-black text-black ')
    const [edeqclass, setedeqclass] = useState('text-white')
    const [read, setread] = useState(true)
    const [disable, setdisable] = useState(true)
    const [name, setname] = useState('Ms. Jaspreet Kaur')
    const [role, setrole] = useState('Student')
    const [dob, setdob] = useState('23-11-2002')
    const [phone, setphone] = useState('7009400665')
    const [email, setemail] = useState('jaspreetkaursaini469@gmail.com')
    const [linkedin, setlinkedin] = useState('https://www.linkedin.com/in/jaspreet-kaur23/')
    const [point, setpoint] = useState('opacity-50 cursor-not-allowed')
    // const [, set] = useState(second)
    // const [bottomborder, setbottomborder] = useState()

    const pi = () => {
        setedqu('hidden');
        setpinfo(' ');
        setpiclass('border-b-4 border-black text-black ')
        setedeqclass('text-white')
    }
    const eq = () => {
        setedqu('flex ');
        setpinfo('hidden');
        setpiclass('text-white')
        setedeqclass('border-b-4 border-black text-black ')
    }

    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Sem1", "Sem2", "Sem3", "Sem4", "Sem5", "Sem6"],
                datasets: [{
                    data: [8.77, 8.58, 9.43, 9.19, 9.3, 9.5],
                    label: "Cgpa",
                    borderColor: "#3e95cd",
                    backgroundColor: "#7bb6dd",
                    fill: true,
                }
                ]
            },
        });
    }, [])

    return (<>
        <div className="h-screen ">
            <div className="h-screen">
                <Navbar class="shadow-sm" />
                <div className=" w-[90%] m-auto text-center text-4xl font-semibold shadow-md shadow-slate-600 p-4 h-[80%] overflow-hidden ">
                    Your Profile ....

                    <div className=" w-[97%] m-auto mt-2 text-center text-4xl font-semibold flex justify-between p-4 h-[90%] ">
                        <div className="flex justify-center  items-center  h-[100%]  w-[30%] shadow-md shadow-slate-400 rounded-sm">
                            <div className="h-[100%] w-[100%] justify-center">
                                <div className="h-[80%]">
                                    <img src="/jass.jpeg" className="shadow-md shadow-slate-700 h-[90%] rounded-full mt-2 m-auto" />
                                </div>
                                <div className="text-[80%] ">
                                    Jaspreet kaur
                                </div>
                            </div>
                        </div>
                        <div className=" w-[65%] shadow-md shadow-slate-400 text-[60%] h-[100%] m-auto">
                            <div className="h-[]5%] w-[100%] flex ">
                                <div onClick={pi} className={` w-[50%] m-auto bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer ${piclass}`} >
                                    Personal Information
                                </div>
                                <div onClick={eq} className={`bg-amber-800 w-[50%] m-auto p-1  hover:bg-amber-700 cursor-pointer ${edeqclass}`}>
                                    Performance
                                </div>
                            </div>

                            <div className={`m-auto  h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-900 text-sm px-2 ${pinfo}`}>
                                <table className="border-collapse border border-white w-[95%] mx-auto text-lg">
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Name </td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 ">Jaspreet Kaur</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Roll Number</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 ">2025677</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Current Semester</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 ">6<sup>th</sup></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Date of Birth</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 ">23.11.2002</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Father's Name</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 ">Jagjit Singh</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Mother's Name</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 ">Amrit Kaur</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Contact Number</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 ">7009400665</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Email i'd</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 ">jaspreetkaursaini469.gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Address</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 ">Mohali</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Linkedin i'd</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 ">https://www.linkedin.com/in/jaspreet-kaur23/</td>
                                        </tr>
                                        
                                        </tbody>
                                </table>
                            </div>

                            <div className={` m-auto flex-col h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${edqu}`}>
                                <table className="border-collapse border border-slate-400 w-[95%] mx-auto text-lg">
                                    <thead className="">
                                        <tr className=" ">
                                            <th className=" border-2  py-2 border-slate-300 text-center px-2">Sno. </th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Semester</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Cgpa Obtained</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] h-auto border-slate-300 ">1.</td>
                                            <td className=" p-2 border-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Semester 1</td>
                                            <td className=" p-2 border-2 w-[15%] h-auto border-slate-300 ">8.77</td>
                                            <td className=" p-2 border-2 w-[15%]  h-auto border-slate-300 "><a href="#" className="text-sky-500 underline">Link</a></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] h-auto border-slate-300 ">2.</td>
                                            <td className=" p-2 border-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Semester 2</td>
                                            <td className=" p-2 border-2 w-[15%] h-auto border-slate-300 ">8.58</td>
                                            <td className=" p-2 border-2 w-[15%]  h-auto border-slate-300 "><a href="#" className="text-sky-500 underline">Link</a></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] h-auto border-slate-300 ">3.</td>
                                            <td className=" p-2 border-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Semester 3</td>
                                            <td className=" p-2 border-2 w-[15%] h-auto border-slate-300 ">9.43</td>
                                            <td className=" p-2 border-2 w-[15%]  h-auto border-slate-300 "><a href="#" className="text-sky-500 underline">Link</a></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] h-auto border-slate-300 ">4.</td>
                                            <td className=" p-2 border-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Semester 4</td>
                                            <td className=" p-2 border-2 w-[15%] h-auto border-slate-300 ">9.19</td>
                                            <td className=" p-2 border-2 w-[15%]  h-auto border-slate-300 "><a href="#" className="text-sky-500 underline">Link</a></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] h-auto border-slate-300 ">5.</td>
                                            <td className=" p-2 border-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Semester 5</td>
                                            <td className=" p-2 border-2 w-[15%] h-auto border-slate-300 ">9.3</td>
                                            <td className=" p-2 border-2 w-[15%]  h-auto border-slate-300 "><a href="#" className="text-sky-500 underline">Link</a></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] h-auto border-slate-300 ">6.</td>
                                            <td className=" p-2 border-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Semester 6</td>
                                            <td className=" p-2 border-2 w-[15%] h-auto border-slate-300 ">9.5</td>
                                            <td className=" p-2 border-2 w-[15%]  h-auto border-slate-300 "><a href="#" className="text-sky-500 underline">Link</a></td>
                                        </tr>


                                    </tbody>
                                </table>

                                <div className='w-[95%] mx-auto mt-4 text-2xl'>
                                    <div>
                                        Performance Graph
                                    </div>
                                    <div className='border border-gray-400 pt-0 rounded-xl shadow-md my-3'>
                                        <canvas id='myChart'></canvas>
                                    </div>
                                </div>


                                {/* <div id='myChart' className='border border-gray-400 pt-0 rounded-xl  my-auto  shadow-xl'>
                        
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
// export Example;