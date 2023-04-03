// import Navbar from "../components/navbar";
import { icons } from 'react-icons'
import { AiTwotoneHome } from 'react-icons/ai'
import {MdEditNotifications} from 'react-icons/md'
import {FaThList} from 'react-icons/fa'
import {RiCheckboxMultipleFill}from 'react-icons/ri'
// import {TiThSmall} from 'react-icons/ti'
import Collab from "../components/collab"
import LibraryCarousal from '../components/Library_carousel'


export default function Placement() {
  return (<>


<div className='flex justify-around border-2 border-purple-900 h-11 p-2 bg-pink-300 font-serif font-bold'>
  <div><button> <AiTwotoneHome /></button> Home</div>
  <div> About Placements</div>
  <div> Placement Procedure</div>
  <div> Interview Related questions </div>
  <div> Take mock test</div>

</div>

  <div className="flex p-2 h-[500px] justify-between flex-row mx-1 my-2 border-2 rounded-md b">
      {/* <div className="  fle<button> <AiTwotoneHome /></button>x-col p-2 text-lg  h-auto w-[22%]  justify-center grid grid-cols-1 divide-y  border-4 rounded-md  border-orange-900">

        <div className=" flex text-gray-800 font-bold  "><div className='mt-4 mb-4'>  Home </div></div>
        <div className=" flex text-gray-800 font-bold   border-black"><div className='mt-4 mb-4'>Interview Related questions</div></div>

        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'>Past details about visited companies</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black borde r-b"><div className='mt-4 mb-4'>Take Mock Test</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'>Placement Procedure</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'>Take Mock Test</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'>Take Mock Test</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'>Take Mock Test</div></div>


      </div> */}
      <div className=" flex justify-center border-solid shadow-inner shadow-pink-600 w-[62%] rounded-md"><img className="p-2.5" src="Qs2.png" alt='' />
      {/* <LibraryCarousal/> */}
      {/* <div className='' img src=""></div> */}
      </div>

      <div className=" flex justify-center border-solid  w-[35%] shadow-inner shadow-pink-600 rounded-xl " >
        <div className=' border-solid  w-[95%] text-center font-bold text-2xl font-sans m-3 '><button className='m-2'> <MdEditNotifications /> </button>
           NOTIFICATIONS
          <div className="  text-xl h-[420px] w-[98%] text-center grid grid-cols-1 divide-y   border-y-2 rounded-md  border-orange-900">
          <marquee  width="100%" direction="up" height="90%" behaviour="scroll" scrollamount="4" className="space-y-5">

        <div className=" flex  text-gray-800 font-bold  border-black border-b "><div className='mt-4 mb-4'> <button> <FaThList/></button>1st notification is announced </div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st notification is announced</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st notification is announced</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st notification is announced</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st notification is announced</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st notification is announced</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st notification is announced</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st notification is announced</div></div>
        </marquee>
      </div>
      </div>
      </div>
    </div>

    <div className=' flex flex-row justify-between w-auto h-3/4 mx-1 my-2 border-2  '>
      <div className=' flex-col h-3/4 w-[32%] text-clip overflow-hidden '>
        <div className='pl-5 pt-3 pb-2 mt-8 ml-5 text-left'>
          <div className=' text-3xl font-serif font-bold text-pink-500'> PLACEMENT
          <div className=' text-3xl font-serif font-bold text-black'>  STATS</div></div>
        </div>
        <div className=' pl-14 pt-4 pb-2 mt-8 ml-5 text-left text-xl font-mono'>
        1260 management case-studies covering domains like Strategy, Marketing, Economics & Finance and others, 
        bought across 68 countries. The placement stats are hjdsvhdhbdhcbdsbc cndbjgcxbjl bla blaa b;aaaa
        </div>

      </div>

      <div className='h-auto w-[40%]  bg-gradient-to-r from-orange-200 via-red-200 to-pink-300 rounded-xl'>
        <div className='flex m-8  pl-20 pt-4 h-20 w-auto font-serif font-extrabold text-xl text-center '> <div className='m-2'><RiCheckboxMultipleFill/></div> 50 Companies</div>
        <div className='flex m-8  pl-20 pt-4 h-20 w-auto font-serif font-extrabold text-xl text-center '> <div className='m-2'><RiCheckboxMultipleFill/></div> 100+ Placement Offers</div>
        <div className='flex m-8  pl-20 pt-4 h-20 w-auto font-serif font-extrabold text-xl text-center '> <div className='m-2'><RiCheckboxMultipleFill/></div> 6.06 lac Average CTC</div>
        <div className='flex m-8  pl-20 pt-4 h-20 w-auto font-serif font-extrabold text-xl text-center '> <div className='m-2'><RiCheckboxMultipleFill/></div> 17 LPA-Highest Package</div>
      </div>

      <div className='h-auto w-[30%] '>
        <div className=' flex-col m-6 space-y-2'>
          <div className=' flex-col justify-center space-y-1 pl-3'> <img className='w-72 h-48' src='plac_home.jpeg' alt=''></img>
          <div className=' text-center font-serif font-bold text-base pl-3'> Qspider's Placement drive</div></div>
          
          <div className=' flex-col justify-center space-y-1 pl-3 pr-3 '> <img className='w-72 h-48 ' src='plac_home2.jpeg' alt=''></img>
          <div className=' text-center font-serif font-bold text-base  pl-3'> Guidance session</div></div>
        </div>

      </div>
      
    {/* <img className='w-screen h-96' src="graduation.jpg" alt='' opacity='0.2'  /> */}
    {/* <div className= "border-2 border-slate-500  flex-row justify-end  w-[50%] h-[50%]"></div> */}
    
    </div>
 
    
    <div className='mt-8 mb-5 w-auto mx-2 my-2 border-2  font-bold text-center text-2xl font-sans p-3  rounded-xl '>
     T&P Events and Placement drives
    <div className="flex justify-center"><img src="hr.png" alt="" /></div>
    <div className="flex-col">
    <div className="flex flex-wrap justify-center m-2  ">

        <div className="m-3 shadow-pink-600 shadow-inner h-auto rounded-xl cursor-pointer w-[30%]">
        <div flex-col>
             <img className="rounded-xl h-52 w-full p-2" src="jatin.jpg" />
             <div className="text-pink-600 h-auto text-xl overflow-hidden mt-1">
                 The Podcast
                 <div className="text-black mt-2 font-semibold text-justify text-sm p-2 ">To actively reach out to the corporate world for facilitating 
the best placements for IKG PTU Mohali Campus I students, University has
a Corporate Relations & Alumni department. The main endeavor of CR&A Cell, IKG PTU Mohali Campus I 
is to get students placed inreputed multinationals, government organizations, NGO's and the private sector. </div>
             </div>
         </div>
     </div>

     <div className="m-3 shadow-pink-600 shadow-inner h-auto rounded-xl cursor-pointer w-[30%]">
         <div flex-col>
             <img className="rounded-xl h-52 w-full p-2" src="jatin.jpg" />
             <div className="text-pink-600 h-auto text-xl overflow-hidden mt-1">
                 The Podcast
                 <div className="text-black mt-2 font-semibold text-justify text-sm p-2 ">To actively reach out to the corporate world for facilitating the best placements 
for IKG PTU Mohali Campus I students, University has
a Corporate Relations & 
Alumni department. The main endeavor of CR&A Cell, IKG PTU Mohali Campus I 
is to get students placed in
reputed multinationals, government organizations, 
NGO's and the private sector. </div>
             </div>
         </div>
     </div>
     <div className="m-3 shadow-pink-600 shadow-inner h-auto rounded-xl cursor-pointer w-[30%]">
         <div flex-col>
             <img className="rounded-xl h-52 w-full p-2" src="jatin.jpg" />
             <div className="text-pink-600 h-auto text-xl overflow-hidden mt-1">
                 The Podcast
                 <div className="text-black mt-2 font-semibold text-justify text-sm p-2 ">To actively reach out to the corporate world for facilitating the best placements 
for IKG PTU Mohali Campus I students, University has
a Corporate Relations & 
Alumni department. The main endeavor of CR&A Cell, IKG PTU Mohali Campus I 
is to get students placed in
reputed multinationals, government organizations, 
NGO's and the private sector. </div>
             </div>
         </div>
     </div>
     <div className="m-3 shadow-pink-600 shadow-inner h-auto rounded-xl cursor-pointer w-[30%]">
         <div flex-col>
             <img className="rounded-xl h-52 w-full p-2" src="jatin.jpg" />
             <div className="text-pink-600 h-auto text-xl overflow-hidden mt-1">
                 The Podcast
                 <div className="text-black mt-2 font-semibold text-justify text-sm p-2 ">To actively reach out to the corporate world for facilitating the best placements 
for IKG PTU Mohali Campus I students, University has
a Corporate Relations & 
Alumni department. The main endeavor of CR&A Cell, IKG PTU Mohali Campus I 
is to get students placed in
reputed multinationals, government organizations, 
NGO's and the private sector. </div>
             </div>
         </div>
     </div>
     <div className="m-3 shadow-pink-600 shadow-inner h-auto rounded-xl cursor-pointer w-[30%]">
         <div flex-col>
             <img className="rounded-xl h-52 w-full p-2" src="jatin.jpg" />
             <div className="text-pink-600 h-auto text-xl overflow-hidden mt-1">
                 The Podcast
                 <div className="text-black mt-2 font-semibold text-justify text-sm p-2 ">To actively reach out to the corporate world for facilitating the best placements 
for IKG PTU Mohali Campus I students, University has
a Corporate Relations & 
Alumni department. The main endeavor of CR&A Cell, IKG PTU Mohali Campus I 
is to get students placed in
reputed multinationals, government organizations, 
NGO's and the private sector. </div>
             </div>
         </div>
     </div>
    </div>     
  </div>
</div>

<Collab/>

     
  </>)
}