import React from "react";
import { motion } from "framer-motion";
import img4 from "../../assets/HumanCapital.jpg";

const SustainabilityCard4 = ({ refProp, inView }) => (
  <motion.div
    ref={refProp}
    initial={{ opacity: 0, x: 50 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-12 flex flex-col md:flex-row items-center gap-6"
  >
    <img
      src={img4}
      alt="Human Capital"
      className="w-full md:w-1/3 max-h-64 object-cover rounded-xl shadow-lg"
    />
    <div className="bg-black/70 rounded-xl p-8 shadow-xl w-full">
      <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
        Human Capital Development
      </h3>
      <p className="text-lg">
        We invest in people. Our staff undergo international and local training,
        acquiring certifications and leadership skills to match industry
        demands. Our development culture ensures a smarter, safer, and more
        effective workforce. We create career pathways and mentorship
        opportunities that empower our employees to grow and lead within and
        beyond the organization.
      </p>
    </div>
  </motion.div>
);

export default SustainabilityCard4;
