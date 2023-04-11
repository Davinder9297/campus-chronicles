import Navbar from "../../components/navbar"
// import Navbar from '../components/navbar'

import Link from "next/link";

// import Head from 'next/head'
export default function Club() {
    return (<>

<Navbar class=""/>
        <div className="flex justify-between w-full ">
            <div className=" flex-col-reverse flex-wrap  w-[24%] mr-1 ">
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/cultural_club'}>
                        <img className="rounded-xl h-full w-full" src="/cultural_logo.png" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/personality_club'}>
                        <img className="rounded-xl h-full w-full" src="/personality.png" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/editorial_club'}>
                        <img className="rounded-xl h-full w-full" src="editorial.jpg" />
                    </Link>
                </div>
            </div>


            <div className="flex-col justify-between w-[44%]">
                <div className=" p-3 font-jass text-2xl text-center font-bold ">

                    Current Notifications...
                    <div className="border-solid border-2 h-[300px] overflow-y-auto mt-2">
                        <div className="border-solid border-1 border-slate-200 h-15 p-2 text-sm flex flex-row justify-between">
                            <div className="w-[10%] ">S.no.</div>
                            <div className="w-[70%] ">Subject</div>
                            <div className="w-[15%] ">Date</div>
                        </div>
                        <marquee direction="up" height="80%" behaviour="scroll" scrollamount="4">
                        <div className="border-solid border-1 border-slate-200 h-15 p-2 text-sm flex flex-row justify-between ">
                            <div className="w-[10%] ">1.</div>
                            <div className='flex space-x-1  w-[70%]'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
                            <div className="w-[17%] ">27.02.2023</div>
                        </div>
                        <div className="border-solid border-1 border-slate-200 h-15 p-2 text-sm flex flex-row justify-between ">
                            <div className="w-[10%] ">2.</div>
                            <div className='flex space-x-1 w-[70%]'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
                            <div className="w-[17%] ">28.02.2023</div>
                        </div>
                        </marquee>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-evenly mt-2">
                    <div className="border-solid border-2 m-2 border-pink-600 h-auto text-center rounded-xl w-[45%] justify-items-center shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                        <Link href={'club/sports'}>
                        <img className="flex  rounded-xl h-full w-full" src="sports1.jpg" />
                    </Link>
                    </div>
                    <div className="border-solid border-2 m-2 border-pink-600 h-[173px] text-center rounded-xl w-[45%] shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/core_commitee'}>
                        <img className="rounded-xl h-full w-full" src="core-committee.png" />
                    </Link>
                    </div>
                </div>
            </div>


            <div className="flex-col flex-wrap w-[24%]">
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] text-center rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/training_placement_club'}>
                        <img className="rounded-xl h-full w-full" src="placement.jpg" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/e_club'}>
                        <img className="rounded-xl h-full w-full" src="e-cell.png" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-pink-400 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'club/coding_and_tech_club'}>
                        <img className="rounded-xl h-full w-full" src="coding.png" />
                    </Link>
                </div>
            </div>
        </div>

    </>)
}



