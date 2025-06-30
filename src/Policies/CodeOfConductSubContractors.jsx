import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CodeOfConductSubcontractors = () => {
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
          Code of Conduct for Subcontractors and Suppliers
        </h1>
        <p className="text-lg leading-relaxed">
          Parker Integrated Engineering LTD expects all subcontractors and
          suppliers to adhere to ethical, professional, and legal standards
          consistent with our own Code of Conduct. Our partnerships are built on
          trust, responsibility, and sustainability.
        </p>
        <ul className="list-disc pl-6 mt-6 space-y-2">
          <li>Operate in compliance with all applicable laws and standards.</li>
          <li>
            Commit to fair labor practices and anti-corruption principles.
          </li>
          <li>Support health, safety, and environmental responsibility.</li>
          <li>
            Uphold transparency in all transactions and communications with the
            company.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default CodeOfConductSubcontractors;
