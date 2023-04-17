import Navbar from "../../components/navbar"
export default function Generate_announcement(){
    return(<>
   <div className="ann_bg h-screen">
     <Navbar/>
     <div className="flex justify-center h-[70%]  mt-10">
     <div className="flex  h-full  w-[70%] items-center  shadow-yellow-200 shadow-xl rounded font-serif bg-gradient-to-r from-blue-500 via-green-300 to to-yellow-300">
     
            <div className="space-y-6  w-[50%]  max-h-[100%]" >
                   {/* <div className="text-center font-semibold text-xl">Generate An Announcement</div> */}

                <div className="flex justify-center space-x-24 w-[100%]   "><div className="font-semibold ">Subject</div><div className="w-[50%]  flex justify-end"><input  className="w-[100%] py-2 outline-1 outline-gray-300 rounded outline focus:outline-gray-400 bg-yellow-200 " type="text" /></div></div>
                <div className="flex  justify-center space-x-16  items-center"><div className="font-semibold">Description</div><div className="w-[50%] flex justify-end"><textarea className=" outline-1 outline-gray-300 rounded outline focus:outline-gray-400  resize-none bg-yellow-200" name="" id="" cols="30" rows="5" ></textarea></div></div>
                <div className="flex justify-center space-x-5 text-left   "><div className="font-semibold">Attach document</div><div className=" w-[50%] flex justify-end "><input className="bg-yellow-200 rounded" type="file" name="" id="" /></div></div>
                <div className="px-10"><button type="submit" className="bg-gradient-to-r from-yellow-300 via-green-300  to-blue-500 rounded  py-1 w-full font-semibold">Upload</button></div>
            </div>
            <div className="w-[50%] h-[90%]  flex justify-center items-center">
              <img className="max-h-full" src="/Announcementgif.gif" alt="" />
            </div>
    </div>
     </div>
   </div>
    </>)
}