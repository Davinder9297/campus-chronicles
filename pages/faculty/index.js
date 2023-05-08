import Link from "next/link"
import Navbar from "../../components/navbar"
<<<<<<< HEAD
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function fac() {
const [data, setdata] = useState([])
    useEffect(() => {
        const url = "http://localhost:3000/api/facultycredentials";     
        const fetchData = async () => {
          try {
            // setspin('')
            let response = await fetch(url);
            let json = await response.json();
            setdata(json)
    //   console.log(json);
           
            // if(json.length!=0){
            //   setnorecord('hidden')
            // }
            
            // setspin('hidden')
            // setshow('')
          } catch (error) {
            // setshow('hidden')
            // setspin('')
            console.log("error", error);
          }
        };
      
        fetchData();
      }, []);  
      let router=useRouter()
      const nextpage=(facultyname)=>{
        // router.push(facultyname)
        Cookies.set('facultyname',facultyname);
        router.push('/faculty/update')
      }
    return (<>
        <div>
            <Navbar className="shadow-sm" />
            <div>
                <div className="mt-3 p-2 text-center text-4xl font-semibold">
                    Our Faculty and Other Staff
                </div >
                <div className="w-[90%] border-2 border-solid border-red-700 mt-2 mx-auto p-2 flex flex-wrap justify-around">
                    {data.map((da,index)=>{
const {facultyname,image}=da;
                        return(
                            <>
                            <div className="h-64 w-72 border-2 border-solid border-emerald-700 p-2 shadow-lg mt-3 shadow-zinc-800 rounded ">
                        <img src={image} className="h-36 w-36 mx-auto rounded-full border-2 shadow-md shadow-zinc-400 border-solid border-purple-900"/>
                        <div className="border-2 border-solid border-purple-900 text-center text-xl mt-2">
                           {facultyname}
                        </div>
                        <button onClick={()=>(nextpage(facultyname))} className="w-full bg-amber-800 text-center shadow-inner shadow-yellow-500 p-1 mt-3 rounded hover:text-white" >
View Profile
                        </button>
                    </div>
                            </>
                        )
                    })}
                    

                    {/* <div className="h-64 w-72 border-2 border-solid border-emerald-700 p-2 shadow-lg mt-3 shadow-zinc-800 rounded ">
                        <img src="/teacher.jpg" className="h-36 w-36 mx-auto rounded-full border-2 shadow-md shadow-zinc-400 border-solid border-purple-900"/>
                        <div className="border-2 border-solid border-purple-900 text-center text-xl mt-2">
                            Dr. Monika Sachdeva
                        </div>
                        <div className="w-full bg-amber-800 text-center shadow-inner shadow-yellow-500 p-1 mt-3 rounded hover:text-white" >
                            <button>View Profile</button>
                        </div>
                    </div>
=======
import { useState } from "react"
import { CgShapeRhombus } from 'react-icons/cg'
import { RiBankFill } from 'react-icons/ri'
import { GoMail } from 'react-icons/go'
import { GrLinkedin } from 'react-icons/gr'
import { BiPhoneCall } from 'react-icons/bi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { Hidden } from "@mui/material"

export default function Faculty() {

// password pending
    const [pinfo, setpinfo] = useState('')
    const [edqu, setedqu] = useState('hidden')
    const [res,setres]=useState('hidden')
    const [teach,setteach]=useState('hidden')
    const [piclass, setpiclass] = useState('border-b-4 border-black text-black ')
    const [edeqclass, setedeqclass] = useState('text-white')
    const [resclass, setresclass] = useState('text-white')
    const [teachclass, setteachclass] = useState('text-white')
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
        setres('hidden');
        setteach('hidden');
        setpinfo(' ');
        setpiclass('border-b-4 border-black text-black ')
        setedeqclass('text-white')
        setresclass('text-white')
        setteachclass('text-white')
    }
    const eq = () => {
        setedqu(' ');
        setpinfo('hidden');
        setres('hidden');
        setteach('hidden');
        setpiclass('text-white')
        setresclass('text-white')
        setteachclass('text-white')
        setedeqclass('border-b-4 border-black text-black ')
    }
    const respub = () => {
        setres(' ');
        setedqu('hidden');
        setpinfo('hidden');
        setteach('hidden');
        setpiclass('text-white')
        setedeqclass('text-white')
        setteachclass('text-white')
        setresclass('border-b-4 border-black text-black ')
    }
    const teaching = () => {
        setres('hidden ');
        setedqu('hidden');
        setpinfo('hidden');
        setteach('');
        setpiclass('text-white')
        setedeqclass('text-white')
        setresclass('text-white')
        setteachclass('border-b-4 border-black text-black ')
    }

    return (<>
        <div className=" ">
            <Navbar class="shadow-md" />
            <div className="mt-3 p-2 text-center text-3xl font-semibold">
                Our Faculty and Other Staff
            </div >
            <div className="w-[90%] m-auto">
                {/* Monika Ma'am */}
                <div className="mt-3">
                    {/* <div className=" text-center text-2xl font-semibold text-amber-900 bg-yellow-200 p-1 rounded-3xl">
                        Dr. Monika Sachdeva
                    </div> */}
                    <div className=" flex w-[100%] m-auto">
                        <div className="h-60 w-52 mr-2 m-auto justify-center">
                            <div className="flex justify-center">
                            <img src="/jass.jpeg" className=" rounded-full shadow-md shadow-black h-44  " />
                            </div>
                            <div className=" text-center text-xl font-semibold text-amber-900 p-1 mt-3">
                            Dr. Monika Sachdeva
                            </div>
                        </div>

                        <div className="mt-3 w-[70%] shadow-md shadow-slate-400 h-60 m-auto">
                            <div className=" w-[100%] flex text-center ">
                                <div onClick={pi} className={` w-[50%] m-auto bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer ${piclass}`} >
                                    Personal Information
                                </div>
                                <div onClick={eq} className={`bg-amber-800 w-[50%] m-auto p-1  hover:bg-amber-700 cursor-pointer ${edeqclass}`}>
                                    Educational Qualifications
                                </div>
                                <div onClick={teaching} className={`bg-yellow-500 w-[50%] m-auto p-1 h-full  hover:bg-yellow-400 cursor-pointer ${teachclass}`}>
                                    Teaching Experience
                                </div>
                                <div onClick={respub} className={` w-[50%] m-auto bg-amber-800 font-semibold p-1 hover:bg-amber-700 cursor-pointer ${resclass}`} >
                                    Research Publications
                                </div>
                            </div>
>>>>>>> 85d3a5fc0201343c13be2a956043506fd366c2b8

                            <div className={`m-auto h-[80%] w-[90%] overflow-auto scrollbar-thin  scrollbar-thumb-zinc-900 text-sm ${pinfo}`}>
                                
                                    <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                            <div className="flex">
                                                <RiBankFill className="fill-amber-800 mr-4  h-5 w-6"/>
                                                <div className="">Department</div></div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Director
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                <div className="flex">
                                                <FaChalkboardTeacher className="fill-amber-800 mr-4  h-4 w-6"/>
                                                <div className="">Designation</div>
                                                </div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Professor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                            <div className="flex">
                                                <BiPhoneCall className="fill-amber-800 mr-4  h-5 w-6"/>
                                                <div className="">Contact Number</div>
                                                </div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                7009400665
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                            <div className="flex">
                                                <GoMail className="fill-amber-800 mr-4  h-5 w-6"/>
                                                <div className="">Email I'd</div>
                                                </div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreetkaursaini469@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                            <div className="flex">
                                                <GrLinkedin className="fill-amber-800 mr-4  h-4 w-6"/>
                                                <div className="">LinkedIn</div>
                                                </div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreet
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className={` m-auto flex-col h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${edqu}`}>
                                <table className="border-collapse border border-slate-400 w-[95%] mx-auto ">
                                    <thead className="">
                                        <tr className=" ">
                                            <th className=" border-2  py-2 border-slate-300 text-center px-2">Sno. </th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Education</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Associated Department</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Organization</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">1.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Ph.D</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Department of Computer Science & Engineering</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Guru Nanak Dev University, Amritsar</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">2012</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">2.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">M.S. Software Systems</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Department of Computer Science & Engineering</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Birla Institute of Technology and Science BITS, Pilani, Rajasthan</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">2001</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">3.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">B.Tech</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Department of Computer Science & Engineering</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">National Institute of Technology NIT, Jalandhar</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">1997</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                            <div className={` m-auto flex-col h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${teach}`}>
                                <table className="border-collapse border border-slate-400 w-[95%] mx-auto ">
                                    <thead className="">
                                        <tr className=" ">
                                            <th className=" border-2  py-2 border-slate-300 text-center px-2">Sno. </th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Position</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Organization</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">1.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Professor</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">IKGPTU Mohali Campus 1</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">Since 2019</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">2.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Associate Professor</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">IKGPTU, Main Campus, Kapurthala</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">September, 2016 to September, 2019</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">3.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Associate Professor</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">SBSSTC Ferozepur, Punjab</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">September, 2011 to September, 2016</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">4.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Assistant Professor</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">SBSSTC Ferozepur, Punjab</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">July, 2009 to September, 2011</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">5.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Senior Lecturer</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">SBSSTC Ferozepur, Punjab</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">August, 2003 to June, 2009</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">6.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Lecturer</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">SBSSTC Ferozepur, Punjab</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">August, 1998 to July, 2003</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">7.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Lecturer</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">SBSSTC Ferozepur, Punjab</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">January, 1998 to August, 1998</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                            <div className={`m-auto h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-900 text-sm ${res}`}>
                                <table className="border-collapse border border-slate-400 w-[95%] mx-auto ">
                                    <thead className="">
                                        <tr className=" ">
                                            <th className=" border-2  py-2 border-slate-300 text-center px-2">Sno. </th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Title of Paper</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Name of Author/s</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Journal</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Year</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">ISSN</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">1.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">InternationHaving an Eagle-eye on GENIal Journals: 50</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Shiffali, Monika Sachdeva and Sunny behal</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">International Journal of Control Theory and Applications</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">2016</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">0974-5572 </td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 "><a href="#">Link</a> </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">2.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Load Balanced and Link Break Prediction Routing Protocol for Mobile Ad hoc Networks</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Mandeep Gulati, Krishan Kumar and Monika Sachdeva</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">International Journal of Future Generation Communication And Networking</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">2017</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">1796-2021 </td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 "><a href="#">Link</a> </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">2.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Load Balanced and Link Break Prediction Routing Protocol for Mobile Ad hoc Networks</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Mandeep Gulati, Krishan Kumar and Monika Sachdeva</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">International Journal of Future Generation Communication And Networking</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">2017</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">1796-2021 </td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 "><a href="#">Link</a> </td>
                                        </tr>
                                        
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                            <div className="mt-3 border-b-2 border-solid border-zinc-200"></div>


                            <div className=" flex w-[100%] m-auto">
                        <div className="h-60 w-52 mr-2 m-auto justify-center">
                            <div className="flex justify-center">
                            <img src="/jass.jpeg" className=" rounded-full shadow-md shadow-black h-44  " />
                            </div>
                            <div className=" text-center text-xl font-semibold text-amber-900 p-1 mt-3">
                            Dr. Monika Sachdeva
                            </div>
                        </div>

                        <div className="mt-3 w-[70%] shadow-md shadow-slate-400 h-60 m-auto">
                            <div className=" w-[100%] flex text-center ">
                                <div onClick={pi} className={` w-[50%] m-auto bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer ${piclass}`} >
                                    Personal Information
                                </div>
                                <div onClick={eq} className={`bg-amber-800 w-[50%] m-auto p-1  hover:bg-amber-700 cursor-pointer ${edeqclass}`}>
                                    Educational Qualifications
                                </div>
                                <div onClick={teaching} className={`bg-yellow-500 w-[50%] m-auto p-1 h-full  hover:bg-yellow-400 cursor-pointer ${teachclass}`}>
                                    Teaching Experience
                                </div>
                                <div onClick={respub} className={` w-[50%] m-auto bg-amber-800 font-semibold p-1 hover:bg-amber-700 cursor-pointer ${resclass}`} >
                                    Research Publications
                                </div>
                            </div>

                            <div className={`m-auto h-[80%] w-[90%] overflow-auto scrollbar-thin  scrollbar-thumb-zinc-900 text-sm ${pinfo}`}>
                                
                            <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                            <div className="flex">
                                                <RiBankFill className="fill-amber-800 mr-4  h-5 w-6"/>
                                                <div className="">Department</div></div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Director
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                <div className="flex">
                                                <FaChalkboardTeacher className="fill-amber-800 mr-4  h-4 w-6"/>
                                                <div className="">Designation</div>
                                                </div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Professor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                            <div className="flex">
                                                <BiPhoneCall className="fill-amber-800 mr-4  h-5 w-6"/>
                                                <div className="">Contact Number</div>
                                                </div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                7009400665
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                            <div className="flex">
                                                <GoMail className="fill-amber-800 mr-4  h-5 w-6"/>
                                                <div className="">Email I'd</div>
                                                </div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreetkaursaini469@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                            <div className="flex">
                                                <GrLinkedin className="fill-amber-800 mr-4  h-4 w-6"/>
                                                <div className="">LinkedIn</div>
                                                </div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreet
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className={` m-auto flex-col h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${edqu}`}>
                                <table className="border-collapse border border-slate-400 w-[95%] mx-auto ">
                                    <thead className="">
                                        <tr className=" ">
                                            <th className=" border-2  py-2 border-slate-300 text-center px-2">Sno. </th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Education</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Associated Department</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Organization</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">1.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Ph.D</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Department of Computer Science & Engineering</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Guru Nanak Dev University, Amritsar</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">2012</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">2.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">M.S. Software Systems</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Department of Computer Science & Engineering</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Birla Institute of Technology and Science BITS, Pilani, Rajasthan</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">2001</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">3.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">B.Tech</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Department of Computer Science & Engineering</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">National Institute of Technology NIT, Jalandhar</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">1997</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                            <div className={` m-auto flex-col h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${teach}`}>
                                <table className="border-collapse border border-slate-400 w-[95%] mx-auto ">
                                    <thead className="">
                                        <tr className=" ">
                                            <th className=" border-2  py-2 border-slate-300 text-center px-2">Sno. </th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Position</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Organization</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">1.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Professor</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">IKGPTU Mohali Campus 1</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">Since 2019</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">2.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Associate Professor</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">IKGPTU, Main Campus, Kapurthala</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">September, 2016 to September, 2019</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">3.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Associate Professor</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">SBSSTC Ferozepur, Punjab</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">September, 2011 to September, 2016</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">4.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Assistant Professor</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">SBSSTC Ferozepur, Punjab</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">July, 2009 to September, 2011</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">5.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Senior Lecturer</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">SBSSTC Ferozepur, Punjab</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">August, 2003 to June, 2009</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">6.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Lecturer</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">SBSSTC Ferozepur, Punjab</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">August, 1998 to July, 2003</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">7.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Lecturer</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">SBSSTC Ferozepur, Punjab</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">January, 1998 to August, 1998</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                            <div className={`m-auto h-[80%] w-[90%] overflow-auto scrollbar-thin  scrollbar-thumb-zinc-900 pt-3 text-sm ${res}`}>
                                <table className="border-collapse border border-slate-400 w-[95%] mx-auto ">
                                    <thead className="">
                                        <tr className=" ">
                                            <th className=" border-2  py-2 border-slate-300 text-center px-2">Sno. </th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Title of Paper</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Name of Author/s</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Journal</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Year</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">ISSN</th>
                                            <th className=" border-2 py-2 border-slate-300 px-2 text-center">Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">1.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">InternationHaving an Eagle-eye on GENIal Journals: 50</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Shiffali, Monika Sachdeva and Sunny behal</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">International Journal of Control Theory and Applications</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">2016</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">0974-5572 </td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 "><a href="#">Link</a> </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">2.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Load Balanced and Link Break Prediction Routing Protocol for Mobile Ad hoc Networks</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Mandeep Gulati, Krishan Kumar and Monika Sachdeva</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">International Journal of Future Generation Communication And Networking</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">2017</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">1796-2021 </td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 "><a href="#">Link</a> </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-2 w-[10%] text-center h-auto border-slate-300 ">2.</td>
                                            <td className=" p-2 border-2 w-[25%] text-left pl-3 h-auto border-slate-300 ">Load Balanced and Link Break Prediction Routing Protocol for Mobile Ad hoc Networks</td>
                                            <td className=" p-2 border-2 w-[25%] h-auto text-justify border-slate-300 ">Mandeep Gulati, Krishan Kumar and Monika Sachdeva</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">International Journal of Future Generation Communication And Networking</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">2017</td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 ">1796-2021 </td>
                                            <td className=" p-2 border-2 w-[15%] text-center h-auto border-slate-300 "><a href="#">Link</a> </td>
                                        </tr>
                                        
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
<<<<<<< HEAD
                    </div> */}
=======
                    </div>
                            <div className="mt-3 border-b-2 border-solid border-zinc-200"></div>
>>>>>>> 85d3a5fc0201343c13be2a956043506fd366c2b8
                </div>
                
            </div>


            <div className="mt-3 p-2 text-center text-3xl font-semibold">
                Other Staff
            </div >
            <div className="w-[90%] m-auto">
                {/* Monika Ma'am */}
                <div className="mt-3">
                    {/* <div className=" text-center text-2xl font-semibold text-amber-900 bg-yellow-200 p-1 rounded-3xl">
                        Dr. Monika Sachdeva
                    </div> */}
                    <div className=" flex w-[100%] m-auto">
                        <div className="h-48 w-52 mr-2 m-auto justify-center">
                            <div className="flex justify-center">
                            <img src="/jass.jpeg" className=" rounded-full shadow-md shadow-black h-40  " />
                            </div>
                            <div className=" text-center text-xl font-semibold text-amber-900 p-1 mt-3">
                            Mr. Ravinder
                            </div>
                        </div>

                        <div className="mt-3 w-[70%] shadow-md shadow-slate-400 h-48 m-auto">
                            <div className=" w-[100%] flex text-center ">
                                <div className={` w-[100%] m-auto bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer `} >
                                    Personal Information
                                </div>
                                
                            </div>

                            <div className={`m-auto h-[80%] w-[90%] overflow-auto scrollbar-thin  scrollbar-thumb-zinc-900 text-sm `}>
                                
                            <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                            <div className="flex">
                                                <RiBankFill className="fill-amber-800 mr-4  h-5 w-6"/>
                                                <div className="">Department</div></div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Director
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                <div className="flex">
                                                <FaChalkboardTeacher className="fill-amber-800 mr-4  h-4 w-6"/>
                                                <div className="">Designation</div>
                                                </div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Professor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                            <div className="flex">
                                                <BiPhoneCall className="fill-amber-800 mr-4  h-5 w-6"/>
                                                <div className="">Contact Number</div>
                                                </div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                7009400665
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                            <div className="flex">
                                                <GoMail className="fill-amber-800 mr-4  h-5 w-6"/>
                                                <div className="">Email I'd</div>
                                                </div>
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreetkaursaini469@gmail.com
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                           
                        </div>
                    </div>
                    
                            <div className="mt-3 border-b-2 border-solid border-zinc-200"></div>


                        
                </div>
                
            </div>

        </div>

    </>)


}
