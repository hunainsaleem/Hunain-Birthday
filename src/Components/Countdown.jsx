import React, { useEffect, useState } from "react";
import FunnyBirthdayChat from "./FunnyBirthdayChat";

const Countdown = () => {
  const targetDate = new Date("2025-12-17T00:00:00").getTime();
  // const targetDate = new Date("2025-12-16T19:26:00").getTime();


  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
const [isBirthday, setIsBirthday] = useState(false);

  const [isFinalSeconds, setIsFinalSeconds] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

  if (diff <= 0) {
  clearInterval(interval);
  setIsBirthday(true); // show the birthday screen
  setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  return;
}



      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      // 🎯 Detect when 10 seconds or less remain
      if (diff <= 10000) {
        setIsFinalSeconds(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
if (isBirthday) {
  return <FunnyBirthdayChat />;
}


  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white font-poppins p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 animate-pulse">
        Countdown to Hunain’s Birthday 
      </h1>

      {/* Countdown Cards */}
      <div
        className={`flex flex-wrap gap-6 justify-center transition-all duration-700 ${
          isFinalSeconds ? "animate-pulse scale-105" : ""
        }`}
      >
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((block, index) => (
          <div
            key={index}
            className={`backdrop-blur-lg rounded-2xl px-8 py-6 text-center border transition-all duration-500 ${
              isFinalSeconds
                ? "bg-cyan-500/20 border-cyan-400 shadow-[0_0_25px_rgba(0,200,255,0.7)]"
                : "bg-black/40 border-cyan-500/30 shadow-[0_0_15px_rgba(0,200,255,0.4)]"
            } hover:scale-105`}
          >
            <div
              className={`text-5xl md:text-6xl font-bold drop-shadow-[0_0_15px_rgba(0,200,255,0.6)] ${
                isFinalSeconds ? "text-cyan-300 animate-bounce" : "text-cyan-400"
              }`}
            >
              {String(block.value).padStart(2, "0")}
            </div>
            <div className="uppercase text-sm mt-2 tracking-widest text-gray-300">
              {block.label}
            </div>
          </div>
        ))}
      </div>

      {/* Message */}
      <div className="mt-10 text-lg">
        {isFinalSeconds ? (
          <p className="text-cyan-300 animate-pulse">
             Final countdown! Get ready to celebrate! 
          </p>
        ) : (
          <p className="text-gray-400 animate-pulse">
            Waiting for the big day... 
          </p>
        )}
      </div>
    </div>

  );
};

export default Countdown;
