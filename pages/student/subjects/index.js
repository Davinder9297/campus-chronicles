import Link from "next/link"
import Navbar from "../../../components/navbar"
import { FaPowerOff } from "react-icons/fa"
import { GrView } from "react-icons/gr"
import { FaDownload } from "react-icons/fa"
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { useEffect, useState } from "react"
import { CgShapeRhombus } from 'react-icons/cg'
import Cookies from "js-cookie"
import { Router, useRouter } from "next/router"
// import { useRouter } from "next/router"


export default function View_assign(props) {
let router=useRouter();
const [data, setdata] = useState([])
const [spin, setspin] = useState('')
const showassignment=(da)=>{
Cookies.set('subject',da)
router.push('/student/subjects/view_assignments')
}

const firstsem = [
    "Mathematics 1",
    "Engineering Drawing",
    "Semiconductor Physics",
    "Semiconductor Physics (Lab)",
    "Basic Electrical Engineering",
    "Basic Electrical Engineering (Lab)",
];
const secondsem = [
    "English",
    "Chemistry",
    "English (Lab)",
    "Mathematics 2",
    "Chemistry (Lab)",
    "Workshop for Manufacturing",
    "Programming for Problem Solving",
    "Programming for Problem Solving (Lab)"
];

const thirdsem = [
    "DE",
    "DSA",
    "OOP",
    "DE (Lab)",
    "DSA (Lab)",
    "OOP (Lab)",
    "Humanities",
    "IT Workshop",
    "Mathematics 3",
];

const fourthsem = [
    "OS",
    "DAA",
    "COA",
    "OS (Lab)",
    "DAA (Lab)",
    "COA (Lab)",
    "Mathematics 4",
];

const fifthsem = [
    "CN",
    "SE",
    "ERP",
    "FLAT",
    "DBMS",
    "SE (Lab)",
    "CN (Lab)",
    "DBMS (Lab)",
    "Programmming in Python",
    "Programmming in Python (Lab)",
];

const sixthsem = [
    "AI",
    "ML",
    "CD",
    "CC",
    "HRM",
    "AI (Lab)",
    "ML (Lab)",
    "CD (Lab)",
    "CC (Lab)",
];

const seventhsem = [
    "DL",
    "ML",
    "CD",
    "CC",
    "HRM",
    "ML (Lab)",
    "CD (Lab)",
    "DL (Lab)",
    "CC (Lab)",
];



useEffect(() => {
setspin('')
 let sem=Cookies.get('sem')
 if (sem === "1st") {
    setdata(firstsem);
} else if (sem === "2nd") {
    setdata(secondsem);
} else if (sem === "3rd") {
    setdata(thirdsem);
} else if (sem === "4th") {
    setdata(fourthsem);
} else if (sem === "5th") {
    setdata(fifthsem);
} else if (sem === "6th") {
    setdata(sixthsem);
} else if (sem === "7th") {
    setdata(seventhsem);
}
setspin('hidden')
}, []);

    return (<>
        <div className="h-screen ">
            <Navbar class="shadow-md" />
            <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 " />
                <div className="logout_stu text-base">Logout</div>
            </div>
            <div className=" w-[95%] m-auto h-[80%]">
                <div className=" m-auto text-center text-4xl font-semibold p-4 overflow-hidden h-[100%] ">
                    View Assignment
                    <div className=" w-[95%] shadow-md shadow-slate-400 text-[60%] h-[100%] m-auto mt-3 ">
                        
                        <div className={`m-auto  h-[80%] w-[95%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-900 text-sm px-2 `}>
                            <div className="bg-slate-200 p-2 text-xl rounded-2xl">
                                Select Subject
                            </div>
                            <div className="flex justify-center space-x-3 mt-4 w-[100%] m-auto flex-wrap ">
                            <div className={`text-center flex w-full justify-center items-center h-full absolute top-0 left-0
 z-10 ${spin} `}>
<div className="spinner-border" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
</div>
                                {data.map((da)=>{
                                    return(<>
                                    <button onClick={()=>(showassignment(da))} className="h-20 w-[30%] bg-gradient-to-r from-[#ffafbd]  to-[#ffc3a0] rounded-lg mx-2 my-2 cursor-pointer hover:scale-105 hover:bg-red-400- transition duration-150 flex ">
                                        <div className=" m-auto pr-3 text-lg">
                                           {da}
                                        </div>
                                    </button>
                                    </>)
                                })}
                                

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>)


}
