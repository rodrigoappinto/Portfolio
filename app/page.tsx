"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import RunningLogo from "./Components/RunningLogo";

export default function WelcomingPage() {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className="flex h-screen w-screen flex-col items-center justify-center"
      ref={constraintsRef}
    >
      <motion.div className="absolute bottom-5">
        <RunningLogo/>
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
        className="text-center text-sm sm:text-base lg:text-xl"
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
