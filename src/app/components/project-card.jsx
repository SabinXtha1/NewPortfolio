"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const TechIcon = ({
  name,
  children,
  color = "text-white",
}) => (
  <motion.div
    className={`flex flex-col items-center gap-1 ${color}`}
    whileHover={{ scale: 1.1, y: -2 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
    <span className="text-xs font-medium">{name}</span>
  </motion.div>
)

export default function ProjectCard({ project, index, isInView }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 h-full backdrop-blur-sm"
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }
          : {}
      }
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{ perspective: 1000 }}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Inner content container */}
      <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl m-[1px] p-6 flex flex-col h-full">
        {/* Project image container */}
        <div className="relative overflow-hidden rounded-xl mb-6 aspect-video group/image">
          {/* Overlay gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Tech stack overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex gap-6">
              {project.technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <TechIcon name={tech.name}>{tech.icon}</TechIcon>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project image */}
          <motion.div
            className="relative h-full w-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={project.src || "/placeholder.svg"}
              alt={project.name}
              fill
              className="object-cover transition-all duration-500 group-hover/image:brightness-75"
            />
          </motion.div>

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              translateX: ["100%", "100%", "-100%", "-100%"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Project content */}
        <div className="flex flex-col flex-grow">
          <motion.h3
            className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300"
            layoutId={`title-${index}`}
          >
            {project.name}
          </motion.h3>

          <motion.p
            className="text-gray-400 flex-grow mb-6 leading-relaxed"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {project.des}
          </motion.p>

          {/* Visit project link */}
          <motion.a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium mt-auto group/link"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span>Visit Project</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform duration-200" />
            </motion.div>
          </motion.a>
        </div>
      </div>

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Corner accent */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
