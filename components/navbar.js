import { MdEmail } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'

export default function Navbar(props) {
    return <>
        <div className={`h-24 w-full justify-between flex shadow-xl  ${props.class}`}>
            <div className='flex '>
                <div className="h-[100px] w-24 ml-12 mr-8 xsm:ml-0">
                    <div className="pt-1 w-[105px]"><a href='#'><img className="h-[90px] w-[110px]" src="/logo_gif.gif" alt="" /></a>
                    </div>
                </div>
                <div className="flex-col xsm:my-auto">
                    <div className="animation ml-52 xsm:ml-0 xsm:text-smxsm:text-sm">
                        <div className="text-2xl pt-3 xsm:text-sm text-amber-800 font-bold "><div className="first ">CAMPUS CHRONICLES</div></div>
                        <div className="text-2xl font-bold xsm:text-sm  text-yellow-300 "><div className="second"></div>CAMPUS CHRONICLES</div>
                        <div className="text-2xl mt-5 pt-2 xsm:text-sm text-amber-800 font-bold "><div className="first">CAMPUS CHRONICLES</div>
                        </div>
                    </div>
                    {/* <div className="ml-4 font-semibold text-center text-yellow-300 xsm:hidden">(A State Govt. Technical University Campus)</div> */}
                </div>
            </div>
            <div className="rightcorner flex-col mr-20 mt-4">
                <div className="text-end flex"><button className='text-lg mt-1 text-amber-800'><MdEmail /></button><div className='ml-2 text-yellow-300 font-semibold'>mohalicampus@gmail.com</div> </div>
                <div className='flex'><div><button className='text-lg text-amber-800 mt-1'><IoMdCall /></button></div> <div className='ml-2 text-yellow-300 font-semibold'> +91-94633-83753</div></div>
            </div>
        </div>
    </>
}
