import React, { useEffect, useState } from "react";
import Link from "next/link";
import sidebar from "@/components/sidebar";
import { Tab } from "@headlessui/react";
import { AiOutlineUser } from "react-icons/ai";
import Container from "@/components/container";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import Sidebar from "@/components/sidebar";


function DashBoard({ children }: any) {
  const { data: session } = useSession();

  
  return (
    <>
      <div className="flex bg-secondary-200 min-h-screen">
        <Sidebar></Sidebar>
        <div className="w-4/5  min-h-screen ">
          <div className="flex border-y-2 border-black">
            <div className="flex font-bold text-xl ml-5  border-black p-4 w-3/4 items-center text-center ">
              DashBoard
            </div>
            <div className="flex border-r-2 border-black items-center text-center p-4">
              <input
                type="text"
                className="rounded-full bg-primary p-2 border-black  "
                placeholder="Search Here"
              />
            </div>
            <div className=" flex border-black items-center text-center p-4">
              <Link href="/">
                <AiOutlineUser size={28} />
              </Link>
              <div className="p-2 text-lg">
                {session?.user?.name}
              </div>
        
            </div>
          </div>
          <div className="flex">
            <div className="p-5 flex flex-col items-start justify-start">{children}</div>
          </div>
        </div>
      </div>
      
    </>

  );
}

export default DashBoard;


export const getServerSideProps = async (context:any) => {
  const session = await getSession(context) 

  if (!session?.user) {
      return {
          redirect: {
              destination: '/',
              permanent:false
              
          }
      }
  }
  return {
      props:{}
  }
}