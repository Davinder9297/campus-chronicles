// import Navbar from "../components/navbar";
import { icons } from 'react-icons'
import { AiTwotoneHome } from 'react-icons/ai'
import {MdEditNotifications} from 'react-icons/md'
import {FaThList} from 'react-icons/fa'


export default function Placement() {
  return (<>
  <div className="flex p-2 justify-between flex-row mx-1 my-2 border-2 rounded-md border-purple-900">
      <div className="  flex-col p-2 text-lg  h-auto w-[22%]  justify-center grid grid-cols-1 divide-y  border-4 rounded-md  border-orange-900">

        <div className=" flex text-gray-800 font-bold  "><div className='mt-4 mb-4'> <button> <AiTwotoneHome /></button> Home </div></div>
        <div className=" flex text-gray-800 font-bold   border-black"><div className='mt-4 mb-4'>Interview Related questions</div></div>

        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'>Past details about visited companies</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'>Take Mock Test</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'>Placement Procedure</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'>Take Mock Test</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'>Take Mock Test</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'>Take Mock Test</div></div>


      </div>
      <div className=" flex border-solid border-4 border-red-600 bg-red-300 w-[50%]" >

      </div>

      <div className=" flex border-solid border-4 w-[22%] border-blue-700" >
        <div className=' border-2 border-solid border-blue-600 w-[90%] text-center font-bold text-2xl font-sans m-3 p-2'><button> <MdEditNotifications /> </button>
           Notifications
          <div className="  flex-col p-2 text-xl  h-auto w-[98%]  justify-center grid grid-cols-1 divide-y  border-y-2 rounded-md  border-orange-900">

        <div className=" flex text-gray-800 font-bold  "><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st not </div></div>
        <div className=" flex text-gray-800 font-bold   border-black"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st not</div></div>

        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st not</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st not</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st not</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st not</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st not</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st not</div></div>
      </div>
      </div>
      </div>
    </div>

    <div className=' w-auto h-80 mx-1 my-2 border-2 border-purple-900 bg-yellow-100 text-2xl'> T/P officer and Stats
    
    </div>

    
    <div className='flex-col mt-8 mb-5 w-auto h-96 mx-1 my-2 border-2 border-purple-900 bg-blue-300 font-bold text-center text-2xl '> Events Organised by T/P Cell

    <div className='flex justify-evenly h-auto m-3 p-2 border-2 border-zinc-700'> </div>
    </div>

     
  </>)
}