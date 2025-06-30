import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Career = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const card = {
    title: "Career Opportunities",
    text: "We appreciate your interest in joining our team. At the moment, we are not recruiting. Please check back later or follow us on our social media platforms for updates.",
  };

  return (
    <section
      ref={ref}
      className="min-h-screen px-6 pt-44 pb-16 bg-gradient-to-br from-black via-yellow-500 to-black text-white"
    >
      <motion.div
        className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">
          {card.title}
        </h2>
        <p className="text-lg leading-relaxed">{card.text}</p>
      </motion.div>
    </section>
  );
};

export default Career;
