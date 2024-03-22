import React from 'react'
import { data } from '../constants'

function Navbar() {
  return (
    <nav className='flex justify-center sm:justify-between px-3 h-[70px] items-center bg-[#2A2C34] text-lg font-spaceGrotesk sticky top-0 z-10'>
        <div className='hidden sm:block'><span className='font-spaceGrotesk'>Mohamed</span>/<span className='font-spaceGrotesk'>Tariq</span></div>
        <div>
            <ul className='flex gap-5'>
                <li><a href='#about'>Home</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
        <div><button className='hidden sm:red-btn sm:block'><a href={data.contactLinks.github} target='_blank'>Github Profile</a></button></div>
    </nav>
  )
}

export default Navbar