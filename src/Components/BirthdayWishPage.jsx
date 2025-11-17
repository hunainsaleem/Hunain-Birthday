import React from "react";
import Confetti from "react-confetti";

const BirthdayWishPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
      <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={300} />

      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-bounce">
        🎉 Happy Birthday Partner! 🎂
      </h1>

      <p className="text-2xl md:text-3xl text-center max-w-2xl font-light animate-pulse">
        Apka din hai! Ab cake, memes aur wishes sab allowed hain 😂  
        Wish karne wali website bhi mil gayi 😎  
        Party kab rakhni hai, wo bata do 💃🎈
      </p>

      <button
        onClick={() => window.location.href = "/"}
        className="mt-10 bg-white text-purple-800 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        Back to Chat 💬
      </button>
    </div>
  );
};

export default BirthdayWishPage;
