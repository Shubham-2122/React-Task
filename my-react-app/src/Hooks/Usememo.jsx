import React, { useMemo,useState } from 'react'

function Usememo1() {
    const[add,setadd] =useState(0)
    const[minus,setminus]=useState(100)

    const multiplication=useMemo(function multiply(){
        console.log("*********************")
        return add*10;
    },[add])
  return (
    <div>
      <h1>usememo</h1>
      {multiplication}
        <h2>{add}</h2>
        <button className='btn border bg-green-400' onClick={()=>{setadd(add+1)}} >addition</button>
    
        <h2>{minus}</h2>
        <button className='btn border bg-red-300' onClick={()=>{setminus(minus-1)}}>substration</button>
    </div>
  )
}

export default Usememo1
