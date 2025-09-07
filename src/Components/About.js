// show user: 22bce0119
import React from 'react'
import { CiMail } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <div className=''>
      <h1 className="font-semibold text-4xl">Hey, I'm Nishil</h1> 
      <span className="font-semibold text-2xl">Code. Data. Insight. Impact</span>
      
      <p className="text-lg my-5">
        I’m a Computer Science student at VIT Vellore (2022–2026) with strong foundations in 
        software engineering, full-stack development, and data analytics.  
        Through internships at <span className="font-semibold">Cygnus Capital</span> and 
        <span className="font-semibold"> DDXP Technologies</span>, I’ve built experience in 
        creating scalable web apps, analyzing data for business insights, and collaborating 
        with cross-functional teams.  
        <br /><br />
        My key interests are <span className="italic">MERN stack development, cloud computing, and Generative AI</span>.  
        I enjoy solving real-world problems through technology while constantly upskilling in modern tools like 
        Docker, Kubernetes, and AI frameworks. Outside of coding, I find balance in sports, fitness, 
        and creative pursuits.
      </p>

      <div className='flex gap-4'>
        {/* Email */}
        <a className='text-3xl' href="mailto:nishilgangrade2003@gmail.com">
          <CiMail />
        </a>
        
        {/* GitHub */}
        <a className='text-3xl' href="https://github.com/Nishil-Gangrade">
          <DiGithubBadge />
        </a>
        
        {/* Twitter / X (if you want to keep, else remove) */}
        <a className='text-3xl' href="https://x.com/Ni5hil">
          <FaXTwitter />
        </a>
      </div>
    </div>
  )
}
