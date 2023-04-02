export default function Request_book(){
    return(<>
    <div className="h-[84vh] request p-24">
        <div className="h-80 w-96 request_book_animation outline text-yellow-100 flex justify-center shadow-xl shadow-yellow-200  outline-1 outline-yellow-200  rounded-lg">
            
         <div className="flex-col text-yellow-100 py-3">
             <div className="text-center font-serif text-2xl animate-pulse">Request Book</div>
             <div className="space-y-5 mt-4 ">
                <div className="flex justify-between  space-x-3"><div>Book Title</div> <div><input className="rounded-sm bg-yellow-200 text-black " type="text" /></div></div>
                <div className="flex justify-between space-x-3 "><div>Author Name</div> <div><input className="rounded-sm bg-yellow-200 text-black " type="text" /></div></div>
                <div className="flex justify-between  space-x-3"><div>Publisher (Optional*)</div> <div><input className="rounded-sm bg-yellow-200 text-black " type="text" /></div></div>
            </div>
            <button className="w-full bg-yellow-200 mt-5 text-orange-900 font-semibold text-center py-1 rounded-sm">Submit</button>

         </div>

        </div>
    
    </div>
    </>)
}