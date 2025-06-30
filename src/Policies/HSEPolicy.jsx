import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "../assets/hse.jpg"; // Replace with actual image

const HSEPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-yellow-500 to-black text-white pt-36 pb-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-black/80 p-10 rounded-xl shadow-2xl flex flex-col md:flex-row gap-8 mt-10"
        >
          {/* Image Placeholder */}
          <img
            src={Image}
            alt="HSE Policy"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-xl"
          />

          {/* Card Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-semibold text-yellow-400 mb-6 text-center md:text-left">
              HSE Policy
            </h1>

            <div className="space-y-5 text-lg">
              <p>
                At <strong>Parker Integrated Services</strong>, Health, Safety,
                and Environment (HSE) are at the core of our operations. Our HSE
                Policy is designed to protect lives, preserve the environment,
                and ensure compliance with international standards.
              </p>

              <p>
                We proactively identify and mitigate risks on all project sites,
                ensuring that every team member and stakeholder operates within
                a safe, healthy, and environmentally conscious framework.
              </p>

              <p>
                <strong>Workplace Safety:</strong> Mandatory safety training,
                personal protective equipment, and continuous monitoring are in
                place to safeguard our workforce.
              </p>

              <p>
                <strong>Environmental Responsibility:</strong> We implement
                waste management, pollution prevention, and site restoration
                procedures across all operations.
              </p>

              <p>
                <strong>Emergency Preparedness:</strong> Response plans are
                updated regularly and drills are conducted to minimize potential
                hazards.
              </p>

              <p>
                Parker Integrated Services remains dedicated to building a
                zero-incident, eco-conscious future through our HSE culture.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HSEPolicy;
