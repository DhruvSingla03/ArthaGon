import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";


function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="min-h-screen bg-primary w-1/5 border border-r-1 border-black relative">
      <div className="flex flex-col justify-between">
        <div className="font-bold text-4xl w-full border-black p-4 items-center">
          <Link href="/">Title</Link>
        </div>
        <div className="justify-betweeen">
          <ul className="text-xl">
            <button className="border-b-[1px] border-t-[2px] text-center mt-1 p-3 pt-5 w-full border-black">
              Dashboard
            </button>
            <button className="border-b-[1px] text-center my-2 p-3 w-full border-black">
              Warehouse
            </button>
            <button className="border-b-[1px] text-center my-2 p-2 w-full border-black">
              Items
            </button>
          </ul>
        </div>
        {session?.user && <button onClick={()=>signOut()} className="absolute bottom-4 w-full items-center text-center text-xl border-t-[1px] border-black pt-2">
          Sign out
        </button>}
        {!session?.user && <button onClick={()=>signIn()} className="absolute bottom-4 w-full items-center text-center text-xl border-t-[1px] border-black pt-2">
          Sign In
        </button>}
      </div>
    </div>
  )
}

export default Sidebar