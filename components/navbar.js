import { MdEmail } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'

export default function Navbar() {
    return <>
        <div className="h-24 w-full justify-between flex shadow-xl bg-blue-900">
            <div className='flex '>
                <div className="h-[100px] w-24 ml-12 mr-8">
                    <div className="pt-1 w-[105px]"><img className="h-[90px] w-[110px]" src="/logo_gif.gif" alt="" />
                    </div>
                </div>
                <div className="flex-col ">
                    <div className="animation ml-52 ">
                        <div className="text-2xl pt-3  text-red-600 font-bold "><div className="first ">CAMPUS CHRONICLES</div></div>
                        <div className="text-2xl font-bold   text-yellow-300 "><div className="second"></div>CAMPUS CHRONICLES</div>
                        <div className="text-2xl mt-5 pt-2  text-blue-600 font-bold "><div className="first">CAMPUS CHRONICLES</div>
                        </div>
                    </div>
                    <div className="ml-4 font-semibold text-center text-yellow-300">(A State Govt. Technical University Campus)</div>
                </div>
            </div>
            <div className="rightcorner flex-col mr-20 mt-4">
                <div className="text-end flex"><button className='text-lg mt-1 text-red-600'><MdEmail /></button><div className='ml-2 text-yellow-300 font-semibold'>mohalicampus@gmail.com</div> </div>
                <div className='flex'><div><button className='text-lg text-red-600 mt-1'><IoMdCall /></button></div> <div className='ml-2 text-yellow-300 font-semibold'> +91-94633-83753</div></div>
            </div>
        </div>
    </>
}
