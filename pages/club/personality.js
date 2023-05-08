import { useEffect } from "react";
import { useState } from "react";
export default function Personality() {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let name = month[d.getMonth()];
    let s = d.getDate() + " " + name + " " + d.getFullYear();
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

        <div className=" w-full mt-1">
            <div className=" h-36 flex justify-around  shadow-md shadow-orange-500 items-center">
                <img className="h-full w-full" src="/personality_tile.png" />

            </div>

            <div className="w-[95%] mx-auto">

                <div className="  text-center font-bold text-3xl mt-2 font-sans p-2">
                    About us....
                    <div className="mx-3 font-normal text-lg shadow-md shadow-orange-500 rounded-xl p-2 text-justify">
                        Darpan comes you with the opportunity of developing personality in ways through which learn not only to benefit others but ourselves as well. With the aim of developing one's personality we have reached methods like demo interview sessions and group discussions for your placements along with other activities and charities that are to be held.
                    </div>
                </div>
            </div>
            <div className="flex justify-around w-full" >

                <div className="w-[40%] text-center font-bold text-3xl font-sans mt-3 p-2">
                    Our Handlers
                    <div className="shadow-md shadow-orange-500 text-2xl m-3 p-3 rounded-xl  ">
                        <div className="bg-orange-300 rounded-xl">Incharge</div>
                        <div className="flex flex-row  justify-around  ">
                            <div className="w-[40%] text-xl h-28">
                                <img className="h-full w-full" src={incharge.image} />
                            </div>
                            <div className="w-[95%] text-xl h-full my-auto items-center m-auto">
                                <div >{incharge.facultyname}</div>
                                <div className="font-normal text-sm">{incharge.designation}</div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md shadow-orange-500 text-2xl m-3 p-3 rounded-xl  ">
                        <div className="bg-orange-300 rounded-xl">President</div>
                        <div className="flex flex-row  justify-around  ">
                            <div className="w-[40%] text-xl h-28">
                                <img className="h-full w-full" src={president.image} />
                            </div>
                            <div className="w-[95%] text-xl h-full my-auto items-center m-auto">
                                <div className="">{president.name}</div>
                                <div className="font-normal text-sm">{president.currentyear}</div>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex-col='true'  w-[50%] ">

                    <div className=" text-center font-bold text-3xl font-sans mt-3 p-2 mx-auto ">

                        Leading Roles
                        <div className="shadow-md shadow-orange-500 text-2xl p-1 rounded-xl space-y-3">
                        <div className="flex flex-row justify-around  mt-3 bg-orange-300 rounded-xl">
                            <div className="w-[20%] text-xl h-[58] p-1 font-semibold">
                                Sno.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1 font-semibold ">
                                Name
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1 font-semibold ">
                                Year
                            </div>
                        </div>
                        {leadingrole.map((dat,index)=>{
                            const {name,currentyear}=dat;
                            return(<>
                        <div className="flex flex-row justify-around hover:bg-orange-100 mt-2 ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                {index+1}.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                {name}
                            </div>
                            <div className=" w-[25%] text-xl h-[58] text-left p-1">
                                {currentyear}
                            </div>
                        </div>
                            </>)
                        })}
                            {/* <div className="w-[20%] text-xl h-[58] p-1">
                                1.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Ayush Sharma
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-orange-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                2.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Umar
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                            2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-orange-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                3.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Yash
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-orange-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                4.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Vansh
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-orange-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                5.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Harivansh
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-orange-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                6.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Utkarsh
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-orange-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                7.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Nikhilpreet Saini
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                            1<sup>st</sup> Year
                            </div> */}
                        {/* </div> */}
                    </div>
                    </div>
                </div>
            </div >
            <div className="flex-col mt-1 mb-5 shadow-md shadow-orange-500 w-[95%] mx-auto" id="events" >
                <div className="text-center font-bold text-3xl font-sans ">Our Events....</div>
                <div className="flex justify-center w-full">
                    <div className="flex flex-wrap w-full h-auto justify-between mt-4 max-w-[1250px] ">
                    {events.map((data,index)=>{
                                    const {title,image,description}=data;
                                    return(<>              
                                     <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in">
                            <div className=""><img className="rounded-t w-[350px] h-52" src={image} alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">{title}</div>
                            <div className="px-1">{description}</div>
                        </div>                     
                                   
                                </>)
                                })} 
                        {/* <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    </>)
}


