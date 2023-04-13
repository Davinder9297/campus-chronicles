import Link from "next/link"
import Navbar from "../../components/navbar"
import { useState } from "react"
import { FaEdit } from 'react-icons/fa'
import { FiSave } from 'react-icons/fi'
import { CgShapeRhombus } from 'react-icons/cg'
import { useEffect } from "react"
import { Chart } from "chart.js";
// update password pending

export default function My_profile() {

    const [pinfo, setpinfo] = useState('')
    const [piclass, setpiclass] = useState('border-b-4 border-black text-black ')

    const [read, setread] = useState(true)
    const [disable, setdisable] = useState(true)
    const [phone, setphone] = useState('7009400665')
    const [email, setemail] = useState('jaspreetkaursaini469@gmail.com')
    const [linkedin, setlinkedin] = useState('https://www.linkedin.com/in/jaspreet-kaur23/')
    const [address, setaddress] = useState('Mohali')
    const [point, setpoint] = useState('opacity-50 cursor-not-allowed')

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

    const pi = () => {
        setedqu('hidden');
        setpinfo(' ');
        setpiclass('border-b-4 border-black text-black ')
        setedeqclass('text-white')
    }

    return (<>
        <div className="h-screen ">
            <div className="h-screen">
                <Navbar class="shadow-sm" />
                <div className=" w-[90%] m-auto text-center text-4xl font-semibold shadow-md shadow-slate-600 p-4 h-[80%] overflow-hidden ">
                    Update Your Profile ....

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
                                <div onClick={pi} className={` w-[100%] m-auto bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer ${piclass}`} >
                                    Personal Information
                                </div>
                                
                            </div>

                            <div className={`m-auto  h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-900 text-sm px-2 ${pinfo}`}>
                                <table className="border-collapse border border-white w-[95%] mx-auto text-lg">
                                    <tbody>
                                        
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Contact Number</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 "><input type="text" onChange={(e)=>{setphone(e.target.value)}} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={phone}/></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Email i'd</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 "><input type="text" onChange={(e)=>{setemail(e.target.value)}} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={email}/></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Address</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 "><input type="text" onChange={(e)=>{setaddress(e.target.value)}} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={address}/></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">Linkedin i'd</td>
                                            <td className=" p-2 border-b-2 w-[50%] h-auto border-slate-300 "><input type="text" onChange={(e)=>{setlinkedin(e.target.value)}} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={linkedin}/></td>
                                        </tr>
                                        
                                        </tbody>
                                </table>
                                <div className="font-sans space-y-5 pt-4  w-[70%] m-auto">

                                <div className="flex  space-x-5 mt-[5%] justify-center"> 
                            <button  type="submit" onClick={edit} className="flex items-center space-x-1 bg-blue-800 rounded text-white px-2 py-1 mr-5 cursor-pointer"><div>Edit</div> <FaEdit  className=""/></button>
                            <button disabled={disable} onClick={save} className={`flex items-center space-x-1 bg-blue-800 rounded text-white px-2 py-1 ${point}`}><div>Save</div> <FiSave className="" /></button>
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