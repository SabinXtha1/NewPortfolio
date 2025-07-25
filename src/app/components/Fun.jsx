'use client'
import React, { useEffect, useRef, useState } from 'react';
import Personal from './Personal';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import { useRouter } from 'next/navigation';


const Fun = () => {
  const targetRef = useRef(null);
  const [filesName, setFilesName] = useState(["BIO", "CONTACT", "PROJECT", "SKILL"]);
  const [directories, setDirectories] = useState([]);
  const [currentDir, setCurrentDir] = useState('portfolio');

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
      const commandInput = inputData;
      const commandParts = commandInput.trim().split(' ');
      const command = commandParts[0].toUpperCase();
      const argument = commandParts.length > 1 ? commandParts.slice(1).join(' ') : null;

      setInputData(''); 

      let output = null;
     
      if (command === 'CD') {
        const dir = argument ? argument.toUpperCase() : '';
        if (dir === '..') {
            setCurrentDir('portfolio');
        } else if (directories.includes(dir)) {
            setCurrentDir(dir);
        } else if (filesName.includes(dir)) {
            output = `cd: not a directory: ${dir}`;
        } else {
            output = `cd: no such file or directory: ${dir}`;
        }
      } else if (command === 'SKILL') {
        output = <Skill />;
      } else if (command === 'CONTACT') {
        output = <Contact />;
      } else if (command === 'PROJECT') {
        output = <Project />;
      } else if (command === 'PERSONAL' || command ==='BIO') {
        output = <Personal />;
      } else if(command ==='EXIT'){
           router.push('/')
      } else if(command ==='MKDIR'){
          const newFile = argument ? argument.toUpperCase() : null;
          if (currentDir !== 'portfolio') {
              output = 'mkdir: cannot create directory here.';
          } else if (newFile) {
            if ([...filesName, ...directories].includes(newFile)) {
                output = `mkdir: cannot create directory ‘${newFile}’: File or directory exists`;
            } else {
                setDirectories(prev => [...prev, newFile]);
                output = `Directory "${newFile}" created.`;
            }
          } else {
              output = 'mkdir: missing operand';
          }
      } 
      else if (command === 'LS') {
        if (currentDir === 'portfolio') {
            output = (
              <div className='font-mono font-bold w-full'>
                <ul className='flex flex-wrap justify-start gap-x-4' >
                  {[...filesName, ...directories].map((file) => (
                    <li key={file}><span className={directories.includes(file) ? 'text-blue-500' : 'text-yellow-500'}>{file}</span></li>
                  ))}
                </ul>
              </div>
            );
        } else {
            output = ''; // empty dir
        }
      }
      else if (command === 'HELP') {
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
              <li><span className='text-yellow-500'>LS</span> - List directories</li>
              <li><span className='text-yellow-500'>MKDIR [name]</span> - Create directory</li>
              <li><span className='text-yellow-500'>CD [name]</span> - Change directory</li>
            </ul>
          </div>
        );
      } else if (command === 'CLEAR') {
        setOutputHistory([]); 
        return;
      } else {
        output = `Command not recognized: ${command}. Type 'help' for available commands.`;
      }

      setOutputHistory(prevOutput => [
        ...prevOutput,
        { command: commandInput, output } 
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
                    📂 {currentDir}
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
              📂 {currentDir}
            </span>
          </div> 
        </div>

        <div className='m-2 mx-6'>
       
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
