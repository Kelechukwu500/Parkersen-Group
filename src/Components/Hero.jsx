import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image from "../assets/Background.jpg";

// Lazy load HeroFeatures for code splitting
const HeroFeatures = lazy(() => import("./HeroFeatures"));

// Carousel Images
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
  const carouselInView = useInView(carouselRef, { once: true });

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
      <section className="relative text-white mt-[160px] h-screen overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom right, #000000, #facc15, #000000)",
          }}
        ></div>

        <img
          src={image}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out"
          style={{ transform: `scale(${scale})`, zIndex: 0, opacity: 0.3 }}
        />

        <div className="container mx-auto px-5 py-16 md:py-24 relative z-10 h-full flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black drop-shadow-md">
              Innovation in Partnership <br />
              <span className="text-yellow-500">Advancing Together</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-800 font-medium">
              We deliver modern construction, civil infrastructure, and
              engineering excellence with innovation, expertise, and trusted
              delivery.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <button className="bg-white-500 hover:bg-white-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
                  Projects
                </button>
              </Link>
              <Link to="/contact-us">
                <button className="border border-white text-white hover:bg-white hover:text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-2/5 mt-12 md:mt-0">
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
                  <span className="text-yellow-400 mr-2">✓</span> Professional,
                  certified construction experts
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span> Quality
                  assurance with timely delivery
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Suspense wrapper for lazy HeroFeatures */}
      <Suspense
        fallback={
          <div className="text-white text-center py-8">Loading Features...</div>
        }
      >
        <HeroFeatures />
      </Suspense>

      <section
        className={`w-screen overflow-hidden mt-20 ${
          isFullscreen ? "fixed inset-0 z-50 bg-black" : ""
        }`}
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

            {/* Centered Animated Caption */}
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
