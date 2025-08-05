import React from 'react'
import JelloEffect from './JelloEffect'
import { SiC, SiCss3, SiExpo, SiExpress, SiFramer, SiHtml5, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { FaGit, FaGithub } from 'react-icons/fa'
import { IconBrandCSharp } from '@tabler/icons-react'

const HeroSkill = () => {
  const data =[{
    techName:"TypeScript",
    techLogo:<SiTypescript className='text-blue-400 w-[100px] h-[100px] rounded-2xl'/>
  },
{
    techName:"NextJS",
    techLogo:<SiNextdotjs className='text-white w-[100px] h-[100px] rounded-2xl'/>
  },{
    techName:"MongoDB",
    techLogo:<SiMongodb className='text-green-400 w-[100px] h-[100px] rounded-2xl'/>
  },
  {
    techName:"Redux",
    techLogo:<SiRedux className='text-blue-400 w-[100px] h-[100px] rounded-2xl'/>
  },
  {
    techName:"NodeJs",
    techLogo:<SiNodedotjs className='text-green-400 w-[100px] h-[100px] rounded-2xl'/>
  },{
    techName:"Express Js",
   techLogo:<SiExpress className='text-yellow w-[100px] h-[100px] rounded-2xl'/>
  },
  {
    techName:"MySQL",
    techLogo:<SiMysql className='text-yellow w-[100px] h-[100px] rounded-2xl'/>
  },
  {
    techName:"HTML",
    techLogo:<SiHtml5 className='text-red-400 w-[100px] h-[100px] rounded-2xl'/>
  },
  {
    techName:"CSS",
    techLogo:<SiCss3 className='text-blue-400 w-[100px] h-[100px] rounded-2xl'/>
  },
  {
    techName:"Tailwind Css",
    techLogo:<SiTailwindcss className='text-blue-400 w-[100px] h-[100px] rounded-2xl'/>

  },
  {
    techName:"Framer Motion",
    techLogo:<SiFramer className='text-blue-400 w-[100px] h-[100px] rounded-2xl'/>
  },
  {
    techName:"React",
    techLogo:<SiReact className='text-blue-400 w-[100px] h-[100px] rounded-2xl'/>
  },
  {
    techName:"React Native Expo",
    techLogo:<SiExpo className='text-white w-[100px] h-[100px] rounded-2xl'/>
  },
  {
    techName:"Git",
    techLogo:<FaGit className='text-red-600 w-[100px] h-[100px] rounded-2xl'/>

  },
  {
    techName:"GitHub",
    techLogo:<FaGithub className='text-white w-[100px] h-[100px] rounded-2xl'/>
  },{
    techName:"Postman",
    techLogo:<SiPostman className='text-orange-600 w-[100px] h-[100px] rounded-2xl'/>

  },
  {
    techName:"C",
    techLogo:<img src='/c.png' alt='C' className='text-blue-400 w-[100px] h-[100px] rounded-2xl'/>

  }
  ,
  {
    techName:"C#",
    techLogo:<img src='/csharp.png' alt='C#' className=' w-[160px] h-[160px] rounded-2xl'/>

  },
  {
    techName:"Dot Net",
    techLogo:<img src='/dotnet.png' alt='Dot Net' className=' w-[190px] h-[auto] rounded-2xl'/>
  },



]
  return (
    <div className="w-[calc(100vw-100px)]  h-full min-h-screen justify-center flex flex-col items-center  text-white ">

      
      <div className="flex w-[80vw]  flex-col max-w-[1100px]  ">
     <div className='flex h-[50px] items-center gap-2 '>

      <JelloEffect words="<Skill/>" className={`font-serif text-4xl font-semibold `}/>
      <span className='w-[40%] h-[1px] mt-1.5 bg-white'></span>
     </div>
      <div className='mt-20 flex  justify-center '>
        <div className="flex flex-wrap justify-center gap-5 md:gap-9 lg:gap-12 max-w-[1000px]">

        {
          data.map((tech,index)=>{
            return (
              <div key={index} className='relative bg-[#101314] flex flex-col items-center justify-center w-[160px] h-[160px] p-4 rounded-2xl border-[1px] border-gray-800 group mb-2 md:mb-0  [] '>
              <h1 className='absolute -top-5 border-[1px] bg-[#101314] border-gray-800   py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 text-sm transition delay-150 duration-300 ease-in-out'>

                {tech.techName}
              </h1>
                {tech.techLogo}

              </div>
            )
          })
        }
        </div>
      </div>
      </div>
    </div>
  )
}

export default HeroSkill
