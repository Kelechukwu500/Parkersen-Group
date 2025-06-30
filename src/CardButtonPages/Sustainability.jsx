import React, { useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const SustainabilityCard1 = lazy(() => import("./Cards/SustainabilityCard1"));
const SustainabilityCard2 = lazy(() => import("./Cards/SustainabilityCard2"));
const SustainabilityCard3 = lazy(() => import("./Cards/SustainabilityCard3"));
const SustainabilityCard4 = lazy(() => import("./Cards/SustainabilityCard4"));
const SustainabilityCard5 = lazy(() => import("./Cards/SustainabilityCard5"));

const Sustainability = () => {
  const refs = Array.from({ length: 5 }, () => useRef(null));
  const views = refs.map((ref) => useInView(ref, { once: true }));

  return (
    <section className="bg-gradient-to-br from-black via-yellow-500 to-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Sustainability</h2>

        <Suspense
          fallback={<div className="text-center text-white">Loading...</div>}
        >
          <SustainabilityCard1 refProp={refs[0]} inView={views[0]} />
          <SustainabilityCard2 refProp={refs[1]} inView={views[1]} />
          <SustainabilityCard3 refProp={refs[2]} inView={views[2]} />
          <SustainabilityCard4 refProp={refs[3]} inView={views[3]} />
          <SustainabilityCard5 refProp={refs[4]} inView={views[4]} />
        </Suspense>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <h4 className="text-3xl font-semibold italic">
            Solving Your Construction Needs with Innovation
          </h4>
        </motion.div>

        <div className="text-center mt-10">
          <Link to="/contact-us">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
