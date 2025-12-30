import React from 'react'

const TimerDisplay = ({hours,minutes,seconds}) => {
  return (
    <div className='p-12 bg-gray-700'>
     <div className='flex flex-col items-center md:flex-row md:items-center justify-center text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] font-mono font-bold text-white'>
      <span>{hours}:</span>
        <span>{minutes}:</span>
        <span>{seconds}</span>
     </div>
    </div>

  )
}

export default TimerDisplay
