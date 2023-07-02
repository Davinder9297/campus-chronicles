import {FaHome,FaBookMedical,FaPowerOff} from 'react-icons/fa'
import {ImNewspaper,ImBooks} from 'react-icons/im'
import {AiFillFilePdf} from 'react-icons/ai'
import Link from "next/link";
import cookie from "js-cookie"
import {GrClose} from 'react-icons/gr'
import {ImWarning} from 'react-icons/im'
import { useRouter } from 'next/router';

import { RxHamburgerMenu } from 'react-icons/rx'
export default function TeacherNavbar() {
    let router=useRouter()
    const yesbutton=()=>{
        cookie.remove('token')
        cookie.remove('login')
      router.push('/login')
      }
    return (<>
    <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content bg-orange-100">
      <div className="modal-header">
        <h5 className="modal-title font-semibold flex text-xl  items-center" id="exampleModalLabel"><ImWarning className='mr-2 text-2xl' />Confirmation</h5>
        <button type="button" className="btn-close text-black font-bold" data-bs-dismiss="modal" aria-label="Close"><GrClose/></button>
      </div>
      <div className="modal-body font-medium text-md ">
        Are you sure to log out?
      </div>
      <div className="modal-footer">
        <button type="button" className=" font-medium btn px-3 bg-orange-200" data-bs-dismiss="modal">No</button>
        <button onClick={yesbutton}  type="button" className="btn font-medium  bg-orange-500 "  data-bs-dismiss="modal">Yes</button>
      </div>
    </div>
  </div>
</div>
<nav className="navbar navbar-expand-lg bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 flex justify-around items-center font-serif text-md font-semibold">
            <div className="container-fluid ">
                {/* <div className="mb-2"><Link href="/">Home</Link></div> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="RxHamburgerMenu"></span> */}
                    <RxHamburgerMenu></RxHamburgerMenu>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  teachnavbar flex justify-end w-full xsm:space-y-5 text-white py-2 font-semibold font-serif ">
                        <li className="nav-item  flex ml-16"><div className='flex'><FaHome className='text-lg mt-[2px] mr-1'/><Link href='/teacher'> Home</Link></div></li>
                        <li className="nav-item  flex ml-16"><div className='flex'><ImBooks className='text-xl mt-[2px] mr-1'/> <Link href='/teacher/generate_assignment'>Upload Assignment</Link></div></li>
                        <li className="nav-item  flex ml-16"><div className='flex'><ImNewspaper className='text-lg mt-[3px] mr-1'/><Link href='/teacher/student_records'>Student Records</Link></div></li>
                        <li className="nav-item  flex ml-16"><div className='flex'><AiFillFilePdf className=' mt-1 mr-1'/><Link href='/teacher/syllabus'>Syllabus</Link></div></li>
                        <li className="nav-item  flex ml-16"><div className='flex'><button className='flex mr-6' data-bs-toggle="modal" data-bs-target="#exampleModal"><FaPowerOff className='text-xl mt-[2px] mr-1 '/>Logout</button></div></li>
                        
                        {/* <li className="nav-item mb-2"><div className={`${showlogin}`}><Link href="/login">Log In </Link></div></li> */}
                        {/* <li className="nav-item mb-2"><div className={` flex items-center h-full justify-center ${showlogout}`}><button type="button" className={`font-serif font-semibold  `} data-bs-toggle="modal" data-bs-target="#exampleModal">Log out</button></div></li> */}

                    </ul>

                </div>
            </div>
        </nav>

        {/* <div className="">
            <div className="teachnavbar flex justify-end w-full bg-amber-800 text-white py-2 font-semibold font-serif ">
                <div className='flex ml-16 '><FaHome className='text-lg mt-[2px] mr-1'/><Link href='/teacher'> Home</Link></div>
                <div className='flex ml-16 '></div>
                <div className='flex ml-16 '><ImNewspaper className='text-lg mt-[3px] mr-1'/><Link href='/teacher/student_records'>Student Records</Link></div>
                <div className='flex ml-16 '><AiFillFilePdf className=' mt-1 mr-1'/><Link href='/teacher/syllabus'>Syllabus</Link></div>
                <button className='flex ml-16 mr-6' data-bs-toggle="modal" data-bs-target="#exampleModal"><FaPowerOff className='text-xl mt-[2px] mr-1 '/>Logout</button>
            
            </div>
            
        </div> */}
    </>)
}