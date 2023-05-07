import { useState } from "react";
import Link from "next/link"
import Navbar from "../../components/navbar"
import TeacherNavbar from "../../components/teacher_navbar"

export default function Student_record() {
    const [selected, setSelected] = useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };

    const firstyear = [
        "All Students",
        "Group 1",
        "Group 2",
    ];
    const secondyear = [
        "All Students",
        "Group 1",
        "Group 2",
    ];
    const thirdyear = [
        "All Students",
        "Group 1",
        "Group 2",
    ];

    const fourthyear= [
        "All Students",
        "Group 1",
        "Group 2",
    ];


    let type = null;

    let options = <option className="bg-zinc-400 text-center" >-- SELECT TYPE --</option >
        ;

    if (selected === "First Year") {
        type = firstyear;
    } else if (selected === "Second Year") {
        type = secondyear;
    } else if (selected === "Third Year") {
        type = thirdyear;
    } else if (selected === "Fourth Year") {
        type = fourthyear;
    } 


    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }

    return (<>

        <div className="">
            <Navbar />
            <TeacherNavbar />

            <div className="">
                <div className=" m-auto text-center text-4xl font-yearibold p-4 overflow-hidden w-[100%] mb-2">
                    Student Record
                </div>

                <div className=" m-auto w-[70%] shadow-md  shadow-zinc-900 h-full">
                    <div>
                        <select onChange={changeSelectOptionHandler} name="select1" id="select1" className=" outline cursor-pointer outline-1 w-full outline-gray-300 bg-zinc-600 text-white p-2 text-xl rounded-2xl text-center overflow-auto scrollbar-thin scrollbar-thumb-zinc-900">
                            <option className="bg-zinc-400 " >-- SELECT YEAR --</option >
                            <option className="bg-zinc-400 " >First Year</option >
                            <option className="bg-zinc-400 " >Second Year</option >
                            <option className="bg-zinc-400 " >Third Year</option >
                            <option className="bg-zinc-400 " >Fourth Year</option >
                        </select>
                    </div>
                    <div className="w-full ">
                        <select name="select2" id="select2" className=" outline cursor-pointer outline-1 w-full mx-auto outline-gray-300 bg-zinc-600 text-white p-2 text-xl rounded-2xl text-center overflow-auto scrollbar-thin scrollbar-thumb-zinc-900 mt-4 pl-16">
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
