import { ToastContainer, toast } from "react-toastify";
import Navbar from "../../components/navbar";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

export default function Request_book(){
    const [title, settitle] = useState('')
    const [author, setauthor] = useState('')
    const [publisher, setpublisher] = useState('')
    const save=async(e)=>{
e.preventDefault();
const data={title,author,publisher}
const res=await fetch('http://localhost:3000/api/requestbook', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
                body:JSON.stringify(data)
            })
            let response=await res.json();
            if(response.error){
                toast.warning('Book title and Author name are required', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    
                    });
                // console.log("error");
            }
            else{
                toast.success('Request sent successfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    
                    });
}
    }
    return(<>
    
   <div className="h-screen overflow-y-hidden">
    <Navbar/>
    <ToastContainer
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
   <div className="h-[86%] request flex items-center ">
        <div className="h-80  w-96 request_book_animation outline ml-20 text-yellow-100 flex justify-center shadow-xl shadow-yellow-200  outline-1 outline-yellow-200  rounded-lg">
            
         <div className="flex-col text-yellow-100 py-3">
             <div className="text-center font-serif text-2xl animate-pulse">Request Book</div>
             <div className="space-y-5 mt-4 ">
                <div className="flex justify-between  space-x-3"><div>Book Title</div> <div><input  value={title} onChange={(e)=>{settitle(e.target.value)}} className="p-1 rounded-sm bg-yellow-200 text-black " type="text" /></div></div>
                <div className="flex justify-between space-x-3 "><div>Author Name</div> <div><input  value={author} onChange={(e)=>{setauthor(e.target.value)}} className="p-1 rounded-sm bg-yellow-200 text-black " type="text" /></div></div>
                <div className="flex justify-between  space-x-3"><div>Publisher (Optional*)</div> <div><input value={publisher} onChange={(e)=>{setpublisher(e.target.value)}} className="p-1 rounded-sm bg-yellow-200 text-black " type="text" /></div></div>
            
   
            </div>
            <button onClick={save} className="w-full bg-yellow-200 mt-5 text-orange-900 font-semibold text-center py-1 rounded-sm">Submit</button>

         </div>

        </div>
    
    </div>
   </div>
    </>)
}