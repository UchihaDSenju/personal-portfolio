import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin, SiGithub , SiInstagram, SiWhatsapp } from "react-icons/si";
import {data} from '../constants'

function Footer() {
  return (
    <footer className='flex flex-col bg-[#333333] justify-center items-center gap-7 p-4'>
        <h1 className='uppercase font-spaceGrotesk text-3xl'>Catch me at</h1>
        <div className='flex gap-10 text-3xl'>
            <a href={data.contactLinks.github} target='_blank'><SiGithub /></a>
            <a href={data.contactLinks.linkedIn} target='_blank'><SiLinkedin /></a>
            <a href={data.contactLinks.instagram} target='_blank'><SiInstagram /></a>
            <a href={data.contactLinks.whatsapp} target='_blank'><SiWhatsapp /></a>
        </div>
    </footer>
  )
}

export default Footer