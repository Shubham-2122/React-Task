import React from 'react'
import UseReducer from './Hooks/UseReducer'
import Usememo1 from './Hooks/Usememo'
import UseCustom from './Hooks/UseCustom'
import Jsxc from './partice/Jsxc'
import Function from './partice/Function'
import Class from './partice/Class'
import Main_loading from './Lazy_loading/Main_loading'
import Main_module from './Modulecss/Main_module'
import Apiload from './Apiload'
import ApiAutication from './ApiAutication'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import ApiShow from './ApiShow'


function Frist() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl text-center hover:bg-sky-400 hover:text-red-300 bg-blue-900 p-10 font-bold underline text-red-700'>hello Vite project run1</h1>
      {/* <UseReducer /> */}
    {/* <Usememo1/> */}
    {/* <UseCustom /> */}
      {/* <Jsxc /> */}
      {/* <Function /> */}
      {/* <Class /> */}
     {/* <Main_loading /> */}
     {/* <Main_module /> */}
     {/* <Apiload /> */}
    {/* <ApiAutication /> */}
    <Signup/>
    <Signin />
    {/* <ApiShow /> */}

    </div>
  )
}

export default Frist
 