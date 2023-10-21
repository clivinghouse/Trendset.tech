'use client'
import { useAuthContext } from "@/app/_components/AuthProvider"
import { User } from "firebase/auth"

export default function Home() {
  const user : User | null = useAuthContext()

  return (
    <main>
      <nav className="flex justify-between">
        <h1>TrendSet.tech</h1>
        <div className="flex justify-end gap-4">
          {user && <a href="/dashboard">Dashboard</a>}
          <a href="/sign_up">Sign Up</a>
          <a href="/login">Login</a>
        </div>
      </nav>
      
      

    </main>
  )
}
