import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function MainComponent() {
  return (
    <div>
      {/* hello */}
      <Link className='btn border p-3 m-2 ' to="/main/props" >Propsdrling</Link>
      <Link className='btn border p-3 m-2 ' to="/main/usecontext" >UseContext</Link>
      <Outlet/>
    </div>
  )
}

export default MainComponent
