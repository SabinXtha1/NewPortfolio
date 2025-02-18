'use client'
import Link from 'next/link';
import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import CircularText from '../effect/circular';
import { ArrowRight } from 'lucide-react';
const Personal = () => {
  return (
  <>
 <div className=' relative m-4 mb-8 nh'>
  <div className='w-[210px] h-[210px] rounded-full flex items-center justify-center load scale-20 hover:scale-100'>

  </div>
  <div className='  gap-8 flex  items-center flex-col md:flex-row lg:flex-row relative'>
          
  <div className='min-w-[170px] h-[170px]'>

<div className='bio min-w-[170px] h-[170px] rounded-[50%] scale-95 overflow-hidden hover:scale-100 an  absolute -top-0'>  

</div>
     </div>
     <div className='flex flex-col  m-2 gap-2 '>
       <span className='text-3xl font-bold font-mono te text-blue-100 '>
        Sabin Nayaju🪼 
       </span>
       <span className='te opacity-90 flex font-sans'>
       I'm an 18-year-old full-stack developer from Nepal. I'm currently learning Django, and have experience in frontend development with Next Js,React,  JavaScript, HTML, and CSS, as well as backend development with 
       Node.js and Express & Prisma,Mongoose For ORMS.
































       
       </span>
       {/* <a href='/cv.pdf' target='_blank' className='px-4 py-2 bg-white text-black rounded-2xl text-center   mt-3  w-[150px] hover:text-white hover:bg-red-500 shadow-sm shadow-white font-serif font-bold '  >
            My Resume
          </a> */}
      
     </div>
  </div>
  <div className='m-4 mt-6 flex justify-between'>
         
         <Link href='https://github.com/SabinXtha1' className='git flex justify-center items-center gap-3 '>
         <FaGithub className=' w-[36px] h-[36px] text-red-600 scale-95 hover:scale-100 an ann ' />
         <span className='cursor-pointer'>
          @SabinXtha1
          </span>
          </Link> <a href='/cv.pdf' target='_blank' className='px-4 py-2 bg-white text-black rounded-2xl text-center   mt-3  w-[150px] hover:text-white hover:bg-red-500 shadow-sm shadow-white font-serif font-bold '  >
            My Resume
          </a>
      

         
          <Link href='https://www.linkedin.com/in/sabin-nayaju-72438a204' className='git flex justify-center items-center gap-3 '>
          <FaLinkedin className=' w-[36px] h-[36px] text-blue-600 scale-95 hover:scale-100 an annn '/>
          <span className='cursor-pointer'>
          @Sabin-Nayaju
          </span>
          </Link>
         
  </div>
 </div>
  </>
  )
}

export default Personal