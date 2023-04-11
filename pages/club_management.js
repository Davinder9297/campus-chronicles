import Navbar from "../components/navbar";
import {RiDeleteBin5Line} from "react-icons/ri"
export default function Club_management(){
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
                        <tr className="px-auto">
                          <td className="   flex justify-center border-2     border-slate-300   "><img src="/jass1.jpg" className="h-[105px] w-24" alt="" /></td>
                          <td className=" border-2     border-slate-300 ">Jaspreet Kaur</td>
                          <td className=" border-2 w-fit   h-auto border-slate-300 ">3rd Year</td>
                          <td className=" border-2 w-fit   h-auto border-slate-300 ">Personality</td>
                          <td className=" border-2  w-fit  h-auto border-slate-300 ">President</td>
                          <td className=" border-2    h-auto border-slate-300 "><button><RiDeleteBin5Line className="text-2xl"/></button></td>
                        </tr>
                      
                        <tr>
                          <td className="   flex justify-center  border-2     border-slate-300 "><img src="/jass.jpeg" className="h-[105px] w-24" alt="" /></td>
                          <td className=" border-2     border-slate-300 ">Jaspreet Kaur</td>
                          <td className=" border-2 w-fit   h-auto border-slate-300 ">3rd Year</td>
                          <td className=" border-2 w-fit   h-auto border-slate-300 ">Personality</td>
                          <td className=" border-2  w-fit  h-auto border-slate-300 ">President</td>
                          <td className=" border-2    h-auto border-slate-300 "><button><RiDeleteBin5Line className="text-2xl"/></button></td>
                        </tr>
                        <tr>
                          <td className="   flex justify-center  border-2     border-slate-300 "><img src="/jass.jpeg" className=" h-[105px] w-24" alt="" /></td>
                          <td className=" border-2     border-slate-300 ">Jaspreet Kaur</td>
                          <td className=" border-2 w-fit   h-auto border-slate-300 ">3rd Year</td>
                          <td className=" border-2 w-fit   h-auto border-slate-300 ">Personality</td>
                          <td className=" border-2  w-fit  h-auto border-slate-300 ">President</td>
                          <td className=" border-2    h-auto border-slate-300 "><button><RiDeleteBin5Line className="text-2xl"/></button></td>
                        </tr>               
                      </tbody>
                    </table>
            </div>

            <div className="right-side bg-pink-200 rounded outline-1 outline outline-gray-300 shadow-xl shadow-black py-2 flex justify-center w-[30%]">
                    <form action="" method="post" className="flex-col space-y-2 font-serif">
                      <div className="flex-col">
                        <div className=" text-lg">Name</div>
                        <div><input type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Current year</div>
                        <select name="cars" id="cars" className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
  <option className="" value="">--Select Current Year--</option >
  <option className="" value="volvo">Volvo</option >
  <option className="" value="saab">Saab</option >
  <option className="" value="mercedes">Mercedes</option >
  <option className="" value="audi">Audi</option >
</select>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Club Name</div>
                        <select name="cars" id="cars" className="outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
   <option className="" value="">--Select Club Name--</option >
  <option className="" value="volvo">Volvo</option >
  <option className="" value="saab">Saab</option >
  <option className="" value="mercedes">Mercedes</option >
  <option className="" value="audi">Audi</option >
</select>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Role</div>
                        <select name="cars" id="cars" className="outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
   <option className="" value="">--Select Role--</option >
  <option className="" value="volvo">Volvo</option >
  <option className="" value="saab">Saab</option >
  <option className="" value="mercedes">Mercedes</option >
  <option className="" value="audi">Audi</option >
</select>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Image</div>
                        <div className="max-w-full"><input className="hover:cursor-pointer" type="file" /></div>
                      </div>
                  <button className="font-serif  outline  outline-1 px-2 rounded-sm py-[6px] w-full bg-pink-400 text-base text-gray-900 outline-gray-300 ">Submit</button>
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
                      <div className="flex-col space-y-1">
                        <div className=" text-lg">Title</div>
                        <div><textarea className=" outline-1 outline-gray-300 rounded outline focus:outline-gray-400  resize-none bg-white" name="" id="" cols="40" rows="5" ></textarea></div>
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