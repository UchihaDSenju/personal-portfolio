import React from 'react'

function ProjectCard({isVisible}) {
  return (
    isVisible && <div className='fixed top-0 left-0 z-10 flex w-[100%] h-[100vh] justify-center items-center'>
    <div className='flex flex-col-reverse sm:grid sm:grid-cols-3 sm:h-[400px] w-[70%] bg-black rounded-md'>
        <div className='bg-blue-900 rounded-b-md col-span-2 sm:rounded-l-md'>One side</div>
        <div className='bg-red-900 rounded-t-md sm:rounded-r-md'>Other side</div>
    </div>
</div> 
  )
}

export default ProjectCard