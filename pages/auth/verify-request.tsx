import Expanded from '@/components/Expanded'
import Container from '@/components/container'
import React from 'react'

function Verify() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-indigo-300 relative">
      <Container className="w-1/2 flex font-Montserrat font-medium font-lg border-r-2 ">
        <div className="text-xl font-bebas tracking-widest border-2 border-b-8 py-2 px-3 rounded-xl m-3 border-black min-w-max flex justify-center hover:bg-white transition-all duration-200">
        Verify your E-mail
        </div>
        Hey there! Just one more step. We sent you a verification email, click the link inside to finish signing up. Can't find the email? Check your spam folder .
      </Container>
      <div className='absolute bottom-20 font-poppins font-thin text-3xl'>
        Check your Mail!
      </div>
    </div>
  )
}

export default Verify