import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "../assets/ProjectReport.jpg";

const Reports = () => {
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
          alt="Reports"
          className="w-full h-auto rounded mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        />

        <h2 className="text-3xl font-bold text-yellow-600 mb-4">
          Project Reports
        </h2>
        <p className="text-gray-800 leading-relaxed mb-4">
          Explore our analyzed project dashboard report highlighting progress
          metrics, performance insights, and quality control benchmarks that
          define our legacy of excellence.
        </p>
        <p className="text-gray-800 leading-relaxed mb-4">
          Each report offers detailed analysis of material specifications,
          structural evaluations, risk factors, and sustainability
          indicators—capturing every phase from residential builds to complex
          industrial developments with precision and clarity.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Whether you're a client, collaborator, or stakeholder, our reports
          reflect a commitment to precision, safety, and accountability. Explore
          the depth of planning, execution, and performance that drives every
          Parker Integrated Engineering LTD project.
        </p>
      </div>
    </motion.div>
  );
};

export default Reports;
