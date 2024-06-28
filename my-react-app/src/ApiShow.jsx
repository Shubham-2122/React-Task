import { getFirestore,collection,addDoc } from 'firebase/firestore';
import React from 'react'
import { app } from './firebase';


const firestore = getFirestore(app);

function ApiShow() {

    const writeData =async()=>{
        const result = await addDoc(collection(firestore,'cities'),{
            name:"bharuch",
            pincode:392001,
            lat:123,
            long:456
        });

        console.log("Result",result)
    }

  return (
    <div>
      <h1>frebase FireStore in react cloud store</h1>
      <button onClick={writeData}>put data</button>
    </div>
  )
}

export default ApiShow
