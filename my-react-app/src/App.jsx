import { useState } from 'react'
import Frist from './Frist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Two from './Two'
import MainComponent from './Propsdriling/MainComponent'
import Propsdrling from './Propsdriling/Props/Propsdrling'
import UseContec from './Propsdriling/propsuescontext/UseContec'




function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<><Frist/></>} />
            <Route path='/two' element={<><Two/></>} />
            <Route path='/main' element={<><MainComponent /></>}>
              <Route path='/main/props' element={<><Propsdrling/></>} />
              <Route path='/main/usecontext' element={<><UseContec/></>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
