import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion"; // ✅ motion imported
import {
  FaBuilding,
  FaGlobeAfrica,
  FaRibbon,
  FaChartLine,
} from "react-icons/fa";

import HeroFeatureCard from "./HeroFeatureCard"; // direct import only

const cards = [
  {
    title: "Construction Expertise",
    icon: <FaBuilding className="text-4xl mb-2" />,
    stats: ["+100 Buildings", "+20 Facility management projects"],
    description: "Transform challenges into tangible opportunities",
    button: "CONSTRUCTION EXPERTISE",
    route: "/construction-expertise",
  },
  {
    title: "Group Products & Services",
    icon: <FaGlobeAfrica className="text-4xl mb-2" />,
    stats: [
      "Group of 2 subsidiaries",
      "Construction supply-related services",
      "Interior design & furniture production",
    ],
    description: "Production of Interior Designs & furniture production",
    button: "GROUP PRODUCTS & SERVICES",
    route: "/group-products",
  },
  {
    title: "Safety & Sustainability",
    icon: <FaRibbon className="text-4xl mb-2" />,
    stats: ["Health", "Education"],
    description:
      "Member of Council for the Regulation of Engineering in Nigeria (COREN)",
    button: "SAFETY & SUSTAINABILITY",
    route: "/sustainability",
  },
  {
    title: "Investor Relations",
    icon: <FaChartLine className="text-4xl mb-2" />,
    stats: [
      "₦150 million turnover",
      "Publicly traded on NGX",
      "120 employees group-wide",
    ],
    description: "*2024 Audited Consolidated & Separate Financial Statements",
    button: "INVESTOR RELATIONS",
    route: "/investor-relations",
  },
];

const HeroFeatures = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-gradient-to-b from-black via-yellow-400 to-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <HeroFeatureCard
            key={index}
            card={card}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default HeroFeatures;
