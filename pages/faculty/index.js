import Link from "next/link"
import Navbar from "../../components/navbar"
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function fac() {
const [data, setdata] = useState([])
    useEffect(() => {
        const url = "http://localhost:3000/api/facultycredentials";     
        const fetchData = async () => {
          try {
            // setspin('')
            let response = await fetch(url);
            let json = await response.json();
            setdata(json)
    //   console.log(json);
           
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
      let router=useRouter()
      const nextpage=(facultyname)=>{
        // router.push(facultyname)
        Cookies.set('facultyname',facultyname);
        router.push('/faculty/update')
      }
    return (<>
        <div>
            <Navbar className="shadow-sm" />
            <div>
                <div className="mt-3 p-2 text-center text-4xl font-semibold">
                    Our Faculty and Other Staff
                </div >
                <div className="w-[90%] border-2 border-solid border-red-700 mt-2 mx-auto p-2 flex flex-wrap justify-around">
                    {data.map((da,index)=>{
const {facultyname,image}=da;
                        return(
                            <>
                            <div className="h-64 w-72 border-2 border-solid border-emerald-700 p-2 shadow-lg mt-3 shadow-zinc-800 rounded ">
                        <img src={image} className="h-36 w-36 mx-auto rounded-full border-2 shadow-md shadow-zinc-400 border-solid border-purple-900"/>
                        <div className="border-2 border-solid border-purple-900 text-center text-xl mt-2">
                           {facultyname}
                        </div>
                        <button onClick={()=>(nextpage(facultyname))} className="w-full bg-amber-800 text-center shadow-inner shadow-yellow-500 p-1 mt-3 rounded hover:text-white" >
View Profile
                        </button>
                    </div>
                            </>
                        )
                    })}
                    

                    {/* <div className="h-64 w-72 border-2 border-solid border-emerald-700 p-2 shadow-lg mt-3 shadow-zinc-800 rounded ">
                        <img src="/teacher.jpg" className="h-36 w-36 mx-auto rounded-full border-2 shadow-md shadow-zinc-400 border-solid border-purple-900"/>
                        <div className="border-2 border-solid border-purple-900 text-center text-xl mt-2">
                            Dr. Monika Sachdeva
                        </div>
                        <div className="w-full bg-amber-800 text-center shadow-inner shadow-yellow-500 p-1 mt-3 rounded hover:text-white" >
                            <button>View Profile</button>
                        </div>
                    </div>

                    <div className="h-64 w-72 border-2 border-solid border-emerald-700 p-2 shadow-lg mt-3 shadow-zinc-800 rounded ">
                        <img src="/teacher.jpg" className="h-36 w-36 mx-auto rounded-full border-2 shadow-md shadow-zinc-400 border-solid border-purple-900"/>
                        <div className="border-2 border-solid border-purple-900 text-center text-xl mt-2">
                            Dr. Monika Sachdeva
                        </div>
                        <div className="w-full bg-amber-800 text-center shadow-inner shadow-yellow-500 p-1 mt-3 rounded hover:text-white" >
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className="h-64 w-72 border-2 border-solid border-emerald-700 p-2 shadow-lg mt-3 shadow-zinc-800 rounded ">
                        <img src="/teacher.jpg" className="h-36 w-36 mx-auto rounded-full border-2 shadow-md shadow-zinc-400 border-solid border-purple-900"/>
                        <div className="border-2 border-solid border-purple-900 text-center text-xl mt-2">
                            Dr. Monika Sachdeva
                        </div>
                        <div className="w-full bg-amber-800 text-center shadow-inner shadow-yellow-500 p-1 mt-3 rounded hover:text-white" >
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className="h-64 w-72 border-2 border-solid border-emerald-700 p-2 shadow-lg mt-3 shadow-zinc-800 rounded ">
                        <img src="/teacher.jpg" className="h-36 w-36 mx-auto rounded-full border-2 shadow-md shadow-zinc-400 border-solid border-purple-900"/>
                        <div className="border-2 border-solid border-purple-900 text-center text-xl mt-2">
                            Dr. Monika Sachdeva
                        </div>
                        <div className="w-full bg-amber-800 text-center shadow-inner shadow-yellow-500 p-1 mt-3 rounded hover:text-white" >
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className="h-64 w-72 border-2 border-solid border-emerald-700 p-2 shadow-lg mt-3 shadow-zinc-800 rounded ">
                        <img src="/teacher.jpg" className="h-36 w-36 mx-auto rounded-full border-2 shadow-md shadow-zinc-400 border-solid border-purple-900"/>
                        <div className="border-2 border-solid border-purple-900 text-center text-xl mt-2">
                            Dr. Monika Sachdeva
                        </div>
                        <div className="w-full bg-amber-800 text-center shadow-inner shadow-yellow-500 p-1 mt-3 rounded hover:text-white" >
                            <button>View Profile</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>)
}
