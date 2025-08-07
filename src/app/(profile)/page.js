"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Star, CircleDot, ExternalLink, Download, Contact2Icon,MoveRight, Mail  } from "lucide-react"
import { SiNextdotjs, SiPrisma, SiSupabase,SiMongodb ,SiMongoose} from "react-icons/si"
import LogoWall from "../effect/items"
import Link from "next/link"
import JelloEffect from '../components/JelloEffect'
import HeroSkill from "../components/SkillSection"
// import PhysicsCursor from "../components/Cursor"


// Tech stack icons
const TechIcon = ({ name, children, color = "text-white" }) => (
  <motion.div
    className={`flex flex-col items-center gap-1 ${color}`}
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
    <span className="text-xs font-medium">{name}</span>
  </motion.div>
)






export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const bioRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const bioInView = useInView(bioRef, { once: true, amount: 0.3 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.1 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.5 })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

   const projects = [
     {
       name: 'Social Media',
       des: "A social media platform where users can share their thoughts, ideas, follow each other & get notified.",
       url:'https://social-media-indol-tau.vercel.app/',
       src: '/social.png',
       technologies: [
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
       name: 'PDFYN',
       des: "It is a PDF generator that allows you to create and download PDFs from HTML content.",
       url:'https://pdfyn.vercel.app/',
       src: '/pdfyn.png',
       technologies: [
         {
           name: 'Next.js',
           icon: <SiNextdotjs className="text-white w-6 h-6" />,
         }
       ],
     },{
       name: 'NepBlog',
       des: "It is a blog writing web app that allows you to create blog.",
       url:'https://nepblog.vercel.app/',
       src: '/nepblog.png',
       technologies: [
         {
           name:'MongoDB',
           icon:<SiMongodb className='text-green-400 w-6 h-6'/>
           
          },
          {
            name: 'Next.js',
            icon: <SiNextdotjs className="text-white w-6 h-6" />,
            
          }
          ,
          {
          name:"Mongoose",
          icon:<SiMongoose className='text-red-400 w-6 h-6'/>
         }
       ],
     },{
      name:"Ward 2",
      des:"It is a web app that allows you to create,upadte,delete post ,manage your ward people , give them notice information via email on one click of ward mayor and reliable access to user details.",
      url:'https://ward-2.vercel.app/',
      src:'/wa.png',
       technologies: [
         {
           name:'MongoDB',
           icon:<SiMongodb className='text-green-400 w-6 h-6'/>
           
          },
          {
            name: 'Next.js',
            icon: <SiNextdotjs className="text-white w-6 h-6" />,
            
          }
          ,
          {
          name:"Mongoose",
          icon:<SiMongoose className='text-red-400 w-6 h-6'/>
         },{
          name:"MailTo",
          icon:<Mail className='text-blue-500 w-6 h-6'/>
         }
       ]

     }
   ];
   

  const backgroundVariants = {
    hidden: {
      backgroundSize: "0px 0px",
      opacity: 0,
    },
    visible: {
      backgroundSize: "20px 20px",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className="min-h-screen  text-white px-10 bg-black"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={backgroundVariants}
      
    >
       {/* <PhysicsCursor
        speed={0.15} // Optional: cursor follow speed
        hoverScale={1.5} // Optional: scale when hovering
        size={40} // Optional: cursor size in pixels
        color="#60a5fa" // Optional: primary color
        hideDefaultCursor={true} // Optional: hide system cursor
      /> */}
      {/* Hero Section */}
      <motion.div className="relative  md:pb-14 min-h-screen     flex flex-col items-center justify-center" style={{ opacity }}>
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        </motion.div>

        <div className="container px-4 md:px-6 max-w-6xl">
          
          <motion.div
            ref={bioRef}
            className="flex flex-col md:flex-row items-center gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="relative w-[170px] h-[170px]  md:w-[250px] md:h-[250px] flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100 to-blue-900 opacity-70"
                animate={{
                  scale: [1, 1.03, 1.01],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <div className='bio min-w-[170px] h-[170px] md:w-[250px] md:h-[250px] rounded-[50%] scale-97 overflow-hidden hover:scale-100 an  absolute -top-0'>  
    
     </div>
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-blue-100 flex items-center leading-[1.2] "
                initial={{ opacity: 0, x: -20 }}
                animate={bioInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
              <JelloEffect words={"Sabin Nayaju"} className="md:text-[50px] py-3   font-bold bg-gradient-to-r from-blue-200 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient "/>
                <span className=" text-red-400">
                  🪼</span>
              </motion.h1>

              <motion.p
                className="text-gray-300 max-w-2xl md:text-[18px] font-[600] tracking-wide "
                initial={{ opacity: 0 }}
                animate={bioInView ? { opacity: 0.8 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I&apos;m an 18-year-old full-stack developer from Nepal. I&apos;m currently learning Django, and have experience  in frontend development with Next.js, React, JavaScript, HTML, and CSS, as well as backend development with Node.js, Express, Prisma, and Mongoose for ORMs.
                
                
              </motion.p>

              <motion.div
                className="flex gap-4 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={bioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.a
                  href="/cvs.pdf"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-blue-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  rel="noreferrer"
                >
                  <Download size={16} />
                  My Resume
                </motion.a>

                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/SabinXtha1"
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    rel="noreferrer"
                  >
                    <Github className="w-5 h-5 text-red-500" />
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/sabin-nayaju-72438a204"
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    rel="noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-blue-500" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div id="skill"
      >
        
      <HeroSkill />
      </div>

      {/* Projects Section */}
      <motion.div
        ref={projectsRef}
        className="py-20 container px-4 md:px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={projectsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2 text-emerald-500 mb-2"
            initial={{ x: -20, opacity: 0 }}
            animate={projectsInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Star className="h-5 w-5" />
            <span className="text-xl font-medium">My Work</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={projectsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Crafting Ideas
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      className="group relative overflow-hidden rounded-2xl bg-black border border-gray-800 h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={projectsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="relative overflow-hidden rounded-xl mb-6 aspect-video group">
          <div
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          <div
            className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 duration-300"
          >
            <div className="flex gap-4">
              {project.technologies.map((tech, i) => (
                <TechIcon key={i} name={tech.name}>
                  {tech.icon}
                </TechIcon>
              ))}
            </div>
          </div>

          <motion.div
            className="relative h-full w-full group-hover:scale-105 transition-transform duration-300"
            transition={{ duration: 0.4 }}
          >
            <Image src={project.src} alt={project.name} fill className="object-cover" />
          </motion.div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-gray-400 flex-grow mb-4">{project.des}</p>

        <motion.a
          href={project.url}
          target="_blank"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium mt-auto"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          rel="noreferrer"
        >
          Visit Project <ExternalLink size={16} />
        </motion.a>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  ))}
</div>


        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/SabinXtha1"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            rel="noreferrer"
          >
            <Github className="w-5 h-5 text-red-500" />
            View All Projects
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Logo Wall */}
      <motion.div
        className="py-2 overflow-hidden border-t border-b border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
      <LogoWall
        
        direction="horizontal"
        pauseOnHover={true}
        size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="20s"
          bgColor="#060606"
          bgAccentColor="#111111"
          />
         
      </motion.div>

      {/* Contact Section */}
      <motion.div
        ref={contactRef}
        className="py-20 container px-4 md:px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={contactInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={contactInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-lg text-emerald-400 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={contactInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CircleDot className="h-5 w-5 animate-pulse" />
            Available for work
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={contactInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Let&apos;s create your next
            <br />
            big idea.
          </motion.h2>
<Link href={'/contact'}>
          <motion.button
            className="px-4 md:px-8 py-3 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={contactInView ? { scale: 1, opacity: 1 } : {}}
            href='/contact'
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
              <span className="flex item-center gap-2">

          <Contact2Icon className="inline-block "/>  Contact Me <MoveRight  className="inline-block mt-[1px] scale-90 hover:text-red-400 hover:scale-100"/>
              </span>
          </motion.button>
            </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
