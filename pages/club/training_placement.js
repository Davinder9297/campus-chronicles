import { useEffect } from "react";
import { useState } from "react";

export default function Codingclub(){
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
            console.log(json);
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

        <div className=" w-full">
            <div className=" h-36 flex justify-around  shadow-md shadow-gray-500 items-center">
            <img className="w-full h-36" src="/coding_tile.png" />

            </div>

            <div className="w-[95%] mx-auto">

                <div className="  text-center font-bold text-3xl mt-2 font-sans p-2">
                    About us....
                    <div className="mx-3 font-normal text-lg shadow-md shadow-gray-500 rounded-xl p-2 text-justify">
                    The Training and Placement Cell (T&P Cell) is a critical department in educational institutions. Its primary function is to bridge the gap between the industry and academia. Here are five purposes of a T&P Cell:<br />
                            <div className="text-lg">
                                1) <strong>To provide employment opportunities: </strong>The cell works closely with various companies and organizations to bring job opportunities to students. <br />
                                2) <strong>To organize training programs:</strong> The T&P Cell also organizes training programs to help students enhance their skills and prepare them for the recruitment process. These programs can be in the form of workshops
                                seminars, or guest lectures. <br />
                                3) <strong>To conduct placement drives: </strong>It conducts placement drives. This involves inviting companies to the campus and facilitating the recruitment process for students. <br />
                                4) <strong>To maintain industry-institution relations:</strong> The T&P Cell acts as a bridge between the industry and the institution, thereby maintaining strong industry-institution relations. This helps in creating a favorable
                                environment for students to get placed. <br />
                                5) <strong>To provide career guidance:</strong> The T&P Cell also provides career guidance to students. This includes information on various career options, job profiles, and the skills required for specific job roles. This guidance can help students make informed decisions about their career paths.
                    </div>
                </div>
            </div>
            <div className="flex justify-around w-full" >

                <div className="w-[40%] text-center font-bold text-3xl font-sans mt-3 p-2">
                    Our Handlers
                    <div className="shadow-md shadow-gray-500 text-2xl m-3 p-3 rounded-xl  ">
                        <div className="bg-gray-300 rounded-xl">Incharge</div>
                        <div className="flex flex-row  justify-around  ">
                            <div className="w-[40%] text-xl h-28">
                                <img className="h-full w-full" src={incharge.image} />
                            </div>
                            <div className="w-[95%] text-xl h-full my-auto items-center m-auto">
                                <div >{incharge.name}</div>
                                <div className="font-normal text-sm">({incharge.designation})</div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md shadow-gray-500 text-2xl m-3 p-3 rounded-xl  ">
                        <div className="bg-gray-300 rounded-xl">President</div>
                        <div className="flex flex-row  justify-around  ">
                            <div className="w-[40%] text-xl h-28">
                                <img className="h-full w-full" src={president.image} />
                            </div>
                            <div className="w-[95%] text-xl h-full my-auto items-center m-auto">
                                <div className="">{president.name}</div>
                                <div className="font-normal text-sm">({president.currentyear})</div>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex-col='true'  w-[50%] ">

                    <div className=" text-center font-bold text-3xl font-sans mt-3 p-2 mx-auto ">

                        Leading Roles
                        <div className="shadow-md shadow-gray-500 text-2xl p-1 rounded-xl space-y-1">
                        <div className="flex flex-row justify-around  mt-3 bg-gray-300 rounded-xl">
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
                        <div className="flex flex-row justify-around hover:bg-gray-100 mt-2 ">
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
                        {/* <div className="flex flex-row justify-around hover:bg-gray-100 mt-2 ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                1.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Shivam Kumar
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                2.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Siddhart Parashar
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                            3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                3.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Aryan
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                4.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Aditya
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                5.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Gurjot
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                6.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Gurjot
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                7.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Prashant
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                            2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                8.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                            Mani
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                            2<sup>nd</sup> Year
                            </div>
                        </div> */}
                        
                    </div>
                    </div>
                </div>
            </div >
            <div className="flex-col mt-1 mb-5 shadow-md shadow-gray-500 w-[95%] mx-auto" id="events" >
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
        </div>

    </>)
}


