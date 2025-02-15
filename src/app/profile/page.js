import React from 'react'
import Personal from '../components/Personal'
import CircularText from '../effect/circular'
import Noise from '../effect/noise'

const page = () => {
  return (
    <div className='text-white w-screen h-screen flex flex-col items-center justify-center'>
        {/* <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
          <div class=" bg-indigo-500 
           rounded-b-full  "></div>
          </div>
          <div>
            TEXT
            </div>
        </div> */}
        <div className='w-[80%]'>
        <Noise
    patternSize={250}
    patternScaleX={1}
    patternScaleY={1}
    patternRefreshInterval={2}
    patternAlpha={15}
  />
        <Personal/>
       
        </div>

    </div>
  )
}

export default page