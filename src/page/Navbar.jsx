import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='bg-slate-800 flex justify-between px-10 py-2 items-center '>
            <div>
               <img width={30} src="https://icons.iconarchive.com/icons/custom-icon-design/round-world-flags/512/Cambodia-icon.png" alt="" />
            </div>
            <div className='flex gap-5 '>
                <NavLink className="text-white font-semibold hover:scale-105 active:scale-95" to={"/"}> Home</NavLink>
                    <NavLink className="text-white font-semibold hover:scale-105 active:scale-95" to={"/product"}> Product</NavLink>
                    <NavLink className="text-white font-semibold hover:scale-105 active:scale-95" to={"/cart"}>Cart</NavLink>
                    <NavLink className="text-white font-semibold hover:scale-105 active:scale-95" to={"/category"}> Category</NavLink>
                    <NavLink className="text-white font-semibold hover:scale-105 active:scale-95" to={"/contact"}> Contact</NavLink>
                    <NavLink className="text-white font-semibold hover:scale-105 active:scale-95" to={"/order"}> Order</NavLink>
                    <NavLink className="text-white font-semibold hover:scale-105 active:scale-95" to={"/policy"}> Policy</NavLink>
                    <NavLink className="text-white font-semibold hover:scale-105 active:scale-95" to={"/checkout"}>Check out</NavLink>
                    <NavLink className="text-white font-semibold hover:scale-105 active:scale-95" to={"/about"}> About</NavLink>
            </div>    
        </div>
      
    </>
  )
}

export default Navbar
