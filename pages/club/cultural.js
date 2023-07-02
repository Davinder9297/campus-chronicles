import { useState } from "react";
import { useEffect } from "react";

export default function Cultural() {
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
            <div className=" h-36 flex justify-around  shadow-md shadow-red-500 items-center">
            <img className="h-full" src="/cultural_tile.png" />

            </div>
            <div className="  text-center font-bold text-3xl mt-2 font-sans p-2">
                About us....
                <div className="mx-3 font-normal text-lg shadow-md shadow-red-500 rounded-xl p-2 text-justify">
                Culture club helps in encouraging talent of the students. Club activities help students to develop a sense of unity and teamwork, learning how to work with others in reaching the same goals. This club help learners develop social skills and give students an open floor to build confidence and work on their performance anxiety.Because of the comfortable environment, conversations flow easily and everyone is open to new ideas.
                        Events include competitions such as instrumental,singing dance and many more. Cultural club also celebrates all the festivals creating a vibrant atmosphere all around.
                </div>
            </div>
            <div className="flex flex-row justify-around" >

                <div className="w-[40%] text-center font-bold text-3xl font-sans m-3 p-2">
                    Our Handlers
                    <div className="shadow-md shadow-red-500 text-2xl m-3 p-3 rounded-xl">
                    <div className="bg-red-400 rounded-xl">Incharge</div>
                        <div className="flex   justify-evenly  ">
                            <div className="w-[30%] text-xl h-28">
                                <img className="h-full rounded-full w-full" src={incharge.image} />
                            </div>
                            <div className="w-[70%] text-xl h-full my-auto items-center ">
                                <div >{incharge.name}</div>
                                <div className="font-normal text-sm">({incharge.designation})</div>
                            </div>
                        </div>
                    </div>

                    <div className=" shadow-red-600 shadow-md text-2xl m-3 p-3 rounded-xl">
                    <div className="bg-red-400 rounded-xl">President</div>
                        <div className="flex   justify-evenly pt-2 ">
                            <div className="w-[30%] text-xl h-28 ">
                                <img className="h-full rounded-full w-full" src={president.image} />
                            </div>
                            <div className="w-[70%]  text-xl h-full my-auto items-center ">
                                <div className="">{president.name}</div>
                                <div className="font-normal text-sm">({president.currentyear})</div>

                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className="flex-col='true' m-3 w-[50%]">

                    
                <div className="shadow-md shadow-red-500 text-2xl m-3 p-3 rounded-xl space-y-4">
                        <div className="bg-red-300 rounded-xl text-center font-bold text-2xl font-sans  ">Leading Roles</div>
                        <div className="flex flex-row justify-around  mt-3 bg-red-200 rounded-xl">
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
                        
                        <div className="flex flex-row justify-around hover:bg-red-100 mt-2 ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                1.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Davinder
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-red-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                2.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Akshay Jangra
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-red-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                3.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Nirmal
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-red-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                4.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Prashant
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-red-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                5.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Mani Tyagi
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-red-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                6.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Vansh Bhandari
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-1 mb-5 shadow-md shadow-red-500 w-[95%] mx-auto" id="events" >
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
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div> */}
            </div>
            </div>
        </div>
        </div>

    </>)
}


