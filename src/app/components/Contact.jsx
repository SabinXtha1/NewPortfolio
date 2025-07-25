
import React from 'react';
import { FaGithub,FaLinkedin ,FaFacebook,FaInstagram} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="font-mono text-green-300 p-4 nh">
      <h2 className="text-yellow-400 mb-2 cursor-default">Contact Information</h2>
      <div className="space-y-3">
        <div className="flex">
          <span className="text-cyan-300 cursor-default">📧 Email:</span>
          <a href='mailto:raj123nayaju@gmail.com'>

          <span className="ml-2">raj123nayaju@gmail.com</span>
          </a>
        </div>
        <div className="flex">
          <span className="text-cyan-300 cursor-default">📱 Phone:</span>
          <a href='tel:+9779811529745'>

          <span className="ml-2">+977-9811529745</span>
          </a>
        </div>
        <div className="flex items-center gap-1">
          <span className='annn text-blue-500'><FaLinkedin/></span>
          <span className="text-cyan-300 cursor-default"> LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/sabin-nayaju-72438a204/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-400 underline"
          >
            @sabin-nayaju
          </a>
        </div>
        <div className="flex items-center gap-1">
        <span className='ann text-red-500'> <FaGithub/> </span> 
          <span className="text-cyan-300 cursor-default"> GitHub:</span>
          <a
            href="https://github.com/SabinXtha1"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-400 underline"
          >
            @SabinXtha1
          </a>
        </div>
      </div>

    </div>
  );
};

export default Contact;
