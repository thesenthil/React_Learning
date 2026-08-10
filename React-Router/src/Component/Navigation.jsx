import React from 'react'
import {NavLink} from 'react-router-dom'

function Navigation() {
  return (
    <nav className='bg-gray-800 text-white p-4 flex gap-4 items-center'>
        <div className='text-2xl font-bold'>
            <h1>Website</h1>
        </div>
        <NavLink to='/' className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>Home</NavLink>
        <NavLink to='/about' className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>About</NavLink>
    </nav>
  )
}

export default Navigation