import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import LogoWall from '../effect/items'
import { Dot, Star } from 'lucide-react'
import Image from 'next/image'
import { SiNextdotjs, SiPrisma, SiSupabase } from 'react-icons/si'


const page = () => {
  const project = [
    {
      name: 'Social Media',
      des: "A social media platform where users can share their thoughts, ideas, follow each other & get notified.",
      url:'https://social-media-indol-tau.vercel.app/',
      src: '/social.png',
      technology: [
        {
          name: 'Next.js',
          icon: <SiNextdotjs className="text-white w-6 h-6" />,
        },{
          name:"Prisma",
          icon:<SiPrisma className='text-white w-6 h-6'/>
        },{
          name:'Supabase',
          icon:<SiSupabase className='text-green-400 w-6 h-6'/>
        }
      ],
    },
    {
      name: 'Portfolio',
      des: "it has a terminal in which we can see admin details.",
      url:'https://www.sabinnayaju.com.np',
      src: '/port.png',
      technology: [
        {
          name: 'Next.js',
          icon: <SiNextdotjs className="text-white w-6 h-6" />,
        }
      ],
    },
  ];
  
  return (
    <div style={{
      backgroundColor: "black",
      backgroundImage: `radial-gradient(circle, rgba(6,128,212,0.4) 1px, transparent 1px)`,
      backgroundSize: "20px 20px",
      backgroundRepeat: "repeat",
    }}>

    <div className='text-white pt-20 flex flex-col items-center justify-center  'style={{
            backgroundColor: "black",
            backgroundImage: `radial-gradient(circle, rgba(6,128,212,0.2) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
            backgroundRepeat: "repeat",
          }}
    >
       {/* <SplashCursor className="-z-0 absolute inset-0" /> */}
        {/* <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
          <div class=" bg-indigo-500 
           rounded-b-full  "></div>
          </div>
          <div>
          TEXT
            </div>
        </div> */}
        <div className='w-[80%] lg:mt-10'>
      
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
       <a href='/cv.pdf' target='_blank' className='px-4 py-2 bg-white text-black rounded-2xl text-center   mt-3  w-[150px] hover:text-white hover:bg-red-500 shadow-sm shadow-white font-serif font-bold ann an'  >
            My Resume
          </a>
      
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
 <div className='my-10 w-[80vw] flex flex-col gap-4 '>
    <h1 className='flex items-center gap-2 text-green-500'>
      <Star/>
      <span className='text-3xl font-serif'>

      My Work
      </span>
    </h1>
  <h1  className='text-5xl font-bold font-serif mb-10'>
      Crafting Ideas
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl  gap-10 ">
            {project.map((item, index) => (
              <a href={item.url} target='_blank' key={index}>

              <div key={index} className="relative overflow-hidden max-w-[500px] rounded-2xl bg-black shadow-sm hover:shadow-lg p-4 shadow-blue-500   hover:shadow-blue-500 border-opacity-[0.4] font-serif h-full pt-10"
            
              >
                {/* Project Image & Hover Overlay */}
                <div className="relative group flex  justify-center ">
                  <Image
                    src={item.src}
                    alt="Project Image"
                    width={300}
                    height={100}
                    className="rounded-2xl w-[300px] h-[200px] scale-90 hover:scale-100 transition-transform duration-300 "
                    />
                  
                  {/* Technology Overlay (Shown on Hover) */}
                  <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl an">
                    <h3 className="text-white font-bold text-lg mb-2">Technologies</h3>
                    <div className="flex gap-3">
                      {item.technology.map((tech, i) => (
                        <div key={i} className="flex flex-col items-center">
                          {tech.icon}
                          <span className="text-white text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Name & Description */}
                <p className="px-4 text-center p-5 font-silkscreen">
  {item.des.charAt(0).toUpperCase() + item.des.slice(1).toLowerCase()}
</p>
              </div>
            </a>
            ))}
          </div>
          <div className='flex justify-center w-full'>

          <Link href='https://github.com/SabinXtha1' className='flex text-xl font-bold font-serif gap-2 justify-center items-center m-2 bg-black p-4 border rounded-3xl border-white border-opacity-50 scale-95 hover:scale-100 an px-10'>
         <FaGithub className=' w-[36px] h-[36px] text-red-600 scale-95 hover:scale-100 an ann '/>Repo 
         </Link>
          </div>
 </div>
 
 <div className='w-[100%] border border-white border-x-0  border-opacity-[0.2]'>

 <LogoWall
        
        direction="horizontal"
        pauseOnHover={true}
        size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="20s"
          bgColor="#060606"
          bgAccentColor="#111111"
          />
          </div>
       
       <div className='flex justify-center items-center h-[400px] bg-[#111116] rounded-xl w-[80vw] m-10 p-4 font-serif'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h1 className='text-xl flex items-center relative'>
          <Dot className='text-green-400 w-20 h-20 animate-pulse absolute -left-5 opacity-70' />
        <Dot className='text-green-400 w-10 h-10 animate-pulse' /> Available for work
          </h1>
          <h1 className=' text-5xl font-bold text-center '>
            Let's create your 
            <br></br>
            next
             big idea.
          </h1>
          <button className="bg-white text-black rounded-2xl px-4 py-2 m-2 scale-90 hover:scale-100 hover:bg-gray-200 transition-transform">
  Contact Me
</button>

        </div>
       </div>
      

    </div>
          </div>
  )
}

export default page 