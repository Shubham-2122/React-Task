import React from 'react'
import ChildC from './ChildC'

function ChildB({name,age,setdata}) {
  return (
    <div>
      {/* <h1>{name}</h1> */}
      <h1>hello B :-{name}</h1>
      <h2>{age}</h2>
      <button onClick={()=>{setdata({...data,name:"sujal"})}}>click</button>
      <ChildC name={name} age={age} />
    </div>
  )
}

export default ChildB
