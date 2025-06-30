import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ThirdPartyGuidelinesPolicy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-yellow-400 to-black text-white px-6 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-black/70 p-10 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">
          Third Party Guidelines Policy
        </h2>
        <p className="text-lg mb-4">
          Our Third Party Guidelines Policy ensures all external vendors,
          contractors, and service providers adhere to Parker Integrated
          Engineering’s core values of integrity, transparency, and
          accountability.
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            All third parties must comply with applicable laws and regulations
            in jurisdictions where we operate.
          </li>
          <li>
            Anti-bribery and anti-corruption practices are strictly enforced.
          </li>
          <li>
            Confidentiality, sustainability, and health & safety standards are
            mandatory.
          </li>
          <li>
            Violations of this policy may result in immediate termination of
            contracts.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default ThirdPartyGuidelinesPolicy;
