import React from "react";
import { motion } from "framer-motion";
import img5 from "../../assets/CommunityService1.jpg";

const SustainabilityCard5 = ({ refProp, inView }) => (
  <motion.div
    ref={refProp}
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-12 flex flex-col md:flex-row items-center gap-6"
  >
    <img
      src={img5}
      alt="Community"
      className="w-full md:w-1/3 max-h-64 object-cover rounded-xl shadow-lg"
    />
    <div className="bg-black/70 rounded-xl p-8 shadow-xl w-full">
      <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
        Community Development
      </h3>
      <p className="text-lg">
        We actively engage and uplift our host communities. From building access
        roads and classrooms to providing clean water and job opportunities, our
        social impact footprint is deep, meaningful, and enduring. We believe
        development must be inclusive and community-driven, and we work
        collaboratively with local leaders to achieve shared progress.
      </p>
    </div>
  </motion.div>
);

export default SustainabilityCard5;
