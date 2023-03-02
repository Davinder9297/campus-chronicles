import {ImBooks,ImNewspaper} from 'react-icons/im'
import {FaHome,FaBookMedical} from 'react-icons/fa'
import {AiFillFilePdf} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
export default function Library(){
    return(<>
    <div className="flex-col ">
        <div className='text-center text-4xl'>Library</div>
        <div className="flex justify-between">
            <div className="leftcorner flex-col space-y-4 ml-2">
                <div className='flex '><FaHome className='text-lg mt-1 mr-1'/> Home</div>
                <div className='flex '><ImBooks className='text-lg mt-1 mr-1'/> Available Books</div>
                <div className='flex '><ImNewspaper className='text-lg mt-1 mr-1'/>Available Magazines</div>
                <div className='flex '><FaBookMedical className='text-lg mt-1 mr-1'/>Request Book</div>
                <div className='flex '><AiFillFilePdf className='text-lg mt-1 mr-1'/>eBooks</div>
                <div className='flex '><MdAccountCircle className='text-lg mt-1 mr-1'/>Account</div>
                <div className='flex mt-5 space-x-2'>
                    <div><img src="faculty.svg" alt="" /></div>
                    <div className='flex-col'>Neha
                    <div className='ml-2'>(Librarian)</div>
                    </div>
                   
                </div>
            </div>
            <div className="flex-col">
                <div>fd</div>
                <div>dda</div>
            </div>
            <div className="flex-col">
                <div>df</div>
                <div>df</div>
            </div>
        </div>
  </div>
    </>)
}