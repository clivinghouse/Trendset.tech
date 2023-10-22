'use client'
import { useAuthContext } from "@/app/_components/AuthProvider"
import Image from 'next/image'
import image from '../public/icon.png'
import { User } from "firebase/auth"

export default function Home() {
  const user : User | null = useAuthContext()

  return (
    <main>
      <nav className="justify-between">
        <h1>
          <h2>
            <Image
                src={image}
                width={100}
                height={100}
                alt={'image'}>
            </Image>
          </h2>
        </h1>
        <br></br>
        <div className="flex justify-center gap-4">
          {user && <a href="/dashboard">Dashboard</a>}
          <a>About</a>
          <a>Services</a>
          <a><b>TRENDSET.TECH</b></a>
          <a href="/sign_up">Sign Up</a>
          <a href="/login">Login</a>
        </div>
        <div className="flex justify-center gap-4">
        <a className={"space"}> <i>"Some mission quote"</i></a>
        </div>
      </nav>
      

    </main>
  )
}
