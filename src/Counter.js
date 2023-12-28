import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isReversed, setIsReversed] = useState(false);
  
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
        <button onClick={handleStart} disabled={isRunning} className='start'>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning} className='stop'>
          Stop
        </button>
        <button onClick={handleReverse} className='reverse'>Reverse</button>
        <button onClick={handleClear} className='clear'>Clear</button>
        </div>  

        <Link to="/product" className="link-to-products">
          Go to Products
        </Link>

      </div>
    );
  };
  
  export default Counter;