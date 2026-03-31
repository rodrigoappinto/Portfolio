"use client";
import { CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import PhotoPreview from "./PhotoPreview";
import MobilePhotoPreview from "./MobilePhotoPreview";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 1000, damping: 150 },
  },
};

interface PortfolioImage {
  url: string;
  desc: string;
  loc: string;
}

interface PortfolioProps {
  data: PortfolioImage[];
}

export default function Portfolio({ data }: PortfolioProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen && !isMobile) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen, isMobile]);

  const handleImageClick = (index: number) => {
    if (isMobile) {
      if (currentImage === index) {
        setIsOpen(false);
        setCurrentImage(-1);
      } else {
        setCurrentImage(index);
      }
    } else {
      setIsOpen(!isOpen);
      setCurrentImage(index);
    }
  };

  return (
    <div className="my-5">
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {data.map((image, i) =>
          image !== undefined && (
            <div key={i} onClick={() => handleImageClick(i)}>
              {!isMobile && <PhotoPreview url={image.url} priority={i < 4} />}
              {isMobile && currentImage === i && <MobilePhotoPreview url={image.url} desc={image.desc} loc={image.loc} />}
              {isMobile && currentImage !== i && <PhotoPreview url={image.url} priority={i === 0} />}
            </div>
          )
        )}
      </div>
      <div className="hidden sm:block">
        {isOpen && !isMobile && (
          <motion.nav animate={isOpen ? "open" : "closed"} className="fixed inset-0 flex items-center justify-center bg-[#F3EEEA]/90">
            <Carousel
              opts={{
                startIndex: currentImage,
                loop: true,
              }}
            >
              <motion.div initial={{ y: -60 }} variants={itemVariants} className="md:max-w-3xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-[100rem] 4xl:max-w-[110rem]">
                <div className="flex justify-end">
                  <motion.svg
                    className="h-8 cursor-pointer duration-200 hover:scale-125 hover:duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => setIsOpen(false)}
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
                  {data.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="flex flex-col items-center justify-center"
                    >
                      <CardContent>
                        <motion.img src={image.url} />
                      </CardContent>
                      <div className="flex flex-col text-wrap text-center items-center justify-center">
                        <p className="text-s">{image.desc}</p>
                        <p className="text-xs">{image.loc}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </motion.div>
            </Carousel>
          </motion.nav>
        )}
      </div>
    </div>
  );
}
