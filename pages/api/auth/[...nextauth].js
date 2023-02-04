import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb"

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
    
    // ...add more providers here
  ],
  pages:{
    signIn: '/auth/signin',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user',
    signOut: '/auth/signout',
  }
}

export default NextAuth(authOptions)