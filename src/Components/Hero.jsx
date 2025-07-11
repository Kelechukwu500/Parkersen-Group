import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image from "../assets/Background.jpg";

const HeroFeatures = lazy(() => import("./HeroFeatures"));

import img1 from "../assets/Background15.jpg";
import img2 from "../assets/Background24.jpg";
import img3 from "../assets/Background20.jpg";
import img4 from "../assets/Background25.jpg";
import img5 from "../assets/Background21.jpg";
import img6 from "../assets/Background20.jpg";

const Hero = () => {
  const [scale, setScale] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const carouselRef = useRef(null);
  const cardRef = useRef(null);
  const carouselInView = useInView(carouselRef, { once: true });
  const cardInView = useInView(cardRef, { once: true });

  const carouselImages = [
    {
      src: img1,
      caption: "Our Signature Project in Ezinitte, Mbaise, Imo State",
    },
    { src: img2, caption: "World-Class Facility In Gbagada, Kosefe, Lagos" },
    {
      src: img3,
      caption:
        "Our Modern Structural Engineering Excellence In Apo, Abuja, FCT",
    },
    {
      src: img4,
      caption:
        "Our Expert-Led Construction & Infrastructure in Lekki, Phase2, Lagos",
    },
    {
      src: img5,
      caption:
        "Premium Private Structural Project Executed in Garki, Abuja, FCT",
    },
    {
      src: img6,
      caption: "Contemporary Architectural Gem Completed in Egbeda, Lagos",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setScale(1.05), 1000);
    const autoplay = setInterval(() => handleNext(), 5000);
    return () => {
      clearTimeout(timer);
      clearInterval(autoplay);
    };
  }, [currentImage]);

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <div
        className="relative text-white mt-0 md:mt-[108px] pb-20 overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #000000, #facc15, #000000)",
        }}
      >
        <img
          src={image}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out"
          style={{ transform: `scale(${scale})`, zIndex: 0, opacity: 0.3 }}
        />

        <section className="relative h-screen">
          <div className="container mx-auto px-5 py-16 md:py-24 relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-y-12 md:gap-y-0">
            {/* LEFT */}
            <div className="w-full md:w-1/2 mt-[-40px]">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black drop-shadow-md">
                Innovation in Partnership <br />
                <span className="text-yellow-500">Advancing Together</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-800 font-medium">
                We deliver modern construction, civil infrastructure, and
                engineering excellence with innovation, expertise, and trusted
                delivery.
              </p>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/projects">
                    <button className="bg-black-500 hover:bg-white-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
                      Projects
                    </button>
                  </Link>
                  <Link to="/contact-us">
                    <button className="bg-black-500 hover:bg-white-600 text-white font-semibold px-6 py-3 rounded-xl shadow-xl">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full md:w-2/5 mt-10 md:mt-[-40px]">
              <div className="bg-black/60 backdrop-blur-md text-white rounded-xl p-8 shadow-2xl">
                <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
                  Why Choose Us?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span> Innovative
                    engineering & modern tech
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>{" "}
                    Professional, certified construction experts
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span> Quality
                    assurance with timely delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Motion Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full px-4 mt-10 md:-mt-16 z-10 relative"
        />
      </div>

      {/* FULLSCREEN VIDEO SECTION */}
      <div className="w-full h-screen">
        <video controls className="w-full h-full object-cover">
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* HERO FEATURES */}
      <Suspense
        fallback={
          <div className="text-white text-center py-8">Loading Features...</div>
        }
      >
        <HeroFeatures />
      </Suspense>

      {/* CAROUSEL */}
      <section
        className={`className="w-full h-full object-cover transition-opacity duration-700"
          ${isFullscreen ? "fixed inset-0 z-50 bg-black" : ""}`}
      >
        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0, y: 50 }}
          animate={carouselInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative w-full"
        >
          <div className="relative w-full">
            <img
              src={carouselImages[currentImage].src}
              alt={`Slide ${currentImage + 1}`}
              className="w-full h-[80vh] object-cover transition-opacity duration-700"
            />
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4"
            >
              {carouselImages[currentImage].caption}
            </motion.div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-3 w-full flex justify-center gap-2">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full ${
                    currentImage === idx ? "bg-yellow-400" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded-md text-sm shadow"
            >
              {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
