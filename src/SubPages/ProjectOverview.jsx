import React from "react";
import { motion, useInView } from "framer-motion";
import Image1 from "../assets/Background.jpg";
import Image2 from "../assets/Background2.jpg";
import Image3 from "../assets/Background5.jpg";
import Image4 from "../assets/Background4.jpg";
import Image5 from "../assets/Background10.jpg";
import Image6 from "../assets/Background13.jpg";
import Image7 from "../assets/Background14.jpg";
import Image8 from "../assets/Background15.jpg";
import Image9 from "../assets/Background11.jpg";
import Image10 from "../assets/Background9.jpg";
import Image11 from "../assets/Background8.jpg";
import Image12 from "../assets/Background3.jpg";
import Image13 from "../assets/Bridge2.jpg";
import Image14 from "../assets/Road1.jpg";
import Image15 from "../assets/Road3.jpg";
import Image16 from "../assets/Bridge1.jpg";
import Image17 from "../assets/RoadGutter.jpg";
import Image18 from "../assets/Road4.jpg";
import Image19 from "../assets/NPA1.jpg";
import Image20 from "../assets/NPA6.jpg";
import Image21 from "../assets/NPA3.jpg";

const ProjectOverview = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
  ];

  const projects = Array.from({ length: 21 }, (_, i) => ({
    title: `Project ${i + 1}`,
    description: `Insight into the Project ${
      i + 1
    }. We executed it with excellence and attention to detail.`,
    image: images[i],
  }));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="min-h-screen pt-44 pb-16 px-6 bg-gradient-to-b from-black via-yellow-400 to-black"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Project Overview
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 text-base leading-6">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectOverview;
