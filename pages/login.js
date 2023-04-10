import {BiLogIn} from 'react-icons/bi'
import Navbar from '../components/navbar'
import { useState } from 'react'

export default function Login(){
    const [user, setuser] = useState()
    const [password, setpassword] = useState()
    const [profession, setprofession] = useState('')
    const authenticate=()=>{
       setuser('')
       setpassword('')
       setprofession('')
    }
    return(<>
    <div className='whologin  w-full h-screen'>
        <Navbar/>
    <div className="  h-[60%] w-[50%] mx-auto   bg-white rounded-lg shadow-xl shadow-blue-300 my-20">
        <div className='flex justify-around  h-full'>
            <div className='w-[50%]  flex justify-center items-center'>
                <img src="/login_side.jpg" alt="" />
            </div>
                <div className="flex-col w-[50%] text-white bg-blue-500 rounded-tr-lg rounded-br-lg h-[100%] py-2 px-3  text-xs space-y-1">
                <div className="font-mono  font-semibold text-2xl tracking-wide text-center">Login</div>

                <div className='text-base  font-semibold '>User Id</div>
                <input type="text" value={user} onChange={(e)=>{setuser(e.target.value)}} className='outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-blue-400 outline-gray-300' placeholder="Enter User Id" />
                <div className='mt-2   font-semibold text-base'>Password</div>
                <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} className='outline outline-1 rounded-sm py-[6px] px-2 w-full text-base text-blue-400 outline-gray-300' placeholder="Enter Password" />
                <div className='flex justify-around my-3'>
                    <label  className='cursor-pointer flex-col shadow-2xl w-28 py-2 rounded-lg'>
                        <div className='flex justify-center'><img src="student.svg" alt="" /></div>
                        <div className='flex text-xs  justify-center font-semibold mt-1'><input className='text-xs '  onChange={(e)=>{setprofession(e.target.value)}} type="radio" name="profession" id="" value="student"/> <div className='ml-1 tracking-wide'>STUDENT</div></div>
                    </label>
                    <div className='my-auto '>Or</div>
                    <label className='cursor-pointer flex-col shadow-2xl w-28 py-2 rounded-lg'>
                        <div className='flex justify-center'><img src="faculty.svg" alt="" /></div>
                        <div className='flex text-xs  justify-center font-semibold mt-1'><input className='text-xs ' onChange={(e)=>{setprofession(e.target.value)}} type="radio" name="profession" id="" value="faculty"/> <div className='ml-1 tracking-wide'>FACULTY</div></div>
                    </label></div>
                <button onClick={authenticate} className='flex bg-yellow-400 text-blue-500 font-semibold w-full justify-center py-[6px] rounded-md mt-2 space-x-1 items-center'><BiLogIn className=' text-lg mt-[2px] text-blue-500' /> <div className='flex text-base'> Login</div>
                </button>
                </div>
                </div>
    </div>
    </div>
    </>)
}

// mongodb+srv://davindergiri:davinder@cluster0.ohricxd.mongodb.net/test