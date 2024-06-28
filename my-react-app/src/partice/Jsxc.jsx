import React from 'react';
import "./style.css";

function Jsxc() {
    var name = "shubham"
    let name1 = <h1>hello thi h1 tag</h1>
    let count =  <h1>hello  count {5+5}</h1>

    let internalcss = {
        background:"yellow",
        color:"red"
    }

    const myelemet = 
    (
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
    )
  return (
    <div>
    {name}
    <h1 className='text-3xl'>{"hii shubham"}</h1>
    <h1>{name}</h1>
    <p>{name1}</p>
    <p>{count}</p>

    <h1 style={{color:"red",background:"blue"}}>this is inline css</h1>

    <h1 style={internalcss}>internal css</h1>

    {myelemet}

    <h1 className='h1'>hello this is a external css</h1>
    </div>
  )
}

export default Jsxc
