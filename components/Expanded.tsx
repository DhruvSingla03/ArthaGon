import React, { useState } from "react";

import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai";

function Expanded(props:any,{className}:any) {
  const [exp, setExp] = useState(false)
  return (
    <div>
      <div className={`${exp? `h-fit border-b-[11px]`+className:""} transition-all	ease-linear delay-150 border-black border-2 border-b-8 border-r-4 bg-white p-5 rounded-2xl w-96`+className}>
        <div className="flex justify-between">
          <div className={`${exp ? "font-extrabold text-2xl underline underline-offset-4" : "font-bold text-xl"}`}>{props.title}</div>
          <div className="" ><button onClick={()=>{setExp(!exp)}} >{!exp ? <AiOutlinePlusCircle size={30}/> : <AiOutlineMinusCircle size={30}/>}</button></div>
        </div>
        <div className={`${exp?"":"hidden"} mt-9 p-5`}>
          {props.content}
        </div>
      </div>
    </div>
  );
}

export default Expanded;