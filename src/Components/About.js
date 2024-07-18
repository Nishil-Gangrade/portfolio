import React from 'react'
import { CiMail } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";
export default function About() {
  return (
    <div className=''>
      <h1 className="font-semibold text-4xl ">Hey, I'm Aditya.</h1> 
      <span className="font-semibold text-3xl">A software engineer from India.</span>
      <p class="text-lg my-5">Enthusiastic about the ever-evolving world of technology, I've delved into the realms of both web development and data science. Through internships with industry giants like Jio and Hilti, I've gained invaluable hands-on experience. My mindset often oscillates between optimism and pessimism, fueling a dynamic approach to challenges. Beyond tech, I find solace and inspiration in the pages of books, fostering a deep love for reading. </p>
      <div className='flex gap-2'>
        <a className='text-3xl' href="mailto:adityamuzumdar11@gmail.com">
        <CiMail />
        </a>
        <a className='text-3xl' href="https://github.com/adityamuzumdar">
        <DiGithubBadge />
        </a>
        <a className='text-3xl' href="https://x.com/aditweets1104">
        <FaXTwitter />
        </a>
      </div>
    </div>
  )
}
