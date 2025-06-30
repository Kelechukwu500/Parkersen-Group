import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const ResourceCard = ({ title, desc, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const getRoutePath = (title) => {
    switch (title) {
      case "Company Brochure":
        return "/resources/brochure";
      case "Project Reports":
        return "/resources/reports";
      case "Safety Manuals":
        return "/resources/safety-manuals";
      case "Team & Contact Directory":
        return "/resources/team-directory";
      default:
        return "/";
    }
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-md shadow-lg transition flex flex-col justify-between hover:shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div>
        <h4 className="font-semibold text-black mb-2 text-xl">{title}</h4>
        <p className="text-sm text-black mb-4">{desc}</p>
      </div>
      <Link
        to={getRoutePath(title)}
        className="mt-auto w-fit px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition duration-300"
      >
        View Details
      </Link>
    </motion.div>
  );
};

const Resources = () => {
  const cards = [
    {
      title: "Company Brochure",
      desc: "Download a detailed brochure highlighting our engineering expertise, service areas, and project legacy.",
    },
    {
      title: "Project Reports",
      desc: "In-depth documentation and technical blueprints of executed projects showcasing innovation and quality control.",
    },
    {
      title: "Safety Manuals",
      desc: "Comprehensive safety guides, workplace protocols, and risk mitigation strategies followed by our team.",
    },
    {
      title: "Team & Contact Directory",
      desc: "Access a structured list of project managers, site engineers, consultants, and department contacts.",
    },
  ];

  return (
    <section className="min-h-screen px-6 pt-44 pb-16 bg-gradient-to-br from-black via-yellow-500 to-black text-white">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-br from-black via-yellow-500 to-black bg-opacity-80 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-300 mb-6">Resources</h2>
          <p className="text-lg text-gray-200 mb-8">
            Access technical documents, project summaries, corporate materials,
            and our official safety policies that drive our operations at Parker
            Integrated Engineering LTD.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <ResourceCard
                key={index}
                title={card.title}
                desc={card.desc}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resources;
