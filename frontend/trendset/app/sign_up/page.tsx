'use client';
import { useState, SyntheticEvent } from 'react';
import { useMutation } from 'react-query'
import { useRouter } from 'next/navigation';
import app from '../../utils/config'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

const page = () => {
    const [firstName, setFirstName] = useState<String>('')
    const [lastName, setLastName] = useState<String>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {mutate} = useMutation(async (variables:{}) => {
        let result = null
        let error = null

        try {
            result = await createUserWithEmailAndPassword(auth, email, password);
        } catch (e) {
            console.error(e)
            error = e;
        }
    
        if (error){
            return error
        }
    },{
        onSuccess: () => {
            router.push('/dashboard')
        }
    })
    const router = useRouter()

    const signUp = async (event: SyntheticEvent) => {
        event.preventDefault()
        mutate({})
    }

  return (
    <div>
        <nav className="flex justify-between">
          <a href='/'><h1 className='text-4xl font-bold'>TrendSet.tech</h1></a>
        </nav>
        <div className='mt-4 mb-4 flex flex-col'>
            <h1 className='text-4xl font-bold text-center mt-8 mb-8'>Sign up</h1>
            <form onSubmit={signUp} className='m-auto mb-6'>
                <label htmlFor='First Name'>
                <p>First Name:</p>
                    <input className='border mb-4' required type='text' name='firstName' id='firstName' onChange={(e)=>setFirstName(e.target.value)}></input>
                </label>
                <label htmlFor='Last Name'>
                <p>Last Name:</p>
                    <input className='border mb-4' required type='text' name='lastName' id='lastName' onChange={(e)=>setLastName(e.target.value)}></input>
                </label>
                <label htmlFor='email'>
                    <p>Email:</p>
                    <input className='border mb-4' required type='email' name='email' id='email' onChange={(e)=>setEmail(e.target.value)}></input>
                </label>
                <label htmlFor='password'>
                    <p>Password:</p>
                    <input className='border mb-4' required type='password' name='email' id='password' onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <div className='flex justify-center'>
                    <button type="submit" className='pt-2 pb-2 pl-4 pr-4 self-center bg-green-500 font-bold rounded-md'>Sign up</button>
                </div>
            </form>
            <span className='m-auto text-center'><p>Already have an account?</p> <a href = "/login" className='underline'>Login into your account.</a></span>
        </div>
    </div>
  )
}

export default page