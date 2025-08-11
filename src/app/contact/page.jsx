'use client';
import { Dot, Loader2, Star } from 'lucide-react';
import React, { useState } from 'react';
import { Mail, User, MessageCircle, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import ShinyText from '../effect/sinny';
import FAQ from '../components/Faq';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';


const page = () => {
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      if (!formData.name || !formData.email || !formData.message) {
        setloading(false);
        return toast.error('Fill all Fields');
      }
      const res = await fetch('api/email', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          msg: formData.message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        setloading(false);
        return toast.error('Message Sent Failed');
      }
      toast.success('Message Sent Successfully');
      setloading(false);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Message Sent Failed');
      setloading(false);
    }
  };

  return (
    <div className="text-white overflow-x-hidden">

      {/* Connect With Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-screen flex items-center justify-center flex-col font-serif gap-10 lg:h-screen md:h-screen lg:mt-10"

      >
        <div className="w-[80%] gap-2 flex flex-col">
          <h1 className="text-green-400 flex items-center gap-2">
            <Star className="text-green-400 " />
            <span className="text-3xl font-bold">Connect With Me</span>
          </h1>
          <h1 className="text-white text-4xl">Let's Start A Project Together</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-[80%] gap-10">
          {/* Form */}
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black p-2 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-serif border border- p-6 rounded-xl ">
              <div className="flex flex-col">
                <span>Full Name</span>
                <input
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black rounded-xl mt-2 -ml-1 border-[0.5px] border-opacity-55 p-2"
                />
              </div>
              <div className="flex flex-col">
                <span>Email</span>
                <input
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black rounded-xl mt-2 -ml-1 border p-2"
                />
              </div>
              <div className="flex flex-col">
                <span>Message</span>
                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black rounded-xl mt-2 -ml-1 border p-2"
                />
              </div>
              <button className="border rounded-xl py-3 flex items-center justify-center">
                {loading ? <Loader2 className="animate-spin" /> : 'Submit'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 rounded-xl p-4" style={{ backgroundColor: 'rgb(17,17,22)' }}>
              <div>
                <Link href={"mailto:raj123nayaju@gmail.com"}>

                <span className="rounded-xl flex relative items-center">
                  <Dot className="text-green-400 w-20 h-20 animate-pulse absolute -left-5 -top-5 opacity-70" />
                  <Dot className="text-green-400 w-10 h-10 animate-pulse" /> Available For Work
                </span>
                </Link>
              </div>
              <div className="sn w-20 h-20 rounded-full m-4"></div>
              <p className="p-4 opacity-70 font-serif font-extralight">
                My inbox is always open, Whether you have a project or just want to say Hi. I would love to hear from
                you. Feel free to contact me and I'll get back to you.
              </p>

              {/* Socials */}
              <div className="flex gap-4 mt-4">
                <Link href="https://github.com/raj123nayaju" target="_blank">
                  <span className="social-icon">
                    <FaGithub />
                  </span>
                </Link>
                <Link href="https://www.linkedin.com/in/raj123nayaju" target="_blank">
                  <span className="social-icon">
                    <FaLinkedin />
                  </span>
                </Link>
                <Link href="mailto:raj123nayaju@gmail.com">
                  <span className="social-icon">
                    <SiGmail />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-screen h-screen flex items-center justify-center"
       
      >
        <div className="w-[80%] flex items-center justify-center flex-col font-serif gap-10 h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex gap-2">
                <Star className="w-4 " />
                <ShinyText
                  text=" FAQS"
                  speed={3}
                  className="text-center text-2xl md:text-3xl font-bold tracking-wide"
                />
              </div>
              <h1 className="p-4 text-4xl font-bold lg:text-[60px]">Have Questions?</h1>
            </motion.div>
            <FAQ />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
