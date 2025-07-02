import React from "react";
import { motion, useInView } from "framer-motion";
import Image1 from "../assets/Background16.jpg";
import Image2 from "../assets/Background20.jpg";
import Image3 from "../assets/Background18.jpg";
import Image4 from "../assets/Background26.jpg";
import Image5 from "../assets/Background17.jpg";
import Image6 from "../assets/Background24.jpg";
import Image7 from "../assets/Background21.jpg";
import Image8 from "../assets/Background22.jpg";
import Image9 from "../assets/Background23.jpg";
import Image10 from "../assets/Background25.jpg";
import Image11 from "../assets/Background27.jpg";
import Image12 from "../assets/Background19.jpg";
import Image13 from "../assets/Bridge2.jpg";
import Image14 from "../assets/Road1.jpg";
import Image15 from "../assets/Road3.jpg";
import Image16 from "../assets/Bridge1.jpg";
import Image17 from "../assets/RoadGutter.jpg";
import Image18 from "../assets/Road4.jpg";

const ProjectGallery = () => {
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
  ];

  const galleryItems = Array.from({ length: 18 }, (_, i) => ({
    caption: `Gallery Image ${i + 1}`,
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
        Project Gallery
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-4">
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-yellow-800 text-center">
              {item.caption}
            </h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectGallery;
