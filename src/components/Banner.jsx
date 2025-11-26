"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    image:
      "https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/1bd563c1-7bbb-4b44-af21-a60408b6f129/44.png",
    title: "Find Your Furry Friend Today!",
    subtitle: "Discover loving pets waiting for their forever homes.",
  },
  {
    id: 2,
    image:
      "https://www.thesprucepets.com/thmb/FYvsKjlu7-W2e2B3MJVKtAIPaok=/6550x0/filters:no_upscale():strip_icc()/GettyImages-499806311-c2931b8c09624ebab230f280ab1f57b3.jpg",
    title: "Adopt, Don’t Shop — Give a Pet a Home.",
    subtitle:
      "Be the reason a pet wags its tail again. Choose adoption today!",
  },
  {
    id: 3,
    image:
      "https://docansede.com/wp-content/uploads/2021/07/shutterstock_678297925.jpg",
    title: "Because Every Pet Deserves Love and Care.",
    subtitle:
      "Your compassion can change a life — adopt and spread happiness.",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // 🔥 Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl">

      {/* Image */}
      <motion.img
        key={slides[current].id}
        src={slides[current].image}
        alt="banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full object-cover brightness-75 absolute inset-0"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/40 px-3 sm:px-6">
        <motion.h2
          key={slides[current].title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 max-w-2xl leading-tight"
        >
          {slides[current].title}
        </motion.h2>

        <motion.p
          key={slides[current].subtitle}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-sm sm:text-lg md:text-xl max-w-xl sm:max-w-2xl"
        >
          {slides[current].subtitle}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 sm:px-8 py-4 sm:py-3 bg-pink-500 hover:bg-pink-600 rounded-full mt-4 sm:mt-6 text-sm sm:text-lg font-semibold shadow"
        >
          Explore Now
        </motion.button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm"
      >
        ❯
      </button>
    </div>
  );
}
