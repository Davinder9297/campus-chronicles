import Link from "next/link"
import {GrClose} from 'react-icons/gr'
import {ImWarning} from 'react-icons/im'
// import parcookie from 'js-cookie'
import { parseCookies } from 'nookies'
import { useEffect, useState } from "react"
import cookie from "js-cookie"
export default function Header() {
  const [showlogin, setshowlogin] = useState('')
  const [showlogout, setshowlogout] = useState('hidden')
useEffect(() => {
  // let cook=cookie.get('token');
  let {token}=parseCookies()
  if(token){
    setshowlogin('hidden')
    setshowlogout('')
  }
  else{
    setshowlogout('hidden')
    setshowlogin('')
  }
}, [])

const yesbutton=()=>{
  cookie.remove('token')
  setshowlogin('')
  setshowlogout('hidden')
}
  return (<>
<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content bg-orange-100">
      <div className="modal-header">
        <h5 className="modal-title font-semibold flex text-xl  items-center" id="exampleModalLabel"><ImWarning className='mr-2 text-2xl' />Confirmation</h5>
        <button type="button" className="btn-close text-black font-bold" data-bs-dismiss="modal" aria-label="Close"><GrClose/></button>
      </div>
      <div className="modal-body font-medium text-md ">
        Are you sure to log out?
      </div>
      <div className="modal-footer">
        <button type="button" className=" font-medium btn px-3 bg-orange-200" data-bs-dismiss="modal">No</button>
        <button onClick={yesbutton}  type="button" className="btn font-medium  bg-orange-500 "  data-bs-dismiss="modal">Yes</button>
      </div>
    </div>
  </div>
</div>


    <div className="flex  justify-around items-center h-11 font-serif text-md font-semibold bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 ">
      <div >Home</div>
      <div className="hover:text-white"><Link href="/about">About Us</Link></div>
      <div><Link href='/faculty/new'>Faculty</Link></div>
      <div><Link href="#events">Events & Activities</Link></div>
      <div><Link href='/club'>Clubs</Link></div>
      {/* <div>Library</div> */}
      <div><Link href="/placement">Placements</Link></div>

      {/* <div><button type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Log Out
</button> */}
      <div className={`${showlogin}`}><Link href="/login">
  Log In
</Link></div>
<div className={` flex items-center h-full justify-center ${showlogout}`}><button type="button" className= {`font-serif font-semibold  `} data-bs-toggle="modal" data-bs-target="#exampleModal">
  Log out</button></div>
    </div>
  </>)
}