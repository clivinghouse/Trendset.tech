'use client';
import { useState, SyntheticEvent } from 'react'
import { useRouter } from 'next/navigation'
import app from '@/utils/config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app)

const login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const login = async (event: SyntheticEvent) => {
    event.preventDefault()
    let result = null
    let error = null
    
    console.log(email, password)

    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        console.error(e)
        error = e;
    }

    if (error){
        console.log(error)
        return error
    }

    return router.push('/dashboard')
  }

  return (
    <div>
        <a href="/">Home</a>
        <h1>Login</h1>
        <form onSubmit={login}>
        <label htmlFor='email'>
                <input required type='email' name='email' id='email' onChange={(e)=>setEmail(e.target.value)}></input>
            </label>
            <label htmlFor='password'>
                <input required type='password' name='email' id='password' onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <button type="submit">Login</button>
        </form>
        <span><p>Don't have an account?</p><a href="sign_up">Create an account.</a></span>
    </div>
  )
}

export default login