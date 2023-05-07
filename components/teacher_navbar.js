import {FaHome,FaBookMedical,FaPowerOff} from 'react-icons/fa'
import {ImNewspaper,ImBooks} from 'react-icons/im'
import {AiFillFilePdf} from 'react-icons/ai'
import Link from "next/link";


export default function TeacherNavbar() {
    return (<>
        <div className="">
            <div className="teachnavbar flex justify-end w-full bg-amber-800 text-white py-2 font-semibold font-serif ">
                <div className='flex ml-16 '><FaHome className='text-lg mt-[2px] mr-1'/><Link href='/teacher'> Home</Link></div>
                <div className='flex ml-16 '><ImBooks className='text-xl mt-[2px] mr-1'/> <Link href='/teacher/generate_assignment'>Upload Assignment</Link></div>
                <div className='flex ml-16 '><ImNewspaper className='text-lg mt-[3px] mr-1'/><Link href='/teacher/student_records'>Student Records</Link></div>
                <div className='flex ml-16 '><AiFillFilePdf className=' mt-1 mr-1'/><Link href='/teacher/syllabus'>Syllabus</Link></div>
                <div className='flex ml-16 mr-6'><FaPowerOff className='text-xl mt-[2px] mr-1 '/>Logout</div>
            
            </div>
            
        </div>
    </>)
}