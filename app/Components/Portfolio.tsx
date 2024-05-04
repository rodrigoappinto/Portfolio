"use client";
import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import PhotoPreview from "./PhotoPreview";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 1000, damping: 150 },
  },
};

export default function Portfolio(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
      <div className=" mt-4 flex h-full w-full flex-wrap items-center justify-center gap-3">
        {props.urls.map(
          (url: string, i: number) =>
            url !== undefined && (
              <div
                key={i}
                onClick={() => {
                  setIsOpen(!isOpen);
                  setCurrentImage(i);
                }}
              >
                <PhotoPreview url={url} />
              </div>
            ),
        )}
      </div>
      {isOpen && (
        <motion.nav animate={isOpen ? "open" : "closed"}>
          <div className="fixed inset-0 flex items-center justify-center bg-[#F3EEEA]/75">
            <Carousel
              className="w-11/12 sm:w-3/4"
              opts={{
                startIndex: currentImage,
                loop: true,
              }}
            >
              <motion.div initial={{ y: -60 }} variants={itemVariants}>
                <div className="flex justify-end">
                  <motion.svg
                    className="h-8 cursor-pointer duration-200 hover:scale-125 hover:duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                </div>
                <CarouselContent>
                  {Array.from({ length: props.urls.length }).map((_, index) => (
                    <CarouselItem key={index}>
                      <CardContent className="flex items-center justify-center p-1">
                        <motion.img src={props.urls[index]} />
                      </CardContent>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </motion.div>
            </Carousel>
          </div>
        </motion.nav>
      )}
    </div>
  );
}
