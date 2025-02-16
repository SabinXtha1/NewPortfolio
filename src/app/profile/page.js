import React from 'react'
import Personal from '../components/Personal'
import CircularText from '../effect/circular'
import Noise from '../effect/noise'
import SplashCursor from '../effect/splash'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import LogoWall from '../effect/items'
import ScrollVelocity from '../effect/items'

const page = () => {
  
  
  return (
    <div className='text-white w-screen h-screen flex flex-col items-center justify-center'style={{
      backgroundColor: "black",
      backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: "20px 20px",
      backgroundRepeat: "repeat",
    }}
    >
       <SplashCursor className="-z-0 absolute inset-0" />
        {/* <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
          <div class=" bg-indigo-500 
           rounded-b-full  "></div>
          </div>
          <div>
            TEXT
            </div>
        </div> */}
        <div className='w-[80%]'>
        <Noise
    patternSize={250}
    patternScaleX={1}
    patternScaleY={1}
    patternRefreshInterval={2}
    patternAlpha={15}
  />
       <div className=' relative m-4 mb-8 nh'>
  <div className='w-[210px] h-[210px] rounded-full flex items-center justify-center load scale-20 hover:scale-100'>

  </div>
  <div className='  gap-8 flex  items-center flex-col md:flex-row lg:flex-row relative'>
          
     <div className='bio min-w-[170px] h-[170px] rounded-[50%] scale-95 overflow-hidden hover:scale-100 an  relative'>  
    
     </div>
     <div className='flex flex-col  m-2 gap-2 '>
       <span className='text-3xl font-bold font-mono te text-blue-100 '>
        Sabin Nayaju🪼 
       </span>
       <span className='te opacity-90 flex font-sans'>
       I'm an 18-year-old full-stack developer from Nepal. I'm currently learning Django, and have experience in frontend development with Next Js,React,  JavaScript, HTML, and CSS, as well as backend development with 
        Node.js and Express & Prisma,Mongoose For ORMS.
       </span>
      
     </div>
  </div>
  <div className='m-4 mt-6 flex justify-between'>
         
         <Link href='https://github.com/SabinXtha1' className='git flex justify-center items-center gap-3 '>
         <FaGithub className=' w-[36px] h-[36px] text-red-600 scale-95 hover:scale-100 an ann ' />
         <span className='cursor-pointer'>
          @SabinXtha1
          </span>
          </Link>
         
          <Link href='https://www.linkedin.com/in/sabin-nayaju-72438a204' className='git flex justify-center items-center gap-3 '>
          <FaLinkedin className=' w-[36px] h-[36px] text-blue-600 scale-95 hover:scale-100 an annn '/>
          <span className='cursor-pointer'>
          @Sabin-Nayaju
          </span>
          </Link>
         
  </div>
 </div>
 </div>
 <div className='w-[100%] border border-white border-x-0  border-opacity-[0.2]'>

 <LogoWall
        
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="10s"
          bgColor="#060606"
          bgAccentColor="#111111"
        />
          </div>
       

    </div>
  )
}

export default page