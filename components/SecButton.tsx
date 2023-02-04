import React, { PropsWithChildren } from 'react'

function SecButton({children}:PropsWithChildren){
  return (
    <button className="mx-3 mt-3 bg-black text-slate-50 min-w-max px-2 py-3 hover:bg-transparent hover:outline hover:outline-2 outline-black hover:rounded-md hover:text-black transition-all duration-200">{children}</button>
  )
}

export default SecButton