import Link from "next/link"
import Navbar from "../../components/navbar"

export default function Faculty() {

    return (<>
        <div className=" border-red-700">
            <Navbar class="shadow-md" />
            <div className="mt-3 p-2 text-center text-3xl font-semibold">
                Our Faculty and Other Staff
            </div >
            <div className="w-[90%] m-auto">
                {/* Monika Ma'am */}
                <div className="mt-4">
                    <div className=" text-center text-2xl font-semibold text-amber-900 bg-yellow-200 p-1 rounded-3xl">
                        Dr. Monika Sachdeva
                    </div>
                    <div className=" flex w-[90%] m-auto">
                        <div className=" border-black h-48 w-52 mr-2 m-auto">
                            <img src="jass.jpeg" className="h-full" />
                        </div>
                        <div className=" border-black w-full">


                            <div className=" border-collapse border-violet-700 w-[85%] m-auto mt-2">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Department
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Director
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Designation
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Professor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Contact Number
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                7009400665
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                E-mail I'd
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreetkaursaini469@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                LinkedIn
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreet
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className=" border-purple-800 flex w-[90%] m-auto mt-2 justify-around mb-3">
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Educational Qualifications
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Teaching Experience
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Research Publications
                                </div>
                            </div>

                        </div>
                    </div>
                            <div className="border-b-2 border-solid border-zinc-200"></div>
                </div>
                {/* Geet Ma'am */}
                <div className="mt-4">
                    <div className=" text-center text-2xl font-semibold text-amber-900 bg-yellow-200 p-1 rounded-3xl">
                        Dr. Geet
                    </div>
                    <div className=" flex w-[90%] m-auto">
                        <div className=" border-black h-48 w-52 mr-2 m-auto">
                            <img src="jass.jpeg" className="h-full" />
                        </div>
                        <div className=" border-black w-full">


                            <div className=" border-collapse border-violet-700 w-[85%] m-auto mt-2">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Department
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Administration
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Designation
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Deputy Registrar
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Contact Number
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                7009400665
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                E-mail I'd
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreetkaursaini469@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                LinkedIn
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreet
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className=" border-purple-800 flex w-[90%] m-auto mt-2 justify-around mb-3">
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Educational Qualifications
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Teaching Experience
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Research Publications
                                </div>
                            </div>

                        </div>
                    </div>
                            <div className="border-b-2 border-solid border-zinc-200"></div>
                </div>
                {/* Neeraj Sir */}
                <div className="mt-4">
                    <div className=" text-center text-2xl font-semibold text-amber-900 bg-yellow-200 p-1 rounded-3xl">
                        Dr. Neeraj Mohan 
                    </div>
                    <div className=" flex w-[90%] m-auto">
                        <div className=" border-black h-48 w-52 mr-2 m-auto">
                            <img src="jass.jpeg" className="h-full" />
                        </div>
                        <div className=" border-black w-full">


                            <div className=" border-collapse border-violet-700 w-[85%] m-auto mt-2">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Department
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                CSE
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Designation
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Assistant Professor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Contact Number
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                7009400665
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                E-mail I'd
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreetkaursaini469@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                LinkedIn
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreet
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className=" border-purple-800 flex w-[90%] m-auto mt-2 justify-around mb-3">
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Educational Qualifications
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Teaching Experience
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Research Publications
                                </div>
                            </div>

                        </div>
                    </div>
                            <div className="border-b-2 border-solid border-zinc-200"></div>
                </div>
            </div>


            {/* Guest Faculty */}
            <div className="mt-3 p-2 text-center text-3xl font-semibold">
                Our Guest Faculty
            </div >
            <div className="">
                <div className="mt-4">
                    <div className=" text-center text-2xl font-semibold text-amber-900 bg-yellow-200 p-1 rounded-3xl">
                        Dr. Monika Sachdeva
                    </div>
                    <div className=" flex w-[90%] m-auto">
                        <div className=" border-black h-48 w-52 mr-2 m-auto">
                            <img src="jass.jpeg" className="h-full" />
                        </div>
                        <div className=" border-black w-full">


                            <div className=" border-collapse border-violet-700 w-[85%] m-auto mt-2">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Department
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Director
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Designation
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Professor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Contact Number
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                7009400665
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                E-mail I'd
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreetkaursaini469@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                LinkedIn
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreet
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className=" border-purple-800 flex w-[90%] m-auto mt-2 justify-around mb-3">
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Educational Qualifications
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Teaching Experience
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Research Publications
                                </div>
                            </div>

                        </div>
                    </div>
                            <div className="border-b-2 border-solid border-zinc-200"></div>
                </div>

                <div className="mt-4">
                    <div className=" text-center text-2xl font-semibold text-amber-900 bg-yellow-200 p-1 rounded-3xl">
                        Dr. Monika Sachdeva
                    </div>
                    <div className=" flex w-[90%] m-auto">
                        <div className=" border-black h-48 w-52 mr-2 m-auto">
                            <img src="jass.jpeg" className="h-full" />
                        </div>
                        <div className=" border-black w-full">


                            <div className=" border-collapse border-violet-700 w-[85%] m-auto mt-2">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Department
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Director
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Designation
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Professor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Contact Number
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                7009400665
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                E-mail I'd
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreetkaursaini469@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                LinkedIn
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreet
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className=" border-purple-800 flex w-[90%] m-auto mt-2 justify-around mb-3">
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Educational Qualifications
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Teaching Experience
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Research Publications
                                </div>
                            </div>

                        </div>
                    </div>
                            <div className="border-b-2 border-solid border-zinc-200"></div>
                </div>

                <div className="mt-4">
                    <div className=" text-center text-2xl font-semibold text-amber-900 bg-yellow-200 p-1 rounded-3xl">
                        Dr. Monika Sachdeva
                    </div>
                    <div className=" flex w-[90%] m-auto">
                        <div className=" border-black h-48 w-52 mr-2 m-auto">
                            <img src="jass.jpeg" className="h-full" />
                        </div>
                        <div className=" border-black w-full">


                            <div className=" border-collapse border-violet-700 w-[85%] m-auto mt-2">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Department
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Director
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Designation
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Professor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                Contact Number
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                7009400665
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                E-mail I'd
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreetkaursaini469@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                LinkedIn
                                            </td>
                                            <td className=" p-2 border-b-2 w-[50%] text-left pl-3 h-auto border-slate-300 ">
                                                jaspreet
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className=" border-purple-800 flex w-[90%] m-auto mt-2 justify-around mb-3">
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Educational Qualifications
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Teaching Experience
                                </div>
                                <div className="text-zinc-100 p-2 bg-amber-800 rounded hover:bg-amber-700 cursor-pointer hover:text-white w-60 text-center shadow-inner shadow-amber-400">
                                    Research Publications
                                </div>
                            </div>

                        </div>
                    </div>
                            <div className="border-b-2 border-solid border-zinc-200"></div>
                </div>
            </div>
        </div>

    </>)


}
