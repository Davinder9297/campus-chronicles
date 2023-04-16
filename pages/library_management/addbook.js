import { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "./sidebar";

export default function Addbook(){
    const [bookname, setbookname] = useState('')
    const [category, setcategory] = useState('')
    const [author, setauthor] = useState('')
    const [isbn, setisbn] = useState('')
    const submit=()=>{
        console.log(category);
    }
    return(<>
    <div className="h-screen overflow-y-hidden">
        <Navbar/>
        <div className="flex h-[91.5%] ">
            <Sidebar/>
            <div className="flex-col w-[82%] h-[93.3%]  overflow-y-auto scrollbar-thin  scrollbar-track-slate-100 scrollbar-thumb-slate-500">

                <div className=" flex h-[93.5%] justify-center items-center  p-2">
                    <div className="w-[100%]">
                    <div className="text-center text-2xl font-serif ">Add Book</div>

                    <div className="flex justify-center w-[100%]  space-x-2 font-serif">
                        <div className="flex-col space-y-5 pt-4 ">

                           <div className="p-1">Book's Name</div>
                           <div className="p-1">Category</div>
                           <div className="p-1">Author Name</div>
                           <div className="p-1">ISBN Number</div>
                           <div className="p-1">Image</div>
                        </div>

                        <div className="font-sans space-y-5 pt-4  w-[30%]">
                           <div className=" "><input  type="text" value={bookname} onChange={(e)=>{setbookname(e.target.value)}} name="bookname"  className="p-1  w-full  bg-slate-100 outline-1   outline-gray-300 rounded outline focus:outline-gray-400" /></div>
                           <div><select value={category} onChange={(e)=>{setcategory(e.target.value)}} name="cars" id="cars" className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
  <option className="" value="">--Select Current Year--</option >
  <option className="" value="volvo">Volvo</option >
  <option className="" value="saab">Saab</option >
  <option className="" value="mercedes">Mercedes</option >
  <option className="" value="audi">Audi</option >
</select></div>
                           <div><input type="text" value={author} onChange={(e)=>{setstudentname(e.target.value)}} name="author"  className="p-1   bg-slate-100 outline-1  w-full outline-gray-300 rounded outline focus:outline-gray-400" /></div>
                           <div><input type="text" value={isbn} onChange={(e)=>{setstudentroll(e.target.value)}} name="isbn"  className="p-1   bg-slate-100 outline-1  w-full outline-gray-300 rounded outline focus:outline-gray-400" /></div>
                           <div><input type="file"  className="p-1  bg-slate-100 outline-1  w-full outline-gray-300 rounded outline focus:outline-gray-400" /></div>
                           <div className="flex w-full space-x-5"> 
                            <button  onClick={submit} className={`flex items-center justify-center w-full space-x-1 bg-blue-500 rounded text-white px-2 py-1 `}><div>Add</div></button>
                             </div>
                         </div>
                    </div> 
                    </div>
                </div>
            </div> 

        </div>
    </div>
    </>)
}