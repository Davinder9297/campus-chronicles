import Link from "next/link"
import Navbar from "../../components/navbar"
// import Navbar from "../../components/navbar"
import { useState } from "react"

import { useEffect } from "react"

export default function Faculty() {
// password pending
const [pinfo, setpinfo] = useState('hidden')
const [edqu, setedqu] = useState('')
const [res,setres]=useState('hidden')
const [teach,setteach]=useState('hidden')
const [piclass, setpiclass] = useState('border-b-4 border-black text-black ')
const [edeqclass, setedeqclass] = useState('text-white')
const [resclass, setresclass] = useState('text-white')
const [teachclass, setteachclass] = useState('text-white')
const [data, setdata] = useState({})
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
useEffect(() => {
    const url = "http://localhost:3000/api/singlepagedata";     
    const fetchData = async () => {
      try {
        // setspin('')
        let response = await fetch(url);
        let json = await response.json();
        setdata(json)
console.log(json);
      } catch (error) {

        console.log("error", error);
      }
    };
  
    fetchData();
  }, []);  
    return (<>
        <div className=" border-red-700 overflow-y-hidden">
            <Navbar class="shadow-md" />
            {/* <div className="mt-3 p-2 text-center text-3xl font-semibold">
                Our Faculty and Other Staff
            </div > */}
            <div className="w-[90%] m-auto">
                {/* Monika Ma'am */}
                <div className="mt-4">
                    <div className=" text-center text-2xl font-semibold text-amber-900 bg-yellow-200 p-1 rounded-3xl">
                        {data.facultyname}
                    </div>
                    <div className=" flex w-[95%]  border-emerald-800">
                        <div className="w-52 mr-2 m-auto ">
                            <img src={data.image} className=" rounded-full mx-auto h-52 w-52 shadow-2xl border-1 border-gray-300" />
                            <div className="mt-3 text-xl text-center font-semibold"> 
                            {data.facultyname}
                            </div>
                        </div>
                        <div className="w-[70%] ">


                            <div className="h-44 border-collapse border-violet-700 m-auto mt-2 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent  ">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className=" p-1 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Department
                                            </td>
                                            <td className=" p-1 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                {data.department}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-1 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Designation
                                            </td>
                                            <td className=" p-1 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                {data.designation}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-1 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Contact Number
                                            </td>
                                            <td className=" p-1 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                {data.phone}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-1 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                E-mail I'd
                                            </td>
                                            <td className=" p-1 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                {data.email}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-1 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                LinkedIn
                                            </td>
                                            <td className=" p-1 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                {data.linkedin}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-3 w-65% shadow-md shadow-slate-400  border-pink-700 m-auto">
                            <div className=" w-full flex text-center m-auto ">
                                
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

                            <div className={` m-auto flex-col h-[250px] border-pink-700 w-full overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${edqu}`}>
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

                            <div className={` m-auto flex-col h-[250px] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${teach}`}>
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

                            <div className={`m-auto h-[250px] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm ${res}`}>
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
                    </div>
                </div>
            </div>
        </div>

    </>)


}
