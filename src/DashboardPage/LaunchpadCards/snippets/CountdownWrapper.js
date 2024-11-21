import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const CountdownWrapper = ({ endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = calculateTimeLeft(endDate);
      setTimeRemaining(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  const calculateTimeLeft = (endTime) => {
    const difference = endTime - new Date().getTime() / 1000;

    if (difference > 0) {
      const days = Math.floor(difference / 86400);
      const hours = Math.floor((difference % 86400) / 3600);
      const minutes = Math.floor((difference % 3600) / 60);
      const seconds = Math.floor(difference % 60);

      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
      return (
        <span className="countdown">
          <span className="subtitle">{days < 10 ? `0${days}` : days}d :</span>
          <span className="subtitle">{hours < 10 ? `0${hours}` : hours}h :</span>
          <span className="subtitle">{minutes < 10 ? `0${minutes}` : minutes}m :</span>
          <span className="subtitle">{seconds < 10 ? `0${seconds}` : seconds}s</span>
        </span>
      );
  };

  return <Countdown date={new Date(endDate * 1000)} renderer={renderer} />;
};

export default CountdownWrapper;
