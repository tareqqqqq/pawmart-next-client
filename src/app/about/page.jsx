"use client";

import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, PawPrint, Truck, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 to-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          About <span className="text-pink-600">PawMart</span>
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl">
          A trusted place where pets find loving homes and families find joy.
        </p>
      </motion.div>


      {/* Mission */}
      <section className="mt-14 sm:mt-16 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
            Our mission is to connect families with healthy, cared-for pets while 
            supporting ethical breeding and adoption. Every pet deserves love, safety, 
            and a forever home.
          </p>
        </motion.div>
      </section>


      {/* What We Do */}
      <section className="mt-16 sm:mt-20 md:mt-28">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800"
        >
          What We Do
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 
            sm:gap-8 
            md:gap-10 
            max-w-6xl 
            mx-auto 
            mt-10
          "
        >
          <InfoCard icon={<Heart className="w-10 h-10 text-pink-500" />} title="Healthy Pets" text="All pets are vet-checked, vaccinated, and raised with love." />
          <InfoCard icon={<Truck className="w-10 h-10 text-purple-500" />} title="Fast Delivery" text="Safe and stress-free home delivery for your new companion." />
          <InfoCard icon={<Users className="w-10 h-10 text-blue-500" />} title="Pet Support" text="Full guidance for new pet owners to start the journey right." />
          <InfoCard icon={<PawPrint className="w-10 h-10 text-orange-500" />} title="Pet Products" text="Food, toys, grooming items, accessories & more." />
          <InfoCard icon={<ShieldCheck className="w-10 h-10 text-green-500" />} title="Verified Sellers" text="Only trusted and ethical breeders are approved." />
          <InfoCard icon={<Heart className="w-10 h-10 text-red-500" />} title="Support Adoption" text="Helping homeless pets find their forever homes." />
        </motion.div>
      </section>


      {/* Values */}
      <section className="mt-20 sm:mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Our Values
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Compassion • Transparency • Responsibility • Customer Happiness • Animal Welfare  
            <br/>
            These values guide every decision at PawMart.
          </p>
        </motion.div>
      </section>


      {/* Story */}
      <section className="mt-20 sm:mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Our Story
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
            PawMart was created with a simple dream — making pet adoption easy, safe, 
            and transparent. We wanted families and pets to connect in a way that’s 
            joyful and trustworthy. Today, we proudly help thousands find their 
            perfect companions.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQSection />


      {/* Contact */}
      <section className="mt-20 sm:mt-24 md:mt-28 mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Need Help?
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">📩 support@pawmart.com</p>
          <p className="text-gray-500 text-sm mt-1">We're here for you 24/7</p>
        </motion.div>
      </section>

    </div>
  );
}


function InfoCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all"
    >
      <div className="flex justify-center mb-3">{icon}</div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center">
        {title}
      </h3>
      <p className="text-gray-600 mt-2 text-sm sm:text-base text-center leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}
