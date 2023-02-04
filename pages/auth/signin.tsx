import Container from "@/components/container"
import { getProviders, getSession, signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"

export default function SignIn({ providers }:any) {
    const [Email, setEmail] = useState<string>()
    const router = useRouter()
    const {data:session}=useSession()
    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    if(session?.user) router.replace("/")
    
  return (
    <div className="flex justify-center items-center min-h-screen flex-col relative bg-neutral-300">
     <form className="flex items-center w-1/2">
    <div className=" font-light font-bebas tracking-widest text-2xl px-2 py-3 " >E-Mail: </div>
        <input className="border-2 border-b-8 flex-grow py-2 px-3 rounded-xl m-3 bg-transparent border-black focus:bg-white  transition-all duration-200 " type="email" value={Email} onChange={(e)=>{handleChange(e)}} />
        <button className="border-2 border-b-8 py-2 px-3 rounded-xl m-3 border-black hover:bg-white font-bebas tracking-widest text-xl  transition-all duration-200" onClick={(e)=>{
            e.preventDefault()
            signIn("email",{email:Email,redirect:true})}} >Sign In</button>
      </form>
      <div className="font-thin text-3xl absolute bottom-10  ">Yes It's that simple !</div>
    </div >
  )
}

export async function getServerSideProps(context:any) {
  const providers = await getProviders()
  const session = await getSession(context);

  if (session?.user) {
      return {
          redirect: {
              destination: "/",
              permanent: false,
          },
      };
  }
  return {
    props: { providers },
  }
}