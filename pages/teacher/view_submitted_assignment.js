import Link from "next/link"
import Navbar from "../../components/navbar"
import TeacherNavbar from "../../components/teacher_navbar"
import {GrView} from "react-icons/gr"
import { useEffect, useState } from "react";

export default function GenerateAssignment() {
    const [data, setdata] = useState([])
    useEffect(() => {
        const url = "http://localhost:3000/api/submittedassignments";
        // const url1 = "http://localhost:3000/api/studentannouncement";
        // const url2 = "http://localhost:3000/api/librarycredentials";
        // const url3 = "http://localhost:3000/api/clubcredentials";
    
        const fetchData = async () => {
          try {
       
            let response = await fetch(url);
            let json = await response.json();
            // console.log(json);
            // let sem=Cookies.get('sem')
            // let subject=Cookies.get('subject')
            // let temp=json.filter((val)=>{
            //     if(val.subject==subject && val.sem==sem){
            //         return val;
            //     }
            // })
            // console.log(temp);
            setdata(json)
  
    
        
          } catch (error) {
         
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
    const view = (doc) => {

        const newWindow = window.open(doc, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
        // window.open(doc, "_blank")
      }
      return (<>

        <div className="">
            <Navbar />
            <TeacherNavbar />

            <div className="">
                <div className=" m-auto text-center text-4xl font-semibold p-4 overflow-hidden w-[100%] mb-2">
                    Submitted Assignments
                </div>
            </div>

            <div className="w-[80%] m-auto res_table">
                <table className="w-full border-collapse">
                    <tbody className="">
                    <tr className="text-center bg-zinc-400 text-lg font-medium p-1">
                        <td className="w-[10%] border-2 border-solid">Sno.</td>
                        <td className="w-[20%] border-2 border-solid ">Name</td>
                        <td className="w-[20%] border-2 border-solid">Roll Number</td>
                        <td className="w-[10%] border-2 border-solid">Semester</td>
                        <td className="w-[20%] border-2 border-solid">Subject</td>
                        <td className="w-[20%] border-2 border-solid">Submission Date</td>
                        <td className="w-[20%] border-2 border-solid">View Assignment</td>
                    </tr> 
                    {data.map((da,index)=>{
                        const {studentname,rollno,date,doc,subject,sem}=da;
                        let formatted=date.substring(8,10)+date.substring(4,8)+date.substring(0,4);

                        
                            return(<>
                            <tr>
                        <td className="text-center border-2 border-solid">{index+1}.</td>
                        <td className="text-left pl-6 border-2 border-solid ">{studentname}</td>
                        <td className="text-center border-2 border-solid">{rollno}</td>
                        <td className="text-center border-2 border-solid">{sem}</td>
                        <td className="text-center border-2 border-solid">{subject}</td>
                        <td className="text-center border-2 border-solid">{formatted}</td>
                        <td className="justify-center flex border-2 border-solid h-full p-1 cursor-pointer"><button onClick={()=>(view(doc))}><GrView  className='text-2xl'/></button></td>
                        </tr>
                            </>)
                    })}
                    
                    </tbody>
                </table>
            </div> 

                
        </div>
    </>)
}
