import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../assets/Background16.jpg";

const SustainabilityCard1 = ({ refProp, inView }) => (
  <motion.div
    ref={refProp}
    initial={{ opacity: 0, x: -50 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-12 flex flex-col md:flex-row items-center gap-6"
  >
    <img
      src={img1}
      alt="Progress"
      className="w-full md:w-1/3 max-h-64 object-cover rounded-xl shadow-lg"
    />
    <div className="bg-black/70 rounded-xl p-8 shadow-xl w-full">
      <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
        A Force for Progress
      </h3>
      <p className="text-lg mb-6">
        Parker Integrated Engineering LTD continues to lead with innovation,
        responsibility, and inclusive development. We integrate sustainability
        into every layer of our strategy, setting the benchmark for
        socially-conscious engineering in Nigeria. We champion resilience and
        long-term impact by embedding ESG values in our projects, planning, and
        partnerships.
      </p>
      <Link to="/policies/sustainability-report">
        <button className="bg-yellow-400 text-white font-bold px-6 py-2 rounded-lg">
          Sustainability Report 2023
        </button>
      </Link>
    </div>
  </motion.div>
);

export default SustainabilityCard1;
