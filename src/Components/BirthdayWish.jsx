import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import confetti from "canvas-confetti";

import meetup from "../assets/Images/meetup.PNG";
import hug from "../assets/Images/hug.PNG";
import kiss from "../assets/Images/kiss.jpg";
import birthdayVideo from "../assets/us.mp4";

const slides = [
  { img: meetup, title: "FIRST MEETUP", text: "✨ Pehli Mulakaat ✨" },
  { img: hug, title: "FIRST HUG", text: "🤍 Pehla Hug 🤍" },
  { img: kiss, title: "FIRST KISS", text: "💙 Pehla Kiss 💙" },
];

const BirthdayWish = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Fireworks
  useEffect(() => {
    if (showVideo) return;

    const fire = () => {
      confetti({
        particleCount: 120,
        spread: 100,
        startVelocity: 45,
        origin: { y: 0.7 },
        colors: ["#0ea5e9", "#38bdf8", "#1e3a8a", "#ffffff"],
      });
    };

    fire();
    const interval = setInterval(fire, 1400);
    return () => clearInterval(interval);
  }, [showVideo]);

  // Timings
  useEffect(() => {
    setTimeout(() => setShowTitle(true), 800);
    setTimeout(() => setShowSlideshow(true), 3500);
  }, []);

  // Slideshow
  useEffect(() => {
    if (!showSlideshow) return;

    const slider = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === slides.length - 1) {
          clearInterval(slider);
          setShowSlideshow(false);
          setTimeout(() => setShowVideo(true), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 3200);

    return () => clearInterval(slider);
  }, [showSlideshow]);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center
      bg-gradient-to-br from-black via-blue-950 to-black
      text-white overflow-hidden"
    >
      {/* Confetti */}
      {!showVideo && <Confetti gravity={0.25} numberOfPieces={160} />}

      {/* Title */}
      {showTitle && !showVideo && (
        <h1 className="text-center text-5xl md:text-7xl font-extrabold mb-12 animate-scaleIn">
          🎉 HAPPY BIRTHDAY <br />
          <span className="text-cyan-400 drop-shadow-lg">
            MERI JAAN 💙
          </span>
        </h1>
      )}

      {/* Slideshow */}
      {showSlideshow && (
        <div
          className="relative w-[280px] md:w-[360px] h-[420px]
          animate-fadeUp rounded-3xl overflow-hidden
          shadow-[0_0_40px_rgba(56,189,248,0.4)]"
        >
          {/* Blurred background */}
          <img
            src={slides[currentSlide].img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover
            blur-xl scale-110 opacity-50"
          />

          {/* Main image */}
          <img
            src={slides[currentSlide].img}
            alt="memory"
            className="relative z-10 w-full h-full object-contain
            rounded-3xl border-4 border-cyan-400 bg-black/30"
          />

          {/* Top label */}
          <div
            className="absolute top-4 left-1/2 -translate-x-1/2 z-20
            bg-black/70 px-6 py-2 rounded-full text-sm md:text-base
            font-bold tracking-widest text-cyan-300 backdrop-blur"
          >
            {slides[currentSlide].title}
          </div>

          {/* Bottom text */}
          <p
            className="absolute bottom-[-3.2rem] left-0 right-0 text-xl
            text-center font-semibold text-gray-200"
          >
            {slides[currentSlide].text}
          </p>
        </div>
      )}

      {/* Video */}
      {showVideo && (
        <div
          className="animate-fadeUp rounded-3xl overflow-hidden
          shadow-[0_0_40px_rgba(56,189,248,0.5)]
          ] "
        >
          <video
            src={birthdayVideo}
            autoPlay
            muted
            controls
            className="w-full h-full object-cover
            rounded-3xl border-4 border-cyan-400"
          />
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.6); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn {
          animation: scaleIn 1.2s ease-out forwards;
        }

        @keyframes fadeUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeUp {
          animation: fadeUp 1.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BirthdayWish;
