import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CodeOfConduct = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-yellow-400 to-black text-white px-6 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-black/70 p-10 rounded-xl shadow-2xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
          Code of Conduct
        </h1>
        <p className="text-lg leading-relaxed">
          Our Code of Conduct outlines the standards of behavior expected of all
          employees, directors, and contractors. We are committed to acting with
          integrity and fairness in every business decision, guided by ethics,
          compliance, and social responsibility.
        </p>
        <ul className="list-disc pl-6 mt-6 space-y-2">
          <li>Uphold honesty and integrity in all business activities.</li>
          <li>Comply with all applicable laws and internal regulations.</li>
          <li>
            Maintain respect for human rights and environmental responsibility.
          </li>
          <li>
            Avoid conflicts of interest and disclose any potential risk to
            transparency.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default CodeOfConduct;
