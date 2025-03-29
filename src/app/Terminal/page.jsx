'use client'
import React, { useEffect } from 'react';
import './copy.css'
import Link from 'next/link';

import { CiWarning } from "react-icons/ci";
import Fun from '../components/Fun';

const Page = () => {
  useEffect(() => {
    const element = document.querySelector('.div')
    
   
    element?.requestFullscreen().catch((er)=>{
      console.log('err');
      
    }
  )
      ;
    
    }, [])

 
    
  

  return (
    <div>
    <div className="div w-screen h-screen flex items-center justify-center text-white ">
      <div className='absolute z-50 top-1 m-2 cursor-default bg-violet-600 p-2 rounded md:hidden lg:hidden flex justify-center items-center'>
        <CiWarning className='w-[30px] h-[30px] mr-1'/>

      Hey, Mobile Users!
      For better experience please use desktop OR use  
      <Link href='/' className='font-bold cursor-pointer'>
              Normal mode!
      </Link>
      </div>
      
      <div className="w-full h-full m-2 rounded backdrop-blur-[2px] b flex flex-col items-center justify-center mt-10 ">
          <div className='bg-gray-900 p-1 max-h-[35px] min-h-[35px] flex items-center justify-between rounded px-5 w-[90%] lg:w-[70%] md:w-[90%] '>
            <span className='flex gap-2 '>
                <p className='w-[10px] h-[10px] rounded-[50%] bg-red-500'></p>
                <p className='w-[10px] h-[10px] rounded-[50%] bg-yellow-500'></p>
                <p className='w-[10px] h-[10px] rounded-[50%] bg-green-500'></p>
            </span>
            <span>
                 SABIN NAYAJU /Portfolio
              </span>
              <Link href='/'>
              <span className='flex items-center justify-center cursor-pointer'>
                🦈
              </span>
              </Link>
          </div>
        <div className="w-[90%] h-[70%] m-2 rounded backdrop-blur-md  border-black border-2 lg:w-[70%] md:w-[90%] bg-black bg-opacity-50 max-h-[600px] mt-0 overflow-auto  boxChild ">
          
          
          <div className='m-2 mx-3  flex col'>
            <div className='h-[40px]  w-screen'>


              <span className='bg-violet-600   p-2 rounded-2xl absolute left-[20px] z-40 px-3'>
              🍁  SABIN
              </span>
              <span className='bg-blue-500 p-2 px-3 rounded-2xl  absolute  left-[100px] z-30  '>
                📂 portfolio
              </span>
              <span className='bg-red-400 p-2 px-3 rounded-2xl absolute  left-[193px]'>
                🧩 Greet
              </span>
            </div>

          </div>
          <div className='m-5'>
            <h1 className='text-5xl px-2 font-bold'>
              Hey There!
            </h1>
          </div>
             <Fun/>

           

        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Page;

