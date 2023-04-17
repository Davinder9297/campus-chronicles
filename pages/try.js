import { useState } from "react"

export default function Try(){
    const [data, setdata] = useState(0)
    if(data==0){
        return(<>
        <div>adfadfdfdff</div>
        </>)
    }
    return (<>
    {[...Array(data)].map(()=>{
        
        // if(data==1){
        //     console.log("yes it is 1");
        // }
        // else{
        //     console.log("0");
        // }
        return (
            <div>a</div>
        )
    })}
    <button onClick={()=>{setdata(data+1)}}>+</button>
    </>)
}