import {ImBooks,ImNewspaper} from 'react-icons/im'
import {FaHome,FaBookMedical} from 'react-icons/fa'
import {AiFillFilePdf} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
import LibraryCarousal from '../components/Library_carousel'
export default function Library(){
    return(<>
    <div className="flex-col ">
        <div className='text-center text-4xl'>Library</div>
        <div className="flex justify-between mt-3">
            <div className="leftcorner flex-col  space-y-6 ml-2  w-1/5">
            <div className='flex  space-x-2 '>
                    <div><img src="faculty.svg" alt="" /></div>
                    <div className='flex-col'>Neha
                    <div className='ml-2'>(Librarian)</div>
                    </div>
                   
                </div>
                <div className='flex '><FaHome className='text-lg mt-1 mr-1'/> Home</div>
                <div className='flex '><ImBooks className='text-lg mt-1 mr-1'/> Available Books</div>
                <div className='flex '><ImNewspaper className='text-lg mt-1 mr-1'/>Available Magazines</div>
                <div className='flex '><FaBookMedical className='text-lg mt-1 mr-1'/>Request Book</div>
                <div className='flex '><AiFillFilePdf className='text-lg mt-1 mr-1'/>eBooks</div>
                <div className='flex '><MdAccountCircle className='text-lg mt-1 mr-1'/>Account</div>
            
            </div>
            <div className="flex-col w-3/5 h-[350px]">
                   <LibraryCarousal/>
            </div>
            <div className="flex-col w-1/5 pr-4">
                <div className='text-xl font-serif text-center bg-purple-300 rounded-sm'>Announcement</div>
               <marquee  width="100%" direction="up" height="90%" behaviour="scroll" scrollamount="4" className="space-y-5">
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