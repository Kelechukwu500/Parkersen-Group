import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Building Construction",
    path: "/services/building-construction",
    description:
      "We deliver world-class building construction services ranging from residential apartments to large-scale commercial buildings with precision, safety, and sustainability.",
  },
  {
    title: "Project Management",
    path: "/services/project-management",
    description:
      "Our project managers ensure your construction goals are met on time, within budget, and to the highest standards through strategic planning and agile execution.",
  },
  {
    title: "Facility Management",
    path: "/services/facility-management",
    description:
      "From maintenance to operations, our facility management solutions optimize functionality and efficiency for long-term value and peak performance of your assets.",
  },
  {
    title: "Structural Engineering",
    path: "/services/structural-engineering",
    description:
      "We design safe and resilient structures, leveraging advanced engineering principles to bring both traditional and modern projects to life with lasting integrity.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                to={service.path}
                className="inline-block mt-2 text-yellow-700 hover:text-yellow-900 font-medium"
              >
                Learn More &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
