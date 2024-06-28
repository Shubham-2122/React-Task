import React from 'react'
import { app } from './firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


const auth = getAuth(app);
function ApiAutication() {

    const signupUser = () => {
        createUserWithEmailAndPassword(
            auth, 'sujaljadav12@gmail.com', "sujal123"
        ).then((value)=>  console.log(value))
    }

    return (
        <div>
            <h1>Create user in database</h1>
            <button onClick={signupUser} className='btn bg-green-400 border-2 border-black' >Create user</button>
        </div>
    )
}

export default ApiAutication
