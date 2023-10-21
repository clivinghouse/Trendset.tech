'use client';
import { useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import app from '../../utils/config'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

const page = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter()

    const signUp = async (event: SyntheticEvent) => {
        event.preventDefault()
        let result = null
        let error = null
        
        console.log(email,password)

        try {
            result = await createUserWithEmailAndPassword(auth, email, password);
        } catch (e) {
            console.error(e)
            error = e;
        }
    
        if (error){
            return error
        }

        return router.push('/dashboard')
    }

  return (
    <div>
        <a href="/">Home</a>
        <h1>Sign up</h1>
        <form onSubmit={signUp}>
            <label htmlFor='email'>
                <input required type='email' name='email' id='email' onChange={(e)=>setEmail(e.target.value)}></input>
            </label>
            <label htmlFor='password'>
                <input required type='password' name='email' id='password' onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <button type="submit">Sign up</button>
        </form>
        <span><p>Already have an account?</p> <a href = "/login">Login into your account.</a></span>
    </div>
  )
}

export default page