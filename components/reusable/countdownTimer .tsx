"use client";

import { CountdownTimerProps, TimeLeft } from "@/types/carSectionTypes";
import { useState, useEffect, useCallback } from "react";
import AuctionDataConverter from "./auctionDataConverter";

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = useCallback(() => {
    const parsedTargetDate = AuctionDataConverter(targetDate);
    const difference = +parsedTargetDate - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [hasMounted, setHasMounted] = useState(false);
  const [auctionEnded, setAuctionEnded] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      if (
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        setAuctionEnded(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  if (!hasMounted) {
    // Placeholder content to avoid hydration mismatch
    return <div>Loading...</div>;
  }

  return (
    <div>
      {auctionEnded ? (
        <span>Auction Ended</span>
      ) : (
        <>
          <span>{formatTime(timeLeft.days)}d:</span>
          <span>{formatTime(timeLeft.hours)}h:</span>
          <span>{formatTime(timeLeft.minutes)}m:</span>
          <span>{formatTime(timeLeft.seconds)}s</span>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
