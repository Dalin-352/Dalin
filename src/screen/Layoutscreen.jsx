import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../page/Navbar'

function Layoutscreen() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        
      </div>
      <Outlet></Outlet>
    </>
    

  )
}

export default Layoutscreen
