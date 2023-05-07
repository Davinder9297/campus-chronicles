import { useState } from "react";
import Link from "next/link"
import Navbar from "../../components/navbar"
import TeacherNavbar from "../../components/teacher_navbar"

export default function GenerateAssignment() {
    const [selected, setSelected] = useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };

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

    let type = null;

    let options = <option className="bg-zinc-400 text-center" >-- SELECT SUBJECT --</option >
        ;

    if (selected === "First Semester") {
        type = firstsem;
    } else if (selected === "Second Semester") {
        type = secondsem;
    } else if (selected === "Third Semester") {
        type = thirdsem;
    } else if (selected === "Fourth Semester") {
        type = fourthsem;
    } else if (selected === "Fifth Semester") {
        type = fifthsem;
    } else if (selected === "Sixth Semester") {
        type = sixthsem;
    } else if (selected === "Seventh Semester") {
        type = seventhsem;
    }


    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }

    return (<>

        <div className="">
            <Navbar />
            <TeacherNavbar />

            <div className="">
                <div className=" m-auto text-center text-4xl font-semibold p-4 overflow-hidden w-[100%] mb-2">
                    Assignment Generation
                </div>

                <div className=" m-auto w-[70%] shadow-md  shadow-zinc-900 h-full">
                    <div>
                        <select onChange={changeSelectOptionHandler} name="select1" id="select1" className=" outline cursor-pointer outline-1 w-full outline-gray-300 bg-zinc-600 text-white p-2 text-xl rounded-2xl text-center overflow-auto scrollbar-thin scrollbar-thumb-zinc-900">
                            <option className="bg-zinc-400 " >-- SELECT SEMESTER --</option >
                            <option className="bg-zinc-400 " >First Semester</option >
                            <option className="bg-zinc-400 " >Second Semester</option >
                            <option className="bg-zinc-400 " >Third Semester</option >
                            <option className="bg-zinc-400 " >Fourth Semester</option >
                            <option className="bg-zinc-400 " >Fifth Semester</option >
                            <option className="bg-zinc-400 " >Sixth Semester</option >
                            <option className="bg-zinc-400 " >Seventh Semester</option >
                        </select>
                    </div>
                    <div className="w-full border-2 border-solid border-red-800 ">
                        <select name="select2" id="select2" className=" outline cursor-pointer outline-1 w-full mx-auto outline-gray-300 bg-zinc-600 text-white p-2 text-xl rounded-2xl text-center border-2 border-solid border-red-800 overflow-auto scrollbar-thin scrollbar-thumb-zinc-900 mt-4 pl-16">
                            {options}

                        </select>
                    </div>

                    <div className="w-full m-auto">

                        <div className="border-b-2 border-solid border-zinc-300 mt-5 flex">
                            <div className="text-xl p-2 w-[50%]  text-center">
                                Title of Assignment
                            </div>
                            <div className="w-[50%] my-auto">
                                <input type="text" className="pl-2 h-8 w-[85%] bg-zinc-200" placeholder="Enter the Title here" ></input>
                            </div>

                        </div>
                        <div className="border-b-2 border-solid border-zinc-300 mt-3 flex">
                            <div className="text-xl p-2 w-[50%]  text-center">
                                Attach File
                            </div>
                            <div className="w-[50%] my-auto">
                                <input type="file" className="h-8 w-[85%]"></input>
                            </div>
                        </div>
                        <div className="space-x-16 justify-center flex ">
                            <button className="shadow-amber-400 shadow-inner rounded bg-amber-800 p-2 mt-9 mb-9 px-5 hover:bg-amber-700 hover:text-white ">Upload</button>
                            <button className="shadow-amber-400 shadow-inner rounded bg-amber-800 p-2 mt-9 mb-9 hover:bg-amber-700 hover:text-white "><Link href={"/teacher/view_submitted_assignment"}>View Submitted Assignments</Link></button>
                            <button className="shadow-amber-400 shadow-inner rounded bg-amber-800 p-2 mt-9 mb-9 px-5 hover:bg-amber-700 hover:text-white ">Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>)
}
