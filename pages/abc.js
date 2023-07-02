import Link from "next/link"
import { GrClose } from 'react-icons/gr'
import { ImWarning } from 'react-icons/im'
import { RxHamburgerMenu } from 'react-icons/rx'

// import parcookie from 'js-cookie'
import { parseCookies } from 'nookies'
import { useEffect, useState } from "react"
import cookie from "js-cookie"
export default function Header() {
  const [showlogin, setshowlogin] = useState('')
  const [showlogout, setshowlogout] = useState('hidden')
  useEffect(() => {
    // let cook=cookie.get('token');
    let { token } = parseCookies()
    if (token) {
      setshowlogin('hidden')
      setshowlogout('')
    }
    else {
      setshowlogout('hidden')
      setshowlogin('')
    }
  }, [])

  const yesbutton = () => {
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
            <button type="button" className="btn-close text-black font-bold" data-bs-dismiss="modal" aria-label="Close"><GrClose /></button>
          </div>
          <div className="modal-body font-medium text-md ">
            Are you sure to log out?
          </div>
          <div className="modal-footer">
            <button type="button" className=" font-medium btn px-3 bg-orange-200" data-bs-dismiss="modal">No</button>
            <button onClick={yesbutton} type="button" className="btn font-medium  bg-orange-500 " data-bs-dismiss="modal">Yes</button>
          </div>
        </div>
      </div>
    </div>


    
    <nav className="navbar navbar-expand-lg bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 flex justify-around items-center font-serif text-md font-semibold">
  <div className="container-fluid ">
<div className="mb-2"><Link href="/">Home</Link></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="RxHamburgerMenu"></span> */}
      <RxHamburgerMenu></RxHamburgerMenu>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ">
        <li className="nav-item mb-2"><div><Link href="/about">About Us</Link></div></li>
        <li className="nav-item mb-2"><div><Link href='/faculty'>Faculty</Link></div></li>
        <li className="nav-item mb-2"><div><Link href="#events">Events & Activities</Link></div></li>
        <li className="nav-item mb-2"><div><Link href='/club'>Clubs</Link></div></li>
        <li className="nav-item mb-2"><div><Link href='/library'>Library</Link></div></li>
        <li className="nav-item mb-2"><div><Link href="/placement">Placements</Link></div></li>
        <li className="nav-item mb-2"><div className={`${showlogin}`}><Link href="/login">Log In </Link></div></li>
        <li className="nav-item mb-2"><div className={` flex items-center h-full justify-center ${showlogout}`}><button type="button" className={`font-serif font-semibold  `} data-bs-toggle="modal" data-bs-target="#exampleModal">Log out</button></div></li>
        
      </ul>
      
    </div>
  </div>
</nav>




{/* 
    <div className="flex justify-around items-center h-11 font-serif text-md font-semibold  bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 " id="navbarSupportedContent">
      <div></div>
      <div><Link href='/club'>Clubs</Link></div>
      <div></div>
      <div></div>
      
      <div className={` flex items-center h-full justify-center ${showlogout}`}><button type="button" className={`font-serif font-semibold  `} data-bs-toggle="modal" data-bs-target="#exampleModal">Log out</button></div>
    </div> */}
    
  </>)
}