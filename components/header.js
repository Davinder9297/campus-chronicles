import Link from "next/link"
export default function Header(){

    return(<>
    <div className="flex  justify-around pt-2 h-11 font-serif text-md font-semibold bg-purple-300 ">
<div >Home</div> 
<div>About us</div>
<div className="dropdown font-serif ">
  <div className=" font-semibold dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Admission
  </div>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <div className="dropdown-item"><Link className="dropdown-item" href="/">Programs offered</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/">Admission 2023</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/">Fee Structure</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/">Scholarships</Link></div>
  </div>
</div>


<div><Link href='/'>Faculty & Other Staff</Link></div>

<div className="dropdown">
<div className=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Student Facilities
  </div>

  <div className="dropdown-menu flex-col " aria-labelledby="dropdownMenuButton1">
   <div className="dropdown-item"> <Link  href="/">Events And Activites</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/">SC-ST Grievance</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/library">Campus Library</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/">Two Computer Labs</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/">Digital Electronics Lab</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/">Seminar Hall</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/">Sports Activities</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/">Hostel</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/">ICT Enabled Classes</Link></div>
    <div className="dropdown-item"><Link className="dropdown-item" href="/">Cafetria</Link></div>
  </div>
</div>

<div><Link href="fd">Placements</Link></div>

<div><button  type="button" className="bg-black" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch
</button>
<div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered bg-black">
    <div className="modal-content bg-black">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


</div>
</div>
    </>)
}