import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa'
export default function Director2() {
    return (<>
        <div className="flex justify-center my-3 py-3 bg-gradient-to-r  from-yellow-400 via-amber-50 to-yellow-400 shadow-2xl h-92 xsm:h-auto  xsm:block xsm:my-auto ">
            <div className="flex my-auto xsm:justify-center "> <img className="rounded-full h-52 xsm:h-40 mt-0 flex" src="director.jpg" alt="" /></div>
            <div className="flex-col ml-20 xsm:ml-0 ">
                <div className='text-2xl font-bold text-cyan-500 font-serif xsm:justify-center xsm:flex xsm:text-xl xsm:mt-3 '>Dr. Monika Sachdeva</div>
                <div className='text-xl font-semibold text-gray-500 font-jass xsm:text-lg xsm:justify-center xsm:flex'>Director</div>
                <div className="flex-col w-96 mt-2 xsm:mx-auto xsm:w-[100%] xsm:mt-0">
                    <button className='text-xl xsm:ml-4'><FaQuoteLeft /></button>
                    <div className=' text-lg xsm:text-sm xsm:text-justify xsm:w-[75%] xsm:mx-auto '><i>I wish students success in their future endeavours and assure them that IKGPTU will help them to pursue their objectives of life by honing their talent & exposing them to cutting edge competitive environment.</i>
                    </div>
                    <div className='flex text-xl justify-end '><button className='xsm:mr-4 text-xl'><FaQuoteRight /></button></div>
                </div>
            </div>
        </div>
    </>)
}