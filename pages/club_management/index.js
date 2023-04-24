import { useState } from "react";
import Navbar from "../../components/navbar";
import {RiDeleteBin5Line} from "react-icons/ri"
export default function Club_management(){
  const [rowsData, setRowsData ]= useState([]);
  const [image, setimage] = useState('')
  const [name, setname] = useState('')
  const [year, setyear] = useState('')
  const [club, setclub] = useState('')
  const [role, setrole] = useState('')
  const [norecord, setnorecord] = useState('')
  const addTableRows = (e)=>{
    e.preventDefault();
    setnorecord('hidden')
    console.log(image);
      const rowsInput={
       image:image,
       name:name,
       year:year,
       club:club,
       role:role
      } 
      setRowsData([...rowsData, rowsInput])
      setimage('')
      setname('')
      setyear('')
      setclub('')
      setrole('')
      // console.log(rowsData.length);
       
    
  }
 const deleteTableRows = (index)=>{
 
      const rows = [...rowsData];
      rows.splice(index, 1);
      setRowsData(rows);
      // console.log(rowsData.length);
      if(rowsData.length==1){
        setnorecord('')
      }
 }
// var ind=0;
//  const handleChange = (evnt)=>{
//   const { name, value } = evnt.target;
//   console.log(name,value);

//   const rowsInput = [...rowsData];
//   rowsInput[ind][name] = value;
//   setRowsData(rowsInput);
//   ind=ind+1;



// }
    return(<>
   <div className="  ">
    <Navbar/>
   <div className="text-center text-2xl font-serif pt-4">Coordinator's details</div>
    <div className="flex container justify-around h-[450px] py-3" >
          <div className="left-side w-[60%] bg-pink-200 overflow-y-auto scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-400">
            <table  className="border-collapse border w-full border-slate-400 ">
                      <thead className="bg-pink-400">
                        <tr className=" ">
                          <th className=" border-2  py-2 border-slate-300 text-center px-2">Image</th>
                          <th className=" border-2  py-2 border-slate-300 text-center px-2">Name</th>
                          <th className=" border-2 py-2 border-slate-300 px-2 text-center">Current Year</th>
                          <th className=" border-2 py-2 border-slate-300 px-2 text-center">Club</th>
                          <th className=" border-2 py-2 border-slate-300 px-2 text-center">Role</th>
                          <th className=" border-2 py-2 border-slate-300 px-2 text-center">Operation</th>
                        </tr>
                      </thead>
                      <tbody className="  ">
                      <tr className={`${norecord}`}>
                          <td colSpan="9"  className="bg-slate-200 text-center  h-[373px]">
                          No records found
                          </td>
                          </tr>
                          {rowsData.map((data,index)=>{
                            const {image,name,year,club,role}=data;
                            return(

                              <tr key={index}>
                              <td className="border-2  border-slate-300">
                                  <img src={`${image}`} alt="" />
                              </td>
                              <td className="border-2  border-slate-300">
                                  {name}
                              </td>
                              <td className="border-2  border-slate-300">
                                  {year}
                              </td>
                              <td className="border-2  border-slate-300">
                                  {club}
                              </td>
                              <td className="border-2  border-slate-300">
                                  {role}
                              </td>
                              <td className="border-2  border-slate-300"><button className="text-black" onClick={()=>(deleteTableRows(index))}><RiDeleteBin5Line className="text-3xl"/></button></td>
                          </tr>
                          )
                          })}
                      </tbody>
                    </table>
            </div>

            <div className="right-side bg-pink-200 rounded outline-1 outline outline-gray-300 shadow-xl shadow-black py-2 flex justify-center w-[30%]">
                    <form action="" method="post" className="flex-col space-y-2 font-serif">
                      <div className="flex-col">
                        <div className=" text-lg">Name</div>
                        <div><input value={name} onChange={(e)=>(setname(e.target.value))} name="name" type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Current year</div>
                        <select value={year} onChange={(e)=>(setyear(e.target.value))} name="year"   className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
  <option className="" value="">--Select Current Year--</option >
  <option className="" value="1st Year">1st Year</option >
  <option className="" value="2nd Year">2nd Year</option >
  <option className="" value="3rd Year">3rd Year</option >
  <option className="" value="4th Year">4th Year</option >
</select>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Club Name</div>
                        <select value={club} onChange={(e)=>(setclub(e.target.value))} name="club"  className="outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
   <option className="" value="">--Select Club Name--</option >
  <option className="" value="Personality Club">Personality Club</option >
  <option className="" value="Cultural Club">Cultural Club</option >
  <option className="" value="Coding Club">Coding Club</option >
  <option className="" value="Editorial Club">Editorial Club</option >
  <option className="" value="Sports Club">Sports Club</option >
  <option className="" value="Training & Placement Cell">Training & Placement Cell</option >
  <option className="" value="Enterpreneurship Cell">Enterpreneurship Cell</option >
  <option className="" value="Core Committee">Core Committee</option >
</select>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Role</div>
                        <select value={role} onChange={(e)=>(setrole(e.target.value))} name="role"  className="outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
   <option className="" value="">--Select Role--</option >
  <option className="" value="Incharge">Incharge</option >
  <option className="" value="President">President</option >
  <option className="" value="Leading Role">Leading Role</option >
</select>
                      </div>
                      
                      <div className="flex-col">
                        <div className=" text-lg">Image</div>
                        <div className="max-w-full"><input accept=".jpg,.png" value={image} onChange={(e)=>(setimage(e.target.value))} name="image" className="hover:cursor-pointer" type="file" /></div>
                      </div>
                  <button onClick={addTableRows} className="font-serif  outline  outline-1 px-2 rounded-sm py-[6px] w-full bg-pink-400 text-base text-gray-900 outline-gray-300 ">Submit</button>
                    </form>
            </div>
    </div>

    <div className="flex justify-around w-full container ">
    <div className="announcement-side space-y-5 w-[40%] py-4">
    <div className="text-center font-serif text-2xl mt-3">Announcement Generator</div>

    <div className="flex justify-center ">
                    <form action="" method="post" className="flex-col space-y-2 font-serif  bg-pink-200 rounded outline-1 px-3 outline-gray-300 shadow-xl shadow-black py-2   outline">
                      <div className="flex-col space-y-1">
                        <div className=" text-lg">Title</div>
                        <div><textarea className=" outline-1 outline-gray-300 rounded outline focus:outline-gray-400  resize-none bg-white" name="" id="" cols="40" rows="5" ></textarea></div>
                      </div>
                    
       
                      <div className="flex-col space-y-1">
                        <div className=" text-lg">Attach Document</div>
                        <div className="max-w-full "><input className="hover:cursor-pointer" type="file" /></div>
                      </div>
                  <button className="font-serif  outline  outline-1 px-2 rounded-sm py-[6px] w-full bg-pink-400 text-base text-gray-900 outline-gray-300 ">Upload</button>
                    </form>
                    </div>
            </div>
    <div className="event-side space-y-5  w-[40%] py-4">
    <div className="text-center font-serif text-2xl mt-3">Upload Events</div>

                    <div className="flex justify-center ">
                    <form action="" method="post" className="flex-col space-y-2 font-serif  bg-pink-200 rounded outline-1 px-3 outline-gray-300 shadow-xl shadow-black py-2   outline">
                    <div className="flex-col">
                        <div className=" text-lg">Event Name</div>
                        <div><input type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      <div className="flex-col space-y-1">
                        <div className=" text-lg">Title</div>
                        <div><textarea className=" outline-1 outline-gray-300 rounded outline focus:outline-gray-400  resize-none bg-white" name="title" id="" cols="40" rows="5" ></textarea></div>
                      </div>
                    
                      <div className="flex-col space-y-1">
                        <div className=" text-lg">Description</div>
                        <div><textarea className=" outline-1 outline-gray-300 rounded outline focus:outline-gray-400  resize-none bg-white" name="" id="" cols="40" rows="5" ></textarea></div>
                      </div>
       
                      <div className="flex-col space-y-1">
                        <div className=" text-lg">Attach Document</div>
                        <div className="max-w-full "><input className="hover:cursor-pointer" type="file" /></div>
                      </div>
                  <button className="font-serif  outline  outline-1 px-2 rounded-sm py-[6px] w-full bg-pink-400 text-base text-gray-900 outline-gray-300 ">Upload</button>
                    </form>
                    </div>
            </div>


</div>

   </div>
    </>)
}