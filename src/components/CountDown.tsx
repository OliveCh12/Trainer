import React, { useState, useContext, useEffect } from 'react'

import { GlobalContext } from './context/GlobalContext'




import UIfx from 'uifx'
const tickSound = require('../assets/tick.mp3');
const clickSound = require('../assets/click.mp3');
const toggleSound = require('../assets/toggle.mp3')





interface Props {
  rest: number;
}

const CountDown = (props: Props) => {

  const [context, setContext] = useContext(GlobalContext)
  const [isActive, setIsActive] = useState(false)
  const [seconds, setSeconds] = useState(5)

  const rest = [...context].filter((item: any) => item.isCompleted === false)


  // Audio Tick
  const tick = new UIfx(tickSound, { volume: 0.5 })
  const click = new UIfx(clickSound, { volume: 1 })
  const toggle = new UIfx(toggleSound, { volume: 1 })

  // Trigger Timer
  function handleToggle() {
    setIsActive(!isActive)
  }

  // Trigger Next Exercice
  function handleNext() {
    toggle.play()
    const finished = [...context].filter((item: any) => item.isCompleted === false)
    if (finished.length <= 0) {
      alert('All exercices are finished')
    } else {
      finished[0].isCompleted = true;
      setContext([...context]);
    }
  }

  // Trigger Previous Exercice
  function handlePrev() {
    click.play()

    const finished = [...context].filter((item: any) => item.isCompleted === true)
    if (finished.length <= 0) {
      alert('You reach the top')
    } else {
      finished[finished.length - 1].isCompleted = false;
      setContext([...context]);
    }
  }

  // Trigger Next Set (If all sets are done, NextStep() is triggered)
  function handleNextSet() {
    click.play()

    if ([...context].filter((item: any) => item.isCompleted === false).length >= 0) {
      const sets = [...context].filter((item: any) => item.isCompleted === false)[0].sets
      const finishedSets = [...sets].filter((set: any) => set.isCompleted === false)
      if (finishedSets.length <= 0) {
        handleNext()
      } else {
        finishedSets[0].isCompleted = true
        setContext([...context]);
        setIsActive(true)
      }
    }

  }

  // Trigger handle Next start
  function handleSpaceNext(event: any) {
    if (event.code === "Space") {
      handleToggle()
    }
  }

  // Listening when space bar is pressed.
  useEffect(() => {
    document.addEventListener('keypress', handleSpaceNext, false)
  }, [])


  useEffect(() => {
    let interval: any = null

    if (isActive) {
      interval = setInterval(() => {
        tick.play()
        setSeconds(seconds => seconds - 1)
      }, 1000);
    }

    if (seconds === 0) {
      handleNextSet()
      setIsActive(false)
      setSeconds(rest[0].rest)
      clearInterval(interval)
    }

    return () => clearInterval(interval);
  }, [isActive, seconds])


  return (
    <div className="card">
      <div className="time-control">
        <h2> Time left: 00:{seconds} s</h2>
        {seconds === rest[0].rest ? "Work" : "Rest"}
        <button className="btn btn--light" onClick={handleToggle}>{isActive ? 'Pause' : 'Start'}</button>
        <button className='btn btn--secondary' onClick={handlePrev}>Previous Exercice</button>
        <button className='btn btn--primary' onClick={handleNext}>Skip Exercice</button>
        <button className='btn btn--light' onClick={handleNextSet}>Step done</button>
        <p><small>Press <strong>Space bar</strong> when you're done.</small></p>
      </div>
    </div>
  )

}

export default CountDown
