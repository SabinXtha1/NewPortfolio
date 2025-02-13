import React from 'react'
import { SiNextdotjs, SiExpress, SiNodedotjs, SiReact, SiTailwindcss, SiGit, SiMongodb, SiBootstrap } from "react-icons/si";

const Skill = () => {
  return (
    <>
      <div className="m-4 flex flex-wrap justify-center rounded  gap-[2px] nh ">
        <div className="skill  gap-3 p-2  h-[150px] bg-black flex items-center justify-center flex-col 
                       border border-transparent hover:border-white shadow-lg hover:shadow-2xl 
                       transition-all duration-500 ease-out">
          <SiNextdotjs className="text-[40px] scale-90 hover:scale-110 transition-transform duration-500 ease-out" />
          <span className="text-white">Next.Js</span>
        </div>

        <div className="skill p-2  h-[150px] bg-black flex items-center justify-center flex-col 
                       border border-transparent hover:border-yellow-400 shadow-lg hover:shadow-2xl 
                       transition-all duration-500 ease-out">
          <SiExpress className="text-[40px] scale-90 hover:scale-110 transition-transform duration-500 ease-out hover:text-yellow-400" />
          <span className="text-white">Express JS</span>
        </div>

        <div className="skill p-2  h-[150px] bg-black flex items-center justify-center flex-col 
                       border border-transparent hover:border-green-400 shadow-lg hover:shadow-2xl 
                       transition-all duration-500 ease-out">
          <SiMongodb className="text-[40px] scale-90 hover:scale-110 transition-transform duration-500 ease-out hover:text-green-400" />
          <span className="text-white">MongoDB</span>
        </div>

        <div className="skill p-2  h-[150px] bg-black flex items-center justify-center flex-col 
                       border border-transparent hover:border-blue-400 shadow-lg hover:shadow-2xl 
                       transition-all duration-500 ease-out">
          <SiTailwindcss className="text-[40px] scale-90 hover:scale-110 transition-transform duration-500 ease-out hover:text-blue-500" />
          <span className="text-white">TailwindCss</span>
        </div>

        <div className="skill p-2  h-[150px] bg-black flex items-center justify-center flex-col 
                       border border-transparent hover:border-blue-600 shadow-lg hover:shadow-2xl 
                       transition-all duration-500 ease-out">
          <SiNodedotjs className="text-[40px] scale-90 hover:scale-110 transition-transform duration-500 ease-out hover:text-blue-600" />
          <span className="text-white">Node.js</span>
        </div>

        <div className="skill p-2  h-[150px] bg-black flex items-center justify-center flex-col 
                       border border-transparent hover:border-orange-600 shadow-lg hover:shadow-2xl 
                       transition-all duration-500 ease-out">
          <SiGit className="text-[40px] scale-90 hover:scale-110 transition-transform duration-500 ease-out hover:text-orange-600" />
          <span className="text-white">Git</span>
        </div>

        <div className="skill p-2  h-[150px] bg-black flex items-center justify-center flex-col 
                       border border-transparent hover:border-blue-300 shadow-lg hover:shadow-2xl 
                       transition-all duration-500 ease-out">
          <SiReact className="text-[40px] scale-90 hover:scale-110 transition-transform duration-500 ease-out hover:text-blue-300" />
          <span className="text-white">React</span>
        </div>

        <div className="skill p-2  h-[150px] bg-black flex items-center justify-center flex-col 
                       border border-transparent hover:border-blue-500 shadow-lg hover:shadow-2xl 
                       transition-all duration-500 ease-out">
          <SiBootstrap className="text-[40px] scale-90 hover:scale-110 transition-transform duration-500 ease-out hover:text-blue-500" />
          <span className="text-white">Bootstrap</span>
        </div>
      </div>
    </>
  );
};

export default Skill;
