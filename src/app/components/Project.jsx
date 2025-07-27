"use client"

import { SiNextdotjs, SiPrisma, SiSupabase,SiMongodb ,SiMongoose} from "react-icons/si"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Github } from "lucide-react"
import ProjectCard from "./project-card"


export default function Projects() {
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
     }
   ];
   
  const projectsRef = useRef(null)
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.1 })

  if (!projects || projects.length === 0) {
    return (
      <motion.section className="py-20 container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center text-gray-400">
          <p>No projects to display</p>
        </div>
      </motion.section>
    )
  }

  return (
    <motion.section
      ref={projectsRef}
      className="py-20 container px-4 md:px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={projectsInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7 }}
    >
      {/* Section Header */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex items-center justify-center gap-2 text-emerald-400 mb-4"
          initial={{ x: -20, opacity: 0 }}
          animate={projectsInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Star className="h-5 w-5" />
          </motion.div>
          <span className="text-xl font-medium">My Work</span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={projectsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Crafting Ideas
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"
          initial={{ scaleX: 0 }}
          animate={projectsInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} isInView={projectsInView} />
        ))}
      </div>

      {/* View All Projects Button */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.a
          href="https://github.com/SabinXtha1"
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-600 rounded-full text-lg font-medium overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Button background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="relative z-10"
          >
            <Github className="w-5 h-5 text-red-500" />
          </motion.div>

          <span className="relative z-10 group-hover:text-blue-300 transition-colors duration-300">
            View All Projects
          </span>

          {/* Sparkle effects */}
          <motion.div
            className="absolute top-1 right-4 w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-2 left-6 w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
            }}
          />
        </motion.a>
      </motion.div>
    </motion.section>
  )
}
