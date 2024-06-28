import React, { useReducer } from 'react'

const initialvalue =0
const reducer=(state,action)=>{
    switch (action) {
        case 'Increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'zero':
            return initialvalue
        default:
            return state
    }
}

function UseReducer() {

    const[count,dispatch] = useReducer(reducer,initialvalue)
  return (
    
    <div>
      <h1 className='text-3xl'>{count}</h1>
      <button className='btn  border' onClick={()=>dispatch("Increment")}>increment</button>
      <button className='btn border m-2
      
      ' onClick={()=>dispatch("decrement")}>decrement</button>
      <button className='btn border' onClick={()=>dispatch("zero")}>zero</button>
    </div>
  )
}

export default UseReducer
