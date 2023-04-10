import Link from "next/link"
import Navbar from "../../components/navbar"

export default function My_profile() {
    function View() {
        html = '';
    
    for (let index = 0; index < 10; index++) {
        html += `
        <div id="aa">
        <h4> ${index}</h4>
        <hr>
        // <p id="p1">${jas[index]}</p>
        </div>`;
    };
    innerHTML = html;

            <div className="">aa+nfrkjdnfvedfvn dk,</div>
            console.log("uhfui");
    }
    return (<>
    <div className="h-screen overflow-hiddenm-auto">
        <Navbar class="shadow-sm"/>
        {/* <div className=" w-[90%] m-auto text-center text-4xl font-semibold shadow-md shadow-slate-600 p-4 overflow-hidden h-[80%] border-2 border-solid border-blue-500 "> */}
            {/* Welcome...  &nbsp;&nbsp; Ms. Jaspreet kaur */}

            <div className=" w-[93%] m-auto mt-5 text-center text-4xl font-semibold flex justify-between p-4 h-[70%]  ">
                <div className="w-[30%] shadow-md shadow-slate-500 p-2 h-[100%] ">
                    <div className="">
                        <img src="/teacher.jpg" className="shadow-md shadow-slate-700 h-[60%] rounded-full mt-3 m-auto" />
                    </div>
                    <div className="mt-[10%] text-[90%] ">
                        Jaspreet kaur
                    </div>
                </div>
                <div className="border-2 border-solid border-green-500 w-[60%] text-[4vh] h-[80%] m-auto">
                    <div className="h-12 w-[100%] flex "> 
                        <div className=" w-[50%] m-auto bg-yellow-500 font-semibold p-1 hover:bg-yellow-400 cursor-pointer "onClick={View} >
                            Personal Information
                        </div>
                        <div className="bg-amber-800 w-[50%] m-auto p-1  hover:bg-amber-700 cursor-pointer">
                            jshfiuerhi
                        </div>
                    </div>

                    <div id="gg" className="bg-zinc-500 h-[90%] overflow-auto scrollbar-thin scrollbar-thumb-zinc-900 text-sm">
                        jdvndjvn usdhbcsu uhfshf dshcus sbs adhbckuisc ufehcsifchn
                        jdvndjvn usdhbcsu uhfshf dshcus sbs adhbckuisc ufehcsifchn
                        jdvndjvn usdhbcsu uhfshf dshcus sbs adhbckuisc ufehcsifchn
                        jdvndjvn usdhbcsu uhfshf dshcus sbs adhbckuisc ufehcsifchn
                        jdvndjvn usdhbcsu uhfshf dshcus sbs adhbckuisc ufehcsifchn
                    </div>
                </div>
            </div>
        </div>
        {/* </div> */}
    </>)
}