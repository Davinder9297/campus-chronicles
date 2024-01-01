import { useState } from "react";
import { useEffect } from "react";

export default function Events() {
    
    const [data, setdata] = useState([])
    let temp=[];
    useEffect(() => {
        const url = "http://localhost:3000/api/events";
        // const url1 = "http://localhost:3000/api/placementevents";
      
      
        const fetchData = async () => {
          try {
            let response = await fetch(url);
            let json = await response.json();
            // setdata(json)       
            // console.log(json)
            for(let i=0;i<6;i++){
                temp.push(json[i])
            }
            setdata(temp)
        //    temp.map((d)=>{
        //     console.log(d)
        //    })
            // console.log(temp)
          } catch (error) {
            alert('No Internet')
            console.log("error", error);
          }
        };
      
        fetchData();
      }, []);
    return (<>
        <div className="flex-col mt-10 xsm:w-[90%] xsm:mx-auto" id="events" >
            <div className="text-center text-3xl font-semibold font-serif text-gray-600 xsm:text-2xl">Events At Campus</div>
            <div className="flex justify-center"><img src="hr.png" alt="" /></div>
            <div className="flex justify-center w-full">
            <div className="flex flex-wrap w-full h-auto justify-between mt-4 max-w-[1250px] ">
         {
            data.map((de,index)=>{
                // console.log(de)
                const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date(de.date);
    let name = month[d.getMonth()];
    let s = d.getDate() + " " + name + " " + d.getFullYear();
                return(
                    <div key={index} className="flex-col h-[400px] border-2 w-[350px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-300 ease-in xsm:h-auto">
                    <div className=""><img className="rounded-t w-[350px] h-52 xsm:h-44" src={de.image} alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-yellow-500 px-1 mt-1 text-xs py-1 rounded-tr rounded-br text-white">{de.eventname}</div>
                        <div className="bg-amber-900 mt-1 text-xs px-1 py-1 rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold text-justify xsm:text-sm">{de.title}</div>
                    <div className="px-1 xsm:text-xs mt-1 text-justify">{de.description.substr(0,300)}..</div>
                    {/* <div className="w-full  text-sm rounded-xl py-2 bg-amber-900 text-center text-white"><button>View more images</button></div> */}
                </div>
                )
                })
         }
               
                {/* <div className="flex-col h-[420px] border-2 w-[350px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-300 ease-in xsm:h-auto ">
                    <div className=""><img className="rounded-t w-[350px] h-52 xsm:h-44" src="e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-yellow-500 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-amber-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold text-justify xsm:text-sm">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1 xsm:text-xs mt-1 text-justify">It is well organized by our students and there were many activities like skit, singing, mimicry, anchoring, dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-900 text-center text-white"><button>View more images</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-300 ease-in xsm:h-auto ">
                    <div className=""><img className="rounded-t w-[350px] h-52 xsm:h-44" src="e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-yellow-500 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-amber-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold text-justify xsm:text-sm">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1 xsm:text-xs mt-1 text-justify">It is well organized by our students and there were many activities like skit, singing, mimicry, anchoring, dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-900 text-center text-white"><button>View more images</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-300 ease-in xsm:h-auto ">
                    <div className=""><img className="rounded-t w-[350px] h-52 xsm:h-44" src="e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-yellow-500 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-amber-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold text-justify xsm:text-sm">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1 xsm:text-xs mt-1 text-justify">It is well organized by our students and there were many activities like skit, singing, mimicry, anchoring, dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-900 text-center text-white"><button>View more images</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-300 ease-in xsm:h-auto xsm:hidden">
                    <div className=""><img className="rounded-t w-[350px] h-52 xsm:h-44" src="e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-yellow-500 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-amber-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1 text-justify">It is well organized by our students and there were many activities like skit, singing, mimicry, anchoring, dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-900 text-center text-white"><button>View more images</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-300 ease-in xsm:h-auto xsm:hidden">
                    <div className=""><img className="rounded-t w-[350px] h-52 xsm:h-44" src="e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-yellow-500 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-amber-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1 text-justify">It is well organized by our students and there were many activities like skit, singing, mimicry, anchoring, dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-900 text-center text-white"><button>View more images</button></div>
                </div> */}
            </div>
            </div>
        </div>
    </>)
  }