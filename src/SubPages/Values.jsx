import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Values = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const values = [
    {
      icon: "🔧",
      title: "Integrity & Professionalism",
      text: "We uphold the highest standards of ethical conduct, transparency, and accountability in all our operations and interactions.",
    },
    {
      icon: "🚀",
      title: "Innovation & Excellence",
      text: "We embrace cutting-edge technology and best practices to deliver exceptional engineering and construction solutions.",
    },
    {
      icon: "🤝",
      title: "Client Satisfaction",
      text: "Our clients are our partners. We prioritize listening, collaboration, and delivery beyond expectations.",
    },
    {
      icon: "🌱",
      title: "Environmental Responsibility",
      text: "We design and execute projects with sustainability in mind, protecting the environment and communities we serve.",
    },
    {
      icon: "🛠️",
      title: "Safety-First Culture",
      text: "Safety is not negotiable. From site to office, we embed a proactive safety culture that protects lives and builds trust.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-6 pt-44 pb-16 bg-gradient-to-br from-black via-yellow-500 to-black text-white"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-300 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            At Parker Integrated Engineering LTD, our values define who we are,
            how we operate, and the legacy we build. These guiding principles
            shape every decision, project, and relationship we nurture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((val, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400 ${
                index === values.length - 1 ? "md:col-span-2" : ""
              }`}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                {val.icon} {val.title}
              </h3>
              <p className="text-gray-700 text-base">{val.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Values;
