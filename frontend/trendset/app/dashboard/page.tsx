'use client';
import {useEffect} from 'react'
import { useAuthContext } from "@/components/AuthProvider"
import { useRouter } from "next/navigation"
import { getAuth } from 'firebase/auth'
import app from '@/utils/config'
import { User } from 'firebase/auth'

const auth = getAuth(app)

const page = () => {
    const user : User | null = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return <div>
        <h1>Hello {user?.email}!</h1>
        <button onClick={() =>{auth.signOut()}}>Log out</button>
    </div>;
}

export default page