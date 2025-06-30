import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ComplaintsManagementPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-yellow-400 to-black text-white px-4 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-black/70 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Complaints Management Policy
        </h2>
        <p className="text-lg">
          Parker Integrated Engineering LTD is committed to managing complaints
          in a transparent, effective, and timely manner. We believe all
          stakeholders have the right to raise concerns and expect a fair and
          just resolution. Our complaints management procedure ensures:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Clear channels for lodging complaints.</li>
          <li>Prompt acknowledgement and investigation.</li>
          <li>Confidentiality and non-retaliation against complainants.</li>
          <li>Regular analysis for continuous improvement.</li>
        </ul>
        <p className="mt-4">
          This policy strengthens our commitment to accountability and
          transparency in all operations.
        </p>
      </motion.div>
    </section>
  );
};

export default ComplaintsManagementPolicy;
