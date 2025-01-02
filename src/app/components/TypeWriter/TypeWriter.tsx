"use client";
import React, { useState, useEffect } from "react";
import { VT323 } from "next/font/google";
import { Button } from "@mui/material";
import styles from "../../../styles/component.module.css";
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
  const [showButton, setShowButton] = useState(false);

  const onShowAlert = () => {
    alert("Rendering a new page");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
      if (currentIndex == text.length) {
        setShowButton(true);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return (
    <div className="flex-col justify-center justify-items-center h-full">
      <main className={vt323.className}>
        <div className={styles.text}>{currentText}</div>
        {showButton && (
          <Button variant="text" onClick={onShowAlert}>
            Know more!
          </Button>
        )}
      </main>
    </div>
  );
};

export default Typewriter;
