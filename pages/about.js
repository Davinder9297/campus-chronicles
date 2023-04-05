import Navbar from "../components/navbar";
import {BsFillBookmarkStarFill} from "react-icons/bs"
export default function About(){
    return(<>
    <div className=" h-auto ">
    <Navbar class="bg-gray-500"/>
    <div className="pt-10 bg-gradient-to-b from-amber-200 via-amber-600 to-red-600">
    <div className="flex justify-center space-x-20 items-center  ">     
        <div className=" flex justify-center items-center h-[50vh]">
            <img src="/lib1.jpg" className="h-full shadow-2xl rounded-tl-3xl rounded-br-3xl shadow-zinc-800" alt="" />
        </div>
         <div className="w-[50%]">
            <div className="text-center font-serif ">About Campus Chronicals</div>
            <div className="flex justify-center "><img src="/hr.png" className="w-56" alt="" /></div>
            <div className="text-justify  font-serif mt-2">
            Mohali is rapidly developing the “IT Hub” of Punjab and has emerged as one of the most important cities in northern India. It is rated among the best place for higher education in Punjab.
            The Mohali Campus aims to bring up engineers par excellence, trained to be industry ready professionals to be hired by the best of the companies. Facilitated with the well-qualified and experienced faculty, unique teaching techniques, sate-of- art classrooms and proposed dedicated labs we intend to groom our students into entrepreneurs who are ready to contribute significantly in the rapidly changing, technology-driven society.
            The campus is located in the heart of the Mohali and well connected through roads and railways and to the outside world by the international airport. It is the only Govt. Engineering College run by IKGPTU Kapurthala in Mohali. The mission of IKGPTU Mohali campus-1 is to become fountainhead of technologies.
            </div>
         </div>
    </div>
    <div className="w-[50%] mt-7 flex justify-center">
       <div >
        <div className="text-center font-serif">Salient Features</div>
        <div className="flex justify-center"><img src="/hr.png" className="w-40" alt="" /></div>
        <div className="font-serif mt-2">
            <div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>PhD Faculty</div></div>
            <div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>Scholarship for Meritorious Students as per University Norms</div></div>
            <div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>Post-Metric Scholarships for SC/ST Students as per Punjab Govt. Rules
</div></div>
            <div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>Fee-waiver Scheme for Economical Weaker Section (EWS)
</div></div>
            <div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>ICT enabled Air-Conditioned Class Rooms
</div></div>
            <div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>Fully Wi-Fi Campus
</div></div>
            <div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>Free Access to E-books & Reputed Journals
</div></div>
            <div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>Hi-Tech Conference Room and Seminar Halls
</div></div>
            <div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>Indoor & Outdoor Sports Activities
</div></div>
            <div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>Transportation Facility
</div></div>
<div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>7 Km from ISBT Sector-43, Chandigarh
</div></div>
<div className="flex items-center"><div><BsFillBookmarkStarFill/></div><div>2 Km from Mohali Bus Stand</div></div>

        </div>
        
        </div> 

    <div>
        Programms Offered
    </div>
    
    </div>
    </div>
   
    </div>
    </>)
}
