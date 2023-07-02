import {IoMdArrowDroprightCircle} from 'react-icons/io'
import Navbar from '../../components/navbar'
import { useEffect, useState } from 'react';
export default function Available(){
      const [data, setdata] = useState([])
      const [data1, setdata1] = useState([])
      // const [filters, setfilters] = useState([])
      const [spin, setspin] = useState('')
      const [searchdata, setsearchdata] = useState('')
      const [show, setshow] = useState('hidden')
      const [norecord, setnorecord] = useState('hidden')
// let filters=[];
// const [filter, setfilter] = useState([])
// const handleChange=(e)=>{
//   if(e.target.checked){
//     filters.push(e.target.name)

//   } 
//   else{
//     const index=filters.indexOf(e.target.name)
//     filters.splice(index,1)
//     // const rows = [...filters];
//         // rows.splice( 1);
//         // setfilters(rows);
//   }
// setfilter(filter)
// }
const showresult=(e)=>{
e.preventDefault()
// data.map((curr)=>{
  if(e.target.value=='All'){
    setdata(data1);
    return;
  }
  let temp=data1.filter((currelem)=>{
    
    return currelem.category==e.target.value;
  })
if(temp.length==0){
  setnorecord('')
}
else{
  setnorecord('hidden')
}
  setdata(temp)


}
const search=(e)=>{
e.preventDefault();
// console.log(searchdata);
let temp=searchdata.toLowerCase()
let reg=new RegExp(`.*${temp}.*`,'g')
let t=data1.filter((val)=>{
  if(searchdata==''){
    return val;
  }
  else if(val.bookname.toLowerCase().match(reg) ||val.authorname.toLowerCase().match(reg) || val.category.toLowerCase().match(reg) || val.isbn.toLowerCase().match(reg)){
    return val;
  }
  // else if(val.bookname.toLowerCase().includes(searchdata.toLowerCase()) || val.category.toLowerCase().includes(searchdata.toLowerCase()) || val.authorname.toLowerCase().includes(searchdata.toLowerCase()) || val.isbn.toLowerCase().includes(searchdata.toLowerCase())){
  //   return val;
  // }
})
if(t.length==0){
  console.log('fdafdf');
  setnorecord('')
}
else{
  setnorecord('hidden')
}
setdata(t)
}
      useEffect(() => {
          const url = "http://localhost:3000/api/addbooks";
          // const url1 = "http://localhost:3000/api/placementevents";
        
        
          const fetchData = async () => {
            try {
              setspin('')
              let response = await fetch(url);
              let json = await response.json();
              // console.log(json);
              setdata(json)
              setdata1(json)
              
              if(json.length!=0){
                setnorecord('hidden')
             
              }          
              setspin('hidden')
              setshow('')
            } catch (error) {
              setshow('hidden')
              setspin('')
              console.log("error", error);
            }
          };
        
          fetchData();
        }, []);
    return(<>

   <div className='h-screen'>
    <Navbar/>
     <div className="flex h-[85.3%] overflow-y-hidden  bg-gradient-to-r from-yellow-400 via-yellow-50 to-yellow-500 ">
  
        <div className="flex-col filter-side w-[15%]  scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600  bg-slate-900 py-2 px-3 text-white overflow-y-auto overflow-x-hidden ">
            {/* <div className="flex justify-between w-full   h-8 items-center"> */}
                {/* <div className="text-2xl font-semibold text-white text-center w-full">Filters</div> */}
                {/* <button onClick={showresult} className="text-xs bg-pink-500 py-1 px-2 rounded-md text-white">Show Results</button> */}
            {/* </div> */}
          <div className='text-xl font-semibold '>Categories</div>
           <div className='flex-col space-y-4 ml-2 pt-3'>
                {/* <div className="flex justify-between w-full   h-8 items-center mt-3">
                <div className="text-sm font-semibold text-white">COMPUTER SCIENCE</div>
                <div className="text-xs text-white flex items-center space-x-1"><div>View All</div><IoMdArrowDroprightCircle className='text-lg'/></div>
                </div> */}

              <div><button className="bg-slate-700 text-gray-200 rounded-full px-3 py-2 focus:bg-pink-500 w-36 " onClick={showresult} value="All">All Books</button></div>
              <div><button className="bg-slate-700 text-gray-200 rounded-full px-3 py-2 focus:bg-pink-500 w-36 " onClick={showresult} value="Mathematics">Mathematics</button></div>
              <div><button className="bg-slate-700 text-gray-200 rounded-full px-3 py-2 focus:bg-pink-500 w-36" onClick={showresult} value="Physics">Physics</button></div>
              <div><button className="bg-slate-700 text-gray-200 rounded-full px-3 py-2 focus:bg-pink-500 w-36" onClick={showresult} value="Python">Python</button></div>
              <div><button className="bg-slate-700 text-gray-200 rounded-full px-3 py-2 focus:bg-pink-500 w-36" onClick={showresult} value="Java">Java</button></div>
              <div><button className="bg-slate-700 text-gray-200 rounded-full px-3 py-2 focus:bg-pink-500 w-36" onClick={showresult} value="C">C</button></div>
              <div><button className="bg-slate-700 text-gray-200 rounded-full px-3 py-2 focus:bg-pink-500 w-36" onClick={showresult} value="DBMS">DBMS</button></div>
              <div><button className="bg-slate-700 text-gray-200 rounded-full px-3 py-2 focus:bg-pink-500 w-36" onClick={showresult} value="Operating System">OS</button></div>
              
           </div>
           
        </div>


        <div className='right-side flex-col w-[85%]'>
        <div className="flex justify-center ">
  <div className="pt-3">
    <div className=" flex w-full flex-wrap items-stretch">
      <input
      value={searchdata}
        type="search"
        className="relative m-0 -mr-px block w-96 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-pink-200  px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
        placeholder="Search books"
        aria-label="Search"
        aria-describedby="button-addon1" onChange={(evnt)=>(setsearchdata(evnt.target.value))}
      
        />
      <button
        className="relative z-[2] flex items-center rounded-r bg-pink-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-pink-600 hover:shadow-lg focus:bg-pink-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-500 active:shadow-lg"
        type="button"
        id="button-addon1"
        data-te-ripple-init
        data-te-ripple-color="light" onClick={(evnt)=>(search(evnt))}>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</div>


<div className='flex-col mx-2 py-12 h-full'>
        <div className='text-center text-2xl text-white font-serif'> All Books</div> 
        <div className='flex justify-center'><img className='w-32 ' src="/hr.png" alt="" /></div>
        <div className={`${show}  w-full overflow-y-auto scrollbar-thin pb-12  scrollbar-track-transparent scrollbar-thumb-transparent h-full  flex flex-wrap  justify-center pt-2`}>
            <div className={`${norecord} w-full  flex justify-center items-center shadow-2xl shadow-gray-900 mx-5 my-3`}>
                <div className='text-xl text-gray-300 font-serif'>No Record Found</div>
            </div>
            {data.map((da,index)=>{
              const {image,bookname,authorname}=da;
              return(<>
              <div className='flex-col mx-5 my-11 h-60 w-44  shadow-lg shadow-purple-400'>
            <img className='h-full w-full' src={image} alt="" />
            <div className='text-center font-semibold font-serif text-sm text-white'>{bookname} <br/>({authorname})</div>
            </div>
              {/* <div className='flex-col m-auto h-64 w-44 border-1  border-purple-300 shadow-md shadow-purple-400'>
            <img className='h-48' src={image} alt="" />
            <div className='text-center font-semibold font-serif text-red-600'>{bookname}({authorname})</div>
            </div>
              <div className='flex-col mx-5 my-2 h-64 w-44 border-1  border-purple-300 shadow-md shadow-purple-400'>
            <img className='h-48' src={image} alt="" />
            <div className='text-center font-semibold font-serif text-red-600'>{bookname}({authorname})</div>
            </div>
              <div className='flex-col m-auto h-64 w-44 border-1  border-purple-300 shadow-md shadow-purple-400'>
            <img className='h-48' src={image} alt="" />
            <div className='text-center font-semibold font-serif text-red-600'>{bookname}({authorname})</div>
            </div> */}
              </>)
             })} 
        </div>
</div>
        </div>
    </div>  

   </div>
    </>)
}