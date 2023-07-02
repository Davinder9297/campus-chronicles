import { BsFacebook, BsLinkedin, BsYoutube, BsTwitter } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import { MdEmail } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'
import { MdAccessTimeFilled } from 'react-icons/md'

export default function Footer() {
    return (<>
        <div className=" flex justify-around mt-2 relative bg-gradient-to-r from-yellow-500 via-amber-100 to-yellow-500 py-3 bottom-0 xsm:block ">
            <div className="flex-col ">
                <div className='flex justify-center'>
                    <img className='h-32' src="/logoimg.png" alt="" />
                </div>
                <div className='text-center font-semibold'> CAMPUS CHRONICLES</div>
                <div className="flex justify-around text-2xl mt-1 xsm:w-[70%] xsm:mx-auto xsm:mt-0">
                    <button className='text-xl'><BsFacebook /></button>
                    <button className='text-2xl'><RiInstagramFill /></button>
                    <button className='text-2xl'><BsYoutube /></button>
                    <button className='text-xl'><BsLinkedin /></button>
                </div>
            </div>
            <div className='flex justify-between xsm:p-5'>
            <div className='flex-col w-[30%] xsm:mt-5'>
                <div className='font-semibold text-lg pr-1'>Quick links</div>
                <ul className='text-sm space-y-1 mt-1'>
                    <li>Home</li>
                    <li>Admissions</li>
                    <li>About</li>
                    <li>Placements</li>
                    <li>Library</li>
                </ul>
            </div>
            <div className='flex-col w-[60%] xsm:mt-5'>
                <div className='font-semibold text-lg'>Address</div>
                <div className='text-sm space-y-1 mt-1 '>
                    <div className='flex'> <div className='text-lg mt-[2px] mr-1'><MdLocationPin className='text-amber-900' /></div> <div> C-102/B Phase, 7, Industrial Area, Sector 73, S.A.S Nagar, Punjab</div></div>
                    <div className='flex'><IoMdCall className='h-6 text-amber-900'/><div className='ml-2'>8283929792</div></div>
                    <div className='flex'><MdEmail className='h-6 text-amber-900'/><div className='ml-2'> mohalicampus@gmail.com</div></div>
                    <div className='flex'><MdAccessTimeFilled className='h-8 text-amber-900'/><div className='ml-2'> Monday to Friday (9:00am-5:00pm) </div></div>
                </div>
            </div>
            </div>
        </div>
    </>)
}