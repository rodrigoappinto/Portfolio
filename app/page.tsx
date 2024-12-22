"use client";

import RunningLogo from "./Components/RunningLogo";
import DownArrow from "./Components/DownArrow";
import { motion } from "framer-motion";
import { useRef, useState } from "react";


export default function WelcomingPage() {
  const constraintsRef = useRef(null);

  const scrollToSection = (index: number) => {
    const section = document.getElementById("portfolio");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="flex h-screen w-screen flex-col items-center justify-center"
      ref={constraintsRef}
    >
      <motion.div className="absolute bottom-16">
        <RunningLogo />
      </motion.div>
  
      <motion.div className="absolute bottom-5 animate-pulse" onClick={() => scrollToSection(0)}>
        <DownArrow />
      </motion.div>

      <motion.div className="absolute top-5">
        <p>Pinto DiGitAL JouRnAL</p>
      </motion.div>

      <motion.div className="flex items-center justify-center">
        <motion.div
          className="text-right text-4xl sm:text-7xl lg:text-9xl"
          drag
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        >
          WelcoMe!
        </motion.div>
      </motion.div>
      <motion.div
        className="text-center text-sm sm:text-base lg:text-xl mt-2"
        drag
        dragConstraints={constraintsRef}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      >
        My naMe is rodrigo pinto <br /> i aM a photographer, and this is My
        portfolio :)
      </motion.div>
    </motion.div>
  );
}
