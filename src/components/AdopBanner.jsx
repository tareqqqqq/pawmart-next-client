"use client";
import { motion } from "framer-motion";

export default function AdoptBanner() {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-pink-100 rounded-3xl p-10 text-black shadow-xl"
      >
        <h2 className="text-3xl  lg:text-4xl font-bold">
          Adopt a Pet Today — Make a Life Better
        </h2>

        <p className="mt-4 mb-8 text-gray-600 text-lg max-w-2xl">
          Give homeless pets a loving home. Adoption saves lives and brings joy to families.  
          Your new best friend is waiting.
        </p>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-pink-700 text-lg font-semibold rounded-xl shadow hover:shadow-xl transition-all"
        >
          Start Adoption Journey
        </motion.button>
      </motion.div>
    </section>
  );
}
