import React from 'react'

function Container({ children,className }: any) {
    return (
        <div className={`px-2 py-3 border-black border-2 border-b-8 border-r-4 rounded-2xl `+className} >
          {children}
    </div>
  )
}

export default Container