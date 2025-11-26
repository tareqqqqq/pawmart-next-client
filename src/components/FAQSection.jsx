"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I adopt a pet from PawMart?",
      answer:
        "Simply browse available pets on our website, choose your preferred friend, fill out the adoption form, and our team will contact you within 24 hours.",
    },
    {
      question: "Are all pets vaccinated and health-checked?",
      answer:
        "Yes! Every pet is fully vaccinated, vet-checked, and comes with a health certificate for your peace of mind.",
    },
    {
      question: "Do you offer home delivery for pets?",
      answer:
        "Absolutely. We provide safe and stress-free home delivery with trained handlers.",
    },
    {
      question: "Can I return or exchange a pet?",
      answer:
        "We do not encourage returns. However, if there’s a medical or behavioral emergency, contact our support team immediately.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept cash on delivery, mobile banking, credit/debit cards, and secure online payments.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto my-20 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        ❓ Frequently Asked <span className="text-pink-600">Questions</span>
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 sm:p-5 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>

              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-gray-600" />
              </motion.div>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-600 mt-3 text-sm sm:text-base overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
