"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Typewriter from "../TypeWriter/TypeWriter";
import styles from "./Terminal.module.css";
import { getBasePath } from "@/app/utils/basePathUtil";

const PROMPT = "$";
const initialLines = [
  "Welcome to Amogh's Portfolio!",
  "Type 'help' to see available commands.",
];

export default function Terminal() {
  // Start with empty history
  const [history, setHistory] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initIndex, setInitIndex] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [pendingOutput, setPendingOutput] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Add the first initial line on mount or after clear
  useEffect(() => {
    if (history.length === 0 && !showPrompt) {
      setHistory([initialLines[0]]);
      setInitIndex(0);
    }
  }, [history.length, showPrompt]);

  // Handle when each initial line finishes animating
  const handleInitialTypewriterDone = (idx: number) => {
    setIsTyping(false);
    // Only add the next line if it hasn't already been added
    if (idx < initialLines.length - 1 && history.length === idx + 1) {
      setHistory((prev) => [...prev, initialLines[idx + 1]]);
      setInitIndex(idx + 1);
    } else if (idx === initialLines.length - 1) {
      setShowPrompt(true);
    }
  };

  // When pendingOutput is set, animate it with Typewriter
  useEffect(() => {
    if (pendingOutput) {
      setIsTyping(true);
    }
  }, [pendingOutput]);

  // When Typewriter finishes, add the output to history and clear pendingOutput
  const handleTypewriterDone = () => {
    if (pendingOutput) {
      setHistory((prev) => [...prev, pendingOutput]);
      setPendingOutput(null);
      setIsTyping(false);
    }
  };

  const handleCommand = (cmd: string) => {
    let output = "";
    switch (cmd.trim().toLowerCase()) {
      case "help":
        output = "Available commands: about, projects, contact, clear";
        break;
      case "about":
        output = "I'm Amogh, a passionate developer!";
        break;
      case "projects":
        output = "Check out my GitHub: https://github.com/barto9496";
        break;
      case "contact":
        output = "Email: amoghkatti9496@gmail.com";
        break;
      case "clear":
        setHistory([]);
        setInitIndex(0);
        setShowPrompt(false);
        return;
      default:
        output = `Command not found: ${cmd}`;
    }
    setHistory((prev) => [...prev, `${PROMPT} ${cmd}`]);
    setPendingOutput(output);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "" && !isTyping) {
      handleCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    if (showPrompt) {
      inputRef.current?.focus();
    }
  }, [showPrompt]);

  return (
    <>
      <Image
        src={`/rickroll_slowed.gif`}
        alt="Rick Roll"
        className={styles.background}
        aria-hidden="true"
        fill
        priority
        style={{ objectFit: "contain", zIndex: 0, pointerEvents: "none" }}
      />

      <div
        className={styles.terminal}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Animate each initial line with Typewriter */}
        {history.map((line, idx) =>
          idx < initialLines.length ? (
            <Typewriter
              key={idx}
              text={line}
              delay={15}
              onAnimationEnd={() => handleInitialTypewriterDone(idx)}
            />
          ) : (
            <div key={idx} className={styles.line}>
              {line}
            </div>
          )
        )}
        {/* Animate pending output with Typewriter */}
        {pendingOutput && (
          <Typewriter
            text={pendingOutput}
            delay={15}
            onAnimationEnd={handleTypewriterDone}
          />
        )}
        {/* Show prompt only after initial lines are done and not typing */}
        {showPrompt && !isTyping && (
          <div className={styles.prompt}>
            <span>{PROMPT} </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className={styles.input}
              autoFocus
            />
          </div>
        )}
      </div>
    </>
  );
}
