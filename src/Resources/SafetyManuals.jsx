import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "../assets/Safety.jpg";

const SafetyManuals = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, threshold: 0.2 });

  return (
    <motion.div
      className="min-h-screen px-6 pt-44 pb-16 bg-gradient-to-br from-black via-yellow-500 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg">
        <motion.img
          ref={imageRef}
          src={Image}
          alt="Safety Manual"
          className="w-[90%] mx-auto h-auto rounded mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        />

        <h2 className="text-3xl font-bold text-yellow-600 mb-4">
          Safety Manuals
        </h2>
        <p className="text-gray-800 leading-relaxed mb-4">
          Our safety manuals ensure compliance with international standards.
          They outline workplace safety protocols, hazard control procedures,
          PPE regulations, and emergency response strategies adopted across our
          project sites.
        </p>
        <p className="text-gray-800 leading-relaxed mb-4">
          Each manual is designed to guide our engineers, technicians, and
          on-site personnel through real-time safety assessments, accident
          prevention measures, and emergency drills tailored to specific
          environments.
        </p>
        <p className="text-gray-800 leading-relaxed">
          At Parker Integrated Engineering LTD, we believe that safety is not an
          option—it is a core value. Our manuals are regularly reviewed and
          updated to align with evolving standards and technologies, ensuring
          that everyone goes home safe every day.
        </p>
      </div>
    </motion.div>
  );
};

export default SafetyManuals;
