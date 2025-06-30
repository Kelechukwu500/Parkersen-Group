import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Blog3 = () => {
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
        <h2>Why Quality Control is Vital on Nigerian Construction Sites</h2>
        <p>
          From foundation to roofing, strict quality control prevents structural
          failures, delays, and unsafe living conditions.
        </p>
        <p>
          At Parker Integrated Engineering LTD, we ensure that materials and
          workmanship meet both local and international standards on every
          project.
        </p>
        <p>
          Quality control in construction is not just a box to check—it's a
          safety imperative. In Nigeria, where building collapses have become a
          tragic recurring issue, enforcing stringent quality standards helps
          safeguard lives and investments.
        </p>
        <p>
          The process starts with the selection of certified materials such as
          high-grade cement, reinforcement bars, and properly treated wood.
          These materials are tested for compliance before use to avoid
          substandard inputs, which are a leading cause of structural failures.
        </p>
        <p>
          Skilled labor and constant supervision are also key components. Each
          phase of construction—excavation, slab pouring, block laying,
          plastering, electricals, plumbing—is closely monitored by
          professionals to detect errors early and apply corrective action
          immediately.
        </p>
        <p>
          At the project management level, routine site inspections, material
          testing, quality checklists, and audit reports are maintained. These
          practices help ensure that all work aligns with approved building
          codes, architectural drawings, and engineering designs.
        </p>
        <p>
          By embedding a culture of quality across all stages of construction,
          Nigerian developers can reduce rework, avoid costly litigation,
          protect reputations, and deliver projects that stand the test of time.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Blog3;
