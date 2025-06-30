import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TeamDirectory = () => {
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
          src="https://via.placeholder.com/800x300?text=Team+Directory"
          alt="Team Directory"
          className="w-full h-auto rounded mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        />
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">
          Team & Contact Directory
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Connect with our dedicated team members across departments. This
          directory provides direct access to our project managers, site
          engineers, consultants, and administrative units for efficient
          communication and support.
        </p>
      </div>
    </motion.div>
  );
};

export default TeamDirectory;
