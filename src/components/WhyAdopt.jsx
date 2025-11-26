"use client";

import React, { useState, useEffect } from "react";
import { Heart, PawPrint, ShieldCheck, Users } from "lucide-react";

export default function WhyAdopt() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const reasons = [
    {
      icon: <Heart className="w-10 h-10 text-pink-500" />,
      title: "Save a Life",
      text: "Each adoption gives a loving pet a second chance.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Build a Bond",
      text: "Rescued pets form deeper emotional connections.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
      title: "Ethical Choice",
      text: "Choosing adoption reduces unethical breeding.",
    },
    {
      icon: <PawPrint className="w-10 h-10 text-yellow-500" />,
      title: "Support a Cause",
      text: "Every adoption supports shelter care.",
    },
  ];

  return (
    <section className="bg-linear-to-r from-pink-50 to-blue-50 py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        🐶 Why Adopt from <span className="text-pink-600">PawMart?</span>
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
        Adopting a pet is a life-changing experience. Here's why thousands choose us.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {reasons.map((item, index) => {
          const [flip, setFlip] = useState(false);

          return (
            <div
              key={index}
              className="w-full h-56 perspective"
              onClick={() => isMobile && setFlip(!flip)} // Mobile: tap flip
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d 
                  ${flip ? "rotate-y-180" : ""} 
                  ${!isMobile ? "hover:rotate-y-180" : ""}
                `}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg p-6 backface-hidden flex flex-col items-center justify-center">
                  {item.icon}
                  <h3 className="font-semibold text-lg md:text-xl mt-3">
                    {item.title}
                  </h3>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-pink-100 rounded-2xl shadow-lg p-6 rotate-y-180 backface-hidden flex items-center justify-center">
                  <p className="text-gray-700 text-2xl px-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
