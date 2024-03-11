import React from 'react'
import { data } from '../constants'

function Navbar() {
  return (
    <nav className='flex justify-between px-3 h-[70px] items-center bg-[#A43030] text-lg font-spaceGrotesk'>
        <div>Logo Here</div>
        <div>
            <ul className='flex gap-5'>
                <li><a>Home</a></li>
                <li><a>Projects</a></li>
                <li><a>Experience</a></li>
            </ul>
        </div>
        <div><button className='bg-[#892929] p-1 rounded-sm hover:bg-[#793232] '><a href={data.contactLinks.github} target='_blank'>Github Profile</a></button></div>
    </nav>
  )
}

export default Navbar