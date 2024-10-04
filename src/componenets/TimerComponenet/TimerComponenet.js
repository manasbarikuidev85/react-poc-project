import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [start, setStart] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setStart((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && start !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, isRunning]);

  const handleClick = () => {
    setIsRunning(true);
  };
  const handleReset = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setStart(0);
  };

  return (
    <>
      <h5>Time Componenet</h5>
      <div>{start}</div>
      <button onClick={handleClick}>Start</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
export default TimerComponent;
