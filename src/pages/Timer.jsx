import React from 'react'
import TimerDisplay from '../components/TimerDisplay.jsx'
import TimerControl from '../components/TimerControl.jsx'
import TimerLable from '../components/TimerLable.jsx'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
const Timer = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    const intervalRef = useRef(null);

    const timerToggle = () => {
        if (hours === 0 && minutes === 0 && seconds === 0) return;
        if (!isRunning) {
            setIsRunning(true)
        }
        else {
            setIsRunning(false)
        }
    }

    const resetTimer = () => {
         clearInterval(intervalRef.current);
        
         setHours(0);
         setMinutes(0);
         setSeconds(0);
    }

    const updateTime = () => {
        setSeconds(prevSeconds => {
            if (prevSeconds > 0) {
                return prevSeconds - 1;
            }
            setMinutes(prevMinutes => {
                if (prevMinutes > 0) {
                    setSeconds(59);
                    return prevMinutes - 1;
                }
                setHours(prevHours => {
                    if (prevHours > 0) {
                        setMinutes(59);
                        setSeconds(59);
                        return prevHours - 1;
                    }
                    // clearInterval(intervalRef.current);
                    // isRunning(false);
                        setIsRunning(false);
                    return 0;
                
                })
                return 0;
            })
            return 0;
        })
    }

    useEffect(() => {
        if(isRunning){
            intervalRef.current = setInterval(updateTime, 1000);
         }
         else{
          clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
        },[isRunning])
    
  return (
            <div className='flex items-center justify-center bg-gray-900 min-h-screen'>
                <div className='w-full max-w-2xl bg-gray-800 rounded-3xl shadow-2xl overflow-hidden'>
                    <TimerDisplay
                        hours={hours}
                        minutes={minutes}
                        seconds={seconds}
                        isRunning={isRunning} />
                    <TimerControl
                        setHours={setHours}
                        setMinutes={setMinutes}
                        setSeconds={setSeconds}
                        isRunning={isRunning}
                        timerToggle={timerToggle}
                        resetTimer={resetTimer} />
                    <TimerLable />
                </div>
            </div>
        )
    }

    export default Timer
