'use client'
import { CodeXml, Hand } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SplashCursor from './effect/splash';
import ShinyText from './effect/sinny';
import { redirect, usePathname } from 'next/navigation';
import LogoWall from './effect/logo';
import reactbits from './Terminal/io.png';
import Profile from './profile/page'
const Page = () => {
  const pathname = usePathname();

  const logoImgs = [
    { imgUrl: reactbits, altText: "Developer" },
    { imgUrl: reactbits, altText: "Designing" },
    { imgUrl: reactbits, altText: "Graphics" }
  ];

  return (
    <div
      className="relative min-h-screen text-white flex flex-col"
      style={{
        backgroundColor: "black",
        backgroundImage: `radial-gradient(circle, rgba(6,128,212,0.4) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Background Effects */}
      <SplashCursor className="-z-0 absolute inset-0" />

      {/* Main Content Wrapper */}
      <div className="px-6 md:px-16 overflow-hidden">
        {/* Header */}
        <header className="mt-10 flex justify-between items-center w-full">
          {/* Name & Hand Icon */}
          <h1 className="flex items-center gap-2 text-xl font-bold tracking-widest text-gray-300" onClick={()=>{redirect('/')}} >
            <Hand className="text-red-500 drop-shadow-lg "style={{ animation: "wave 1.5s ease-in-out infinite" }} />
            <div className="flex flex-col -rotate-2">
              <span className="text-2xl font-extrabold text-white text-transparent bg-clip-text font-edu ">
                Sabin Nayaju
              </span>
              <span className="h-[2px] bg-red-500 w-[100%] lg:w-full md:w-full rounded-full mt-2"></span>
            </div>
          </h1>

          {/* Terminal Icon */}
          <Link href="/Terminal" className=' lg:block md:block' >
            <CodeXml className="w-12 h-12 text-red-500 drop-shadow-xl scale-90 hover:scale-110 transition-all duration-200" />
          </Link>

          {/* Social Icons */}
          <div className="hidden lg:flex md:flex   gap-4 ">
            <Link href="https://www.linkedin.com/in/sabin-nayaju-72438a204/">
              <FaLinkedin className="w-10 h-10 text-blue-500 drop-shadow-md transition-all duration-200 hover:scale-110 hover:text-blue-400" />
            </Link>
            <Link href="https://github.com/SabinXtha1">
              <FaGithub className="w-10 h-10 text-gray-200 drop-shadow-md transition-all duration-200 hover:scale-110 hover:text-gray-400" />
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <div className="h-[700px] flex justify-center items-center md:h-[600px] lg:h-[500px]">
          <section className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-[70px] font-extrabold leading-tight">
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
      </div>

      {/* Logo Wall */}
      <div className="">
        <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="10s"
          bgColor="#060606"
          bgAccentColor="#111111"
        />
      </div>
     
    </div>
  );
};

export default Page;
