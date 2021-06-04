import React, { useState, useRef } from "react"

const formatTime = (time) => {
  return time.toString().padStart(2, "0")
}

function Pomodoro() {
  const [title, setTitle] = useState("Ready, Let go!!")
  const [timeLeft, setTimeLeft] = useState(25)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  const startTimer = () => {
    if (intervalRef.current !== null) return
    setTitle(`You're doing great!`)
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1
        //reset the timer
        resetTimer()
      })
    }, 1000)
  }

  const stopTimer = () => {
    if (intervalRef.current === null) return
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setTitle(`Keep it up!`)
    setIsRunning(false)
  }

  const resetTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setTitle(`Well done! Another round?`)
    setTimeLeft(25 * 60)
    setIsRunning(false)
  }

  const minutes = formatTime(Math.floor(timeLeft / 60))
  const seconds = formatTime(timeLeft - minutes * 60)

  return (
    <div className='w-3/12 flex flex-col justify-center items-center text-red-200 md:space-x-2 bg-red-400 h-screen'>
      <h2 className='text-5xl self-auto mt-12'>{title}</h2>
      <div className='my-8'>
        <span className='font-sans text-6xl pt-6 mx-2 font-thin'>
          {minutes}
        </span>
        <span className='text-6xl pt-6 mx-2 font-thin'>:</span>
        <span className='text-6xl pt-6 mx-2 font-thin'>{seconds}</span>
      </div>
      <div className='mb-12 '>
        {!isRunning && (
          <button
            onClick={startTimer}
            className='btn btn-red btn-red:hover cursor-pointer outline-none border-none'
          >
            Start
          </button>
        )}
        {isRunning && (
          <button
            onClick={stopTimer}
            className='btn btn-red btn-red:hover cursor-pointer outline-none border-none'
          >
            Stop
          </button>
        )}

        <button
          onClick={resetTimer}
          className='btn btn-red btn-red:hover btn-red:focus cursor-pointer outline-none border-none'
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Pomodoro
