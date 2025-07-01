import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const policies = [
  "Shareholder Engagement Policy",
  "Code of Conduct",
  "Code of Conduct for Subcontractors and Suppliers",
  "Complaints Management Policy",
  "Securities Trading Policy",
  "Anti-Money Laundering Policy & Procedure",
  "Code of Conduct for Directors and Management",
  "Corporate Compliance Program",
  "Whistle Blowing Policy",
  "Third Party Guidelines",
];

const InvestorRelations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-yellow-400 to-black text-white px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Investor Relations
        </motion.h2>

        {/* Card 1 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-black/70 rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Exemplary Corporate Governance
          </h3>
          <p className="text-lg">
            At Parker Integrated Engineering LTD, we believe robust governance
            drives sustainable growth. Our governance framework ensures
            responsible leadership, ethical practices, and accountability across
            the board. We remain committed to aligning with national and
            international standards to protect our stakeholders’ interests.
          </p>

          {/* Policies heading */}
          <h4 className="text-xl font-bold text-yellow-400 mt-8">Policies</h4>
        </motion.div>

        {/* Policies list with proper links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white"
        >
          {policies.map((policy, idx) => {
            let route = "#";
            switch (policy) {
              case "Shareholder Engagement Policy":
                route = "/policies/shareholder-engagement";
                break;
              case "Code of Conduct":
                route = "/policies/code-of-conduct";
                break;
              case "Code of Conduct for Subcontractors and Suppliers":
                route = "/policies/code-of-conduct-subcontractors";
                break;
              case "Complaints Management Policy":
                route = "/policies/complaints-management";
                break;
              case "Securities Trading Policy":
                route = "/policies/securities-trading";
                break;
              case "Anti-Money Laundering Policy & Procedure":
                route = "/policies/anti-money-laundering";
                break;
              case "Code of Conduct for Directors and Management":
                route = "/policies/code-of-conduct-directors";
                break;
              case "Corporate Compliance Program":
                route = "/policies/corporate-compliance-program";
                break;
              case "Whistle Blowing Policy":
                route = "/policies/whistle-blowing";
                break;
              case "Third Party Guidelines":
                route = "/policies/third-party-guidelines";
                break;
              default:
                route = "#";
            }

            return (
              <Link to={route} key={idx} className="text-white">
                <div className="bg-black/60 p-4 rounded-lg border-l-4 border-yellow-400 flex justify-between items-center hover:bg-yellow-500/20 transition">
                  <p className="font-medium text-white">{policy}</p>
                  <span className="text-yellow-400 text-lg font-bold">→</span>
                </div>
              </Link>
            );
          })}
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-black/70 rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Commitment to Integrity, Fairness, and Respect
          </h3>
          <p className="text-lg">
            Integrity is our foundation. We are committed to maintaining ethical
            standards in every project and relationship. Our culture promotes
            fairness, accountability, and mutual respect — driving trust among
            clients, partners, and employees.
          </p>
        </motion.div>

        {/* Board of Directors */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-black/70 rounded-lg p-8 shadow-lg text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Board of Directors</h3>
          <p className="text-lg">
            Our diverse board combines technical expertise and strategic vision
            to guide our operations with transparency and innovation.
          </p>
          <Link to="/board-of-directors">
            <button className="mt-6 px-5 py-2 bg-black-500 text-white rounded shadow font-semibold">
              Board of Directors
            </button>
          </Link>
        </motion.div>

        {/* Closing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl font-semibold italic mb-6">
            Solving Your Construction Needs with Innovation
          </p>
          <Link to="/contact-us">
            <button className="px-6 py-3 bg-black-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorRelations;
