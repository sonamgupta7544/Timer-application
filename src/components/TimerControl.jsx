import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
const TimerControl = ({setHours,setMinutes,setSeconds,isRunning,timerToggle,resetTimer}) => {
  return (
    <div className='p-12'>
      <div className='flex items-center justify-center text-green-600 space-x-6 mb-6'>
     <button onClick={()=> !isRunning && setHours(h => (h+1)%24)} className='w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center ver:text-white cursor-pointer hover:bg-gray-500 text-xl'>
       <FaPlus />
     </button>
     <button onClick={()=> !isRunning && setMinutes(m => (m+1)%60)} className='w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center ver:text-white cursor-pointer hover:bg-gray-500 text-xl'>
       <FaPlus />
     </button>
     <button onClick={()=> !isRunning && setSeconds(s => (s+1)%60)} className='w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center ver:text-white cursor-pointer hover:bg-gray-500 text-xl'>
       <FaPlus />
     </button>
     
      </div>

      <div className='flex items-center justify-center text-red-600 space-x-6 '>
     <button onClick={()=> !isRunning && setHours(h => (h-1+24)%24)} className='w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center ver:text-white cursor-pointer hover:bg-gray-500 text-xl'>
       <FaMinus />
     </button>
     <button onClick={()=> !isRunning && setMinutes(m => (m-1+60)%60)} className='w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center ver:text-white cursor-pointer hover:bg-gray-500 text-xl'>
       <FaMinus />
     </button>
     <button onClick={()=> !isRunning && setSeconds(s => (s-1+60)%60)} className='w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center ver:text-white cursor-pointer hover:bg-gray-500 text-xl'>
       <FaMinus />
     </button>
     
      </div>

      <div className='flex items-center justify-center space-x-6 mt-6'>
        <button onClick={timerToggle} className='px-6 py-3 rounded-full bg-green-600 text-white font-bold cursor-pointer'>
           {
            isRunning ?
            <span className='flex items-center gap-3'>
                <FaPause />
                Stop
            </span> :
            <span className='flex items-center gap-3'>
                <FaPlay />
                Start
            </span>
           } 
            </button>
        <button onClick={resetTimer} className='px-6 py-3 rounded-full bg-red-600 text-white font-bold cursor-pointer'>
           <span className='flex items-center justify-center gap-3'>
            <FaRedo />
            Reset</span> 
            </button>
      </div>
    </div>
  )
}

export default TimerControl
