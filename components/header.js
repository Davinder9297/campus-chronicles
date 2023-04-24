import Link from "next/link"
import {GrClose} from 'react-icons/gr'
import {ImWarning} from 'react-icons/im'
export default function Header() {

  return (<>
      <div className="modal fade overflow-x-hidden" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        <button type="button" className=" font-medium btn  bg-orange-200" data-bs-dismiss="modal">No</button>
        <button type="button" className="btn font-medium  bg-orange-500 ">Yes</button>
      </div>
    </div>
  </div>
</div>


    <div className="flex  justify-around pt-2 h-11 font-serif text-md font-semibold bg-purple-300 ">
      <div >Home</div>
      <div><Link href="/about">About Us</Link></div>
      <div><Link href='/'>Faculty</Link></div>
      <div><Link href="#events">Events & Activities</Link></div>
      <div><Link href='/club'>Clubs</Link></div>
      <div>Library</div>
      <div><Link href="/placement">Placements</Link></div>

      <div><button type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Log Out
</button>
        
      </div>
    </div>
  </>)
}