'use client'
import React, { useEffect, useState } from 'react'
import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscProject } from "react-icons/vsc";
import Dock from '../effect/doc'
import { Contact, Contact2, HomeIcon, Terminal } from 'lucide-react';
import { redirect, usePathname } from 'next/navigation';
import { FaRegAngry } from 'react-icons/fa';
import { FaRegFaceGrinBeam } from "react-icons/fa6";
const Navbar = () => {

  

  const items = [
    { icon: <VscHome size={18}  className='text-red-300' />, label: 'Home', onClick: () => redirect('/') },
    { icon: <Terminal size={18} className='text-red-300'/>, label: 'Terminal', onClick: () => redirect('/Terminal') },
    { icon: <FaRegAngry  size={18} className='text-red-300'/>, label: 'Profile', onClick: () => redirect('/profile') },
    { icon: <Contact size={18} className='text-red-300'/>, label: 'Contact', onClick: () => redirect('/contact') },
  ];
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center z-50 ">
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
  
}

export default Navbar