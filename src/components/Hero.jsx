"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-14">

        {/* Left Text Area */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Find Your Perfect <span className="text-pink-600">Pet Companion</span>
          </h1>

          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            Explore healthy pets, premium foods, and caring accessories — all in one trusted marketplace.
          </p>

          <div className="mt-8 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl text-lg font-medium shadow hover:bg-blue-700 transition-all"
            >
              Shop Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-gray-400 rounded-xl text-lg font-medium text-gray-800 hover:bg-white shadow-sm transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Area */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBXpA3W63Wwseu3hZUU_7OT0fo1ZSav571Q&s"
            alt="Pet Hero"
            width={500}
            height={500}
            className="rounded-3xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
