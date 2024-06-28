import React from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from './firebase';


const db = getDatabase(app);

function Apiload() {
 
    const putData =()=>{
        set(ref(db ,'users/shubham'),{
            id:1,
            name:"shubham jadav",
            age:22,
        });
    };

  return (
    <div>
      <h1>firebase react app</h1>
      <button onClick={putData} className='btn bg-red-400 border-2 border-black'>Put data</button>
    </div>
  )
}

export default Apiload
