'use client'
import { Dot, Loader2, Star } from 'lucide-react'
import React from 'react'

import { Mail, User, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import ShinyText from '../effect/sinny';
import FAQ from '../components/Faq';
import toast from 'react-hot-toast';

const page = () => {
    const [loading, setloading] = useState(false)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
     try{
        setloading(true)
        if(!formData.name||!formData.email||!formData.message){
            setloading(false)
            return  toast.error('Fill all Fields')
        }
        const res = await fetch('api/email',{
            method:'POST',
            cache:'no-cache',
            body:JSON.stringify({
                name:formData.name,
                email:formData.email,
                msg:formData.message
            }),
            headers:{
                "Content-Type":'application/json'
            }
        })
        if(!res.ok){
          setloading(false)
          return  toast.error('Message Sent Failed')
        }
        toast.success('Message Send Succesfully')
        setloading(false)
        setFormData({ name: '', email: '', message: '' })
     }catch{
        toast.error('Message Sent Failed')
        setloading(false)
           
     }
  };

  return (
    <div className='text-white overflow-x-hidden '>
                <div className='w-screen   flex items-center justify-center flex-col font-serif gap-10 lg:h-screen md:h-screen '
                style={{
                    backgroundColor: "black",
                    backgroundImage: `radial-gradient(circle, rgba(6,128,212,0.4) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                    backgroundRepeat: "repeat",
                }}>
           <div className='w-[80%] gap-2 flex flex-col mt-[100px] lg:mt-0'>
         <h1 className='text-green-400 flex items-center gap-2'>
            <Star className='text-green-400 '/>
            <span className='text-3xl font-bold'>
                
                Connect With Me
                </span>
         </h1>
         <h1 className='text-white text-4xl '>
            Let's Start A Project Together
         </h1>

           </div>
           <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-[80%] gap-10'>
               <div className='bg-black p-2  rounded-xl '>
               <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
                <div className='flex flex-col'>
                    <span>
                        Full Name
                    </span>
                    <input name='name' placeholder='Enter Your Name'  value={formData.name} onChange={handleChange} className='bg-black rounded border-[0.5px] border-opacity-55 p-2' />

                </div>
                <div className='flex flex-col'>
                    <span>
                       Email
                    </span>
                    <input name='email' placeholder='Enter Your Email'  value={formData.email} onChange={handleChange} className='bg-black rounded border p-2' />

                </div>
                <div className='flex flex-col'>
                    <span>
                      Message
                    </span>
                    <textarea name='message' placeholder='Enter Your Message'  value={formData.message} onChange={handleChange} className='bg-black rounded border p-2' />

                </div>
                <button className='border rounded-xl py-3 flex items-center justify-center'>
                   {
                    loading? <Loader2 className='animate-spin'/>:'Submit'
                   }
                </button>
        </form>
       
               </div>
               <div>
                   <div className='bg-gray-900 rounded-xl p-4' style={{
                    backgroundColor:'rgb(17,17,22)'
                   }} >
                      <div>
                       <span className=' rounded-xl flex '>
                         <Dot className='text-green-400 '/> Available For Work
                       </span>
                      </div>
                      <div>
                          <div className='sn w-20  h-20 rounded-full m-4 '>
                      
                          </div>
                          <p className='p-4 opacity-70 font-serif font-extralight '>

                          My inbox is always open, Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I'll get back to you.
                          </p>
                      </div>
                      <div className="flex gap-4 mt-4">
      {/* GitHub */}
      <Link href="https://github.com/raj123nayaju" target="_blank">
        <span className="social-icon">
          <FaGithub />
        </span>
      </Link>

      {/* LinkedIn */}
      <Link href="https://www.linkedin.com/in/raj123nayaju" target="_blank">
        <span className="social-icon">
          <FaLinkedin />
        </span>
      </Link>

      {/* Gmail */}
      <Link href="mailto:raj123nayaju@gmail.com">
        <span className="social-icon">
          <SiGmail />
        </span>
      </Link>
    </div>
                   </div>
               </div>
           </div>
           
        </div>
<div className='w-screen h-screen flex items-center justify-center'  style={{
            backgroundColor: "black",
            backgroundImage: `radial-gradient(circle, rgba(6,128,212,0.2) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
            backgroundRepeat: "repeat",
          }}>
<div className='w-[80%]   flex items-center justify-center flex-col font-serif gap-10 h-screen '
      >
            <div className='grid grid-cols-1 lg:grid-cols-2'>

    <div className='flex flex-col '>
       
        <div className='flex gap-2  '>
  <Star className='w-4 '/>
    <ShinyText
                text=" FAQS"
                speed={3}
                className="text-center  text-2xl md:text-3xl font-bold tracking-wide"
                />
                </div>
                <h1 className='p-4 text-4xl font-bold lg:text-[60px]'>
                    Have Questions?
                </h1>
    </div>
            <div>

     <FAQ/>
            </div>
            </div>
  </div>
</div>
    </div>
  )
}

export default page