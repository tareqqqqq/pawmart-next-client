"use client";
import { motion } from "framer-motion";
import {
  PawPrint,
  Truck,
  Clock,
  ShieldCheck,
  HeartPulse,
  ShoppingBag,
  Medal,
  PhoneCall,
} from "lucide-react";

const features = [
  { icon: <PawPrint size={35} />, title: "Healthy & Verified Pets" },
  { icon: <Truck size={35} />, title: "Fast Home Delivery" },
  { icon: <Clock size={35} />, title: "24/7 Pet Care Support" },
  { icon: <ShieldCheck size={35} />, title: "Trusted Breeders" },
  { icon: <HeartPulse size={35} />, title: "Premium Pet Food" },
  { icon: <ShoppingBag size={35} />, title: "All Pet Accessories" },
  { icon: <Medal size={35} />, title: "Top Quality Assurance" },
  { icon: <PhoneCall size={35} />, title: "Instant Customer Support" },
];

export default function FeaturesTicker() {
  return (
    <section className="py-16  overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-gray-900">
        Why <span className="text-pink-600">PawMart?</span>
      </h2>

      {/* Infinite Moving Row */}
      <div className="mt-10 relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
        >
          {[...features, ...features].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-lg 
              min-w-[260px] border border-gray-100 cursor-pointer hover:shadow-xl transition-all"
            >
              <span className="text-pink-600">{item.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
