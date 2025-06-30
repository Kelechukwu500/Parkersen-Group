import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhistleBlowingPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-yellow-400 to-black text-white px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center"
        >
          Whistle Blowing Policy
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-black/70 p-8 rounded-xl shadow-xl"
        >
          <p className="text-lg">
            Parker Integrated Engineering LTD upholds transparency and ethical
            behavior in all operations. This Whistle Blowing Policy empowers
            employees, vendors, and stakeholders to report any unethical,
            illegal, or improper behavior without fear of retaliation.
          </p>
          <ul className="list-disc mt-6 ml-6 space-y-2">
            <li>Confidential channels to report misconduct</li>
            <li>Protection of whistleblower identity</li>
            <li>No retaliation policy</li>
            <li>Independent investigation of all reports</li>
            <li>Prompt corrective action on verified claims</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhistleBlowingPolicy;
