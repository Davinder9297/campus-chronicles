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

        <div className=" w-full ">
        <div className=" h-36 flex justify-around w-[100%]  shadow-md shadow-red-500 items-center xsm:block">
                <div className="xsm:w-[100%] xsm:flex xsm:justify-center w-[15%] " >
                    <img className="xsm:h-20 w-full h-36 xsm:w-auto" src="/cultural_tile.png" />
                    </div>
                    <div className="flex justify-center w-[70%] xsm:w-[100%]">
                    <img className="h-36 w-[70%] xsm:h-16 xsm:w-[80%] " src="/cultural_tile1.jpg" />
                    </div>
            </div>

            <div className="  text-center font-bold text-3xl mt-2 font-sans p-2 xsm:text-2xl">
                About us....
                <div className="mx-3 font-normal text-lg shadow-md shadow-red-500 rounded-xl p-2 text-justify xsm:text-sm">
                    Culture club helps in encouraging talent of the students. Club activities help students to develop a sense of unity and teamwork, learning how to work with others in reaching the same goals. This club help learners develop social skills and give students an open floor to build confidence and work on their performance anxiety.Because of the comfortable environment, conversations flow easily and everyone is open to new ideas.
                    Events include competitions such as instrumental,singing dance and many more. Cultural club also celebrates all the festivals creating a vibrant atmosphere all around.
                </div>
            </div>
            <div className="flex flex-row justify-around xsm:block" >

                <div className="w-[40%] text-center font-bold text-3xl font-sans m-3 p-2 xsm:w-[90%] xsm:mx-auto xsm:text-2xl">
                    Our Handlers
                    <div className="shadow-md shadow-red-500 text-2xl m-3 p-3 rounded-xl xsm:text-xl">
                        <div className="bg-red-400 rounded-xl">Incharge</div>
                        <div className="flex   justify-evenly  ">
                            <div className="w-[30%] text-xl h-28 xsm:h-24">
                                <img className="h-full rounded-full w-full" src={incharge.image} />
                            </div>
                            <div className="w-[70%] text-xl h-full my-auto items-center xsm:text-lg">
                                <div >{incharge.name}</div>
                                <div className="font-normal text-sm xsm:text-xs">({incharge.designation})</div>
                            </div>
                        </div>
                    </div>

                    <div className=" shadow-red-600 shadow-md text-2xl m-3 p-3 rounded-xl xsm:text-xl">
                        <div className="bg-red-400 rounded-xl">President</div>
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
                <div className="flex-col='true' m-3 w-[50%] xsm:w-[90%] xsm:mx-auto">


                    <div className="shadow-md shadow-red-500 text-2xl m-3 p-3 rounded-xl space-y-4">
                        <div className="bg-red-300 rounded-xl text-center font-bold text-2xl font-sans xsm:text-xl ">Leading Roles</div>
                        <div className="flex flex-row justify-around  mt-3 bg-red-200 rounded-xl">
                            <div className="w-[20%] text-xl h-[58] p-1 xsm:text-base font-semibold ">
                                Sno.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1  xsm:text-base font-semibold ">
                                Name
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1 font-semibol  xsm:text-base">
                                Year
                            </div>
                        </div>

                        <div className="flex flex-row justify-around hover:bg-red-100 mt-2 ">
                            <div className="w-[20%] text-xl h-[58] p-1 xsm:text-base">
                                1.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1 xsm:text-base">
                                Davinder
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1  xsm:text-base">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-red-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1 xsm:text-base">
                                2.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1 xsm:text-base">
                                Akshay Jangra
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1  xsm:text-base">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-red-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1 xsm:text-base">
                                3.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1 xsm:text-base">
                                Nirmal
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1  xsm:text-base">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-red-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1 xsm:text-base">
                                4.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1 xsm:text-base">
                                Prashant
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1  xsm:text-base">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-red-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1 xsm:text-base">
                                5.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1 xsm:text-base">
                                Mani Tyagi
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1  xsm:text-base">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-red-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1 xsm:text-base">
                                6.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1 xsm:text-base">
                                Vansh Bhandari
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1  xsm:text-base">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-1 mb-5 shadow-md shadow-red-500 w-[95%] mx-auto" id="events" >
                <div className="text-center font-bold text-3xl font-sans xsm:text-2xl">Our Events....</div>
                <div className="flex justify-center w-full xsm:w-[90%]">
                    <div className="flex flex-wrap w-full h-auto justify-evenly mt-4 max-w-[1250px]  xsm:w-[90%]">
                        {events.map((data, index) => {
                            const { title, image, description } = data;
                            return (<>
                                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5 hover:scale-105 transition duration-200 ease-in">
                                    <div className=""><img className="rounded-t w-[350px] h-52" src={image} alt="" /></div>
                                    <div className="flex justify-between">
                                        <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                        <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                                    </div>
                                    <div className="px-1 mt-3 font-bold xsm:text-base">{title}</div>
                                    <div className="px-1  xsm:text-sm">{description}</div>
                                </div>

                            </>)
                        })}
                    </div>
                </div>
            </div>
        </div>

    </>)
}


