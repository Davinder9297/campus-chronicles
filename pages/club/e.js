import { useEffect } from "react";
import { useState } from "react";
export default function Ecell() {
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
                // console.log(json.event);
                console.log(json.incharge);

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
            <div className=" h-36 flex justify-around w-[100%]  shadow-md shadow-yellow-500 items-center xsm:block">
                <div className="xsm:w-[100%] xsm:flex xsm:justify-center w-[17%] " >
                    <img className="xsm:h-20 w-full h-36 xsm:w-auto" src="/e-cell.png" />
                    </div>
                    <div className="flex justify-center w-[70%] xsm:w-[100%]">
                    <img className="h-36 w-[100%] xsm:h-16 xsm:w-full " src="/e-cell_tile.png" />
                    </div>

            </div>

            <div className="w-[95%] mx-auto">

                <div className="  text-center font-bold text-3xl mt-2 font-sans p-2 xsm:text-2xl">
                    About us....
                    <div className="mx-3 font-normal text-lg shadow-md shadow-yellow-500 rounded-xl p-2 text-justify  xsm:text-sm">
                    Entrepreneurship cell is dedicated to promoting the spirit of entrepreneurship among students. The basic aim of E-Cell is to encourage students today to start their own enterprise. The basic purpose of E-Cell is :<br />
                    <div className="text-base xsm:text-xs">
                        1) <strong>Encouraging Entrepreneurial Thinking:</strong>  It aims to instil an entrepreneurial mindset by providing access to resources, training, and mentorship that fosters creative thinking and problem- solving.<br />
                        2) <strong>Supporting Startup Ventures:</strong> E-Cell provides support to students who have startup ideas. This support may include access to funding, mentorship, infrastructure, networking opportunities, and other resources.<br />
                        3) <strong>Building a Network:</strong> An entrepreneurship cell serves as a platform for students to connect with like minded individuals, successful entrepreneurs, investors, and industry experts. The network bal
                        helps students to develop connections that are valuable in launching and growing a business.<br />
                        4) <strong>Promoting Innovation: </strong>Entrepreneurship cells aim to promote innovation and creativity among students by providing them with access to resources and opportunities that encourage them to come up with innovative ideas and solutions to problems.<br />
                        5) <strong>Creating Social Impact:</strong> Entrepreneurship cells may have a social impact focus and promote social entrepreneurship, which involves developing solutions to social problems while creating sustainable businesses that have a positive impact on society. The entrepreneurship cell may aim to suppor ventures that address social and environmental challenges while also generating economic value.
                    </div>
                </div>
            </div>
            </div>
            <div className="flex justify-around w-full xsm:block" >

                <div className="w-[40%] text-center font-bold text-3xl font-sans mt-3 p-2 xsm:w-[90%] xsm:mx-auto xsm:text-2xl">
                    Our Handlers
                    <div className="shadow-md shadow-yellow-500 text-2xl m-3 p-3 rounded-xl  xsm:text-xl ">
                        <div className="bg-yellow-300 rounded-xl">Incharge</div>
                        <div className="flex   justify-evenly  ">
                            <div className="w-[30%] text-xl h-28 xsm:h-24">
                                <img className="h-full rounded-full w-full" src={incharge.image} />
                            </div>
                            <div className="w-[70%] text-xl h-full my-auto items-center xsm:text-lg">
                                <div >{incharge.name}</div>
                                {/* <div className="font-normal text-sm xsm:text-xs">({incharge.designation})</div> */}
                            </div>
                        </div>
                    </div>


                    <div className="shadow-md shadow-yellow-500 text-2xl m-3 p-3 rounded-xl  xsm:text-xl ">
                        <div className="bg-yellow-300 rounded-xl">President</div>
                        <div className="flex   justify-evenly pt-2 ">
                            <div className="w-[30%] text-xl h-28 xsm:h-24 ">
                                <img className="h-full rounded-full w-full" src={president.image} />
                            </div>
                            <div className="w-[70%]  text-xl h-full my-auto items-center xsm:text-lg ">
                                <div className="">{president.name}</div>
                                <div className="font-normal text-sm xsm:text-xs">({president.currentyear})</div>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex-col='true' w-[50%]  xsm:w-[90%] xsm:mx-auto">

                    <div className=" text-center font-bold text-3xl font-sans mt-3 p-2 mx-auto xsm:text-2xl">

                        Leading Roles
                        <div className="shadow-md shadow-yellow-500 text-2xl p-1 rounded-xl space-y-3">
                            <div className="flex flex-row justify-around  mt-3 bg-yellow-300 rounded-xl">
                                <div className="w-[20%] text-xl h-[58] p-1 font-semibold xsm:text-base">
                                    Sno.
                                </div>
                                <div className=" w-[55%] text-xl h-[58] text-left p-1 font-semibold xsm:text-base">
                                    Name
                                </div>
                                <div className=" w-[20%] text-xl h-[58] text-left p-1 font-semibold xsm:text-base">
                                    Year
                                </div>
                            </div>
                            {leadingrole.map((dat, index) => {
                                const { name, currentyear } = dat;
                                return (<>
                                    <div className="flex flex-row justify-around hover:bg-yellow-100 mt-2 ">
                                        <div className="w-[20%] text-xl h-[58] p-1 xsm:text-base">
                                            {index + 1}.
                                        </div>
                                        <div className=" w-[55%] text-xl h-[58] text-left p-1 xsm:text-base">
                                            {name}
                                        </div>
                                        <div className=" w-[25%] text-xl h-[58] text-left p-1 xsm:text-base">
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
                        <div className="flex flex-row justify-around hover:bg-yellow-100  ">
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
                        <div className="flex flex-row justify-around hover:bg-yellow-100  ">
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
                        <div className="flex flex-row justify-around hover:bg-yellow-100  ">
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
                        <div className="flex flex-row justify-around hover:bg-yellow-100  ">
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
                        <div className="flex flex-row justify-around hover:bg-yellow-100  ">
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
                        <div className="flex flex-row justify-around hover:bg-yellow-100  ">
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
            <div className="flex-col mt-1 mb-5 shadow-md shadow-yellow-500 w-[95%] mx-auto" id="events" >
                <div className="text-center font-bold text-3xl font-sans xsm:text-2xl">Our Events....</div>
                <div className="flex justify-center w-full xsm:w-[90%]">
                    <div className="flex flex-wrap w-full h-auto justify-evenly mt-4 max-w-[1250px]  xsm:w-[90%]">
                        {events.map((data, index) => {
                               const { title, image, description,eventname,date } = data;
                               const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                               const d = new Date(date);
                               let name = month[d.getMonth()];
                               let s = d.getDate() + " " + name + " " + d.getFullYear();
                            return (<>
                                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5 hover:scale-105 transition duration-200 ease-in">
                                    <div className=""><img className="rounded-t w-[350px] h-52" src={image} alt="" /></div>
                                    <div className="flex justify-between">
                                        <div className="bg-yellow-400 px-1 mt-1 text-xs py-1 rounded-tr rounded-br text-white">{eventname}</div>
                                        <div className="bg-amber-800 mt-1 text-xs px-1 py-1 rounded-tl rounded-bl text-white">{s}</div>
                                    </div>
                                    <div className="px-1 mt-3 font-bold xsm:text-base">{title}</div>
                                    <div className="px-1  xsm:text-sm">{description.substr(0,150)}..</div>
                                </div>

                            </>)
                        })}
                    </div>
                </div>
            </div>
            {/* <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div> */}

        </div>

    </>)
}


