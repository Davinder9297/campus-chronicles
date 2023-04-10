import { useState } from "react"
import {FaEdit} from 'react-icons/fa'
import {FiSave} from 'react-icons/fi'
import {CgShapeRhombus} from 'react-icons/cg'
import Navbar from "../../components/navbar"
import Link from "next/link"
export default function Profile(){
  const [pinfo, setpinfo] = useState('')
  const [edqu, setedqu] = useState('hidden')
  const [exre, setexre] = useState('hidden')
  const [piclass, setpiclass] = useState('border-b-4 border-black text-black scale-110 transition duration-75 shadow-xl shadow-blue-200')
  const [edeqclass, setedeqclass] = useState('text-white')
  const [exreclass, setexreclass] = useState('text-white')
  const [read, setread] = useState(true)
  const [disable, setdisable] = useState(true)
  const [name, setname] = useState('Ms. Jaspreet Kaur')
  const [role, setrole] = useState('Chapdasi')
  const [dob, setdob] = useState('23-11-2002')
  const [phone, setphone] = useState('7009400665')
  const [email, setemail] = useState('jaspreetkaursaini469@gmail.com')
  const [linkedin, setlinkedin] = useState('https://www.linkedin.com/in/jaspreet-kaur23/')
  const [point, setpoint] = useState('opacity-50 cursor-not-allowed')
  // const [, set] = useState(second)
  // const [bottomborder, setbottomborder] = useState()
    const edit=()=>{
      setread(false)
      setdisable(false)
      setpoint('cursor-pointer')
    }
    const save=()=>{
      setread(true)
      setdisable(true)
      setpoint('opacity-50 cursor-not-allowed')
    }
    const pi=()=>{
        setedqu('hidden');
        setexre('hidden');
        setpinfo('');
        setpiclass('border-b-4 border-black text-black scale-110 transition duration-75 shadow-xl shadow-blue-200')
        setedeqclass('text-white')
        setexreclass('text-white')
    }
    const eq=()=>{
        setedqu('flex ');
        setexre('hidden');
        setpinfo('hidden');
        setpiclass('text-white')
        setedeqclass('border-b-4 border-black text-black scale-110 transition duration-75 shadow-xl shadow-blue-200')
        setexreclass('text-white')
    }
    const er=()=>{
        setedqu('hidden');
        setexre('');
        setpinfo('hidden');
        setpiclass('text-white')
        setedeqclass('text-white')
        setexreclass('border-b-4 border-black text-black scale-110 transition duration-75 shadow-xl shadow-blue-200')
    }
    return(<>
  <div className="h-screen  overflow-y-hidden">
    <Navbar/>
    <div className="text-center font-semibold  text-3xl mt-2 font-serif">Your Profile</div>
    <div className="flex  h-[77.3%] mt-2  bg-black font-serif ">
        <div className="dp bg-gradient-to-b from-[#e18ff1] via-[#cfa5d4] to-[#91a9eb] text-white h-[100%] w-[30%] flex items-center justify-center">
            <div className="">
                <div className=" flex justify-center rounded-full">
                <img className="h-44 shadow-2xl shadow-red-600 w-44 rounded-full" src="/jass.jpeg" alt="" />
                </div>
                <div className="text-center text-2xl mt-4 font-bold">
                Ms.Saini Saab
                </div>
            </div>
        </div>
        <div className="info bg-gradient-to-r from-[#f23980] via-[#ffb547] to-[#faf757] w-[70%] h-[100%]">
            <div className="flex justify-around  border-b-2 border-gray-200">
                <button onClick={pi} className={`py-2  px-2  font-semibold ${piclass}`} >Personal Information</button>
                <button onClick={eq} className={`py-2  px-2 font-semibold ${edeqclass}`}>Educational Qualification</button>
                <button onClick={er} className={`py-2  px-2 font-semibold ${exreclass}`}>Experience And Research Papers</button>
            </div>
            <div className=" h-[91.5%]">
                    <div className={`personal_info w-full text-lg ${pinfo}`}>
                        {/* <div className="flex bg-slate-600  justify-center space-x-5 "><div className="font-semibold">Name</div><div  ><input type="text" value="Ms.Jaspreet Kaur"/></div></div> */}
                        {/* <div className="flex bg-slate-600  justify-center space-x-5 "><div className="font-semibold">Job Role</div><div><input type="text" value="Chapdasi"/></div></div> */}

                    <div className="flex justify-evenly">
                        <div className="flex-col space-y-5 pt-4 ">
                           <div className="p-1">Name</div>
                           <div className="p-1">Job Role</div>
                           <div className="p-1">Date of Birth</div>
                           <div className="p-1">Phone No.</div>
                           <div className="p-1">Email</div>
                           <div className="p-1">Linkedin</div>
                        </div>

                        <div className="font-sans space-y-5 pt-4  w-[50%]">
                           <div className=" "><input readOnly={read} onChange={(e)=>{setname(e.target.value)}} type="text"  className="p-1 w-full  bg-slate-100 outline-1  outline-gray-300 rounded outline focus:outline-gray-400" value={name}/></div>
                           <div><input type="text" onChange={(e)=>{setrole(e.target.value)}} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={role}/></div>
                           <div><input type="text" onChange={(e)=>{setdob(e.target.value)}} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={dob}/></div>
                           <div><input type="text" onChange={(e)=>{setphone(e.target.value)}} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={phone}/></div>
                           <div><input type="text" onChange={(e)=>{setemail(e.target.value)}} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={email}/></div>
                           <div><input type="text" onChange={(e)=>{setlinkedin(e.target.value)}} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={linkedin}/></div>
                           <div className="flex  space-x-5"> 
                            <button  type="submit" onClick={edit} className="flex items-center space-x-1 bg-blue-800 rounded text-white px-2 py-1 cursor-pointer"><div>Edit</div> <FaEdit  className=""/></button>
                            <button disabled={disable} onClick={save} className={`flex items-center space-x-1 bg-blue-800 rounded text-white px-2 py-1 ${point}`}><div>Save</div> <FiSave className="" /></button>
                        </div>
                         </div>
                    </div>     
                     </div>


                  <div className={`qualification font-sans w-full  ${edqu}  justify-center items-center h-full px-2`}>
                    <table className="border-collapse border border-slate-400 ">
                      <thead className="">
                        <tr className=" ">
                          <th className=" border-2  py-2 border-slate-300 text-center px-2">Qualification </th>
                          <th className=" border-2 py-2 border-slate-300 px-2 text-center">Institution</th>
                          <th className=" border-2 py-2 border-slate-300 px-2 text-center">University/Board</th>
                          <th className=" border-2 py-2 border-slate-300 px-2 text-center">Year of Completion</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className=" border-2 max-w-[200px]   h-auto border-slate-300 ">10th</td>
                          <td className=" border-2 max-w-lg   h-auto border-slate-300 ">Guru Nanak Foundation Public School,Khunnimajra</td>
                          <td className=" border-2 max-w-lg   h-auto border-slate-300 ">CBSE</td>
                          <td className=" border-2 max-w-xsm   h-auto border-slate-300 ">2018</td>
                        </tr>
                        <tr>
                          <td className=" border-2 border-slate-300 ">12th</td>
                          <td className=" border-2 border-slate-300 ">Guru Nanak Foundation Public School,Khunnimajra</td>
                          <td className=" border-2 border-slate-300 ">CBSE</td>
                          <td className=" border-2 border-slate-300 ">2020</td>
                        </tr>
                        <tr>
                          <td className=" border-2 border-slate-300 ">B.Tech CSE</td>
                          <td className=" border-2 border-slate-300 ">I.K. Gujral Punjab Technical University,   Mohali Campus - 1 </td>
                          <td className=" border-2 border-slate-300 ">I.K. Gujral Punjab Technical University,Kapurthala</td>
                          <td className=" border-2 border-slate-300 ">2024</td>
                        </tr>
                      </tbody>
                    </table>
                    </div>

                  <div className={`experience ${exre} py-2 overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500`}>
                          <div className="text-center font-semibold text-2xl">Teaching Experience</div>
                        <div className="px-3 py-2 space-y-2">
                          <div className="flex  space-x-1 items-center"><div className="font-semibold text-lg flex items-center space-x-1"><CgShapeRhombus className="text-xl"/><div>Professor</div></div><div>IKGPTU (Since 2019)</div></div>
                          <div className="flex  space-x-1 items-center"><div className="font-semibold text-lg flex items-center space-x-1"><CgShapeRhombus className="text-xl"/><div>Associate Professor</div></div><div>IKGPTU, Main Campus, Kapurthala (September, 2016 to September, 2019)</div></div>
                          <div className="flex  space-x-1 items-center"><div className="font-semibold text-lg flex items-center space-x-1"><CgShapeRhombus className="text-xl"/><div>Senior Lecturer</div></div><div>SBSSTC, Ferozepur, Punjab (August, 2003 to June, 2009)</div></div>
                          <div className="flex  space-x-1 items-center"><div className="font-semibold text-lg flex items-center space-x-1"><CgShapeRhombus className="text-xl"/><div>Lecturer</div></div><div>SBSSTC, Ferozepur, Punjab (August, 1998 to July, 2003)</div></div>                        
                        </div>
                        
                        <div className=" h-[265px] py-2 research_pub px-2">
                          <div className="text-center font-semibold text-2xl">Research Publications</div>
                          <table className="border-collapse border border-slate-400 mt-4">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Title </th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Author's Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Journal</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Year</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">ISSN</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Link</th>
                        </tr>
                      </thead>
                      <tbody className="">
                        <tr>
                          <td className="border-2 max-w-lg   h-auto border-slate-300 ">Haar wavelet approximate solutions for the generalized Lane Emden equations arising in astrophysics</td>
                          <td className="border-2 max-w-[200px]   h-auto border-slate-300 ">Harpreet Kaur, R.C. Mittal and Vinod Mishra</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">Computer Physics Communications</td>
                          <td className="border-2 max-w-xsm   h-auto border-slate-300 ">2013</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">00104655</td>
                          <td className="text-red-500 border-2 border-slate-300"><Link href="/" > Link</Link></td>
                        </tr>
                        <tr>
                          <td className="border-2 max-w-lg   h-auto border-slate-300 ">Haar wavelet approximate solutions for the generalized Lane Emden equations arising in astrophysics</td>
                          <td className="border-2 max-w-[200px]   h-auto border-slate-300 ">Harpreet Kaur, R.C. Mittal and Vinod Mishra</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">Computer Physics Communications</td>
                          <td className="border-2 max-w-xsm   h-auto border-slate-300 ">2013</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">00104655</td>
                          <td className="text-red-500 border-2 border-slate-300"><Link href="/" > Link</Link></td>
                        </tr>
                        <tr>
                          <td className="border-2 max-w-lg   h-auto border-slate-300 ">Haar wavelet approximate solutions for the generalized Lane Emden equations arising in astrophysics</td>
                          <td className="border-2 max-w-[200px]   h-auto border-slate-300 ">Harpreet Kaur, R.C. Mittal and Vinod Mishra</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">Computer Physics Communications</td>
                          <td className="border-2 max-w-xsm   h-auto border-slate-300 ">2013</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">00104655</td>
                          <td className="text-red-500 border-2 border-slate-300"><Link href="/" > Link</Link></td>
                        </tr>
                       
                      </tbody>
                    </table>
                        </div>
                    </div>


            </div>
        </div>
    </div>
  </div>
  </>)
}