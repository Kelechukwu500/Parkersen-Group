import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CorporateComplianceProgram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-yellow-400 to-black text-white px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-black/80 p-8 rounded-xl shadow-lg"
        >
          <h1 className="text-3xl font-bold text-yellow-400 mb-4">
            Corporate Compliance Program
          </h1>
          <p className="text-lg mb-6">
            Parker Integrated Engineering LTD is dedicated to maintaining the
            highest standards of corporate compliance across all operations. Our
            Corporate Compliance Program is a structured framework designed to
            ensure that all activities are conducted in full adherence to
            applicable laws, regulations, and internal standards.
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Core Elements of Our Program:
              </h2>
              <ul className="list-disc list-inside text-gray-200">
                <li>
                  Development and implementation of clear policies and
                  procedures
                </li>
                <li>Regular training for employees and management</li>
                <li>Internal controls and monitoring systems</li>
                <li>Risk assessments and mitigation strategies</li>
                <li>Open communication and reporting mechanisms</li>
                <li>Auditing and continuous improvement</li>
              </ul>
            </div>

            <p className="text-gray-100">
              Our compliance program is aligned with international best
              practices and is essential for preserving the integrity,
              transparency, and long-term success of our organization. It is
              championed by our leadership team and supported at all levels of
              the company.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateComplianceProgram;
