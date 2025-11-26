"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  { title: "Cats", img: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg" },
  { title: "Dogs", img: "https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_640.jpg" },
  { title: "Birds", img: "https://cdn.pixabay.com/photo/2025/05/04/18/04/robin-9578746_640.jpg" },
  { title: "Fish", img: "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_640.jpg" },
  { title: "Foods", img: "https://cdn.pixabay.com/photo/2020/05/21/00/02/dry-dog-food-5198627_640.jpg" },
  { title: "Accessories", img: "https://cdn.pixabay.com/photo/2020/05/16/00/34/dog-5175532_640.jpg" },
];

export default function Items() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Explore Our Pet Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
                  
              /* Auto-moving direction (alternate) */
              animate={{ 
                x: index % 2 === 0 ? [0, 20, 0] : [0, -20, 0]
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}

              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer group"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item?.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
