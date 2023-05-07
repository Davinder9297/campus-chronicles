import { useState } from "react";
import Link from "next/link"
import Navbar from "../../components/navbar"
import TeacherNavbar from "../../components/teacher_navbar"
import Cookies from "js-cookie";

export default function GenerateAssignment() {
    const [selected, setSelected] = useState("");
    const [title, settitle] = useState('')
    const [sem, setsem] = useState('')
    const [subject, setsubject] = useState('')
    const [doc, setdoc] = useState('')
    const [deadline, setdeadline] = useState('')
    const [disable, setdisable] = useState(true)
    const [opac, setopac] = useState('opacity-50 cursor-not-allowed')
    const [spin, setspin] = useState('hidden')
    const changeSelectOptionHandler = (event) => {
        setdisable(false)
        setopac('cursor-pointer')
        setsem(event.target.value)
        setSelected(event.target.value);
        console.log(event.target.value);
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

    if (selected === "1st") {
        type = firstsem;
    } else if (selected === "2nd") {
        type = secondsem;
    } else if (selected === "3rd") {
        type = thirdsem;
    } else if (selected === "4th") {
        type = fourthsem;
    } else if (selected === "5th") {
        type = fifthsem;
    } else if (selected === "6th") {
        type = sixthsem;
    } else if (selected === "7th") {
        type = seventhsem;
    }


    if (type) {
        options = type.map((el) => <option value={el} key={el}>{el}</option>);
    }
const handledoc=async(evnt)=>{
    setspin('')
    setdisable(true)
    setopac('opacity-50 cursor-not-allowed')
    const formdata=new FormData()
          formdata.append("file",evnt.target.files[0]);
          formdata.append("upload_preset","mystore")
        const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
          method:"POST",
          body:formdata,
    
        })
        const res2=await res.json();
        setdoc(res2.url)
        setspin('hidden')
        setdisable(false)
        setopac('cursor-pointer')
}
const upload=async()=>{
    let userid=Cookies.get('login')
    const data={title,deadline,sem,subject,doc,userid}
 
    const res=await fetch('http://localhost:3000/api/assignments', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                  body:JSON.stringify(data)
              })
              let response=await res.json();
              setspin('hidden')
              setdisable(false)
              setopac('cursor-pointer')
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
                        <select  onChange={changeSelectOptionHandler} name="select1" id="select1" className=" outline cursor-pointer outline-1 w-full outline-gray-300 bg-zinc-600 text-white p-2 text-xl rounded-2xl text-center overflow-auto scrollbar-thin scrollbar-thumb-zinc-900">
                            <option className="bg-zinc-400 " value="">-- SELECT SEMESTER --</option >
                            <option className="bg-zinc-400 " value="1st">First Semester</option >
                            <option className="bg-zinc-400 " value="2nd">Second Semester</option >
                            <option className="bg-zinc-400 " value="3rd">Third Semester</option >
                            <option className="bg-zinc-400 " value="4th">Fourth Semester</option >
                            <option className="bg-zinc-400 " value="5th">Fifth Semester</option >
                            <option className="bg-zinc-400 " value="6th">Sixth Semester</option >
                            <option className="bg-zinc-400 " value="7th">Seventh Semester</option >
                        </select>
                    </div>
                    <div className="w-full ">
                        <select name="select2" value={subject} onChange={(e)=>(setsubject(e.target.value))} id="select2" className=" outline cursor-pointer outline-1 w-full mx-auto outline-gray-300 bg-zinc-600 text-white p-2 text-xl rounded-2xl text-center overflow-auto scrollbar-thin scrollbar-thumb-zinc-900 mt-4 pl-16">
                        {/* <option className="bg-zinc-400 " >-- SELECT SUBJECT --</option > */}
                            {options}

                        </select>
                    </div>

                    <div className="w-full m-auto">

                        <div className="border-b-2 border-solid border-zinc-300 mt-5 flex ">
                            <div className="text-xl p-2 w-[50%]  text-center">
                                Title of Assignment
                            </div>
                            <div className="w-[50%] my-auto">
                            <input type="text" value={title} onChange={(e)=>(settitle(e.target.value))} className="pl-2 py-2 h-8 w-[85%] bg-zinc-200 form-control"  placeholder="Enter the Title here"/>
                            </div>

                        </div>
                        <div className="border-b-2 border-solid border-zinc-300 flex ">
                            <div className="text-xl p-2 w-[50%]  text-center ">
                                Deadline
                            </div>
                            <div className="w-[50%] my-auto">
                                <input type="date" value={deadline} onChange={(e)=>(setdeadline(e.target.value))} className="pl-2 h-8 w-[85%] bg-zinc-200 form-control" placeholder="Enter the Title here" ></input>
                            </div>

                        </div>
                        <div className="border-b-2 border-solid border-zinc-300 mt-3 flex">
                            <div className="text-xl p-2 w-[50%]  text-center">
                                Attach File
                            </div>
                            <div className="w-[50%] my-auto flex">
                                <input type="file"  onChange={handledoc} className="h-8 w-[50%] "></input>
                                <button className={` p-1 rounded space-x-2 relative top-0 left-0 ${spin}`} type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  {/* <span className="" role="status" aria-hidden="true"></span> */}

</button>
                            </div>
                        </div>
                        <div className="space-x-16 justify-center flex items-center">
                            <button onClick={upload} disabled={disable} className={`shadow-amber-400 shadow-inner rounded bg-amber-800 p-2 mt-9 mb-9 px-5 hover:bg-amber-700 text-white ${opac}`}>
                                
                                Upload</button>
                            <Link className=" cursor-pointer " href={"/teacher/view_submitted_assignment"}><div className="shadow-amber-400 cursor-pointer shadow-inner rounded bg-amber-800 p-2 mt-9 mb-9 px-5 hover:bg-amber-700 text-white ">View Submitted Assignments</div></Link>
                            {/* <button className="shadow-amber-400 shadow-inner rounded bg-amber-800 p-2 mt-9 mb-9 px-5 hover:bg-amber-700 hover:text-white ">Cancel</button> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>)
}
