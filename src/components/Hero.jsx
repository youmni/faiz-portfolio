import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [" Faiz!", " a swimmer.", " a movie enthusiast."],
    loop: true,
    typeSpeed: 200,
  });

  return (
    <div className="hero h-screen flex flex-col items-start justify-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl drop-shadow-lg">
        Hi, I'm <br />
        <span className="text-sky-800">{text}</span>
        <span>
          <Cursor cursorStyle="|" cursorColor="white" />
        </span>
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-center opacity-80 text-black font tracking-wide drop-shadow-md hover:opacity-100 transition-opacity duration-100">
        A rising<span className="text-sky-800"> electrician</span>
      </p>
    </div>
  );
};

export default Hero;