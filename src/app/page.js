'use client'
import { CodeXml, Hand } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SplashCursor from './effect/splash';
import TextPressure from './effect/text';
import ShinyText from './effect/sinny';
import { usePathname } from 'next/navigation';

const Page = () => {
  const pathname = usePathname()
  return (
    <div className="relative min-h-screen text-white flex flex-col px-6 md:px-16 overflow-hidden"  style={{
      backgroundImage:`radial-gradient(rectangle at 0.5px 0.5px ,rgba(6,128,212,0.2) 1px,transparent 0 ) `,
      backgroundSize: '8px 8px'
      ,backgroundRepeat:'repeat',backgroundColor:'black'
    }}>
      
      {/* Background Effect */}
      <SplashCursor className="-z-0 absolute inset-0" />

      {/* Header */}
      <header className="mt-10 flex justify-between items-center w-full">
        
        {/* Name & Hand Icon */}
        <h1 className="flex items-center gap-2 text-xl font-bold tracking-widest text-gray-300">
          <Hand className="text-red-500 drop-shadow-lg animate-waving-hand" />
          <div className="flex flex-col -rotate-2">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-red-400 to-yellow-400 text-transparent bg-clip-text">
              <TextPressure
                text="Sabin Nayaju"
                flex
                italic
                stroke
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </span>
            <span className="h-[2px] bg-red-400 w-full rounded-full"></span>
          </div>
        </h1>

        {/* Terminal Icon */}
        <Link href="/Terminal">
          <CodeXml className="w-12 h-12 text-red-500 drop-shadow-xl scale-90 hover:scale-110 transition-all duration-200" />
        </Link>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link href="https://www.linkedin.com/in/sabin-nayaju-72438a204/">
            <FaLinkedin className="w-10 h-10 text-blue-500 drop-shadow-md transition-all duration-200 hover:scale-110 hover:text-blue-400" />
          </Link>
          <Link href="https://github.com/SabinXtha1">
            <FaGithub className="w-10 h-10 text-gray-200 drop-shadow-md transition-all duration-200 hover:scale-110 hover:text-gray-400" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mt-20 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-[70px] font-extrabold leading-tight">
          <span className="text-gray-300">Crafting </span>
          <span className="text-transparent bg-gradient-to-r from-green-300 via-cyan-400 to-blue-400 bg-clip-text">
            purpose-driven <br /> experiences
          </span>
          <span className="text-gray-300"> that inspire & engage.</span>
        </h2>

        <div className="flex flex-col items-center mt-10 gap-6">
          <ShinyText
            text="I specialize in full-stack web development using Next.js, Node.js, MongoDB, and Prisma."
            speed={3}
            className="text-center text-lg md:text-xl font-bold tracking-wide"
          />

          <Link href="/profile">
            <button className="bg-white text-black px-6 py-3 rounded-xl text-lg font-semibold shadow-md transition-all duration-300 hover:bg-gray-300 hover:scale-105">
              Know Me Better
            </button>
          </Link>
        </div>
       
      </section>
    </div>
  );
};

export default Page;
