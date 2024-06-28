import React, { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get(`/api/jokes`)
      .then((res) => {
        setjokes(res.data)

      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>shubham and full-stack name</h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((joke, index) => {
          return (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          )
        }
        )
      }
    </>
  )
}

export default App;
