import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// Subsidiary Images
import bentechImage from "../assets/bentechImage.jpg";
import challymoreImage from "../assets/challymoreImage.jpg";

const subsidiaries = [
  {
    name: "BenTech Enterprises",
    description:
      "BenTech Enterprises is a dynamic subsidiary focused on supplying high-grade construction materials, industrial safety gear, and mechanical tools for diverse projects. With a robust logistics framework and a commitment to quality, BenTech powers civil works and commercial builds across Nigeria with innovative, reliable products.",
    services: [
      "Construction Materials & Aggregates",
      "Power Tools & Equipment Leasing",
      "Safety Gear & Industrial Supplies",
      "On-site Logistics & Delivery Services",
    ],
    image: bentechImage,
  },
  {
    name: "ChallyMore Ventures",
    description:
      "ChallyMore Ventures specializes in bespoke interior design, custom furnishing, and smart facility integration. Their team transforms residential and commercial spaces with cutting-edge solutions, combining technology and style for optimal utility and elegance.",
    services: [
      "Interior Design & Space Planning",
      "Custom Furniture Fabrication",
      "Smart Office/Facility Solutions",
      "Post-construction Space Revamp",
    ],
    image: challymoreImage,
  },
];

const GroupProductsServices = () => {
  return (
    <section className="bg-gradient-to-br from-black via-yellow-500 to-black text-white pt-28 pb-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Group Products & Services
        </h2>

        <div className="space-y-20">
          {subsidiaries.map((item, index) => {
            const imageRef = useRef(null);
            const isInView = useInView(imageRef, { once: true });

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Animated Image */}
                <motion.img
                  ref={imageRef}
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-1/3 rounded-xl shadow-xl"
                  initial={{ opacity: 0, x: -60 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7 }}
                />

                {/* Card Content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="bg-black/70 p-8 rounded-xl shadow-2xl w-full md:w-2/3"
                >
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    {item.name}
                  </h3>
                  <p className="text-lg mb-4">{item.description}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-200 mb-6">
                    {item.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>

                  {/* Website Button */}
                  <div className="text-left">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-2 rounded-lg shadow-md transition">
                      Website
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-semibold italic text-white">
            Solving Your Construction Needs with Innovation
          </h3>
        </motion.div>

        {/* Contact Us Button */}
        <div className="mt-10 text-center">
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

export default GroupProductsServices;
