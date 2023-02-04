import React from 'react'

function Input({onChange,value,className}:any) {
  return (
    <input className={`border-2 border-b-8 py-2 px-3 rounded-xl m-3 border-black`+className} type="name" value={value} onChange={onChange} />

  )
}

export default Input