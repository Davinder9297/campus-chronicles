import Footer from "../../components/footer";
import { icons } from 'react-icons'
import { AiTwotoneHome } from 'react-icons/ai'
import {MdEditNotifications} from 'react-icons/md'
import {FaThList} from 'react-icons/fa'
import {RiCheckboxMultipleFill}from 'react-icons/ri'
// import {TiThSmall} from 'react-icons/ti'
import Collab from "../../components/collab"
import PlacementCr from "../../components/Placement_cr"
import Link from 'next/link'
import Navbar from '../../components/navbar'
// import Marquee from 'react-fast-marquee'
import { useState } from 'react'
import { useEffect } from 'react'
import { IoMdDownload } from 'react-icons/io'


export default function Placement() {
  const [data, setdata] = useState([])
  const [data1, setdata1] = useState([])
  const [spin, setspin] = useState('')
  useEffect(() => {
      const url = "http://localhost:3000/api/placementannouncements";
      const url1 = "http://localhost:3000/api/placementevents";
    
    
      const fetchData = async () => {
        try {
          setspin('')
          let response = await fetch(url);
          let json = await response.json();
          // console.log(json);
          setdata(json)
          let response1 = await fetch(url1);
          let json1 = await response1.json();
          // console.log(json);
          setdata1(json1)
          // if(json.length!=0){
          //   setnorecord('hidden')
          // }          
          setspin('hidden')
          // setshow('')
        } catch (error) {
          // setshow('hidden')
          // setspin('')
          console.log("error", error);
        }
      };
    
      fetchData();
    }, []);

    const download=(doc,title)=>{
      fetch(doc).then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = title;
              alink.click();
          })
      })
    }
  return (<>

<Navbar/>
<div className='flex justify-around border-2 border-purple-900 h-11 p-2 bg-pink-300 font-serif font-bold xsm:text-xs xsm:justify-around xsm:h-16'>
  <div className='flex'> <AiTwotoneHome className='m-1' /> Home </div>
  <div> <Link href={'/placement/about_placement'}> About Placements </Link> </div>
  <div> <Link href= {'/placement/plac_procedure'}> Placement Procedure </Link> </div>
  <div> <Link href= {'/placement/placement_record'}> Placement Record </Link> </div>
  <div> <Link href= {'/placement/interview_ques'}>Interview Related questions </Link> </div>
  <div> <Link href= {'/placement/coding_ques'}>Coding Practice </Link></div>

</div>

  <div className="flex p-2 h-auto justify-between flex-row mx-1 my-2 border-2 rounded-md flex-wrap  ">
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
      <div className=" p-2.5 flex justify-center border-solid shadow-inner shadow-pink-600 w-[62%] rounded-md xsm:h-[80%] xsm:w-full  ">
        {/* <img className="p-2.5" src="Qs2.png" alt='' /> */}
       <PlacementCr/>
      {/* <div className='' img src=""></div> */}
      </div>

      <div className=" flex justify-center border-solid  w-[35%] shadow-inner shadow-pink-600 rounded-xl xsm:w-full xsm:relative top-50 xsm:m-7  " >
        <div className=' border-solid  w-[95%] text-center font-bold text-2xl font-sans m-3 '><button className='m-2'> <MdEditNotifications /> </button>
           NOTIFICATIONS
          <div className="  text-xl h-[420px] w-[98%] text-center    border-y-2 rounded-md  border-orange-900 xsm:h-auto">
          {/* <Marquee autoFill  direction="up" className='bg-slate-500 h-full'> */}
{data.map((da,index)=>{
  const {title,doc,date}=da;
  let show='';
  let dat=new Date(date);
  let newdate=new Date();
  let formatted=date.substring(8,10)+date.substring(4,8)+date.substring(0,4);
                              // console.log();
  let diff=(newdate.getTime()-dat.getTime())/(1000 * 60 * 60 * 24);
  if(diff>=1){
                                  // setshow('hidden')
  show='hidden';
  }
  return(<>
          <div className="justify-between flex  font-mono font-bold text-lg border-black border-b "><div className='my-2'> <button> <FaThList/></button></div><div className='flex  items-center'><div className='mr-2'><img className={`w-fit ${show}`} src="/new.gif" alt="" /></div>{title}</div><div className=" text-2xl"><button className='my-2' onClick={(e)=>{download(doc,title)}}><IoMdDownload/></button></div>
</div>

  </>)
})}
        {/* <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='my-2'> <button> <FaThList/></button> 1st notification is announced</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='my-2'> <button> <FaThList/></button> 1st notification is announced</div></div>
        <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='my-2'> <button> <FaThList/></button> 1st notification is announced</div></div> */}
        {/* <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st notification is announced</div></div> */}
        {/* <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st notification is announced</div></div> */}
        {/* <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st notification is announced</div></div> */}
        {/* <div className=" flex  text-gray-800 font-bold  border-black border-b"><div className='mt-4 mb-4'> <button> <FaThList/></button> 1st notification is announced</div></div> */}
        {/* </Marquee> */}
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

      <div className='h-auto w-[30%] xsm:hidden'>
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
 
    
   

        

        <div className="flex-col mt-8 mb-5 " id="events" >
            <div className="text-center text-3xl font-semibold font-serif text-gray-600">Events At Campus</div>
            <div className="flex justify-center"><img src="hr.png" alt="" /></div>
            <div className="flex justify-center w-full">
            <div className="flex flex-wrap w-full h-auto justify-center space-x-14  mt-4 max-w-[1250px] ">
               {data1.map((da,index)=>{
  const {eventname,image,title,description,date}=da;
  return(<>
            <div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5  hover:scale-90 transition duration-300 ease-in">
                    <div className=""><img className="rounded-t w-[350px] h-52" src={image} alt="" /></div>
                    <div className="px-1 mt-3 font-bold  text-center">{title}</div>
                    <div className="px-1 h-[118px]">{description.slice(0,270)}...</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View event</button></div>
                </div>
  </>)
})}
              
    
                {/* <div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5 ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="e1.jpg" alt="" /></div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View more images</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5 ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="e1.jpg" alt="" /></div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View more images</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5 ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="e1.jpg" alt="" /></div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View more images</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5 ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="e1.jpg" alt="" /></div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View more images</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5 ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="e1.jpg" alt="" /></div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View more images</button></div>
                </div> */}
            </div>
            </div>
        </div>

<Collab/>
<Footer/>

     
  </>)
}