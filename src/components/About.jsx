import React from 'react'
import { data } from '../constants'

function About() {
  return (
    <div className='flex w-full justify-evenly my-5'>
      <div className='w-[50%] flex font-caveat justify-center items-center flex-col text-4xl'>
        <div className='leading-[4rem] flex flex-col'>
          <div className='text-center'>Hi I am Mohamed Tariq</div>
          <div className='font-spaceGrotesk text-center'>A Full Stack Web Developer</div>
          <div className='text-center w-[70%] mx-auto'>{data.aboutDesc.desc}</div>
          <a href={data.aboutDesc.resumeLink} target='_blank' className='mx-auto'><button className='red-btn'>View My Resume</button></a>
        </div>
      </div>
      <div className='w-[50%] flex flex-col justify-center items-center'>
        <div className='bg-white w-[500px] h-[500px] rounded-full'><img src={data.aboutDesc.profile} className='object-cover w-[100%] h-[100%] rounded-full'></img></div>
      </div>
    </div>
  )
}

export default About