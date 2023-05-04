import { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "./sidebar";

export default function Requestedbooks(){
  const [norecord, setnorecord] = useState('')
  const [rowsdata, setrowsdata] = useState([])
    return(<>
    <div className="h-screen overflow-y-hidden">
        <Navbar/>
        <div className="flex h-[91.5%] ">
            <Sidebar/>
            <div className="flex-col w-[100%] h-[93.3%]  overflow-y-auto scrollbar-thin  scrollbar-track-slate-100 scrollbar-thumb-slate-500">

                <div className=" flex w-[100%]  h-[93.5%] justify-center items-center  p-2">
                    <div className="w-[100%]">
                        <div className="text-center text-2xl font-serif ">Requested Books</div>
                        <div className="pt-2   res_table  ">
                          <table className="border-collapse border border-slate-400  w-full">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-slate-300 text-center px-2">Book Name </th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Author's Name</th>
                          <th className="border-2 py-2 border-slate-300 px-2 text-center">Publisher</th>
                        </tr>
                      </thead>
                      <tbody className="">
                      <tr className={`${norecord}`}>
                          <td colSpan="8"  className="bg-slate-400 text-center  h-28">
                          No records found
                          </td>
                          </tr>
                          { rowsdata.map((data, index)=>{
            const {bookname,author,publisher}= data;
            
            return(

                <tr key={index}>
                <td className="border-2  border-slate-300">
                  {bookname}
                </td>
                <td className="border-2  border-slate-300">
                  {author}
                </td>
                <td className="border-2  border-slate-300">
                  {publisher}
                </td>
                
            </tr>
            )
        })
   }
                        {/* <Newrow rowsData1={rowsData1} deleteTableRows1={deleteTableRows1} handleChange1={handleChange1} /> */}
                     {/* <tr>
                          <td className="border-2 max-w-lg   h-auto border-slate-300 ">Haar wavelet approximate solutions for the generalized Lane Emden equations arising in astrophysics</td>
                          <td className="border-2 max-w-[200px]   h-auto border-slate-300 ">Harpreet Kaur, R.C. Mittal and Vinod Mishra</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">Computer Physics Communications</td>
                          <td className="border-2 max-w-xsm   h-auto border-slate-300 ">2013</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">00104655</td>
                          <td className="text-red-500 border-2 border-slate-300"><Link href="/" > Link</Link></td>
                        </tr> */}
                        
                      </tbody>
                    </table>
                          </div>
                    
                    </div>
                </div>
            </div> 

        </div>
    </div>
    </>)
}