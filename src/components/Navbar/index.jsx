import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='text-black bg-slate-50 p-6 shadow-xl'>
            <NavLink className='text-lg p-4 hover:underline' to='/' >Registration</NavLink>
            <NavLink className='text-lg p-4 hover:underline' to='login' >LogIn</NavLink>
        </div>
        <div>
            <Outlet/>
        </div>
    </>
  )
}

export default Navbar