import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Blog1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      className="min-h-screen pt-44 pb-16 px-6 bg-gradient-to-br from-black via-yellow-500 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">
          Trends in Modern Building Construction in Nigeria
        </h2>
        <p className="mb-4">
          Nigeria's construction industry is evolving rapidly. Developers are
          adopting modern technologies like smart concrete, 3D printed
          components, and green roofing solutions.
        </p>
        <p className="mb-4">
          As cities grow, sustainable practices and innovations in architecture
          will define the future of urban infrastructure in Nigeria.
        </p>
        <p className="mb-4">
          One significant trend is the increasing use of prefabricated and
          modular buildings. These approaches allow for faster construction
          timelines, reduced labor costs, and minimal on-site waste—making them
          ideal for urban environments. With population surges in cities like
          Lagos and Abuja, this efficiency is becoming a necessity.
        </p>
        <p className="mb-4">
          Developers are also exploring renewable energy integration in building
          designs. Solar panels, energy-efficient HVAC systems, and water
          harvesting technologies are being adopted to reduce operational costs
          and meet environmental standards. These eco-conscious solutions
          reflect a global push toward green building certifications such as
          LEED and EDGE.
        </p>
        <p className="mb-4">
          Additionally, digital project management tools and Building
          Information Modeling (BIM) are gaining ground. BIM improves
          coordination among stakeholders, enhances visualization of project
          stages, and reduces the risk of costly errors. It is helping
          construction firms deliver more accurate budgets and timelines while
          improving overall quality control.
        </p>
        <p>
          As the Nigerian government and private sector continue to invest in
          infrastructure and housing, the shift toward modern construction
          practices will only accelerate. Embracing these trends is not just a
          competitive advantage—it is essential for meeting the demands of a
          rapidly urbanizing population and ensuring sustainable development.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Blog1;
