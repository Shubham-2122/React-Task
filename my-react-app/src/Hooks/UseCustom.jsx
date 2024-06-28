import React from 'react'
import Useconter from './Useconter'

function UseCustom() {
    const[count,add,remove,defult] = Useconter()
  return (
    <div>
      <h1>custom hooks</h1>
      <h1>{count}</h1>
      <button onClick={add} className='btn border'>add</button>
      <button onClick={remove} className='btn border m-3'>remove</button>
      <button onClick={defult} className='btn border'>zero</button>

    </div>
  )
}

export default UseCustom
