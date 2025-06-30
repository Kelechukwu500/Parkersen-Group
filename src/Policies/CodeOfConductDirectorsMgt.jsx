import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CodeOfConductDirectorsMgt = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-yellow-400 to-black text-white py-20 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-black/70 rounded-xl p-8 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Code of Conduct for Directors and Management
        </h2>
        <p className="text-lg mb-4">
          Parker Integrated Engineering LTD expects its Directors and senior
          management to uphold the highest standards of integrity,
          professionalism, and ethical behavior. Our Code of Conduct outlines
          expectations that foster transparent decision-making, good governance,
          and responsible leadership.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-white">
          <li>
            Directors and managers must act in the best interests of the
            company, prioritizing stakeholder value and ethical performance.
          </li>
          <li>
            Conflicts of interest must be disclosed and appropriately managed to
            prevent any undue influence or bias.
          </li>
          <li>
            Strict adherence to all applicable laws, regulations, and internal
            policies is mandatory.
          </li>
          <li>
            Financial and operational transparency is a fundamental
            responsibility of the management team.
          </li>
          <li>
            Directors must promote a culture of accountability, inclusiveness,
            and continuous improvement.
          </li>
        </ul>

        <p className="mt-6">
          This Code serves as a guiding framework that ensures directors and
          executives lead with honesty and a deep sense of corporate
          responsibility, reinforcing stakeholder confidence in Parker
          Integrated Engineering LTD.
        </p>
      </motion.div>
    </section>
  );
};

export default CodeOfConductDirectorsMgt;
