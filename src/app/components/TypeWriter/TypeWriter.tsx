"use client";
import React, { useState, useEffect } from "react";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

export const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return <div className={vt323.className}>{currentText}</div>;
};

export default Typewriter;
