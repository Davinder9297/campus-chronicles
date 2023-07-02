import { ToastContainer, toast } from "react-toastify";
import Navbarres from "../../components/navbarres";
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
    
   <div className="h-screen overflow-y-hidden ">
    <Navbarres/>
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
   <div className="h-[86%] request flex items-center xsm:w-full xsm:bg-opacity-50">
        <div className="h-80  w-96 request_book_animation outline ml-20 text-yellow-100 flex justify-center shadow-xl shadow-yellow-200  outline-1  outline-yellow-200  rounded-lg xsm:w-[90%] xsm:ml-5 xsm:px-6 ">
            
         <div className="flex-col text-yellow-100 py-3 xsm:mx-auto">
             <div className="text-center font-serif text-2xl animate-pulse xsm:text-xl">Request Book</div>
             <div className="space-y-5 mt-4 ">
                <div className="flex justify-between"><div>Book Title</div> <div><input  value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder="Enter the title" className="p-1 rounded-sm bg-yellow-200 text-black xsm:text-sm" type="text" /></div></div>
                <div className="flex justify-between"><div>Author Name</div> <div><input  value={author} onChange={(e)=>{setauthor(e.target.value)}} placeholder="Enter the Author" className="p-1 rounded-sm bg-yellow-200 text-black xsm:text-sm" type="text" /></div></div>
                <div className="flex justify-between  space-x-2"><div>Publisher (Optional*)</div> <div><input value={publisher} onChange={(e)=>{setpublisher(e.target.value)}} placeholder="Enter Publisher's name" className="p-1 rounded-sm bg-yellow-200 text-black xsm:text-sm" type="text" /></div></div>
            
   
            </div>
            <button onClick={save} className="w-full bg-yellow-200 mt-5 text-orange-900 font-semibold text-center py-1 rounded-sm">Submit</button>

         </div>

        </div>
    
    </div>
   </div>
    </>)
}