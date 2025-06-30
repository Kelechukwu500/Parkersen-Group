import React from "react";
import { motion } from "framer-motion";
import img2 from "../../assets/Impact.jpg";

const SustainabilityCard2 = ({ refProp, inView }) => (
  <motion.div
    ref={refProp}
    initial={{ opacity: 0, x: -50 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-12 flex flex-col md:flex-row items-center gap-6"
  >
    <img
      src={img2}
      alt="Impact"
      className="w-full md:w-1/3 max-h-64 object-cover rounded-xl shadow-lg"
    />
    <div className="bg-black/70 rounded-xl p-8 shadow-xl w-full">
      <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
        Enabling Progress. Extending Impact
      </h3>
      <p className="text-lg">
        Through every structure we build and every service we provide, we
        empower communities and businesses to thrive. Our projects leave a
        lasting footprint that stretches beyond concrete — into education,
        health, jobs, and innovation. We collaborate with public and private
        partners to magnify positive outcomes.
      </p>
    </div>
  </motion.div>
);

export default SustainabilityCard2;
