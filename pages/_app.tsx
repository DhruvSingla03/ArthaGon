import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import {UserContext} from "../context/role"
import { useState } from 'react'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  const [type, setType] = useState()

  return <SessionProvider session={session}>
    <UserContext.Provider value={{ type, setType }}>
      <Component {...pageProps} />
      </UserContext.Provider>
  </SessionProvider>
}
