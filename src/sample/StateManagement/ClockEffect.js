import React, { useState, useEffect } from 'react';

function ClockEffect() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        clearInterval(intervalId); // Pause interval when page is not visible
      } else {
        setTime(new Date()); // Update time immediately upon page becoming visible
         intervalId = setInterval(() => {
          setTime(new Date());
        }, 1000); // Resume interval
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Function to format the time as HH:MM:SS
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>Current Time with Seconds:</h1>
      <h2>{formatTime(time)}</h2>
    </div>
  );
}

export default ClockEffect;
