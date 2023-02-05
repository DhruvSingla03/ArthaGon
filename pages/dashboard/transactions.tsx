import DashBoard from '@/components/dashbord/DashBoard'
import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/react'
import React from 'react'

function Transactions() {
  return (
    <DashBoard>Transactions</DashBoard>
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

export default Transactions