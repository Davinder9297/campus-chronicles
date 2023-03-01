// import Header from '../components/header'
// import Navbar from '../components/navbar'

import Link from "next/link";

// import Head from 'next/head'
export default function Club() {
    return (<>

        <div className="">

        </div>
        <div className="flex justify-between w-full ">
            <div className=" flex-col-reverse flex-wrap  w-[24%] mr-1 ">
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'/cultural_club'}>
                        <img className="rounded-xl h-full w-full" src="cultural_logo.png" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'/personality_club'}>
                        <img className="rounded-xl h-full w-full" src="personality.png" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'/editorial_club'}>
                        <img className="rounded-xl h-full w-full" src="editorial.jpg" />
                    </Link>
                </div>
            </div>


<<<<<<< HEAD
            <div className="flex-col justify-between w-[44%] ">
                <div className=" p-3 font-jass text-shadow-md text-center font-bold ">
=======
            <div className="flex-col justify-between w-[44%]">
                <div className=" p-3 font-jass text-2xl text-center font-bold ">
>>>>>>> cebc7d03d21387e5101fe723ed58d3a8be0657d3
                    Current Notifications...
                    <div className="border-solid border-2 h-[300px] overflow-y-auto mt-2">
                        <div className="border-solid border-1 border-slate-200 h-15 p-2 text-sm flex flex-row justify-between">
                            <div className="w-[10%] ">S.no.</div>
                            <div className="w-[70%] ">Subject</div>
                            <div className="w-[15%] ">Date</div>
                        </div>
                        <div className="border-solid border-1 border-slate-200 h-15 p-2 text-sm flex flex-row justify-between ">
                            <div className="w-[10%] ">1.</div>
                            <div className="w-[70%] text-left">This is my first notification</div>
                            <div className="w-[17%] ">27.02.2023</div>
                        </div>
                        <div className="border-solid border-1 border-slate-200 h-15 p-2 text-sm flex flex-row justify-between ">
                            <div className="w-[10%] ">2.</div>
                            <div className="w-[70%] text-left">This is my Second notification</div>
                            <div className="w-[17%] ">28.02.2023</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-evenly mt-2">
                    <div className="border-solid border-2 m-2 border-pink-600 h-auto text-center rounded-xl w-[45%] justify-items-center shadow-md shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                        <img className="flex  rounded-xl h-full w-full" src="sports1.jpg" />
                    </div>
                    <div className="border-solid border-2 m-2 border-pink-600 h-[173px] text-center rounded-xl w-[45%] shadow-md shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                        <img className="rounded-xl h-full w-full" src="core-committee.png" />
                    </div>
                </div>
            </div>


            <div className="flex-col flex-wrap w-[24%]">
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] text-center rounded-xl shadow-md shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'/training_placement_club'}>
                        <img className="rounded-xl h-full w-full" src="placement.jpg" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'/e_club'}>
                        <img className="rounded-xl h-full w-full" src="e-cell.png" />
                    </Link>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-md shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                    <Link href={'/coding_and_tech_club'}>
                        <img className="rounded-xl h-full w-full" src="coding.png" />
                    </Link>
                </div>
            </div>
        </div>

    </>)
}



