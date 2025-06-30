import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Blog4 = () => {
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
        <h2>Government Policies Impacting Construction Projects</h2>
        <p>
          Building approvals, environmental regulations, and taxation influence
          timelines and budgets in Nigerian construction.
        </p>
        <p>
          Understanding and complying with these laws is crucial for risk-free
          project delivery and long-term operational success.
        </p>
        <p className="mb-4">
          Regulatory oversight begins at the planning stage. Developers must
          secure permits from local urban planning authorities, often requiring
          land surveys, building plan approvals, and environmental impact
          assessments. Delays in any of these can stall projects indefinitely,
          impacting delivery schedules and investor confidence.
        </p>
        <p className="mb-4">
          Environmental regulations have become more stringent in recent years.
          Developers are required to adopt sustainable practices such as erosion
          control, proper drainage, green building materials, and waste
          management systems. Non-compliance can result in heavy fines or
          demolition orders.
        </p>
        <p className="mb-4">
          Taxation and levies also affect project feasibility. Contractors must
          navigate a range of fiscal requirements including VAT, withholding
          tax, development levies, and building approval fees—costs that can
          significantly impact project budgets. Understanding these financial
          obligations is critical during the tendering and budgeting phases.
        </p>
        <p className="mb-4">
          Furthermore, government policies on land tenure, compensation for
          displaced communities, and procurement laws often dictate the pace and
          structure of large infrastructure projects. For public-private
          partnerships (PPPs), alignment with the Bureau of Public Procurement
          (BPP) guidelines is essential for successful bidding and execution.
        </p>
        <p>
          Ultimately, staying informed about evolving government policies and
          maintaining compliance through every stage of a construction project
          not only mitigates legal risks but also improves stakeholder trust and
          project integrity in Nigeria’s competitive construction industry.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Blog4;
