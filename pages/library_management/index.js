import Navbar from "../../components/navbar";

import { useEffect } from "react"
import { Chart } from "chart.js";
import Sidebar from "./sidebar";
export default function Library_management(){
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          data: [0.2, 0.3, 0.1, 0.5, 0.1, 0.3, 0.7],
          label: "Applied",
          borderColor:"#e18ff1",
          backgroundColor: "#7bb6dd",
          fill: false,
        },]
      },
    });
  }, [])
    return(<>
    <div className="h-screen overflow-y-hidden">
        <Navbar/>
        <div className="flex h-full" >
          <Sidebar/>
        
        <div className="w-[82%]  pt-5 flex-col">
              <div className=" flex justify-evenly flex-wrap  h-auto">
                        <div className="flex justify-center w-56 h-28 px-2 bg-green-400 rounded">
                          <div className="flex items-center"><img className="w-28 h-24" src="/books.png" alt="" /></div>
                          <div className="flex-col space-y-4 w-24 pt-2">
                            <div className="text-center text-3xl ">10</div>
                            <div className="text-center ">Total Books</div>
                          </div>
                        </div>
                        <div className="flex justify-center w-56 h-28 px-2 bg-yellow-400 rounded">
                          <div className="flex items-center"><img className="w-28 h-20" src="/issued.png" alt="" /></div>
                          <div className="flex-col space-y-4 w-24 pt-2">
                            <div className="text-center text-3xl ">10</div>
                            <div className="text-center ">Issued Books</div>
                          </div>
                        </div>
                        <div className="flex justify-center w-56 h-28 px-2 bg-red-400 rounded">
                          <div className="flex items-center"><img className="w-24 h-24" src="/return.png" alt="" /></div>
                          <div className="flex-col space-y-4 w-24 pt-2">
                            <div className="text-center text-3xl ">10</div>
                            <div className="text-center ">Not Returned Books</div>
                          </div>
                        </div>
              </div>
              <div className="text-center font-serif mt-4 text-xl">Books Issued Per week</div>
              <div className="w-full flex justify-center"><div className="w-[60%]"><canvas className="" id='myChart'></canvas></div></div>
            </div> 

        </div>

            {/* <div className="flex justify-end mr-4 mt-2"><button className="flex p-2 justify-center items-center bg-slate-800 text-white rounded "><RiLogoutBoxLine className="text-xl"/>Log out</button></div>
    <div className=" flex justify-center container space-x-10 mt-2 flex-wrap">
            <div className="w-[30%] bg-slate-300 p-2">
                <div className="text-center text-xl">Add New Books</div>
            <form action="" method="post" className="flex-col space-y-2 font-serif">
                      <div className="flex-col">
                        <div className=" text-lg">Book's Title</div>
                        <div><input type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Subject/Category</div>
                        <select name="cars" id="cars" className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
  <option className="" value="">--Select Current Year--</option >
  <option className="" value="volvo">Volvo</option >
  <option className="" value="saab">Saab</option >
  <option className="" value="mercedes">Mercedes</option >
  <option className="" value="audi">Audi</option >
</select>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Quantity</div>
                        <div><input type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Token Number</div>
                        <div><input type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      
                      <div className="flex-col">
                        <div className=" text-lg">Image</div>
                        <div className="max-w-full"><input className="hover:cursor-pointer" type="file" /></div>
                      </div>
                  <button className="font-serif  outline  outline-1 px-2 rounded-sm py-[6px] w-full bg-pink-400 text-base text-gray-900 outline-gray-300 ">Submit</button>
                    </form>
            </div>
  
            <div className="w-[30%] bg-slate-300 p-2">
                <div className="text-center text-xl">Add New Magazines</div>
            <form action="" method="post" className="flex-col space-y-2 font-serif">
                      <div className="flex-col">
                        <div className=" text-lg">Title</div>
                        <div><input type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Category</div>
                        <select name="cars" id="cars" className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
  <option className="" value="">--Select Current Year--</option >
  <option className="" value="volvo">Volvo</option >
  <option className="" value="saab">Saab</option >
  <option className="" value="mercedes">Mercedes</option >
  <option className="" value="audi">Audi</option >
</select>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Quantity</div>
                        <div><input type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Token Number</div>
                        <div><input type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      
                      <div className="flex-col">
                        <div className=" text-lg">Image</div>
                        <div className="max-w-full"><input className="hover:cursor-pointer" type="file" /></div>
                      </div>
                  <button className="font-serif  outline  outline-1 px-2 rounded-sm py-[6px] w-full bg-pink-400 text-base text-gray-900 outline-gray-300 ">Submit</button>
                    </form>
            </div>
            <div className="w-[30%] bg-slate-300 p-2">
                <div className="text-center text-xl">Add New Magazines</div>
            <form action="" method="post" className="flex-col space-y-2 font-serif">
                      <div className="flex-col">
                        <div className=" text-lg">Title</div>
                        <div><input type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Category</div>
                        <select name="cars" id="cars" className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300">
  <option className="" value="">--Select Current Year--</option >
  <option className="" value="volvo">Volvo</option >
  <option className="" value="saab">Saab</option >
  <option className="" value="mercedes">Mercedes</option >
  <option className="" value="audi">Audi</option >
</select>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Quantity</div>
                        <div><input type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      <div className="flex-col">
                        <div className=" text-lg">Token Number</div>
                        <div><input type="text" className="outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-600 outline-gray-300" /></div>
                      </div>
                      
                      <div className="flex-col">
                        <div className=" text-lg">Image</div>
                        <div className="max-w-full"><input className="hover:cursor-pointer" type="file" /></div>
                      </div>
                  <button className="font-serif  outline  outline-1 px-2 rounded-sm py-[6px] w-full bg-pink-400 text-base text-gray-900 outline-gray-300 ">Submit</button>
                    </form>
            </div>
  
           
        </div> */}
    </div>
    </>)
}