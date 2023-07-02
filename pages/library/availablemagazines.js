import {IoMdArrowDroprightCircle} from 'react-icons/io'
import Navbarres from '../../components/navbarres'

export default function Available(){
    return(<>
    <Navbarres/>
    <div className="flex h-[85vh] overflow-y-hidden bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800">
        <div className="flex-col filter-side w-[21%]  scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600  bg-slate-900 py-2 px-3 text-white overflow-y-auto overflow-x-hidden ">
            <div className="flex justify-between w-full   h-8 items-center">
                <div className="text-2xl font-semibold text-white">Filters</div>
                <div className="text-xs bg-yellow-500 py-1 px-2 rounded-md text-black">Clear All</div>
            </div>

           <div className='flex-col space-y-2'>
                <div className="flex justify-between w-full   h-8 items-center mt-3">
                <div className="text-sm font-semibold text-white">COMPUTER SCIENCE</div>
                <div className="text-xs text-white flex items-center space-x-1"><div>View All</div><IoMdArrowDroprightCircle className='text-lg'/></div>
                </div>

                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Mathematics (20)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>C/C++ (10)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Python (15)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Mathematics (20)</div></div>
           </div>
           <div className='flex-col space-y-2'>
                <div className="flex justify-between w-full   h-8 items-center mt-3">
                <div className="text-sm font-semibold text-white">COMPUTER SCIENCE</div>
                <div className="text-xs text-white flex items-center space-x-1"><div>View All</div><IoMdArrowDroprightCircle className='text-lg'/></div>
                </div>

                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Mathematics (20)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>C/C++ (10)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Python (15)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Mathematics (20)</div></div>
           </div>
           <div className='flex-col space-y-2'>
                <div className="flex justify-between w-full   h-8 items-center mt-3">
                <div className="text-sm font-semibold text-white">COMPUTER SCIENCE</div>
                <div className="text-xs text-white flex items-center space-x-1"><div>View All</div><IoMdArrowDroprightCircle className='text-lg'/></div>
                </div>

                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Mathematics (20)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>C/C++ (10)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Python (15)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Mathematics (20)</div></div>
           </div>
           <div className='flex-col space-y-2'>
                <div className="flex justify-between w-full   h-8 items-center mt-3">
                <div className="text-sm font-semibold text-white">COMPUTER SCIENCE</div>
                <div className="text-xs text-white flex items-center space-x-1"><div>View All</div><IoMdArrowDroprightCircle className='text-lg'/></div>
                </div>

                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Mathematics (20)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>C/C++ (10)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Python (15)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Mathematics (20)</div></div>
           </div>
           <div className='flex-col space-y-2'>
                <div className="flex justify-between w-full   h-8 items-center mt-3">
                <div className="text-sm font-semibold text-white">COMPUTER SCIENCE</div>
                <div className="text-xs text-white flex items-center space-x-1"><div>View All</div><IoMdArrowDroprightCircle className='text-lg'/></div>
                </div>

                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Mathematics (20)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>C/C++ (10)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Python (15)</div></div>
                <div className='text-sm flex w-full space-x-1 '><input className='w-[18px]' type="checkbox" name="maths" id="" /> <div>Mathematics (20)</div></div>
           </div>
            
           
        </div>


        <div className='right-side flex-col w-[79%]'>
        <div className="flex justify-center ">
  <div className="pt-3">
    <div className=" flex w-full flex-wrap items-stretch">
      <input
        type="search"
        className="relative m-0 -mr-px block w-96 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-yellow-200  px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-black-200"
        placeholder="Search books by book name or author name"
        aria-label="Search"
        aria-describedby="button-addon1" />
      <button
        className="relative z-[2] flex items-center rounded-r bg-amber-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-yellow-600 hover:shadow-lg focus:bg-amber-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-500 active:shadow-lg"
        type="button"
        id="button-addon1"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</div>


<div className='flex-col mx-2 py-12 h-full'>
        <div className='text-center text-2xl text-white font-serif'> All Magazines</div> 
        <div className='flex justify-center'><img className='w-40 ' src="/hr.png" alt="" /></div>
        <div className=' w-full overflow-y-auto scrollbar-thin pb-12 scrollbar-track-transparent scrollbar-thumb-transparent h-full  flex flex-wrap  justify-center '>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4'>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            <div className='flex-col mx-3 my-4  '>
            <img className='h-52' src="/book.jpg" alt="" />
            <div className='text-center font-semibold font-serif text-gray-700'>Ecocritism</div>
            </div>
            
        </div>
</div>
        </div>
    </div>
    </>)
}