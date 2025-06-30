import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ShareholderEngagementPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-yellow-400 to-black text-white px-4 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-black/70 p-8 rounded-xl shadow-2xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
          Shareholder Engagement Policy
        </h1>
        <p className="text-lg mb-4">
          At Parker Integrated Engineering LTD, we value our shareholders and
          maintain open, transparent communication with them. This policy
          outlines our approach to engaging shareholders, ensuring they are
          well-informed and can exercise their rights effectively.
        </p>
        <p className="text-lg mb-4">
          We commit to providing timely updates through financial statements,
          annual reports, and general meetings. Our investor relations team is
          always available to address queries and collect feedback from our
          stakeholders.
        </p>
        <p className="text-lg">
          By fostering trust and accountability, we aim to create sustainable
          value and uphold the interests of our shareholders at all times.
        </p>
      </motion.div>
    </section>
  );
};

export default ShareholderEngagementPolicy;
