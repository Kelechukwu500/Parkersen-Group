import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AntiMoneyLaunderingPolicy = () => {
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
          Anti-Money Laundering Policy & Procedure
        </h2>
        <p className="text-lg">
          As a responsible organization, Parker Integrated Engineering LTD
          strictly prohibits all forms of money laundering. Our Anti-Money
          Laundering Policy outlines key procedures including:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Know Your Customer (KYC) compliance.</li>
          <li>Suspicious transaction monitoring and reporting.</li>
          <li>Mandatory staff training and awareness.</li>
        </ul>
        <p className="mt-4">
          This policy reflects our unwavering commitment to compliance with
          national and international anti-money laundering laws.
        </p>
      </motion.div>
    </section>
  );
};

export default AntiMoneyLaunderingPolicy;
