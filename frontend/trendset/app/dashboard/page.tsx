'use client';
import {useEffect} from 'react'
import { useAuthContext } from "@/app/_components/AuthProvider"
import { useRouter } from "next/navigation"
import { getAuth } from 'firebase/auth'
import app from '@/utils/config'
import { User } from 'firebase/auth'
import ProductTile from '../_components/ProductTile';

const auth = getAuth(app)

const products = ['Product A', 'Product B']

const page = () => {
    const user : User | null = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return <div>
        <nav className="flex justify-between w-full">
            <a href='/'><h1 className='text-4xl font-bold'>TrendSet.tech</h1></a>
            <div className='flex flex-row content-end gap-6'>
                <h1>{user?.email}</h1>
                <button onClick={() =>{auth.signOut()}}>Log out</button>
            </div>
        </nav>
        <div className='mt-4 mb-4'>
            <h1 className='text-3xl font-bold mb-4'>Current Products</h1>
            {
                products.map((product) => {
                    return <ProductTile name={product}/>
                })
            }
        </div>
    </div>;
}

export default page