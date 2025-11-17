import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import fatima from "../assets/Images/Fatima.jpg";
import hunain from "../assets/Images/hunain.jpg";

const FunnyBirthdayCloudChat = () => {
  const navigate = useNavigate();
  const [currentMessage, setCurrentMessage] = useState(null);
  const [index, setIndex] = useState(0);
  const [showMagicButton, setShowMagicButton] = useState(false);

  const chatScript = [
    { sender: "fatima", text: "Areyy Hunain! Bas countdown hi tha 😏" },
    { sender: "hunain", text: "Bas countdown?? Isk liye website bnayi😤" },
    { sender: "fatima", text: "Arey aur kya karti? Fireworks launch karti kya 🎆😂" },
    { sender: "hunain", text: "Kuch tou krti na! 😂 Kam se kam ek cake emoji hi bhej deti 🎂😩" },
    { sender: "fatima", text: "Cake emoji mil gaya… ab khush? 😂🎂" },
    { sender: "hunain", text: "Dil emoji bhi bhej do warna mood off 💔🤣" },
    { sender: "fatima", text: "Haha okay okay 😆💙 Happy Birthday 🎉" },
    { sender: "hunain", text: "Ab maza aaya 😎 Birthday queen approved!" },
    { sender: "fatima", text: "Haha 😆 I LOVE YOU ❤ Ab agy dekho 👉" },
  ];

  useEffect(() => {
    if (index < chatScript.length) {
      setCurrentMessage(chatScript[index]);
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 4500);
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => setShowMagicButton(true), 2000);
      return () => clearTimeout(finalTimer);
    }
  }, [index]);

  const handleMagicClick = () => {
    navigate("/birthday-wish"); // 🎯 navigate to new page
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 overflow-hidden text-white font-poppins">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 animate-pulse">
        ☁️ Talk Time ☁️
      </h1>

      <div className="relative w-full max-w-5xl flex justify-between items-end px-10">
        {/* Fatima */}
        <div className="relative flex flex-col items-center">
          <img src={fatima} alt="Fatima" className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover" />
          {currentMessage?.sender === "fatima" && (
            <div className="absolute -top-24 left-0 bg-white text-black text-sm md:text-lg font-medium rounded-3xl px-4 py-3 shadow-lg animate-cloudFloat">
              <TypeAnimation sequence={[currentMessage.text]} speed={60} cursor={false} />
              <div className="absolute bottom-[-10px] left-10 w-4 h-4 bg-white rounded-full"></div>
            </div>
          )}
        </div>

        {/* Hunain */}
        <div className="relative flex flex-col items-center">
          <img src={hunain} alt="Hunain" className="w-48 h-48 rounded-full border-4 border-cyan-300 shadow-lg object-cover" />
          {currentMessage?.sender === "hunain" && (
            <div className="absolute -top-24 right-0 bg-cyan-100 text-black text-sm md:text-lg font-medium rounded-3xl px-4 py-3 shadow-lg animate-cloudFloat">
              <TypeAnimation sequence={[currentMessage.text]} speed={60} cursor={false} />
              <div className="absolute bottom-[-10px] right-10 w-4 h-4 bg-cyan-100 rounded-full"></div>
            </div>
          )}
        </div>
      </div>

      {/* Magic Button */}
      {showMagicButton && (
        <button
          onClick={handleMagicClick}
          className="mt-16 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-bold text-xl px-8 py-4 rounded-full shadow-xl hover:scale-110 transition-transform animate-fadeIn"
        >
          🎂 Tap for your Birthday Magic ✨
        </button>
      )}

      <style>{`
        @keyframes cloudFloat {
          0% { transform: translateY(10px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-10px); opacity: 1; }
        }
        .animate-cloudFloat {
          animation: cloudFloat 2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FunnyBirthdayCloudChat;
