import React, { useState } from 'react'
import { data } from '../constants'
import ProjectCard from './ProjectCard'

function Projects() {
    const [popUp, setPopUp] = useState(false)
    const showPopup = () => {
        console.log('Hhh');
        <ProjectCard isVisible={true}/>
    }
  return (
    <div id='projects' className='flex flex-col my-5'>
        <div className='bg-[#892929] p-2 rounded-t-md text-center'>
            <h1 className='font-spaceGrotesk text-2xl sm:text-4xl'>Projects BillBoard</h1>
        </div>
        <div className='bg-[#2D3658] p-7 rounded-b-md sm:grid sm:grid-cols-3 gap-5'>
            {data.projects.map((project, index) => {
                return (
                    <a href={project.link} target='_blank'>
                        <div onClick={showPopup} className='bg-white flex flex-col my-5 hover:cursor-pointer sm:my-0' key={index}>
                            <div className='p-2'>
                                <img src={project.coverImage} className='border-2 border-gray-200'></img>
                            </div>
                            <div className='bg-white text-center'>
                                <h1 className='text-black font-caveat text-2xl'>{project.name}</h1>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    </div>
  )
}

export default Projects