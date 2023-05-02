import { Link } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export default function Culturalclub() {  
    const [president, setpresident] = useState({})
    const [incharge, setincharge] = useState({})
    const [leadingrole, setleadingrole] = useState([])
    const [events, setevents] = useState([])
    useEffect(() => {
        const url = "http://localhost:3000/api/culturalclub";     
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
            <div className=" w-full h-36 overflow-hidden shadow-md shadow-red-600 ">
                <img className="h-full" src="/cultural_tile.png" />
            </div>
            <div className="flex flex-row " >
                <div className="w-[40%] text-center font-bold text-3xl font-sans m-3 p-2">
                    Our Handlers
                    <div className=" shadow-red-600 shadow-md text-2xl m-3 p-3 rounded-xl">
                    <div className="bg-red-400 rounded-xl">Incharge</div>
                        <div className="flex   justify-evenly  ">
                            <div className="w-[30%] text-xl h-28">
                                <img className="h-full rounded-full w-full" src={incharge.image} />
                            </div>
                            <div className="w-[70%] text-xl h-full my-auto items-center ">
                                <div >{incharge.facultyname}</div>
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

                    <div className=" shadow-red-600 shadow-md text-2xl m-3 p-3 rounded-xl">
                    <div className="bg-red-400 rounded-xl">Leading Roles</div>
                        <div className="flex flex-row justify-around  mt-3 bg-red-300 rounded-xl">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                Sno.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Name
                            </div>
                            <div className=" w-[25%] text-xl h-[58] text-left p-1">
                                Year
                            </div>
                        </div>
                        {leadingrole.map((dat,index)=>{
                            const {name,currentyear}=dat;
                            return(<>
                                <div className="flex flex-row justify-around hover:bg-red-100 mt-2 ">
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
                                   <div className="flex flex-row justify-around hover:bg-red-100 mt-2 ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                3.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                              gf
                            </div>
                            <div className=" w-[25%] text-xl h-[58] text-left p-1">
                                fa
                            </div>
                        </div>
                                   <div className="flex flex-row justify-around hover:bg-red-100 mt-2 ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                3.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                              gf
                            </div>
                            <div className=" w-[25%] text-xl h-[58] text-left p-1">
                                fa
                            </div>
                        </div>
                                   <div className="flex flex-row justify-around hover:bg-red-100 mt-2 ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                3.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                              gf
                            </div>
                            <div className=" w-[25%] text-xl h-[58] text-left p-1">
                                fa
                            </div>
                        </div>
                                   <div className="flex flex-row justify-around hover:bg-red-100 mt-2 ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                3.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                              gf
                            </div>
                            <div className=" w-[25%] text-xl h-[58] text-left p-1">
                                fa
                            </div>
                        </div>
                                   <div className="flex flex-row justify-around hover:bg-red-100 mt-2 ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                3.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                              gf
                            </div>
                            <div className=" w-[25%] text-xl h-[58] text-left p-1">
                                fa
                            </div>
                        </div>
                                   <div className="flex flex-row justify-around hover:bg-red-100 mt-2 ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                3.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                              gf
                            </div>
                            <div className=" w-[25%] text-xl h-[58] text-left p-1">
                                fa
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col  w-[68%]">
                    <div className="  text-center font-bold text-3xl font-sans p-2">
                        About us....
                        <div className="m-3 font-normal text-xl shadow-red-600 shadow-md rounded-xl p-2 text-justify">
                        Culture club helps in encouraging talent of the students. Club activities help students to develop a sense of unity and teamwork, learning how to work with others in reaching the same goals. This club help learners develop social skills and give students an open floor to build confidence and work on their performance anxiety.Because of the comfortable environment, conversations flow easily and everyone is open to new ideas.
                        Events include competitions such as instrumental,singing dance and many more. Cultural club also celebrates all the festivals creating a vibrant atmosphere all around.
                        </div>
                    </div>
                    <div className="text-center font-bold text-3xl font-sans bg-slate-500   p-2  shadow-red-600 shadow-md rounded-xl ">
                        Our Events....
                        <div className="flex-col ">
                            <div className="flex flex-wrap justify-center pt-2 space-x-5  space-y-5 scrollbar-thin max-h-[585px] overflow-y-auto scrollbar-track-violet-50 scrollbar-thumb-red-600">

                                {events.map((data,index)=>{
                                    const {title,image,description}=data;
                                    return(<>                                   
                                    <div className=" shadow-red-600 shadow-md   rounded-xl cursor-pointer hover:scale-105 transition duration-150 w-[46%]">
                                    <div className="flex-col">
                                        <img className="rounded-xl h-56 w-full" src={image} />
                                        <div className="text-red-600 h-auto text-xl overflow-hidden mt-2">
                                            {title}
                                            <div className="text-black mt-2  text-justify font-normal text-sm p-2 ">{description}</div>
                                            <div>
                                                <button className="text-black bg-red-300 w-full rounded-xl mt-3 p-1 font-semibold">View Event</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>)
                                })}
<div className=" shadow-red-600 shadow-md h-auto mb-2 rounded-xl cursor-pointer hover:scale-105 transition duration-150 w-[46%]">
                                    <div className="flex-col">
                                        <img className="rounded-xl h-56 w-full" src="/1.jpg" />
                                        <div className="text-red-600 h-auto text-xl overflow-hidden mt-2">
                                           df
                                            <div className="text-black mt-2  text-justify font-normal text-sm p-2 ">description</div>
                                            <div>
                                                <button className="text-black bg-red-300 w-full rounded-xl mt-3 p-1 font-semibold">View Event</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                            {/* <div className="font-semibold text-center text-2xl bg-red-400 p-1 ml-8 mr-8 rounded-xl"> */}
                                {/* <Link>
                                    Load more Events
                                </Link>  */}
                            {/* </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>)
}


