"use client";
import React, { useState, useEffect } from "react";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

interface typeWriterProps {
  text: string;
  delay: number;
}

export const Typewriter = ({ text, delay }: typeWriterProps) => {
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
