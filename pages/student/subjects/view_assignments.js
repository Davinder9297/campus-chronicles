import Navbar from "../../../components/navbar"
import { FaPowerOff } from "react-icons/fa"
import { useEffect, useState } from "react"
import { IoMdDownload } from 'react-icons/io'
import { GrView } from 'react-icons/gr'
import Cookies from "js-cookie"



export default function View_assignment() {
    const [pinfo, setpinfo] = useState('')
    const [edqu, setedqu] = useState('hidden')
    const [exx, setexx] = useState('hidden')
    const [exxclass, setexxclass] = useState('hidden')
    const [piclass, setpiclass] = useState('border-b-4 border-black text-black ')
    const [edeqclass, setedeqclass] = useState('text-white')
    const [read, setread] = useState(true)
    const [disable, setdisable] = useState(true)
    const [opac, setopac] = useState('opacity-50 cursor-not-allowed')
    const [spin, setspin] = useState('hidden')
    const [sub, setsub] = useState('hidden')
    const [ass, setass] = useState('hidden')
const [data, setdata] = useState([])
const [submitted, setsubmitted] = useState([])
const [doc, setdoc] = useState('')
    const [point, setpoint] = useState('opacity-50 cursor-not-allowed')
    const pi = () => {
        setedqu('hidden');
        setpinfo('');
        setpiclass('border-b-4 border-black text-black ')
        setedeqclass('text-white')
    }
    const eq = () => {
        setedqu('flex ');
        setpinfo('hidden');
        setpiclass('text-white')
        setedeqclass('border-b-4 border-black text-black ')
    }

    const ex = () => {
        setexx('hidden ');
        setexxclass('')
    }
    useEffect(() => {
        const url = "http://localhost:3000/api/assignments";
        const url1 = "http://localhost:3000/api/studentsubmissions";
        const fetchData = async () => {
          try {
       
            let response = await fetch(url);
            let json = await response.json();
            // console.log(json);
            let sem=Cookies.get('sem')
            let subject=Cookies.get('subject')
            let temp=json.filter((val)=>{
                if(val.subject==subject && val.sem==sem){
                    return val;
                }
            })
            if(temp.length==0){
                setass('')
            }
            // console.log(temp);
            setdata(temp)
            let response1 = await fetch(url1);
            let json1 = await response1.json();
            setsubmitted(json1)
    if(json1.length==0){
        setsub('')
    }
        
          } catch (error) {
         
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
    const submit=async(userid,subject)=>{

        const res1=await fetch('http://localhost:3000/api/studentpersonaldata')           
          let response1=await res1.json();
 const data={doc:doc,studentname:response1.studentname,rollno:response1.rollno,userid:userid,subject:subject}
//  console.log(data);
Cookies.set('rollno',response1.rollno)
        const res=await fetch('http://localhost:3000/api/submittedassignments', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                      body:JSON.stringify(data)
                  })
                  let response=await res.json();
                  console.log(response);
                //   setspin('hidden')
                //   setdisable(false)
                //   setopac('cursor-pointer')
    }
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
      const handledoc=async(evnt)=>{
        setspin('')
        setdisable(true)
        setopac('opacity-50 cursor-not-allowed')
        const formdata=new FormData()
              formdata.append("file",evnt.target.files[0]);
              formdata.append("upload_preset","mystore")
            const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
              method:"POST",
              body:formdata,
        
            })
            const res2=await res.json();
            setdoc(res2.url)
            console.log(res2.url);
            setspin('hidden')
            setdisable(false)
            setopac('cursor-pointer ')
    }
    const view = (doc) => {

        const newWindow = window.open(doc, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
        // window.open(doc, "_blank")
      }
    return (<>
        <div className="h-screen ">
            <Navbar class="shadow-md" />
            <div className="logo_logout h-9 w-11  fixed right-10 top-28 cursor-pointer ">
                <FaPowerOff className=" h-full w-full hover:opacity-80 text-amber-900 " />
                <div className="logout_stu text- border-2 border-solid">Logout</div>
            </div>
            <div className=" w-[95%] m-auto h-[85%] ">
                <div className=" m-auto text-center  text-4xl font-semibold p-4 overflow-hidden h-[100%] ">
                    <div className="font-serif">Assignment Submission</div>
                    <div className=" w-[95%] shadow-md shadow-slate-400 text-[60%] h-[100%] m-auto mt-3 ">
                        <div className=" w-[100%] flex ">
                            <div onClick={pi} className={` w-[50%] m-auto text-2xl bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer ${piclass}`} >
                                Current Assignments
                            </div>
                            <div onClick={eq} className={`bg-amber-800 text-2xl w-[50%] m-auto p-1  hover:bg-amber-700 cursor-pointer ${edeqclass}`}>
                                Submitted Assignments
                            </div>

                        </div>

                        
                        <div className={` m-auto flex-col h-[80%] w-[90%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-300 text-sm px-2 ${edqu}`}>
                        <div className={`mt-[20%] text-xl ${sub}`}>No record found</div>
                        <div className="flex-col w-[100%] h-auto p-3">
                                {/* <div className='text-3xl border-2 border-solid border-emerald-600 p-1 rounded bg-zinc-300 mb-3'>Assignments </div> */}
                                <div>
                                    <div className="accordion " id="accordionFlushExample">
                                       
                                            {submitted.map((da,index)=>{
                                                const {doc,date}=da;
                                                let formatted=date.substring(8,10)+date.substring(4,8)+date.substring(0,4);

                                                return(<>
                                                <div className="accordion-item focus-within:bg-white">
                                            <h2 className="accordion-header" id={date}>
                                                <button className="accordion-button collapsed hover:bg-slate-100" type="button" data-bs-toggle="collapse" data-bs-target={`#a${index}`} aria-expanded="false" aria-controls={`a${index}`}>
                                                    Assignment {index+1}
                                                </button>
                                            </h2>
                                            <div id={`a${index}`} className="accordion-collapse collapse " aria-labelledby={date} data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <div className={`shadow-sm shadow-gray-500 w-[100%] m-auto text-base  p-3`}>
                                                        <div className="w-[100%] text-start ml-5 mb-4 p-2 border-b-2 border-zinc-400 border-solid flex">
                                                        <div className="w-[70%]">
                                                                View Submitted Assignment
                                                                </div>
                                                                <button onClick={()=>(view(doc))} className="w-[30%] flex justify-center ">
                                                                <GrView className=" hover:opacity-80 h-full w-6 cursor-pointer flex justify-end" />
                                                            </button></div>
                                                        <div className="flex">
                                                        <div className="w-[100%] text-start ml-5 mb-4 p-2 border-b-2 border-zinc-400 border-solid flex ">
                                                        <div className="w-[70%]">
                                                                Submission Date
                                                        </div>
                                                            <div className="w-[30%] flex justify-center ">{formatted}</div>

                                                        </div>
                                                        </div>
                                                        
                                                    </div></div>
                                            </div>
                                        </div>
                                                </>)
                                            })}
                                      
                                        
                              
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`m-auto  h-[80%] w-[95%] overflow-auto scrollbar-thin pt-3 scrollbar-thumb-zinc-900 text-sm px-2 ${pinfo}`}>
                            
                        <div className={`mt-[20%]  text-xl ${ass}`}>No record found</div>
                            <div className="flex-col w-[100%] h-auto p-3">

                                {/* <div className='text-3xl border-2 border-solid border-emerald-600 p-1 rounded bg-zinc-300 mb-3'>Assignments </div> */}
                                <div>
                              

                                    <div className="accordion " id="accordionFlushExample">
                                        {data.map((ass,index)=>{
                                            const {title,doc,deadline,userid,subject}=ass;
                                            let formatted=deadline.substring(8,10)+deadline.substring(4,8)+deadline.substring(0,4);

                                            return(<>
                                            <div className="accordion-item focus-within:bg-white" key={index}>
                                            <h2 className="accordion-header" id={title}>
                                                <button className="accordion-button collapsed hover:bg-slate-100" type="button" data-bs-toggle="collapse" data-bs-target={`#a${index}`} aria-expanded="false" aria-controls={`a${index}`}>
                                                    Assignment {index+1}
                                                </button>
                                            </h2>
                                            <div id={`a${index}`} className="accordion-collapse collapse " aria-labelledby={title} data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <div className={`shadow-sm shadow-gray-500 w-[100%] m-auto text-base  p-3 bg-slate-100`}>
                                                        <div className="w-[100%] text-start ml-5 mb-4 p-2 border-b-2 border-zinc-400 border-solid flex ">
                                                        <div className="w-[70%]">
                                                                Download Assignment
                                                        </div>
                                                        <div className="w-[30%] flex justify-center ">
                                                                <IoMdDownload className=" hover:opacity-80 h-full w-6 cursor-pointer flex justify-end" onClick={()=>(download(doc,title))} /></div>
                                                        </div>
                                                        <div className="w-[100%] text-start ml-5 mb-4 p-2 border-b-2 border-zinc-400 border-solid flex ">
                                                        <div className="w-[70%]">
                                                                Title
                                                        </div>
                                                            <div className="w-[30%] flex justify-center ">{title}</div>

                                                        </div>
                                                        <div className="w-[100%] text-start ml-5 mb-4 p-2 border-b-2 border-zinc-400 border-solid flex ">
                                                        <div className="w-[70%]">
                                                                Due Date
                                                        </div>
                                                            <div className="w-[30%] flex justify-center ">{formatted}</div>

                                                        </div>
                                                        <div className="flex">
                                                            <div className="w-[50%] text-start ml-7 ">
                                                                Attach File
                                                            </div>
                                                            <div className="w-[50%] text-center flex justify-center ">
                                                                <input type="file" onChange={(e)=>(handledoc(e))} className="w-[40%]  text-sm border-2 border-solid border-zinc-200"></input>
                                                                <button className={` p-1 rounded space-x-2 relative top-0  left-0 text-black ${spin}`} type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  {/* <span className="" role="status" aria-hidden="true"></span> */}

</button>
                                                            </div>
                                                        </div>
                                                       <div className="w-[90%] flex justify-end  items-center mt-2">
                                                       <button onClick={(e)=>(submit(userid,subject))} disabled={disable}  className={`${opac} bg-amber-800 text-white w-[36%] p-1 text-center rounded hover:bg-amber-700 `}>
                                                       Submit
                                                        </button>
                                                        
                                                       </div>
                                                    </div></div>
                                            </div>
                                        </div>
                                            </>)
                                        })}
                                        
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
