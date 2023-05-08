import { useEffect, useState } from "react"
import { FaEdit } from 'react-icons/fa'
import { FiSave } from 'react-icons/fi'
import { CgShapeRhombus } from 'react-icons/cg'
import { ImSpinner6 } from 'react-icons/im'
import Navbar from "../../components/navbar"
import Link from "next/link"
import TableRows from "./Tablerows"
import Newrow from "./tablerows1"
import Experiencerow from "./tablerows2"
import { Cookies } from "js-cookie"
import { parseCookies, setCookie } from "nookies"
// import { getCookie } from 'cookies-next';
import TeacherNavbar from "../../components/teacher_navbar"

export default function Profile() {
  const [pinfo, setpinfo] = useState('')
  const [edqu, setedqu] = useState('hidden')
  const [exre, setexre] = useState('hidden')
  const [piclass, setpiclass] = useState('border-b-2 border-black text-black scale-105 transition duration-75 shadow-xl')
  const [edeqclass, setedeqclass] = useState('text-white')
  const [exreclass, setexreclass] = useState('text-white')
  const [read, setread] = useState(true)
  const [disable, setdisable] = useState(true)
  const [point, setpoint] = useState('opacity-40 cursor-not-allowed')
  const [rowsData1, setRowsData1] = useState([]);
  const [norecord1, setnorecord1] = useState('');
  const [norecord, setnorecord] = useState('')
  const [show1, setshow1] = useState(true)
  const [light1, setlight1] = useState('opacity-40 cursor-not-allowed')
  const [show2, setshow2] = useState(true)
  const [light2, setlight2] = useState('opacity-40 cursor-not-allowed')
  const [show3, setshow3] = useState(true)
  const [light3, setlight3] = useState('opacity-40 cursor-not-allowed')
  const [spin, setspin] = useState('hidden')
  const [opac, setopac] = useState('')
const [facultyname, setfacultyname] = useState('')
  // let c=cookie.get('facultyname')

  const [personaldata, setpersonaldata] = useState({ image: "", facultyname: "", department: "", designation: "", facultyid: "", phone: "", email: "", linkedin: "" })
  const personaldatachange = (evnt) => {
    setpersonaldata({
      ...personaldata,
      [evnt.target.name]: evnt.target.value
    })
    //   setpersonaldata({
    //     ...personaldata,
    //     [evnt.target.name]: evnt.target.value
    // });
  }
  const edit = (e) => {
    e.preventDefault()
    setread(false)
    setdisable(false)
    setpoint('cursor-pointer')
  }
  const save = async (e) => {
    // console.log(personaldata);
    e.preventDefault()
    setread(true)
    setdisable(true)
    setpoint('opacity-40 cursor-not-allowed')
    // let {}
    let phone = personaldata.phone;
    let email = personaldata.email;
    let linkedin = personaldata.linkedin;
    // {phone,}
    let data = { phone, email, linkedin }
    const res = await fetch('http://localhost:3000/api/facultypersonaldata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json();

  }
  const pi = () => {
    setedqu('hidden');
    setexre('hidden');
    setpinfo('');
    setpiclass('border-b-2 border-black text-black scale-105 transition duration-75 shadow-xl')
    setedeqclass('text-white')
    setexreclass('text-white')
  }
  const eq = () => {
    setedqu('flex ');
    setexre('hidden');
    setpinfo('hidden');
    setpiclass('text-white')
    setedeqclass('border-b-2 border-black text-black scale-105 transition duration-75 shadow-xl')
    setexreclass('text-white')
  }
  const er = () => {
    setedqu('hidden');
    setexre('');
    setpinfo('hidden');
    setpiclass('text-white')
    setedeqclass('text-white')
    setexreclass('border-b-2 border-black text-black scale-105 transition duration-75 shadow-xl')
  }
  const [rowsData, setRowsData] = useState([]);

  const addTableRows = () => {
    setnorecord('hidden')
    setshow3(false)
    setlight3('')
    // console.log(rowsData.length);
    const rowsInput = {
      qualification: "",
      institution: "",
      university: "",
      year: ""
    }
    setRowsData([...rowsData, rowsInput])
    console.log(rowsData.length);


  }
  const deleteTableRows = (index) => {
    setshow3(false)
    setlight3('')
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
    // console.log(rowsData.length);
    if (rowsData.length == 1) {
      setnorecord('')
    }
  }

  const handleChange = (index, evnt) => {
    setshow3(false)
    setlight3('cursor-pointer')
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);



  }


  const addTableRows1 = () => {
    setshow2(false)
    setlight2('')
    setnorecord1('hidden')
    const rowsInput = {
      title: "",
      authorname: "",
      journal: "",
      year: "",
      issn: "",
      link: ""
    }
    setRowsData1([...rowsData1, rowsInput])


  }
  const deleteTableRows1 = (index) => {
    setshow2(false)
    setlight2('')
    const rows = [...rowsData1];
    rows.splice(index, 1);
    setRowsData1(rows);
    // console.log(rowsData.length);
    if (rowsData1.length == 1) {
      setnorecord1('')
    }
  }

  const handleChange1 = (index, evnt) => {
    setshow2(false)
    setlight2('cursor-pointer')
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData1];
    rowsInput[index][name] = value;
    setRowsData1(rowsInput);
  }
  const [rowsData2, setRowsData2] = useState([]);
  const [norecord2, setnorecord2] = useState('');

  const addTableRows2 = () => {
    setshow1(false)
    setlight1('cursor-pointer')
    setnorecord2('hidden')
    const rowsInput = {
      role: "",
      institution: "",
      duration: ""

    }
    setRowsData2([...rowsData2, rowsInput])


  }
  const deleteTableRows2 = (index) => {
    setshow1(false)
    setlight1('')
    const rows = [...rowsData2];
    rows.splice(index, 1);
    setRowsData2(rows);
    // console.log(rowsData.length);
    if (rowsData2.length == 1) {
      setnorecord2('')
    }
  }

  const handleChange2 = (index, evnt) => {
    setshow1(false)
    setlight1('cursor-pointer')
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData2];
    rowsInput[index][name] = value;
    setRowsData2(rowsInput);
  }
  const educationsave = async () => {
    setshow3(true)
    setlight3('opacity-40 cursor-not-allowed')
  
    const res = await fetch('http://localhost:3000/api/education', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rowsData),
    })
    let response = await res.json();
  }
  const experiencesave = async () => {
    setshow1(true)
    setlight1('opacity-40 cursor-not-allowed')
    const res = await fetch('http://localhost:3000/api/experience', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rowsData2),
    })
    let response = await res.json();
  }
  const researchsave = async () => {
    setshow2(true)
    setlight2('opacity-40 cursor-not-allowed')
    const res = await fetch('http://localhost:3000/api/research', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rowsData1),
    })
    let response = await res.json();
  }

  useEffect(() => {
    const url = "http://localhost:3000/api/facultypersonaldata";
    const url1 = "http://localhost:3000/api/education";
    const url2 = "http://localhost:3000/api/experience";
    const url3 = "http://localhost:3000/api/research";

    const fetchData = async () => {
      try {
        setspin('')
        setopac('opacity-40')
        let response = await fetch(url);
        let json = await response.json();
        setpersonaldata(json)
        let response1 = await fetch(url1);
        let json1 = await response1.json();
        // console.log(json1);
        setRowsData(json1)
        if (json1.length > 0) {
          setnorecord('hidden')
        }
        let response2 = await fetch(url2);
        let json2 = await response2.json();
        // console.log(json1);
        setRowsData2(json2)
        if (json2.length > 0) {
          setnorecord2('hidden')
        }
        let response3 = await fetch(url3);
        let json3 = await response3.json();
        // console.log(json1);
        setRowsData1(json3)
        if (json3.length > 0) {
          setnorecord1('hidden')
        }
        setspin('hidden')
        setopac('')

      } catch (error) {
        setopac('opacity-40')
        setspin('')
        console.log("error", error);
      }
    };

    fetchData();

  }, [])

  return (<>
    <div className="h-screen overflow-y-hidden ">
      <Navbar />
      <TeacherNavbar />
      <div className="text-center font-semibold  text-3xl mt-2 p-2">Your Profile...</div>
      <div className={`flex  h-[77.3%] mt-2 justify-around font-serif ${opac}`}>
        <div className={`text-center  justify-center items-center h-full w-full flex absolute top-0 left-0 z-10 order-1  ${spin}`}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <div className="dp  h-[100%] w-[30%] flex items-center justify-center">
          <div className="">
            <div className=" flex justify-center rounded-full">
              <img className="h-48 shadow-2xl shadow-red-600 w-48 rounded-full" src={`${personaldata.image}`} alt="" />
            </div>
            <div className="text-center text-2xl mt-4 font-bold">
              {personaldata.facultyname}
            </div>
          </div>
        </div>
        <div className="info  w-[65%] h-[100%] shadow-md shadow-slate-600">
          <div className="flex justify-around  border-b-2 border-gray-200 w-[100%]">
            <button onClick={pi} className={`py-2  px-2 w-[33.3%] hover:bg-amber-700 font-semibold bg-amber-800 ${piclass}`} >Personal Information</button>
            <button onClick={eq} className={`py-2  px-2 w-[33.3%] hover:bg-yellow-600 font-semibold bg-yellow-500 ${edeqclass}`}>Educational Qualification</button>
            <button onClick={er} className={`py-2  px-2 w-[33.3%] hover:bg-amber-700 font-semibold bg-amber-800 ${exreclass}`}>Experience And Research Papers</button>
          </div>
          <div className=" h-[91.5%] w-[95%] mx-auto">
            <div className={`personal_info w-full text-lg ${pinfo}`}>
              {/* <div className="flex bg-slate-600  justify-center space-x-5 "><div className="font-semibold">Name</div><div  ><input type="text" value="Ms.Jaspreet Kaur"/></div></div> */}
              {/* <div className="flex bg-slate-600  justify-center space-x-5 "><div className="font-semibold">Job Role</div><div><input type="text" value="Chapdasi"/></div></div> */}

              <div className="flex justify-evenly">
                <div className="flex-col space-y-5 pt-4 ">
                  <div className="mb-1">Name</div>
                  <div className="mb-1">Department</div>
                  <div className="mb-1">Designation</div>
                  <div className="mb-1">Faculty Id</div>
                  <div className="mb-1">Phone No.</div>
                  <div className="mb-1">Email</div>
                  <div className="mb-1">Linkedin</div>
                </div>

                <div className="font-sans space-y-5 pt-4  w-[50%]">
                  <div className=" "><input readOnly={true} onChange={personaldatachange} type="text" className="text-base pl-3 w-full  bg-slate-100 outline-1  outline-gray-300 rounded outline focus:outline-gray-400" value={personaldata.facultyname} name="facultyname" /></div>
                  <div><input type="text" onChange={personaldatachange} readOnly={true} className="text-base pl-3 bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={personaldata.department} name="department" /></div>
                  <div><input type="text" onChange={personaldatachange} readOnly={true} className="text-base pl-3 bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={personaldata.designation} name="designation" /></div>
                  <div><input type="text" onChange={personaldatachange} readOnly={true} className="text-base pl-3 bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={personaldata.facultyid} name="facultyid" /></div>
                  <div><input type="text" onChange={personaldatachange} readOnly={read} className="text-base pl-3 bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={personaldata.phone} name="phone" /></div>
                  <div><input type="email" onChange={personaldatachange} readOnly={read} className="text-base pl-3 bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={personaldata.email} name="email" /></div>
                  <div><input type="text" onChange={personaldatachange} readOnly={read} className="text-base pl-3 bg-slate-100 outline-1 w-full outline-gray-300 rounded outline focus:outline-gray-400" value={personaldata.linkedin} name="linkedin" /></div>
                  <div className="flex">
                    <div className="mt-3 flex space-x-7">
                    <button type="submit" onClick={edit} className=" flex items-center space-x-1 bg-amber-800 rounded text-white px-2 py-1 cursor-pointer"><div>Edit</div> <FaEdit className="" /></button>
                    <button disabled={disable} onClick={save} className={`flex items-center space-x-1 bg-amber-800 rounded text-white px-2 py-1 ${point}`}><div>Save</div> <FiSave className="" /></button>

                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className={`qualification font-sans w-full ${edqu} justify-center items-center h-full px-2 `}>
              <div className="h-full space-y-5 overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500  w-full ">
                <div className="w-full flex justify-end pt-2 space-x-3">
                  <button onClick={addTableRows} className="bg-blue-800 py-2 px-1 text-white rounded">+Add New Record</button>
                  <button disabled={show3} className={`flex items-center space-x-1 bg-blue-800 rounded text-white px-2 py-1 ${light3}`} onClick={educationsave}><div>Save</div> <FiSave className="" /></button>
                  </div>
                <div className="flex justify-center  qualtable items-center w-full ">
                  <table className="border-collapse border border-slate-400 ">
                    <thead className="">
                      <tr className=" ">
                        <th className=" border-2  py-2 border-slate-300 text-center px-2">Qualification </th>
                        <th className=" border-2 py-2 border-slate-300 px-2 text-center">Institution</th>
                        <th className=" border-2 py-2 border-slate-300 px-2 text-center">University/Board</th>
                        <th className=" border-2 py-2 border-slate-300 px-2 text-center">Year of Completion</th>
                        <th className=" border-2 py-2 border-slate-300 px-2 text-center">Deletion</th>
                      </tr>
                    </thead>
                    <tbody className=" max-h-56">
                      <tr className={`${norecord}`}>
                        <td colSpan="8" className="bg-slate-200 text-center h-52 ">
                          No records found
                        </td>
                      </tr>
                      <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className={`experience ${exre} pt-2 w-full   h-full overflow-y-auto  scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500`}>
              <div className="text-center font-semibold text-2xl mt-3">Teaching Experience</div>
              <div className="w-full px-2 flex justify-end pt-2 mb-2 space-x-3">
              <button onClick={addTableRows2} className="bg-blue-800 py-2 px-1 text-white rounded">+Add New Record</button>
                <button disabled={show1} className={`bg-blue-800 py-2 px-2 space-x-1 flex justify-center items-center text-white rounded ${light1}`} onClick={experiencesave}><div>Save </div><FiSave className="" /></button> 
              </div>
              <div className="w-full ex h-auto px-2">
                <table className="border-collapse border border-slate-400 w-full h-full">
                  <thead className="">
                    <tr className=" ">
                      <th className=" border-2  py-2 border-slate-300 text-center px-2">Role </th>
                      <th className=" border-2 py-2 border-slate-300 px-2 text-center">Institution</th>
                      <th className=" border-2 py-2 border-slate-300 px-2 text-center">Duration</th>
                      <th className=" border-2 py-2 border-slate-300 px-2 text-center">Deletion</th>
                    </tr>
                  </thead>
                  <tbody className=" ">
                    <tr className={`${norecord2}`}>
                      <td colSpan="8" className="bg-slate-200 text-center h-28 ">
                        No records found
                      </td>
                    </tr>
                    <Experiencerow rowsData2={rowsData2} deleteTableRows2={deleteTableRows2} handleChange2={handleChange2} />

                  </tbody>
                </table>
              </div>
              {/* <div className="px-3 py-2 space-y-2">
                          <div className="flex  space-x-1 items-center"><div className="font-semibold text-lg flex items-center space-x-1"><CgShapeRhombus className="text-xl"/><div>Professor</div></div><div>IKGPTU (Since 2019)</div></div>
                          <div className="flex  space-x-1 items-center"><div className="font-semibold text-lg flex items-center space-x-1"><CgShapeRhombus className="text-xl"/><div>Associate Professor</div></div><div>IKGPTU, Main Campus, Kapurthala (September, 2016 to September, 2019)</div></div>
                          <div className="flex  space-x-1 items-center"><div className="font-semibold text-lg flex items-center space-x-1"><CgShapeRhombus className="text-xl"/><div>Senior Lecturer</div></div><div>SBSSTC, Ferozepur, Punjab (August, 2003 to June, 2009)</div></div>
                          <div className="flex  space-x-1 items-center"><div className="font-semibold text-lg flex items-center space-x-1"><CgShapeRhombus className="text-xl"/><div>Lecturer</div></div><div>SBSSTC, Ferozepur, Punjab (August, 1998 to July, 2003)</div></div>                        
                        </div> */}

              <div className="  py-2 research_pub px-2 w-full ">
                <div className="text-center font-semibold text-2xl mt-8">Research Publications</div>
                <div className="w-full flex justify-end pt-2 mb-2 space-x-3 ">
                  <button onClick={addTableRows1} className="bg-blue-800 py-2 px-1 text-white rounded">+Add New Record</button>
                  <button disabled={show2} className={`bg-blue-800 py-2 px-2 space-x-1 flex justify-center items-center text-white rounded ${light2}`} onClick={researchsave}><div>Save </div><FiSave className="" /></button> 
                  </div>
                <div className="pt-2   res_table  pb-20  ">
                  <table className="border-collapse border border-slate-400  w-full">
                    <thead className="">
                      <tr className=" ">
                        <th className="border-2  py-2 border-slate-300 text-center px-2">Title </th>
                        <th className="border-2 py-2 border-slate-300 px-2 text-center">Author's Name</th>
                        <th className="border-2 py-2 border-slate-300 px-2 text-center">Journal</th>
                        <th className="border-2 py-2 border-slate-300 px-2 text-center">Year</th>
                        <th className="border-2 py-2 border-slate-300 px-2 text-center">ISSN</th>
                        <th className="border-2 py-2 border-slate-300 px-2 text-center">Link</th>
                        <th className="border-2 py-2 border-slate-300 px-2 text-center">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className={`${norecord1}`}>
                        <td colSpan="8" className="bg-slate-400 text-center  h-28">
                          No records found
                        </td>
                      </tr>
                      <Newrow rowsData1={rowsData1} deleteTableRows1={deleteTableRows1} handleChange1={handleChange1} />
                      {/* <tr>
                          <td className="border-2 max-w-lg   h-auto border-slate-300 ">Haar wavelet approximate solutions for the generalized Lane Emden equations arising in astrophysics</td>
                          <td className="border-2 max-w-[200px]   h-auto border-slate-300 ">Harpreet Kaur, R.C. Mittal and Vinod Mishra</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">Computer Physics Communications</td>
                          <td className="border-2 max-w-xsm   h-auto border-slate-300 ">2013</td>
                          <td className="border-2 max-w-[150px]   h-auto border-slate-300 ">00104655</td>
                          <td className="text-red-500 border-2 border-slate-300"><Link href="/" > Link</Link></td>
                        </tr> */}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </>)
}