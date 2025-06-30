import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "../assets/Brochure.jpg";

const Brochure = () => {
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
        {/* ✅ Downloadable image with animation */}
        <motion.a
          ref={imageRef}
          href={Image}
          download="Parker_Brochure.jpg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <img
            src={Image}
            alt="Brochure"
            className="w-full h-auto rounded mb-6 cursor-pointer"
          />
        </motion.a>

        <h2 className="text-3xl font-bold text-yellow-600 mb-4">
          Company Brochure
        </h2>
        <p className="text-gray-800 leading-relaxed mb-4">
          Our brochure provides a deep insight into the services, sectors, and
          milestones that define Parker Integrated Engineering LTD. It
          highlights our engineering excellence, client partnerships, and the
          values that drive our work.
        </p>
        <p className="text-gray-800 leading-relaxed mb-4">
          Within its pages, you’ll discover our project execution strategy,
          sustainable practices, technical competencies, and real-life case
          studies of successful infrastructure development. From feasibility
          studies to post-construction maintenance, the brochure outlines our
          end-to-end service capability.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Download the brochure to learn how Parker Integrated Engineering LTD
          continues to raise the standard of engineering and project delivery
          across Nigeria and beyond.
        </p>
      </div>
    </motion.div>
  );
};

export default Brochure;
