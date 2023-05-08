import {BiLogIn} from 'react-icons/bi'
import Navbar from '../components/navbar'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import cookie from 'js-cookie'
import {useRouter} from 'next/router';
// import './toast.css';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
export default function Login(){
    const [user, setuser] = useState()
    const [password, setpassword] = useState()
    const [profession, setprofession] = useState('')
    const [spin, setspin] = useState('hidden')
    const [show, setshow] = useState('')
    let router=useRouter()

    const authenticate=async(e)=>{
        e.preventDefault();
const data={user,password,profession}
if(user=="davinder" && password=="davinder" && profession==""){
router.push('/admin')
}
// console.log(profession,user,password);
setspin('')
setshow('opacity-50')
const res=await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
              })
              let response=await res.json();
              setspin('hidden')
              setshow('')
if(response.error){
    toast.warning('Invaild Credentials', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        });
    // console.log("error");
}
else{
    Cookies.set('login',user)
    if(profession=="Student"){
        // Cookies.set('rollno',)
        router.push('/student')
    }
    else if(profession=="Faculty"){
        router.push('/teacher')
    }
    else if(profession=="Club Manager"){
        router.push('/club_management')
    }
    else if(profession=="Librarian"){
        router.push('/library_management')
    }
    else if(profession=="Placement Manager"){
        router.push('/placement_management')
    }
    else if(profession=="Student Manager"){
        router.push('/student_management')
    }
    toast.success('Login successfully', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        });
        // setspinner('w-full flex justify-center mt-3');
    //   setTimeout(() => {
    //     let cok=cookie.get('oldpath');
    //     Router.push(cok);
    //     setspinner('hidden')
    //   }, 3000);
      cookie.set('token',response.token);
}
    //    setuser('')
    //    setpassword('')
    //    setprofession('')
    }
    
    return(<>
    <div className='bg-zinc-400 w-full h-screen'>
        <Navbar />
        <ToastContainer
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <div className="  h-[60%] w-[50%] mx-auto   bg-white rounded-lg shadow-xl shadow-blue-300 my-20">
    <div className={`text-center  justify-center items-center h-full w-full flex absolute top-0 left-0 z-10  ${spin}`}>
<div className="spinner-border" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
</div>
        <div className={`justify-around  h-full  flex ${show} `}>
            <div className='w-[50%]  flex justify-center items-center '>
                <img src="/login_side.jpg" alt="" />
            </div>
                <div className="flex-col w-[50%] text-white bg-blue-500 rounded-tr-lg rounded-br-lg h-[100%] py-2 px-3  text-xs space-y-1">
                <div className="font-mono  font-semibold text-2xl tracking-wide text-center">Login</div>

                <form action="" method="post">
                <div className='text-base  font-semibold '>User Id</div>
                <input type="text" value={user} onChange={(e)=>{setuser(e.target.value)}} className='outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-blue-400 outline-gray-300' placeholder="Enter User Id" />
                <div className='mt-2   font-semibold text-base'>Password</div>
                <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className='outline outline-1 rounded-sm py-[6px] px-2 w-full text-base text-blue-400 outline-gray-300' placeholder="Enter Password" />
                
                <div className='mt-2   font-semibold text-base'>Login As</div>
                <select value={profession}  onChange={(e)=>(setprofession(e.target.value))} name="profession"   className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-400 outline-gray-300">
  <option className="" value="">--SELECT--</option >
  <option className="" value="Student">Student</option >
  <option className="" value="Faculty">Faculty</option >
  <option className="" value="Librarian">Librarian</option >
  <option className="" value="Club Manager">Club Manager</option >
  <option className="" value="Placement Manager">Placement Manager</option >
  <option className="" value="Student Manager">Student Manager</option >
</select>
                <button onClick={authenticate} className='flex bg-yellow-400 text-blue-500 font-semibold w-full justify-center py-[6px] rounded-md mt-4 space-x-1 items-center'><BiLogIn className=' text-lg mt-[2px] text-blue-500' /> <div className='flex text-base'> Login</div>
                </button>
                </form>
                </div>
                </div>
    </div>
    </div>
    </>)
}

// mongodb+srv://davindergiri:davinder@cluster0.ohricxd.mongodb.net/test