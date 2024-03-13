import React from 'react'
import { data } from '../constants'

function Projects() {
  return (
    <div id='projects' className='flex flex-col my-5'>
        <div className='bg-[#892929] p-2 rounded-t-md text-center'>
            <h1 className='font-spaceGrotesk text-2xl sm:text-4xl'>Projects BillBoard</h1>
        </div>
        <div className='bg-[#2D3658] p-7 rounded-b-md sm:grid sm:grid-cols-3 gap-5'>
            {data.projects.map((project, index) => {
                return (
                    <div onClick={() => {}} className='bg-white flex flex-col my-5 hover:cursor-pointer sm:my-0' key={index}>
                        <div className='p-2'>
                            <img src={project.coverImage} className='border-2 border-gray-200'></img>
                        </div>
                        <div className='bg-white text-center'>
                            <h1 className='text-black font-caveat text-2xl'>{project.name}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects