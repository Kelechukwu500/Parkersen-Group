import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroFeatureCard = ({ card, index, isInView }) => (
  <motion.div
    className="bg-black/80 text-white rounded-2xl shadow-xl p-6 flex flex-col items-start"
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    <div className="text-yellow-300">{card.icon}</div>
    <h3 className="text-2xl font-bold mt-3 mb-2 text-yellow-400">
      {card.title}
    </h3>
    <ul className="mb-4 text-white space-y-1 text-sm font-medium">
      {card.stats.map((point, i) => (
        <li key={i}>• {point}</li>
      ))}
    </ul>
    <p className="text-gray-300 text-sm mb-6">{card.description}</p>
    <Link to={card.route} className="mt-auto w-full">
      <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
        {card.button}
      </button>
    </Link>
  </motion.div>
);

export default HeroFeatureCard;
