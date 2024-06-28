import React, { useState } from 'react'

function Useconter() {
    const [count,setcount] = useState(0)

    const add=()=>{
        setcount(count+1)
    }
    const remove=()=>{
        setcount(count-1)
    }
    const defult=()=>{
        setcount(count*0)
    }

  return [count,add,remove,defult]
}

export default Useconter
