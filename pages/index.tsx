import Container from "@/components/container";
import Button from "@/components/Button";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import React, { useContext } from "react";
import Image from 'next/image'
import Link from "next/link";
import { UserContext } from "@/context/role";
// import illustration from "../public/assets/undraw_Finance_re_gnv2.png"
function LandingPage() {
  const { data: session } = useSession();
  const {type, setType} = useContext(UserContext)
  console.log(type);
  
  return (
    <>
      <div className="bg-orange-300 min-h-screen">
        {type}
        <div className="flex items-center flex-grow justify-between max-h-fit">
          <div className="w-full text-black font-extrabold text-3xl px-5"><Link href="/">Arthagon</Link></div>
          {!session?.user && (
            <button
              onClick={() => signIn()}
              className="bg-white hover:bg-yellow-100 text-black font-semibold py-2 px-4 border border-black hover:border-transparent rounded">
              SignUp/LogIn
            </button>
          )}
          {session?.user && (
            <button
              onClick={() => signOut()}
              className="bg-white hover:bg-yellow-100 text-black font-semibold py-2 px-4 border border-black hover:border-transparent rounded"
            >
              Sign Out
            </button>
          )}
        </div>

        <div className="flex flex-col-reverse  md:flex-row md:flex mt-24 md:justify-between p-7">
          <Container className="border-b-2 bg-yellow-100 w-full md:w-1/2 p-4">
            <div className="text-5xl text-black font-bold  py-4 px-3">Welcome to Arthagon</div>
            <div className="mt-5 p-5">
            "Empower Your Business with Innovative Solutions"<br></br><br></br><br></br>

Welcome to our cutting-edge business platform, where we strive to bring the latest technology to help businesses run their operations smoothly and efficiently. Our unique blend of Next.js, Next Auth, TailwindCSS, Prisma ORM, and PostgreSQL powered by Supabase promises to deliver an experience that is both seamless and powerful. With our platform, businesses can tackle their day-to-day operations with ease, making the most of their time and resources. Whether you're looking to manage financial transactions, view account balances, or optimize your financial performance, we've got you covered. So join us today and take your business to the next level!
            </div>

            <div className="flex">
              <div className="w-1/2 p-3 h-24">
                <Button content="Are you a customer?"/>
              </div>
              <div className="w-1/2 p-3 h-24">
                <Link href="/business"><Button content="Are you a business?" /></Link>
              </div>
            </div>
          </Container>
          {/* <Image src={illustration} alt="photo"/> */}
          <button className="btn ">Image</button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

export const getServerSideProps = async (context:any) => {
  const session = await getSession(context) 

  if (session?.user) {
      return {
          redirect: {
              destination: '/dashboard/',
              permanent:false
              
          }
      }
  }
  return {
      props:{}
  }
}
