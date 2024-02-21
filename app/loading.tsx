'use client'
import { motion } from "framer-motion";

export default function Loading() {

    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      }

    return (
        <div className="w-full h-screen flex justify-center items-center text-xl" >
            ... loAdinG ...
        </div>
    );
}