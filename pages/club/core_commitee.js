import { useEffect } from "react";
import { useState } from "react";
export default function CoreCommittee() {
    const [president, setpresident] = useState({})
    const [incharge, setincharge] = useState({})
    const [leadingrole, setleadingrole] = useState([])
    const [events, setevents] = useState([])
    useEffect(() => {
        const url = "http://localhost:3000/api/clubdetails";     
        const fetchData = async () => {
          try {
            // setspin('')
            let response = await fetch(url);
            let json = await response.json();
    //   console.log(json);
            setpresident(json.president[0])
            setincharge(json.incharge)
            setleadingrole(json.leadingrole)
            setevents(json.event)
            console.log(json.event);
            // if(json.length!=0){
            //   setnorecord('hidden')
            // }
            
            // setspin('hidden')
            // setshow('')
          } catch (error) {
            // setshow('hidden')
            // setspin('')
            console.log("error", error);
          }
        };
      
        fetchData();
      }, []);      
    return (<>

        <div className="">
        <div className=" h-auto flex justify-around w-[100%]  shadow-md shadow-purple-500 items-center xsm:block">
                <div className="xsm:w-[100%] xsm:flex xsm:justify-center w-[20%] " >
                    <img className="xsm:h-36 w-full h-36 xsm:w-auto" src="/core-committee.png" />
                    </div>
                    <div className="flex justify-center w-[70%] xsm:w-[100%] font-serif italic xsm:hidden text-center text-7xl">
                        Core Committee
                    {/* <img className="h-36 w-[100%] xsm:h-16 xsm:w-full " src="/placement_tile.jpeg" /> */}
                    </div>

            </div>

            <div className="font-p text-6xl text-center mt-4 xsm:text-4xl">
                Our Moto...
                <div className="font-sans text-center text-lg w-[80%] m-auto p-3 xsm:text-base xsm:text-justify">
                    The purpose of students club is to bring everyone together based on their interests and build relations. These clubs offer limitless opportunities for leadership and participation beyond classroom setup and academic programme.
                </div>
            </div>

            <div className="font-p text-6xl text-center mt-4 xsm:text-4xl xsm:hidden">
                Our Members...
                <div className="mx-2 mt-3">
                    <div className="mx-2 flex justify-around flex-wrap">
                        <div className="shadow-md shadow-slate-400 w-[18%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-32 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center ">
                                Simranpreet Kaur<br/>
                                3rd Year<br/>
                                Cultural Club
                            </div>
                        </div>
                        <div className="shadow-md shadow-slate-400 w-[18%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-32 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center ">
                                Neha Verma<br/>
                                3rd Year<br/>
                                Editorial Club, Personality Club
                            </div>
                        </div>
                        <div className="shadow-md shadow-slate-400 w-[18%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-32 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center ">
                                Harsehraab Sing Sarao<br/>
                                3rd Year<br/>
                                E-cell, TechZhut
                            </div>
                        </div>
                        <div className="shadow-md shadow-slate-400 w-[18%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-32 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center ">
                                Sawarn Singh<br/>
                                3rd Year<br/>
                                Traning & Placement Cell
                            </div>
                        </div><div className="shadow-md shadow-slate-400 w-[18%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-32 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center ">
                                Mohit Vana<br/>
                                3rd Year<br/>
                                Sports Club
                            </div>
                        </div>
                    </div>
                    <div className="mx-2 flex justify-evenly flex-wrap mt-4 mb-20">
                        <div className="shadow-md shadow-slate-400 w-[18%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-32 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center ">
                                Gautam<br/>
                                3rd Year
                            </div>
                        </div>

                        <div className="shadow-md shadow-slate-400 w-[18%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-32 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center ">
                                Kashvi Sinha<br/>
                                2nd Year
                            </div>
                        </div>

                        <div className="shadow-md shadow-slate-400 w-[18%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-32 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center ">
                                Aditya<br/>
                                2nd Year
                            </div>
                        </div>

                        <div className="shadow-md shadow-slate-400 w-[18%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-32 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center ">
                                Nirmal Singh<br/>
                                2nd Year
                            </div>
                        </div><div className="shadow-md shadow-slate-400 w-[18%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-32 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center ">
                                Manish Kumar<br/>
                                3rd Year
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>

            <div className="font-p text-6xl text-center mt-4 xsm:text-4xl hidden xsm:block mb-10">
                Our Members...
                <div className="mx-2 mt-3">
                    <div className="mx-2 flex justify-around flex-wrap">
                        <div className="shadow-md shadow-slate-400 w-[49%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-24 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center xsm:text-sm">
                                Simranpreet Kaur<br/>
                                3rd Year<br/>
                                Cultural Club
                            </div>
                        </div>
                        <div className="shadow-md shadow-slate-400 w-[49%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-24 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center xsm:text-sm">
                                Neha Verma<br/>
                                3rd Year<br/>
                                Editorial Club, Personality Club
                            </div>
                        </div>
                        </div>


                        <div className="mx-2 flex justify-around flex-wrap">
                        <div className="shadow-md shadow-slate-400 w-[49%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-24 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center xsm:text-sm">
                                Harsehraab Sing Sarao<br/>
                                3rd Year<br/>
                                E-cell, TechZhut
                            </div>
                        </div>

                        <div className="shadow-md shadow-slate-400 w-[49%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-24 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center xsm:text-sm">
                                Sawarn Singh<br/>
                                3rd Year<br/>
                                Traning & Placement Cell
                            </div>
                        </div>
                        </div>
                        
                        <div className="mx-2 flex justify-around flex-wrap">
                        <div className="shadow-md shadow-slate-400 w-[49%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-24 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center xsm:text-sm">
                                Mohit Vana<br/>
                                3rd Year<br/>
                                Sports Club
                            </div>
                        </div>


                        <div className="shadow-md shadow-slate-400 w-[49%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-24 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center xsm:text-sm">
                                Gautam<br/>
                                3rd Year
                            </div>
                        </div>
                        </div>

                        <div className="mx-2 flex justify-around flex-wrap">
                        <div className="shadow-md shadow-slate-400 w-[49%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-24 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center xsm:text-sm">
                                Kashvi Sinha<br/>
                                2nd Year
                            </div>
                        </div>

                        <div className="shadow-md shadow-slate-400 w-[49%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-24 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center xsm:text-sm">
                                Aditya<br/>
                                2nd Year
                            </div>
                        </div>
                        </div>

                        <div className="mx-2 flex justify-around flex-wrap">
                        <div className="shadow-md shadow-slate-400 w-[49%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-24 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center xsm:text-sm">
                                Nirmal Singh<br/>
                                2nd Year
                            </div>
                        </div><div className="shadow-md shadow-slate-400 w-[49%] rounded-xl pt-2">
                            <img src="/teacher.jpg" className="h-24 m-auto rounded-full shadow-md shadow-slate-800" />
                            <div className="text-lg font-display mt-2 text-center xsm:text-sm">
                                Manish Kumar<br/>
                                3rd Year
                            </div>
                        </div>
                        

                    </div>



                    
                </div>

            </div>
        </div>

    </>)
}