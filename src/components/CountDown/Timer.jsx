import React, { useState, useEffect } from 'react';

const CountDownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function getTimeLeft() {
    const targetDate = new Date("2023-02-25T00:00:00");
    const currentDate = new Date();
    const timeLeft = targetDate - currentDate;
    if (timeLeft < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const seconds = Math.floor(timeLeft / 1000) % 60;
    const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
    const hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    return { days, hours, minutes, seconds };
  }

  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div>
      {days} days {hours} hours {minutes} minutes {seconds} seconds left
    </div>
  );
};

export default CountDownTimer;
