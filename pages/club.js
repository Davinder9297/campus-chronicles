// import Header from '../components/header'
// import Navbar from '../components/navbar'
// import Head from 'next/head'
export default function Club() {
    return (<>

        <div className="flex justify-between w-full ">
            <div className=" flex-col-reverse flex-wrap  w-[24%] mr-1 ">
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-2xl shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                    <img className="rounded-xl h-full w-full" src="cultural_logo.png" />
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-2xl shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                    <img className="rounded-xl h-full w-full" src="personality.png"/>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-2xl shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                    <img className="rounded-xl h-full w-full" src="editorial.jpg" />
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
                    <div className="border-solid border-2 m-2 border-pink-600 h-auto text-center rounded-xl w-[45%] justify-items-center shadow-2xl shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                        <img className="flex  rounded-xl h-full w-full" src="sports1.jpg" />
                    </div>
                    <div className="border-solid border-2 m-2 border-pink-600 h-[173px] text-center rounded-xl w-[45%] shadow-2xl shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                    <img className="rounded-xl h-full w-full" src="core-committee.png"/>
                    </div>
                </div>
            </div>


            <div className="flex-col flex-wrap w-[24%]">
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] text-center rounded-xl shadow-2xl shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                <img className="rounded-xl h-full w-full" src="placement.jpg"/>
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-2xl shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                <img className="rounded-xl h-full w-full" src="e-cell.png" />
                </div>
                <div className="border-solid border-2 m-3 border-pink-600 h-[173px] rounded-xl shadow-2xl shadow-slate-900 cursor-pointer hover:scale-105 transition duration-150">
                <img className="rounded-xl h-full w-full" src="coding.png"/>
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
    </>)
}


