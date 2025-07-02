import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const hireOptions = [
  {
    title: "Site Engineers",
    description:
      "Qualified site engineers available for planning, supervision, and execution of construction projects across various sectors.",
  },
  {
    title: "Project Managers",
    description:
      "Experienced project managers to oversee construction timelines, budgeting, and coordination of resources.",
  },
  {
    title: "Masons & Bricklayers",
    description:
      "Skilled masons and bricklayers ready for both residential and commercial building projects.",
  },
  {
    title: "Carpenters & Formwork Experts",
    description:
      "Expert carpenters for shuttering, framing, and detailed woodwork in construction.",
  },
  {
    title: "Steel Fixers",
    description:
      "Reliable steel fixers for reinforcement of concrete structures and foundation works.",
  },
  {
    title: "Heavy Equipment Operators",
    description:
      "Certified operators for bulldozers, excavators, cranes, and other construction machinery.",
  },
  {
    title: "Architectural Designers",
    description:
      "Creative architects for building design, site layout, and architectural visualization.",
  },
  {
    title: "Quantity Surveyors",
    description:
      "Professional surveyors to provide accurate cost estimation, budgeting, and valuation services.",
  },
];

const HireServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen px-6 py-12 bg-gray-100">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Hire Construction Professionals
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Explore our pool of certified and experienced construction personnel
          ready to support your projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hireOptions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HireServices;
