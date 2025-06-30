import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Profile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cards = [
    {
      title: "Company Overview",
      text: "Parker Integrated Engineering LTD, registered under RC. NO 1561742, is a dynamic and innovative construction and engineering company committed to excellence, durability, and sustainable development across Nigeria and beyond.",
    },
    {
      title: "Founding & Leadership",
      text: "The company was officially founded on February 14, 2019, by Mr. Charles Agbakahi who serves as the visionary Managing Director. The corporate office was commissioned by him along with other key executive members, marking the beginning of a purposeful journey.",
    },
    {
      title: "Our Growth",
      text: "Since inception, Parker Integrated Engineering has executed landmark projects across residential, industrial, and public sectors. With a strong team and visionary leadership, we continuously expand our reach and capabilities.",
    },
    {
      title: "Our Mission",
      text: "We don't just build structures—we build legacies. Our mission is to deliver projects that empower communities, enhance infrastructure, and redefine engineering excellence through innovation, transparency, and lasting partnerships.",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen px-6 pt-44 pb-16 bg-gradient-to-br from-black via-yellow-500 to-black text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: index * 0.3,
              ease: "easeOut",
            }}
          >
            <h2 className="text-2xl font-bold text-black mb-3">{card.title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Profile;
