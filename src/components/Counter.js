import React, { useState, useEffect } from 'react';
import '../styles/counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [, setIsReversed] = useState(false);
  
    useEffect(() => {
      let interval;
  
      if (isRunning) {
        interval = setInterval(() => {
          setIsReversed((prev) => {
            if (prev) {
              setCount((prevCount) => prevCount - 1);
            } else {
              setCount((prevCount) => prevCount + 1);
            }
            return prev;
          });
        }, 1000);
      }
  
      return () => clearInterval(interval);
    }, [isRunning]);
  
    const handleStart = () => {
      setIsRunning(true);
    };
  
    const handleStop = () => {
      setIsRunning(false);
    };
  
    const handleReverse = () => {
      setIsReversed((prev) => !prev);
    };
  
    const handleClear = () => {
      setCount(0);
    };
  
    return (
      <div className="counter-container">
        <h2>Counter: {count}</h2>
        <div>
        <button onClick={handleStart} disabled={isRunning} className='start bttn'>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning} className='stop bttn'>
          Stop
        </button>
        <button onClick={handleReverse} className='reverse bttn'>Reverse</button>
        <button onClick={handleClear} className='clear bttn'>Clear</button>
        </div>  

      </div>
    );
  };
  
  export default Counter;