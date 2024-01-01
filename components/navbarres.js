import { MdEmail } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'
import Link from 'next/link'

export default function Navbarres(props) {
    return <>
        <div className={`h-24 w-full justify-between flex shadow-xl  ${props.class}`}>
            <div className='flex '>
                <div className="h-[100px] w-28 ml-12 mr-8 xsm:ml-2 xsm:mr-0 ">
                    <div className="pt-1 w-[105px]"><Link href='/'><img className="h-[90px] w-[110px]" src="/logo_gif.gif" alt="" /></Link>
                    </div>
                </div>
                <div className="flex-col xsm:my-auto">
                    <div className="animation xsm:ml-0 xsm:text-base">
                        <div className="text-2xl pt-3 xsm:text-lg text-amber-800 font-bold xsm:ml-7 "><div className="first ">CAMPUS CHRONICLES</div></div>
                        <div className="text-2xl font-bold xsm:text-lg  text-yellow-300  xsm:ml-7"><div className="second"></div>CAMPUS CHRONICLES</div>
                        <div className="text-2xl mt-5 pt-2 xsm:text-lg text-amber-800 font-bold  xsm:ml-7"><div className="first">CAMPUS CHRONICLES</div>
                        </div>
                    </div>
                    <div className="font-semibold text-left text-yellow-300 xsm:text-xs ">A State Govt. Technical University Campus</div>
                </div>
            </div>
            <div className="rightcorner flex-col mr-20 mt-4 xsm:hidden">
                <div className="text-end flex"><button className='text-lg mt-1 text-amber-800'><MdEmail /></button><div className='ml-2 text-yellow-300 font-semibold'>mohalicampus@gmail.com</div> </div>
                <div className='flex'><div><button className='text-lg text-amber-800 mt-1'><IoMdCall /></button></div> <div className='ml-2 text-yellow-300 font-semibold'> +91-94633-83753</div></div>
            </div>
        </div>
    </>
}
