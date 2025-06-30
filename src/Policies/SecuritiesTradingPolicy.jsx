import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SecuritiesTradingPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-yellow-400 to-black text-white px-4 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-black/70 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Securities Trading Policy
        </h2>
        <p className="text-lg">
          Parker Integrated Engineering LTD recognizes the importance of
          preventing insider trading and ensuring full compliance with financial
          regulations. This policy sets out strict guidelines on:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Trading windows for directors, officers, and employees.</li>
          <li>Blackout periods around financial disclosures.</li>
          <li>Mandatory reporting and pre-clearance procedures.</li>
        </ul>
        <p className="mt-4">
          Adherence to this policy preserves market confidence and demonstrates
          our commitment to integrity and fair dealing.
        </p>
      </motion.div>
    </section>
  );
};

export default SecuritiesTradingPolicy;
