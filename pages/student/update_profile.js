
import Link from "next/link"
import Navbarres from "../../components/navbarres"
import { useState } from "react"
import { FaEdit } from 'react-icons/fa'
import { FiSave } from 'react-icons/fi'
import { FaPowerOff } from 'react-icons/fa'
import { useEffect } from "react"
// update password pending

export default function Update_profile() {

    const [pinfo, setpinfo] = useState('')
    const [piclass, setpiclass] = useState('border-b-4 border-black text-black ')

    const [read, setread] = useState(true)
    const [disable, setdisable] = useState(true)
    const [phone, setphone] = useState('')
    const [spin, setspin] = useState('')
    const [opac, setopac] = useState('opacity-50')
    const [currentpassword, setnewpassword] = useState('')
    const [email, setemail] = useState('')
    const [linkedin, setlinkedin] = useState('')
    const [address, setaddress] = useState('')
    const [point, setpoint] = useState('opacity-50 cursor-not-allowed')
    useEffect(() => {
        const url = "http://localhost:3000/api/studentpersonaldata";
        //   const url1 = "http://localhost:3000/api/clubannouncement";
        //   const url2 = "http://localhost:3000/api/events";


        const fetchData = async () => {
            try {
                setspin('')
                let response = await fetch(url);
                let json = await response.json();
                // console.log(json);
                setphone(json.phone)
                setaddress(json.address)
                setlinkedin(json.linkedin)
                setemail(json.email)
                setspin('hidden')
                setopac('')

            } catch (error) {
                setshow('hidden')
                setspin('')
                console.log("error", error);
            }
        };

        fetchData();
    }, [])

    const edit = () => {
        setread(false)
        setdisable(false)
        setpoint('cursor-pointer')
    }

    const save = async (e) => {
        e.preventDefault()
        setread(true)
        setdisable(true)
        setpoint('opacity-50 cursor-not-allowed')
        const data = { phone, email, linkedin, address }
        const res = await fetch('http://localhost:3000/api/updatestudentdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        let response = await res.json();
    }

    const pi = () => {
        setedqu('hidden');
        setpinfo(' ');
        setpiclass('border-b-4 border-black text-black ')
        setedeqclass('text-white')
    }

    return (<>
        <div className="h-screen ">
            <div className="h-screen xsm:h-auto">
                <Navbarres class="shadow-sm" />
                {/* <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 "  />
                        <div className="logout_stu text-base">Logout</div>
                </div> */}
                <div className={` w-[95%] m-auto text-center text-4xl font-semibold p-4 h-[80%] overflow-hidden xsm:text-2xl ${opac}`}>
                    Update Your Profile ....
                    <div className={`text-center text-base flex w-full justify-center items-center h-full absolute top-0 left-28 z-10  ${spin}`}>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div className=" w-[97%] m-auto mt-2 text-center text-4xl font-semibold flex justify-between p-4 h-[90%] xsm:block xsm:p-0">
                    <div className="flex justify-center  items-center  h-[100%]  w-[30%] shadow-md shadow-slate-400 xsm:text-sm rounded-sm xsm:w-full xsm:h-auto">
                            <div className="h-[100%] w-[100%] justify-center">
                                <div className="xsm:h-36 h-[80%]">
                                    <img src="/jass.jpeg" className="shadow-md shadow-slate-700 h-[90%] rounded-full mt-2 m-auto xsm:h-36 xsm:w-36 " />
                                </div>
                                <div className="text-3xl xsm:text-sm xsm:mt-5 xsm:mb-2">
                                    Jaspreet kaur
                                </div>
                            </div>
                        </div>
                        <div className=" w-[65%] shadow-md shadow-slate-400 xsm:text-sm text-[60%] h-[100%] m-auto xsm:w-full">
                            <div className=" w-[100%] flex xsm:mt-5 ">
                                <div className={` w-[100%] m-auto bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 xsm:text-base cursor-pointer ${piclass}`} >
                                    Personal Information
                                </div>

                            </div>

                            <div className={`m-auto  h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-900 text-sm px-2 ${pinfo}`}>
                                <table className="border-collapse border border-white w-[100%] mx-auto text-lg xsm:text-sm">
                                    <tbody>

                                        <tr>
                                            <td className=" p-2 border-b-2 w-[30%] text-left pl-3 h-auto border-slate-300 ">Contact Number</td>
                                            <td className=" p-2 border-b-2 w-[70%] h-auto border-slate-300 "><input type="text" onChange={(e) => { setphone(e.target.value) }} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400 xsm:text-sm" value={phone} /></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[30%] text-left pl-3 h-auto border-slate-300 ">Email id</td>
                                            <td className=" p-2 border-b-2 w-[70%] h-auto border-slate-300 "><input type="email" onChange={(e) => { setemail(e.target.value) }} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400 xsm:text-sm" value={email} /></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[30%] text-left pl-3 h-auto border-slate-300 ">Address</td>
                                            <td className=" p-2 border-b-2 w-[70%] h-auto border-slate-300 "><input type="text" onChange={(e) => { setaddress(e.target.value) }} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400 xsm:text-sm" value={address} /></td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[30%] text-left pl-3 h-auto border-slate-300 ">Linkedin id</td>
                                            <td className=" p-2 border-b-2 w-[70%] h-auto border-slate-300 "><input type="text" onChange={(e) => { setlinkedin(e.target.value) }} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400 xsm:text-sm" value={linkedin} /></td>
                                        </tr>
                                        {/* <tr>
                                            <td className=" p-2 border-b-2 w-[30%] text-left pl-3 h-auto border-slate-300 ">Current Password</td>
                                            <td className=" p-2 border-b-2 w-[70%] h-auto border-slate-300 "><input type="password" onChange={(e)=>{setnewpassword(e.target.value)}} readOnly={read} className="p-1  bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400 xsm:text-sm" value={currentpassword}/></td>
                                        </tr> */}

                                    </tbody>
                                </table>
                                <div className="font-sans space-y-5 pt-3  w-[70%] ml-9">

                                    <div className="flex space-x-2  justify-center xsm:mb-4">
                                        <button type="submit" onClick={edit} className="flex items-center space-x-1 xsm:text-sm bg-amber-800 rounded text-white px-2 py-2 xsm:py-1 cursor-pointer"><div>Edit</div> <FaEdit className="" /></button>
                                        <button disabled={disable} onClick={save} className={`flex items-center space-x-1 xsm:text-sm bg-yellow-400 rounded text-white px-2 xsm:py-1 py-2 ${point}`}><div>Save</div> <FiSave className="" /></button>
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