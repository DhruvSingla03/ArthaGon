// import React from 'react'

// function Button(props:any) {
//   return (
//     <div>
//         <button className="bg-yellow-200 border-black border-2 border-b-8 rounded-2xl w-96 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4">
//                 button
//         </button>

//     </div>
//   )
// }

// export default Button

import React, { useState } from "react";

export default function Button({children,className}:any) {
  const [effect, setEffect] = useState(false);

  return (
        <button
          className={`${effect && "animate-bounce"} bg-white p-4 border-black border-2 border-b-8 border-r-4 rounded-2xl w-full h-full   text-gray-800 font-semibold py-2 px-4 `+className}
          onClick={() => { setEffect(true), setTimeout(()=> { setEffect(false)},500) }}
        >
          {children}
        </button>
  );
}