'use client'
import React, { useEffect, useRef, useState } from 'react';
import Personal from './Personal';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import { useRouter } from 'next/navigation';


const Fun = ({setyo}) => {
  const targetRef = useRef(null);
  

  useEffect(() => {
    // Scroll to the element when the component mounts
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, );
  const [inputData, setInputData] = useState('');
  const [outputHistory, setOutputHistory] = useState([]);
 const router = useRouter()
  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      let command = inputData.toUpperCase();
      setInputData(''); 

      let output = null;
     
      if(command.slice(0,2)==='CD'){
       command = command.slice(3) 
        console.log(command);
        
      }
             if (command.slice(0,5) === 'SKILL') {
        output = <Skill />;
      } else if (command.slice(0,7) === 'CONTACT') {
        output = <Contact />;
      } else if (command.slice(0,7) === 'PROJECT') {
        output = <Project />;
      } else if (command.slice(0,8) === 'PERSONAL'||command==='BIO') {
        output = <Personal />;
      } else if(command.slice(0,4)==='EXIT'){
        setyo(false)
           router.push('/')
      } else if (command === 'LS') {
        output = (
          <div className='font-mono font-bold w-full'>
            
            <ul className='flex justify-between' >
              <li><span className='text-yellow-500'>PROJECT</span></li>
              <li><span className='text-yellow-500'>SKILL </span></li>
              <li><span className='text-yellow-500'>CONTACT</span></li>
              <li><span className='text-yellow-500'>PERSONAL/BIO</span></li>
              <li><span className='text-yellow-500'>CLEAR</span></li>
              <li><span className='text-yellow-500'>EXIT</span></li>
            </ul>
          </div>
        );
      }
      else if (command.slice(0,4) === 'HELP') {
        output = (
          <div className='font-mono font-bold'>
            <h3 className='text-red-500'>Available Commands:</h3>
            <ul>
              <li><span className='text-yellow-500'>PROJECT</span> - View my projects</li>
              <li><span className='text-yellow-500'>SKILL </span>- See my skills</li>
              <li><span className='text-yellow-500'>CONTACT</span> - Get in touch</li>
              <li><span className='text-yellow-500'>PERSONAL/BIO</span> - Personal information</li>
              <li><span className='text-yellow-500'>CLEAR</span> - Clear the console</li>
              <li><span className='text-yellow-500'>EXIT</span> - To Exit Terminal</li>
            </ul>
          </div>
        );
      } else if (command === 'CLEAR') {
        setOutputHistory([]); 
        return;
      } else {
        output = 'Command not recognized. Type `help` for available commands.';
      }

      setOutputHistory(prevOutput => [
        ...prevOutput,
        { command, output } 
      ]);
    }
  };

  return (
    <>
      <div>
        <div className='m-4'>
          {outputHistory.map((item, index) => (
            <div key={index}>
              <div className='m-2 mx-3 flex col'>
                <div className='h-[40px] w-[100%] relative'>
                  <span className='bg-violet-600 p-2 rounded-2xl absolute left-[0px] z-40 px-3'>
                    🍁 SABIN
                  </span>
                  <span className='bg-blue-500 p-2 px-3 rounded-2xl absolute left-[90px] z-30'>
                    📂 portfolio
                  </span>
                  <span className='bg-red-500 p-2 px-3 rounded-2xl absolute left-[190px] z-3'>
                    🧩 {item.command}
                  </span>
                </div>
              </div>
              <div className='mx-3 ' >{'>> ' + item.command}</div>
              <div className='mx-3' ref={targetRef}>{item.output}</div> {/* Render the output of the command */}
            </div>
          ))}
        </div>
        <div className='m-2 mx-3 flex col '>
          <div className='h-[40px] w-[100%] relative'>
            <span className='bg-violet-600  rounded-2xl absolute left-[20px] z-40 px-3 p-2'>
              🍁 SABIN
            </span>
            <span className='bg-blue-500 p-2 px-3 rounded-2xl absolute left-[100px] z-30'>
              📂 portfolio
            </span>
          </div> 
        </div>

        <div className='m-2 mx-6'>
          {'$'}
          <input
            type='text'
            value={inputData}
            placeholder='try `help` for viewing all commands'
            className='bg-transparent p-3 border-none focus:border-transparent outline-none w-[50%]'
            onChange={(e) => setInputData(e.target.value)}
            onKeyDown={handleEnter}
          />
      
        </div>
      </div>
    </>
  );
};

export default Fun;
