"use client";
import React, { useState, useEffect } from "react";
import { VT323 } from "next/font/google";
import styles from "../../../styles/component.module.css";
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

interface TypeWriterProps {
  text: string;
  delay: number;
  byWord?: boolean;
  onAnimationEnd?: () => void; // <-- Add this line
}

export const Typewriter = ({ text, delay, byWord = false, onAnimationEnd }: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
  }, [text, byWord]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (byWord) {
      const words = text.split(" ");
      if (currentIndex < words.length) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => (prev ? prev + " " : "") + words[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, delay);
      } else if (onAnimationEnd) {
        onAnimationEnd(); // <-- Call when done
      }
    } else {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, delay);
      } else if (onAnimationEnd) {
        onAnimationEnd(); // <-- Call when done
      }
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, byWord, onAnimationEnd]);

  return (
    <span className={`${vt323.className} ${styles.text}`}>
      {currentText}
    </span>
  );
};

export default Typewriter;