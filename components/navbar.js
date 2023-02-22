import { MdEmail} from 'react-icons/md'
import { IoMdCall} from 'react-icons/io'

export default function Navbar(){
    return <>
    <div className="h-28 w-full  flex shadow-xl bg-blue-900">
<div className="h-[100px] w-24 ml-20 "><div className="pt-3 w-[85px]"><img className="h-[70px] w-[80px]" src="ptu-logo-transparent.png" alt="" /></div></div>
<div className="flex-col ">
<div className="animation ml-28">
     <div className="text-2xl pt-3  text-red-600 font-semibold "><div className="first ">ਆਈ. ਕੇ. ਗੁਜਰਾਲ ਪੰਜਾਬ ਟੈਕਨੀਕਲ ਯੂਨੀਵਰਸਿਟੀ - ਮੋਹਾਲੀ ਕੈਂਪਸ - I</div></div>
     <div className="text-2xl font-bold   text-red-600 "><div className="second">I.K. Gujral Punjab Technical University - Mohali Campus I</div></div>
     <div className="text-2xl pt-1 text-red-600 font-semibold "><div className="second">ਆਈ. ਕੇ. ਗੁਜਰਾਲ ਪੰਜਾਬ ਟੈਕਨੀਕਲ ਯੂਨੀਵਰਸਿਟੀ - ਮੋਹਾਲੀ ਕੈਂਪਸ - I</div></div>
     </div>
     <div className="font-semibold text-center text-yellow-300">(A State Govt. Technical University Campus)</div>
</div>
<div className="rightcorner flex-col ml-40 mt-4">
<div className="text-end flex"><button className='text-lg mt-1 text-red-600'><MdEmail/></button><div className='ml-2 text-yellow-300 font-semibold'>mohalicampus@gmail.com</div> </div>
<div className='flex'><div><button className='text-lg text-red-600 mt-1'><IoMdCall/></button></div> <div className='ml-2 text-yellow-300 font-semibold'> +91-94633-83753</div></div>
</div>
    </div>
    </>
}
