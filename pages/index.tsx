import Container from "@/components/container";
import Button from "@/components/Button";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function LandingPage() {
  const { data: session } = useSession();
  return (
    <>
      <div className="bg-orange-300 min-h-screen">
        <div className="flex items-center flex-grow justify-between max-h-fit">
          <div className="w-full font-extrabold text-3xl px-5">Title</div>
          {!session?.user && (
            <button
              onClick={() => signIn()}
              className="mx-3 mt-3 bg-black text-slate-50 min-w-max px-2 py-3 hover:bg-transparent hover:outline hover:outline-2 outline-black hover:rounded-md hover:text-black transition-all duration-200"
            >
              Sign In/Log In
            </button>
          )}
          {session?.user && (
            <button
              onClick={() => signOut()}
              className="mx-3 mt-3 bg-black text-slate-50 min-w-max px-2 py-3 hover:bg-transparent hover:outline hover:outline-2 outline-black hover:rounded-md hover:text-black transition-all duration-200"
            >
              Sign Out
            </button>
          )}
        </div>

        <div className="flex flex-col-reverse  md:flex-row md:flex mt-24 md:justify-between p-7">
          <Container className="border-b-2 w-full md:w-1/2 p-4">
            <div className="text-6xl font-bold p-5">Welcome to Title</div>
            <div className="mt-5 p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              incidunt. Nam nobis quae, quia dolore dolorum dicta dignissimos et
              reprehenderit vero ad sint doloremque consectetur architecto
              quisquam sunt? Vero, ex!
            </div>

            <div className="flex">
              <div className="w-1/2 p-3 h-24">
                <Button />
              </div>
              <div className="w-1/2 p-3 h-24">
                <Button />
              </div>
            </div>
          </Container>
          <div className="">Image</div>
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
