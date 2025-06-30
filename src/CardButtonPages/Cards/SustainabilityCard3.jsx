import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img3 from "../../assets/hse.jpg"; 

const SustainabilityCard3 = ({ refProp, inView }) => (
  <motion.div
    ref={refProp}
    initial={{ opacity: 0, x: -50 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-12 flex flex-col md:flex-row items-center gap-6"
  >
    <img
      src={img3}
      alt="HSE"
      className="w-full md:w-1/3 max-h-64 object-cover rounded-xl shadow-lg"
    />
    <div className="bg-black/70 rounded-xl p-8 shadow-xl w-full">
      <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
        Health Safety & Environment
      </h3>
      <p className="text-lg mb-6">
        Our HSE policies prioritize the safety of our workforce, environment,
        and host communities. Every project is executed with strict adherence to
        international safety and environmental standards. We ensure all
        personnel are trained and equipped to minimize risks while maintaining
        operational efficiency.
      </p>
      <Link to="/policies/hse-policy">
        <button className="bg-yellow-400 text-white font-bold px-6 py-2 rounded-lg">
          HSE Policy
        </button>
      </Link>
    </div>
  </motion.div>
);

export default SustainabilityCard3;
