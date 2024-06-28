import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup  } from 'firebase/auth';
import { app } from '../firebase';


const auth = getAuth(app)
const googleProvider  = new GoogleAuthProvider()

function Signup() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const createuser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((value) =>
            alert("Success")
        );
    };


    const signupwithGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
    }
    return (
        <div className='signup-page'>
            <h1 className='bg-sky-200'>Signup page</h1>
            <label>Email</label>
            <input onChange={(e) => setemail(e.target.value)} value={email} type="email" required placeholder='enter your Email here' />
            <label>Password</label>
            <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" required placeholder='enter your password  here' />
            <button onClick={signupwithGoogle}>Sign in wih google</button>
            <button onClick={createuser}>Signup</button>
        </div>
    )
}

export default Signup
