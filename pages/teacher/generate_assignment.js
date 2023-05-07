import { useState } from "react";
import Link from "next/link"
import Navbar from "../../components/navbar"
import TeacherNavbar from "../../components/teacher_navbar"

export default function GenerateAssignment() {
    const [selected, setSelected] = useState("");

    const changeSelectOptionHandler = (event) => {
      setSelected(event.target.value);
    };
  
    /** Different arrays for different dropdowns */
    const firstsem = [
      "Basic Electrical Engineering",
      "Basic Electrical Engineering (Lab)",
      "Engineering Drawing",
      "Mathematics 1",
      "Semiconductor Physics",
      "Semiconductor Physics (Lab)"
    ];
    const secondsem = [
      "Chemistry",
      "Chemistry (Lab)",
      "English",
      "English (Lab)",
      "Mathematics 2",
      "Workshop for Manufacturing",
      "Programming for Problem Solving",
      "Programming for Problem Solving (Lab)"
    ];
  
    const thirdsem = [
      "DSA",
      "DSA (Lab)",
      "OOP",
      "OOP (Lab)",
      "Humanities",
      "IT Workshop",
      "DE (Lab)",
      "DE",
      "Mathematics 3",
    ];
  
    const fourthsem = [
      "DAA",
      "DAA (Lab)",
      "OS",
      "OS (Lab)",
      "Mathematics 4",
      "COA",
      "COA (Lab)"
    ];
  
    const fifthsem = [
      "DBMS",
      "DBMS (Lab)",
      "FLAT",
      "CN",
      "CN (Lab)",
      "ERP",
      "Programmming in Python",
      "Programmming in Python (Lab)",
      "SE",
      "SE (Lab)"
    ];
  
    const sixthsem = [
      "AI",
      "AI (Lab)",
      "ML",
      "ML (Lab)",
      "CD",
      "CD (Lab)",
      "CC",
      "CC (Lab)",
      "HRM",
    ];

    const seventhsem = [
        "AI",
        "AI (Lab)",
        "ML",
        "ML (Lab)",
        "CD",
        "CD (Lab)",
        "CC",
        "CC (Lab)",
        "HRM",
      ];
    
    let type = null;
  
    let options =<option className="bg-zinc-400 text-center" >-- SELECT SUBJECT --</option >
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
  
  
    /** If "Type" is null or undefined then options will be null,
    * otherwise it will create a options iterable based on our array
    */
    if (type) {
      options = type.map((el) => <option  key={el}>{el}</option>);
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


        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
        <div>
            <select name="select1" id="select1">
                <option value="1">Fruit</option>
                <option value="2">Animal</option>
                <option value="3">Bird</option>
                <option value="4">Car</option>
            </select>
            <select name="select2" id="select2">
                <option value="1">Banana</option>
                <option value="1">Apple</option>
                <option value="1">Orange</option>
                <option value="2">Wolf</option>
                <option value="2">Fox</option>
                <option value="2">Bear</option>
                <option value="3">Eagle</option>
                <option value="3">Hawk</option>
                <option value="4">BWM</option>

            </select> 
        </div>*/}
    </>)
}
