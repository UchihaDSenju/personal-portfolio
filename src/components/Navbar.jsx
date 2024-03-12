import React from 'react'
import { data } from '../constants'

function Navbar() {
  return (
    <nav className='flex justify-center sm:justify-between px-3 h-[70px] items-center bg-[#2A2C34] text-lg font-spaceGrotesk sticky top-0'>
        <div className='hidden sm:block'>Logo Here</div>
        <div>
            <ul className='flex gap-5'>
                <li><a>Home</a></li>
                <li><a>Projects</a></li>
                <li><a>Experience</a></li>
            </ul>
        </div>
        <div><button className='hidden sm:red-btn sm:block'><a href={data.contactLinks.github} target='_blank'>Github Profile</a></button></div>
    </nav>
  )
}

export default Navbar