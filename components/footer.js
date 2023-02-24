import {BsFacebook,BsLinkedin,BsYoutube,BsTwitter} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
export default function Footer(){
    return(<>
    <div className=" flex justify-around mt-2 relative bg-purple-200 py-3 bottom-0">
        <div className="flex-col ">
            <div className='flex justify-center'><img className='h-24' src="ptu-logo-transparent.png" alt="" /></div>
        <div className='text-center font-semibold'> CAMPUS CHRONICLES</div>
        <div className="flex justify-around text-2xl mt-3">
            <button className='text-xl'><BsFacebook/></button>
            <button className='text-2xl'><RiInstagramFill/></button>
            <button className='text-2xl'><BsYoutube/></button>
            <button className='text-xl'><BsLinkedin/></button>
        </div>
        </div>
        <div className='flex-col '>
            <div className='font-semibold text-lg'>Quick links</div>
            <ul className='text-base space-y-1 mt-1'>
                <li>Home</li>
                <li>Admissions</li>
                <li>About</li>
                <li>Placements</li>
                <li>Library</li>
            </ul>
        </div>
        <div className='flex-col'>
            <div  className='font-semibold text-lg'>Address</div>
<div className='text-base space-y-1 mt-1'>
<div className='flex-wrap '>C-102/B Phase, 7, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160055</div>
<div>Phone - 8283929792</div>
<div>Email - mohalicampus@gmail.com</div>
</div>
        </div>
    </div>
    </>)
}