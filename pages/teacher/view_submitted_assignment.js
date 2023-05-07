import Link from "next/link"
import Navbar from "../../components/navbar"
import TeacherNavbar from "../../components/teacher_navbar"
import {GrView} from "react-icons/gr"

export default function GenerateAssignment() {

      return (<>

        <div className="">
            <Navbar />
            <TeacherNavbar />

            <div className="">
                <div className=" m-auto text-center text-4xl font-semibold p-4 overflow-hidden w-[100%] mb-2">
                    Submitted Assignments
                </div>
            </div>

            <div className="w-[80%] m-auto">
                <table className="w-full">
                    <tbody className="">
                    <tr className="text-center bg-zinc-400 text-lg font-medium p-1">
                        <td className="w-[10%] border-2 border-solid">Sno.</td>
                        <td className="w-[30%] border-2 border-solid">Name</td>
                        <td className="w-[20%] border-2 border-solid">Roll Number</td>
                        <td className="w-[20%] border-2 border-solid">Submission Date</td>
                        <td className="w-[20%] border-2 border-solid">View Assignment</td>
                    </tr> 
                        <tr>
                        <td className="text-center border-2 border-solid">1.</td>
                        <td className="text-left pl-6 border-2 border-solid">Jaspreet Kaur</td>
                        <td className="text-center border-2 border-solid">2025677</td>
                        <td className="text-center border-2 border-solid">30.05.36</td>
                        <td className="justify-center flex border-2 border-solid h-full p-1 cursor-pointer"><GrView  className=''/></td>
                        </tr>
                        <tr>
                        <td className="text-center border-2 border-solid">1.</td>
                        <td className="text-left pl-6 border-2 border-solid">Jaspreet Kaur</td>
                        <td className="text-center border-2 border-solid">2025677</td>
                        <td className="text-center border-2 border-solid">30.05.36</td>
                        <td className="border-2 border-solid"><GrView  className=''/></td>
                        </tr>
                    </tbody>
                </table>
            </div> 

                
        </div>
    </>)
}
