import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const directors = [
  {
    name: "Mr. Charles Agbakahi",
    position: "Chief Executive Officer",
    description:
      "With a visionary mindset and a wealth of experience in engineering and corporate leadership, Mr. Charles Agbakahi has led Parker Integrated Engineering LTD to become a respected force in the construction industry. His strategic foresight, commitment to quality, and unwavering drive for innovation have been pivotal in delivering landmark projects across Nigeria. As CEO, he inspires a culture of excellence, integrity, and sustainability.",
    image: "https://via.placeholder.com/300x300", // Placeholder image
  },
  {
    name: "Mr. Ambrose Uzokwe",
    position: "Executive Director",
    description:
      "Mr. Ambrose Uzokwe brings a rich background in project execution and operational leadership. As Executive Director, he ensures that Parker Integrated Engineering LTD’s projects are executed efficiently and to the highest standards. His attention to detail, dedication to client satisfaction, and hands-on approach have made him a key pillar in the company’s growth and success.",
    image: "https://via.placeholder.com/300x300", // Placeholder image
  },
];

const BoardOfDirectors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen px-4 py-20 bg-gradient-to-b from-black via-yellow-400 to-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400">Directors</h2>
      </div>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4"
      >
        {directors.map((director, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="bg-black/70 text-white rounded-2xl shadow-xl overflow-hidden"
          >
            <img
              src={director.image}
              alt={director.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-400">
                {director.name}
              </h3>
              <p className="text-md italic mb-2">{director.position}</p>
              <p className="text-base leading-relaxed">
                {director.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BoardOfDirectors;
