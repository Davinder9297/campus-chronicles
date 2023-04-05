import Link from "next/link"
export default function Header() {

  return (<>
    <div className="flex  justify-around pt-2 h-11 font-serif text-md font-semibold bg-purple-300 ">
      <div >Home</div>
      <div><Link href="/about">About Us</Link></div>
      <div><Link href='/'>Faculty</Link></div>
      <div>Events & Activities</div>
      <div><Link href='/club'>Clubs</Link></div>
      <div>Library</div>
      <div><Link href="fd">Placements</Link></div>

      <div><button type="button" className="bg-black" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch
      </button>
        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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