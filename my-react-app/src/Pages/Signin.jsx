import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import { app } from '../firebase';


const auth = getAuth(app);

function Signin() {

    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('')


    const signinUser =()=>{
        signInWithEmailAndPassword(auth,email ,password)
        .then((value)=>console.log("sign in success"))
        .catch((err)=>console.log(err))
    }

  return (
    <div className='signin-page'>
        <h1 className='bg-blue-400'>Sign in page</h1>
        <label htmlFor="">Enter your email</label>
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder='enter your email here' />
        <label htmlFor="">Enter your Password</label>
        <input onChange={(e)=> setpassword(e.target.value)} value={password} type="password" placeholder='enter your Password here' />
        <button onClick={signinUser}>Sign in me</button>
    </div>
  )
}

export default Signin
