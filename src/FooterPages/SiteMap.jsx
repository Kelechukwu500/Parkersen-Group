import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Sitemap = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const pages = [
    "Home",
    "About - Profile & History",
    "About - Values",
    "About - Resources",
    "Projects - Overview",
    "Projects - Gallery",
    "Services - Building Construction",
    "Services - Project Management",
    "Services - Facility Management",
    "Services - Structural Engineering",
    "Contact",
    "Data Protection",
    "Search",
    "Sitemap",
    "Career",
    "Contact Form",
    "Consultancy",
    "Blog",
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen px-6 pt-44 pb-16 bg-gradient-to-br from-black via-yellow-500 to-black text-white"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {pages.map((page, index) => (
          <motion.div
            key={index}
            className="bg-white text-black rounded-xl p-4 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <p className="font-semibold text-lg">{page}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Sitemap;
