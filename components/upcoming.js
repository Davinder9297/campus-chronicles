import {FaRegCalendarAlt} from 'react-icons/fa'
export default function Upcomingevents(){
    return(<>
    <div className="flex-col bg-gray-200 ">
        <div className="flex "><div className='text-xl'>Upcoming Events</div> <FaRegCalendarAlt className='mt-1 ml-1'/> <button className='ml-1 text-xs bg-black text-white rounded-sm px-1'>VIEW ALL</button> </div>
        <div className='text-sm'>PROGRAMS ON PLATTER</div>
        <div><img className='w-36 ml-1' src="hr.png" alt="" /></div>
        <div className='flex-col overflow-y-auto '>
            <div className='flex-col'>
                <div>ReNew CoE organised event on 1st March 2023 , 5 - 6:30 pm</div>
                <div className='flex text-sm'><FaRegCalendarAlt className='mt-[3px] mr-1'/> February 20, 2023</div>
            </div>
            <div className='flex-col'>
                <div>ReNew CoE organised event on 1st March 2023 , 5 - 6:30 pm</div>
                <div className='flex text-sm'><FaRegCalendarAlt className='mt-[3px] mr-1'/> February 20, 2023</div>
            </div>
            <div className='flex-col'>
                <div>ReNew CoE organised event on 1st March 2023 , 5 - 6:30 pm</div>
                <div className='flex text-sm'><FaRegCalendarAlt className='mt-[3px] mr-1'/> February 20, 2023</div>
            </div>
        </div>
    </div>
    </>)
}