import React from 'react'
import { data } from '../constants'
import Arrow from '../media/Arrow.png'

function Skills() {
  return (
    <div className='flex gap-6'>
        <div className='flex p-3 sm:w-[50%] justify-center'>
            <div className='bg-[#A43030] rounded-lg p-5 sm:p-14 sm:w-[60%]'>
                <h1 className='font-spaceGrotesk text-center text-2xl sm:hidden'>Tech Stack that I work with</h1>
                <div className='flex flex-wrap gap-5 justify-center items-center'>
                    {data.techStacks.map((tech, index) => {
                        return(
                            <div key={index} className='flex flex-col justify-center items-center font-spaceGrotesk mt-4'>
                                <div className='text-6xl'><tech.logo /></div>
                                {tech.techName}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className='hidden justify-center flex-col sm:flex sm:w-[40%]'>
            <h1 className='text-5xl font-spaceGrotesk text-center'>Tech Stacks That I work with</h1>
            <div className='hidden sm:block'><img className='w-[300px] h-[200px]' src={Arrow}></img></div>
        </div>
    </div>
  )
}

export default Skills