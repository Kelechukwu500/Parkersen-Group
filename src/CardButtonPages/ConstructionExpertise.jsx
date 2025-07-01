import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// Images
import innovationImg from "../assets/innovationImg.jpg";
import integrityImg from "../assets/integrityImg.jpg";
import collaborationImg from "../assets/collaborationImg.jpg";
import excellenceImg from "../assets/excellenceImg.jpg";

const constructionExpertise = [
  {
    title: "Innovative Engineering",
    description:
      "We craft tailored, forward-thinking engineering solutions that redefine the standard of excellence in Nigeria’s construction space.",
    image: innovationImg,
  },
  {
    title: "Unyielding Integrity",
    description:
      "Every project we deliver is built on a foundation of honesty, transparency, and ethical workmanship—no compromises.",
    image: integrityImg,
  },
  {
    title: "Strategic Collaboration",
    description:
      "We build partnerships that drive progress, uniting global expertise with local execution to deliver meaningful results.",
    image: collaborationImg,
  },
  {
    title: "Relentless Pursuit of Excellence",
    description:
      "We don’t settle. From materials to manpower, every element is meticulously aligned with world-class standards.",
    image: excellenceImg,
  },
];

const ConstructionExpertise = () => {
  return (
    <section className="bg-gradient-to-br from-black via-yellow-500 to-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Core Competencies
        </h2>

        <div className="space-y-20">
          {constructionExpertise.map((item, index) => {
            const imageRef = useRef(null);
            const isInView = useInView(imageRef, { once: true });

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Image with animation on view */}
                <motion.img
                  ref={imageRef}
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-[400px] h-[300px] object-cover rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-black/70 p-8 rounded-xl shadow-2xl w-full md:w-2/3"
                >
                  <h3 className="text-2xl text-yellow-400 font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-100">{item.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Slogan */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold italic text-white">
            Solving Your Construction Needs with Innovation
          </h3>
        </motion.div>

        {/* Contact Button */}
        <div className="mt-10 text-center">
          <Link to="/contact-us">
            <button className="bg-black-500 hover:bg-yellow-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConstructionExpertise;
