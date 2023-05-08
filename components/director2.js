import {FaQuoteRight,FaQuoteLeft} from 'react-icons/fa'
export default function Director2(){
    return (<>
    <div className="flex justify-center my-3 py-5 bg-gradient-to-r from-yellow-400 via-amber-50 to-yellow-400 shadow-2xl  h-96">
        <div className="flex"> <img className="rounded-full h-52" src="director.jpg" alt="" /></div>
        <div className="flex-col ml-20">
            <div className='text-2xl font-bold text-cyan-500 font-serif'>Dr. Monika Sachdeva</div>
            <div className='text-xl font-semibold text-gray-500 font-jass'>Director</div>
            <div className="flex-col w-96 mt-2 ">
                <button className='text-2xl'><FaQuoteLeft/></button>
                <div className=' text-lg'><i>I wish students success in their future endeavours and
assure them 
that IKGPTU will help them to pursue their objectives
of life by honing their 
talent & exposing them to cutting edge
competitive environment.</i></div>
               <div className='flex text-2xl justify-end '><button className=''><FaQuoteRight/></button></div>
                </div>
        </div>
    </div>
    </>)
}