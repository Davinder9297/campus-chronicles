import Link from "next/link"
import Navbar from "../../components/navbar"
import { useState } from "react"
import {FaPowerOff} from "react-icons/fa"
import { CgShapeRhombus } from 'react-icons/cg'
import { useEffect } from "react"
import { Chart } from "chart.js";
// password pending
export default function My_profile() {

    const [pinfo, setpinfo] = useState('')
    const [edqu, setedqu] = useState('hidden')
    const [piclass, setpiclass] = useState('border-b-4 border-black text-black ')
    const [personaldata, setpersonaldata] = useState({address:"-",linkedin:"-",image:"",studentname:"",rollno:"",dob:"",fathername:"",mothername:"",email:"-",phone:"-",sem:""})
    const [edeqclass, setedeqclass] = useState('text-white')
    const [spin, setspin] = useState('')
    const [opac, setopac] = useState('opacity-50')
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
        const url = "http://localhost:3000/api/studentpersonaldata";
//   const url1 = "http://localhost:3000/api/clubannouncement";
//   const url2 = "http://localhost:3000/api/events";


  const fetchData = async () => {
    try {
      setspin('')
      let response = await fetch(url);
      let json = await response.json();
console.log(json);
      setpersonaldata(json)
      setspin('hidden')
      setopac('')
    //   if(json.length!=0){
    //     setnorecord('hidden')
    //   }
    //   let response1 = await fetch(url1);
    //   let json1 = await response1.json();

    //   setRowsData1(json1)
    //   if(json1.length!=0){
    //     setnorecord1('hidden')
    //   }
    //   let response2 = await fetch(url2);
    //   let json2 = await response2.json();

    //   setRowsData2(json2)
    //   if(json2.length!=0){
    //     setnorecord2('hidden')
    //   }
          
      
    //   setspin('hidden')
    //   setshow('')
    } catch (error) {
    //   setshow('hidden')
    //   setspin('')
      console.log("error", error);
    }
  };

  fetchData();
    }, [])

    return (<>
        <div className="h-screen ">
            <div className="h-screen">
                <Navbar class="shadow-sm" />
                <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 "  />
                        <div className="logout_stu text-base">Logout</div>
                </div>

                <div className={` w-[95%] m-auto text-center text-4xl font-semibold p-4 h-[80%] overflow-hidden  ${opac}`}>
                    Your Profile ....
                    <div className={`text-center text-base flex w-full justify-center items-center h-full absolute top-0 left-28
 z-10  ${spin}`}>
<div className="spinner-border" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
</div>
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
                            <div className=" w-[100%] flex ">
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
                                            <td className=" p-2 border-b-2 w-[50%] h-auto text-left border-slate-300 ">{personaldata.studentname}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Roll Number</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto text-left border-slate-300 ">{personaldata.rollno}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Current Semester</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto text-left border-slate-300 ">{personaldata.sem}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Date of Birth</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto text-left border-slate-300 ">{personaldata.dob}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Father's Name</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto text-left border-slate-300 ">{personaldata.fathername}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Mother's Name</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto text-left border-slate-300 ">{personaldata.mothername}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Contact Number</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto text-left border-slate-300 ">{personaldata.phone}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Email i'd</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto text-left border-slate-300 ">{personaldata.email}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Address</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto text-left border-slate-300 ">{personaldata.address}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Linkedin i'd</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto text-left border-slate-300 ">{personaldata.linkedin}</td>
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