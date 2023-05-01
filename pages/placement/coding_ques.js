import {IoMdArrowDroprightCircle} from 'react-icons/io'


export default function Coding_ques(){
    return(<>
    
    
    <div className=" h-36 flex flex-row  ">
        <div className="flex justify-start w-[40%] h-36 " ><img className=" w-[65%]" src="/code_q.gif" /></div>
        <div className=" w-[70%] py-14 text-left pl-20 text-slate-800 font-extrabold font-BlinkMacSystemFont text-4xl"> Coding Practice Questions</div>   
    <button className=' ml-4 mr-1 mt-1 p-2 flex rounded-lg text-center text-white font-semibold h-10 w-22 bg-slate-800' type="button " > HOME</button>   
            </div>
    
    
            
            

<div className= " p-2 flex flex-row w-full h-auto overflow-y-hidden ">

<div className=" py-3 px-3 flex-col h-[100vh] w-[25%] border-l-2 border-black scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400 bg-slate-800 text-black  overflow-y-scroll overflow-x-auto ">
<div className="flex justify-start w-full  h-8 items-center">
    <div className=" text-2xl text-left font-bold text-white">Questions & Filters</div>
</div>

<div className=' mt-4 '>
<div className='flex-col space-y-2'>
     <div className="flex justify-between w-full   h-8 items-center mt-3">
     <div className="text-lg font-semibold text-white">TOPICS</div>
     <div className="text-base text-white flex items-center space-x-1"><div>View All</div><IoMdArrowDroprightCircle className='text-lg'/></div>
     </div>
     
 <div className='text-base text-white flex-col w-full space-y-1 '> 
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="topics" id=""/><div className=" space-x-2 pl-2">Arrays</div></div>
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="topics" id=""/><div className=" space-x-2 pl-2">Strings</div></div>
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="topics" id=""/><div className=" space-x-2 pl-2">Linked Lists</div></div>
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="topics" id=""/><div className=" space-x-2 pl-2">Trees</div></div>
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="topics" id=""/><div className=" space-x-2 pl-2">Graphs</div></div> 


    </div></div>

   </div>

   <div className=' mt-4 '>
<div className='flex-col space-y-2'>
     <div className="flex justify-between w-full   h-8 items-center mt-3">
     <div className="text-lg font-semibold text-white">COMPANIES</div>
     <div className="text-base text-white flex items-center space-x-1"><div>View All</div><IoMdArrowDroprightCircle className='text-lg'/></div>
     </div>
     
 <div className='text-base text-white flex-col w-full space-y-1 '> 
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="company" id=""/><div className=" space-x-2 pl-2">Amazon</div></div>
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="company" id=""/><div className=" space-x-2 pl-2">Microsoft</div></div>
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="company" id=""/><div className=" space-x-2 pl-2">Flipkart</div></div>
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="company" id=""/><div className=" space-x-2 pl-2">Google</div></div>
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="company" id=""/><div className=" space-x-2 pl-2">Adobe</div></div> 


    </div></div>

   </div>

   <div className=' mt-4 '>
<div className='flex-col space-y-2'>
     <div className="flex justify-between w-full   h-8 items-center mt-3">
     <div className="text-lg font-semibold text-white">DIFFICULTY</div>
     </div>
     
 <div className='text-base text-white flex-col w-full space-y-1 '> 
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="dificult" id=""/><div className=" space-x-2 pl-2">School</div></div>
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="dificult" id=""/><div className=" space-x-2 pl-2">Easy</div></div>
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="dificult" id=""/><div className=" space-x-2 pl-2">Medium</div></div>
  <div className="flex  "> <input className=" w-[20px]" type="checkbox" name="dificult" id=""/><div className=" space-x-2 pl-2">Hard</div></div>

    </div></div>

   </div>
</div>

<div className=" mx-3 px-3 pb-3 flex-col w-[75%] h-[100vh] border-2 shadow-inner overflow-auto scrollbar-thin scrollbar-thumb-zinc-300 "> 
<div className="flex-col w-[100%] p-3 ">
<div className="accordion " id="accordionFlushExample">
                    <div className="  accordion-item focus-within:bg-white">
                        <h2 className=" p-2 accordion-header" id="flush-headingOne">

                            <button className=" h-28 space-y-2  accordion-button collapsed hover:bg-green-50" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <div className=' flex-row w-full space-y-1'>
                                <div className=" pt-7 flex-col text-lg w-full  ">
                                <div className="flex justify-between  items-center">
                                <div className="text-xl text-justify font-serif font-bold text-black">Subarray with given Sum</div>
                                <div className="text-base text-black font-semibold items-center space-x-1"><div>View Ques</div></div>
                                </div></div>

                                <div className=" flex-col text-lg w-full ">
                                <div className="flex justify-between h-8 items-center">
                                <div className="text-base font-semibold text-green-700">Amazon | Facebook</div>
                                <div className="text-base text-black flex justify-end items-center "><div>
                                    Easy | 1M | 16%</div></div>
                                </div></div>
                                </div></button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className=" h-auto accordion-body">
                                <div className={`shadow-sm shadow-gray-500 w-[100%] m-auto text-base p-3`}>
                                    <div className=" flex justify-center w-[100%] text-center ml-5 mb-4 p-2 border-b-2 border-green-700 border-solid ">
                                    
                                    Easy  |  Accuracy:16.5%  |  Submissions: 1.1M  |  Points: 2
                                            
                                            </div>
                                    <div className="flex-row space-y-2 ml-7 text-start">
                                        <div className="w-full  ">
                                        Given an unsorted array A of size N that contains only positive integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray. In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.
<br/><br/>Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.
                                        </div>
                                        <div className=' font-bold'> Example: </div>
                                        <div className='w-full bg-slate-100 rounded text-green-700'><b> Input:</b>
<br/> N = 5,<br/> S = 12 <br/>A[] = 1,2,3,7,5 <br/> Output: 2 4 <br/> Explanation: The sum of elements from 2nd position to 4th position is 12.</div>

                                        <div className=' font-bold'> Yor Task: </div>
                                        <div className='w-full  '>
                                        You don't need to read input or print anything. The task is to complete the function <b>subarraySum()</b> which takes arr, N, and S as input parameters and returns an <b>ArrayList</b> containing the starting and ending positions of the first such occurring subarray from the left where sum equals to S. The <b>two indexes </b>in the array should be according to <b>1-based indexing</b>. If no such subarray is found, return an array consisting of only one element that is -1.</div>
                                    </div>
                                    
                                </div></div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="p-2 accordion-header" id="flush-headingTwo">
                            <button className=" h-28 space-y-2 accordion-button collapsed hover:bg-green-50" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                               <div className=' flex-row w-full space-y-1'>
                                <div className=" pt-7 flex-col text-lg w-full  ">
                                <div className="flex justify-between  items-center">
                                <div className="text-xl text-justify font-serif font-bold text-black">Kadane's Algorithm</div>
                                <div className="text-base text-black font-semibold items-center space-x-1"><div>View Ques</div></div>
                                </div></div>

                                <div className=" flex-col text-lg w-full ">
                                <div className="flex justify-between h-8 items-center">
                                <div className="text-base font-semibold text-green-700">Zoho | Flipkart</div>
                                <div className="text-base text-black flex justify-end items-center "><div>
                                    Medium | 689k | 36%</div></div>
                                </div></div>
                                </div>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">  <div className={`shadow-sm shadow-gray-500 w-[100%] m-auto text-base p-3`}>
                                    <div className=" flex justify-center w-[100%] text-center ml-5 mb-4 p-2 border-b-2 border-green-700 border-solid ">
                                    
                                    Medium  |  Accuracy:36.5%  |  Submissions: 689k  |  Points: 4
                                            
                                            </div>
                                    <div className="flex-row space-y-2 ml-7 text-start">
                                        <div className="w-full  ">
                                        Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
                                        </div>
                                        <div className=' font-bold'> Example: </div>
                                        <div className='w-full bg-slate-100 rounded text-green-700'><b> Input:</b>
<br/> N = 5,<br/> A[] = 1,2,3,-2,5 <br/> Output: 9<br/> Explanation: Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.</div>

                                        <div className=' font-bold'> Yor Task: </div>
                                        <div className='w-full  '>
                                        You don't need to read input or print anything. The task is to complete the function <b>maxSubarraySum()</b> which takes Arr[] and N as input parameters and returns the sum of subarray with maximum sum.</div>
                                    </div>
                                    
                                </div></div>
                        </div>
                    </div>


                    <div className="accordion-item">
                        <h2 className="p-2 accordion-header" id="flush-headingThree">
                            <button className="h-28 space-y-2 accordion-button collapsed hover:bg-green-50" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <div className=' flex-row w-full space-y-1'>
                                <div className=" pt-7 flex-col text-lg w-full  ">
                                <div className="flex justify-between  items-center">
                                <div className="text-xl text-justify font-serif font-bold text-black">Subarray with given Sum</div>
                                <div className="text-base text-black font-semibold items-center space-x-1"><div>View Ques</div></div>
                                </div></div>

                                <div className=" flex-col text-lg w-full ">
                                <div className="flex justify-between h-8 items-center">
                                <div className="text-base font-semibold text-green-700">Amazon | Facebook</div>
                                <div className="text-base text-black flex justify-end items-center "><div>
                                    Easy | 1M | 16%</div></div>
                                </div></div>
                                </div>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">  <div className={`shadow-sm shadow-gray-500 w-[100%] m-auto text-base p-3`}>
                                    <div className=" flex justify-center w-[100%] text-center ml-5 mb-4 p-2 border-b-2 border-green-700 border-solid ">
                                    
                                    Easy  |  Accuracy:16.5%  |  Submissions: 1.1M  |  Points: 2
                                            
                                            </div>
                                    <div className="flex-row space-y-1 ml-7 text-start">
                                        <div className="w-full  ">
                                        Given an unsorted array A of size N that contains only positive integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray. In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.
<br/><br/>Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.
                                        </div>
                                        <div className=' font-bold'> Example: </div>
                                        <div className='w-full bg-slate-100 rounded text-green-700'><b> Input:</b>
<br/> N = 5,<br/> S = 12 <br/>A[] = 1,2,3,7,5 <br/> Output: 2 4 <br/> Explanation: The sum of elements from 2nd position to 4th position is 12.</div>

                                        <div className=' font-bold'> Yor Task: </div>
                                        <div className='w-full  '>
                                        You don't need to read input or print anything. The task is to complete the function <b>subarraySum()</b> which takes arr, N, and S as input parameters and returns an <b>ArrayList</b> containing the starting and ending positions of the first such occurring subarray from the left where sum equals to S. The <b>two indexes </b>in the array should be according to <b>1-based indexing</b>. If no such subarray is found, return an array consisting of only one element that is -1.</div>
                                    </div>
                                    
                                </div></div>
                        </div>
                    </div>
                </div>
                </div>
</div>
</div>
    
    </>)
}