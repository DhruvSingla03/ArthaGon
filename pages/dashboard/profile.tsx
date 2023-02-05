import Container from '@/components/container';
import DashBoard from '@/components/dashbord/DashBoard'
import { PrismaClient, User } from '@prisma/client'
import { getSession } from 'next-auth/react'
import React, { useImperativeHandle } from 'react'
import {FaRegUserCircle} from 'react-icons/fa'

function Profile({user}:any) {
  function titalize(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <DashBoard>
        <div className='flex flex-col text-2xl mb-5 font-Montserrat'>Profile <FaRegUserCircle className='text-5xl'/></div>
      <Container className='flex flex-col justify-between p-5'>
        <span className='text-xl font-poppins font-thin'>Business-Id : <span className='font-medium'>{user?.businessId}</span> </span>
        <span className='text-xl mt-5 font-poppins font-thin'>Name : <span className='font-medium'>{titalize(user?.name)}</span></span>
        <span className='text-xl mt-5 font-poppins font-thin'>E-Mail : <span className='font-medium'>{user?.email}</span> </span>  
        <span className='text-xl mt-5 font-poppins font-thin'>Role : <span className='font-medium'>{titalize(user?.role)}</span></span>
      </Container>
    </DashBoard>
  )
}

const prisma = new PrismaClient()

export async function getServerSideProps(context:any){
  const session = await getSession(context)
  const email = session?.user?.email

  const user = await prisma.user.findFirst({
    where: {
      email:email
    }
  })

  const sentUser:any={
      name:user?.name,
      businessId:user?.businessId,
      customerId:user?.customerId,
      email:user?.email,
      image:user?.image,
      role:user?.role
  }
  if (user?.role === "customer") {
    return {
      redirect: {
          destination: '/',
          permanent:false
          
      }
  }
  }
  return{
    props:{
      user:sentUser
      
    }
 }
}
export default Profile