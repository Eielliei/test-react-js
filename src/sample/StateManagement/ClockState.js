import React, { useState } from 'react';

function ClockState() {
  const [time, setTime] = useState(new Date());

  // Update the time every second
  setInterval(() => {
    setTime(new Date());
  }, 1000);

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

export default ClockState;
