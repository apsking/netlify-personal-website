import { ReactNode } from "react"
import Head from 'next/head'
import Footer from '../components/Footer'

type LayoutProps = {
  children: ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      <Head>
        <title>Got Alex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}