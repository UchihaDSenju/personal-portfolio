import React from 'react'
import { data } from '../constants'

function About() {
  return (
    <div id='about' className='bg-[#2D3658] p-2 flex flex-col-reverse w-full justify-evenly mb-5 sm:flex-row'>
      <div className='sm:w-[50%] flex font-caveat justify-center items-center flex-col text-4xl'>
        <div className='leading-[4rem] flex flex-col mt-7 sm:mt-0'>
          <div className='text-center text-5xl'>Hi I am Mohamed Tariq</div>
          <div className='font-spaceGrotesk text-center mt-5'>A Full Stack Web Developer</div>
          <div className='text-center sm:w-[70%] mx-auto'>{data.aboutDesc.desc}</div>
          <a href={data.aboutDesc.resumeLink} target='_blank' className='mx-auto'><button className='red-btn'>View My Resume</button></a>
        </div>
      </div>
      <div className='sm:w-[50%] flex flex-col justify-center items-center'>
        <div className='bg-white w-[330px] h-[330px] rounded-full sm:w-[500px] sm:h-[500px]'><img src={data.aboutDesc.profile} className='object-cover w-[100%] h-[100%] rounded-full'></img></div>
      </div>
    </div>
  )
}

export default About