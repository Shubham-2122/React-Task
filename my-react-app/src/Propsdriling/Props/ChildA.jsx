import React, { useState } from 'react'
import ChildB from './ChildB'

function ChildA() {
    const [data,setdata]= useState({
        name:"shubham",
        age:"23"
    })
  return (
    <div>
        <h1>{data.name}</h1>
        <ChildB name={data.name} setdata={setdata} age={data.age} /> 
    </div>
  )
}

export default ChildA
