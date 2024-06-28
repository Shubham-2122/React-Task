import React, { useContext } from 'react'
import { data1 } from './A'

function C() {
    const {name,setname} = useContext(data1)
  return (
    <div>
      <h1>hello your name :- {name}</h1>
      <button onClick={()=>setname("sujal")}>chnage name</button>
    </div>
  )
}

export default C
