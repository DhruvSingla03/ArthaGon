import { UserContext } from '@/context/role'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useState, useContext } from 'react'

function OnBoarding() {
    const [Name, setName] = useState<string>()
    const type = Cookies.get('type')
    const { data: session } = useSession()
    const router = useRouter()
    const email = session?.user?.email
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (type==='business') {
            axios.post("/api/newBusiness", {
                email, name: Name
            }).then((res) => { if (res.status == 200) router.replace("/") })
        } else {
            axios.post("/api/newCustomer", {
                email, name: Name
            }).then((res) => { if (res.status == 200) router.replace("/") })
        }
    }
    
    
    
    
   
        return (
            <div className="flex bg-sky-300 justify-center items-center min-h-screen relative">
                <form onSubmit={handleSubmit}>
                    <label className="text-2xl tracking-wider font-light font-bebas" >Name: </label>
                    <input className="border-2 border-b-6 py-2 px-3 rounded-xl m-3 bg-transparent hover:bg-white transition-all duration-200 border-b-8 border-black" type="name" value={Name} onChange={(e) => setName(e.target.value)} />
                    <button className="border-2 border-b-8 py-2 px-3 rounded-xl m-3 border-black hover:bg-white font-bebas tracking-widest text-xl  transition-all duration-200" type="submit" >Submit</button>
                </form>
                <div className='absolute bottom-10 text-3xl font-Montserrat font-thin'>That's all we need!</div>
            </div>
        )

}

export default OnBoarding