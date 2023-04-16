import {RiFolderAddLine,RiContactsBook2Line,RiLogoutBoxLine} from "react-icons/ri"
import {AiOutlineDashboard} from "react-icons/ai"
import {MdPostAdd} from "react-icons/md"
import {HiOutlineNewspaper} from "react-icons/hi"
import {BsBookmarkHeart} from "react-icons/bs"
import {GrClose} from 'react-icons/gr'
import {ImWarning} from 'react-icons/im'
// import logout from ""
import Link from "next/link";
export default function Sidebar(){
    return(<>
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
        <button type="button" className="btn font-medium  bg-orange-500 ">Yes</button>
      </div>
    </div>
  </div>
</div>
    

    <div className="flex-col space-y-6 pt-2 text-white w-[18%] bg-slate-700   font-serif  h-full" >
            <div><img src="/librarymanagement.png" alt="" /></div>
            <div className="flex space-x-1 items-center pl-2 "><AiOutlineDashboard className="text-xl"/><Link className="/library_management" href="">Dashboard</Link></div>
            <div className="flex space-x-1 items-center pl-2"><RiContactsBook2Line className="text-xl"/><Link href="/library_management/issuedbook">Issued Books</Link></div>
            <div className="flex space-x-1 items-center pl-2"><HiOutlineNewspaper className="text-xl"/><Link href="/library_management/issuedmagazines">Issued Magazines</Link></div>
            <div className="flex space-x-1 items-center pl-2"><RiFolderAddLine className="text-xl"/><Link href="/library_management/addbook">Add Books</Link></div>
            <div className="flex space-x-1 items-center pl-2"><MdPostAdd className="text-xl"/><Link href="/library_management/addmagazines">Add Magazines</Link></div>
            <div className="flex space-x-1 items-center pl-2"><BsBookmarkHeart className="text-xl"/><Link href="/library_management/requestedbooks">Requested Books</Link></div>
            <div className="flex space-x-1 items-center pl-2"><RiLogoutBoxLine className="text-xl"/><button type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Log Out
</button></div>
          </div>
    </>)
}