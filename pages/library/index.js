import {ImBooks,ImNewspaper} from 'react-icons/im'
import {FaHome,FaBookMedical} from 'react-icons/fa'
import {AiFillFilePdf} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
import {MdMessage} from 'react-icons/md'
import LibraryCarousal from '../../components/Library_carousel'
import Link from 'next/link'
export default function Library(){
    return(<>
    <div className="flex-col ">
        <div className='text-center text-4xl h-24 bg-slate-400'>Library</div>
        <div className="libnavbar flex justify-around w-full bg-purple-300 py-2 font-semibold font-serif ">
                <div className='flex '><FaHome className='text-lg mt-[2px] mr-1'/> Home</div>
                <div className='flex  '><MdMessage className='text-lg mt-1 mr-1'/>About Library</div>
                <div className='flex '><ImBooks className='text-xl mt-[2px] mr-1'/> <Link href='/library/availablebooks'>Available Books</Link></div>
                <div className='flex '><ImNewspaper className='text-lg mt-[3px] mr-1'/><Link href='/library/availablemagazines'>Available Magazines</Link></div>
                <div className='flex '><FaBookMedical className=' mt-1 mr-1'/><Link href='/library/requestbook'>Request Book</Link></div>
                <div className='flex '><AiFillFilePdf className='text-lg mt-1 mr-1'/><Link href='/library/ebooks'>eBooks</Link></div>
                <div className='flex '><MdAccountCircle className='text-xl mt-[2px] mr-1 '/>Profile</div>
            
            </div>
        <div className="flex justify-between mt-[2px]">
      
            <div className="flex-col w-[73%] h-2/3 bg-black">
                   <LibraryCarousal/>
            </div>
            <div className="flex-col w-1/4 mr-1 shadow-xl shadow-purple-300 ">
                <div className='text-xl font-serif text-center bg-purple-300 rounded-sm shadow-lg shadow-purple-500'>Announcement</div>
               <marquee  width="100%" direction="up" height="90%" behaviour="scroll" scrollamount="4" className="space-y-5 px-3">
             <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
             <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
             <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
             
               </marquee>
            
            </div>
        </div>
        <div className='flex justify-between mt-5 mb-5 h-96 space-x-5'>
            <div className='new_published_book  w-1/2 flex-col shadow-xl shadow-purple-300'>
                <div className='text-2xl text-center pt-2 font-serif '>New Books</div>
                <div className='flex justify-center w-full'><img className='w-40' src="hr.png" alt="" /></div>
                <marquee  width="100%" direction="up" height="83%" behaviour="scroll" scrollamount="4" className="">
                <div className='flex flex-wrap justify-evenly    pb-5 '>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                   

                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                   
                </div>
                </marquee> 
            </div>
           
            <div className='new_published_book  w-1/2 flex-col shadow-xl shadow-purple-300'>
                <div className='text-2xl text-center pt-2 font-serif '>E-Resources</div>
                <div className='flex justify-center w-full'><img className='w-40' src="hr.png" alt="" /></div>
                <marquee  width="100%" direction="up" height="83%" behaviour="scroll" scrollamount="4" className="">
                <div className='flex flex-wrap justify-around  px-3 pb-5 '>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="IEEE.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="CUP.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="IEEE.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="CUP.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="IEEE.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="CUP.jpg" alt="" /></div>
            
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="IEEE.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="CUP.jpg" alt="" /></div>
            
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="IEEE.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="CUP.jpg" alt="" /></div>
            
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="IEEE.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="CUP.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="IEEE.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="CUP.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="IEEE.jpg" alt="" /></div>
                    <div className='mx-2  my-4 w-28  ' ><img className='' src="CUP.jpg" alt="" /></div>
            
                </div>
                </marquee>
            </div>
           
        </div>
  </div>
    </>)
}