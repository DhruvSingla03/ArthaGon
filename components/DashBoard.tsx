import React, { useEffect, useState } from "react";
import Link from "next/link";
import sidebar from "@/components/sidebar";
import { Tab } from "@headlessui/react";
import { AiOutlineUser } from "react-icons/ai";
import Container from "@/components/container";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import Sidebar from "@/components/sidebar";

function DashBoard({ children }: any) {
  const { data: session } = useSession();

  const [warehouse, setWarehouse] = useState([]);
  const [invetory, setinventory] = useState([]);
  useEffect(() => {
    getWarehouse();
  }, [session]);

  const getWarehouse = async () => {
    const axiosConfig: any = {
      email: session?.user?.email,
    };
    const result: any = await axios.get(
      "/api/db/warehouse/getWarehouse",
      axiosConfig
    );
    console.log(result);

    setWarehouse(result.data);
  };
  const getInventory = async () => {
    const axiosConfig: any = {
      warehouseid: session?.user?.email,
    };
    const result: any = await axios.get(
      "/api/db/warehouse/getInventory",
      axiosConfig
    );
    console.log(result);

    setinventory(result.data);
  };

  return (
    <div className="flex bg-stone-200 min-h-screen">
      <Sidebar></Sidebar>

      <div className="w-4/5  min-h-screen ">
        <div className="flex border-y-2 border-black">
          <div className="flex font-bold text-xl ml-5  border-black p-4 w-3/4 items-center text-center ">
            DashBoard
          </div>
          <div className="flex border-r-2 border-black items-center text-center p-4">
            <input
              type="text"
              className="rounded-full bg-cyan-300 p-2 border-black  "
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
  );
}

export default DashBoard;
