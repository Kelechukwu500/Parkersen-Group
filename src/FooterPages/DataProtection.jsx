import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DataProtection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const dataPoints = [
    {
      title: "Your Privacy Matters",
      content:
        "We are committed to protecting your personal data and ensuring transparency in how your information is used in accordance with the NDPR and global standards.",
    },
    {
      title: "Data Usage",
      content:
        "Personal data collected through our site is strictly used for service delivery, support, and communication. It is never sold or misused.",
    },
    {
      title: "Cookies",
      content:
        "Our website uses cookies to enhance user experience. By continuing to use our site, you agree to the use of cookies. You can disable them in your browser settings.",
    },
    {
      title: "Data Security",
      content:
        "We implement technical and organizational measures to safeguard your data against unauthorized access, loss, or alteration.",
    },
   
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen px-6 pt-44 pb-16 bg-gradient-to-br from-black via-yellow-500 to-black text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {dataPoints.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <h2 className="text-xl font-bold text-black mb-3">{item.title}</h2>
            <p className="text-gray-800 leading-relaxed">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DataProtection;
