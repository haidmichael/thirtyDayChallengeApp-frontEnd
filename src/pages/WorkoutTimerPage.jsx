import React, { useState, useEffect } from 'react'
import { Button } from "@/components/Button"
import toast, { Toaster } from 'react-hot-toast'


export const WorkoutTimer = () => {
  const initialTimeInSeconds = 60 * .1 // 5 minutes for example
  const [timeRemaining, setTimeRemaining] = useState(initialTimeInSeconds)
  const [isRunning, setIsRunning] = useState(false)

  const combined = `${isRunning}-${timeRemaining}`

  useEffect(() => {
    let timerInterval

    if (isRunning && timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      clearInterval(timerInterval)
      setIsRunning(false)
      // Optionally trigger a sound or notification when time runs out
    //   alert("Workout completed...!")
      toast('Workout Completed...!')
      console.log('Mike')

    // When the timer hit 0, a text box that says Done! 
    }

    return () => clearInterval(timerInterval) // Cleanup on unmount or re-render
  }, [combined])

  const startTimer = () => {
    setIsRunning(true)
  }

  const pauseTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeRemaining(initialTimeInSeconds)
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className='flex justify-center text-3xl'>Workout Timer</h1>
            <p className='flex justify-center text-9xl'>{formatTime(timeRemaining)}</p>
            <div className='flex justify-between'>
                <Button onClick={startTimer} disabled={isRunning}>Start</Button>
                <Button onClick={pauseTimer} disabled={!isRunning}>Pause</Button>
                <Button onClick={resetTimer}>Reset</Button>
            </div>
            {/* <Toaster
                toastOptions={{
                    className: '',
                    style: {
                    border: '1px solid #5C5CFF',
                    padding: '16px',
                    color: '#5C5CFF',
                    },
                }}
                containerStyle={{
                    position: 'relative',
                }}
            /> */}
      </div>
    </div>
  )
}