import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-center items-center fixed top-3 left-1/2 transform -translate-x-1/2'>
      <nav className='flex gap-1 p-0.5 px-4 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        <a href="#" className='nav-item'>Home</a>
        <a href="#" className='nav-item'>projects</a>
        <a href="#" className='nav-item'>About</a>
        <a href="#" className='nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'>Contact</a>
      </nav>
    </div>
  )
}
 