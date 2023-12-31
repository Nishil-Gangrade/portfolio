import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
function Layout() {
  return ( 
    <div className='max-w-xl mx-auto max-sm:px-6'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout
