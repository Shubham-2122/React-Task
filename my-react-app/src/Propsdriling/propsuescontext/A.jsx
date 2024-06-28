import React, { createContext, useState } from 'react'
// import B from './B'
import C from './C'

export const data1 = createContext()

function A() {

    const [name,setname] = useState('shubham')
  return (
    <div>
      <h1>hello</h1>
      <data1.Provider  value={{name,setname}}>
      <C /> 
      </data1.Provider>
    </div>
  )
}

export default A
