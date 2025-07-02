import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const professionals = [
  {
    title: "Project Managers",
    certification: "Certified PMP, COREN registered",
  },
  {
    title: "Quantity Surveyors",
    certification: "NIQS Certified (Nigerian Institute of Quantity Surveyors)",
  },
  {
    title: "Site Managers & Supervisors",
    certification: "CORBON Certified, NIQS & NSE Affiliated",
  },
  {
    title: "Health & Safety Officers",
    certification: "ISPON, IOSH & NEBOSH Certified",
  },
  {
    title: "Civil Engineers",
    certification: "COREN Registered, NSE Members",
  },
  {
    title: "Architects & Design Consultants",
    certification: "NIA Certified, ARCON Registered",
  },
  {
    title: "Skilled Tradespeople",
    certification: "Trained by Nigerian Construction Academies (NCA)",
  },
  {
    title: "Mechanical & Electrical Engineers",
    certification: "COREN Registered, NSE Certified",
  },
  {
    title: "Construction Technicians",
    certification: "Certified by Nigerian Building & Road Research Institute",
  },
  {
    title: "General Labourers",
    certification: "Vetted & trained by local labour unions",
  },
  {
    title: "Painters",
    certification:
      "Trained and certified under FOCI and professional trade unions",
  },
  {
    title: "Interior Designers",
    certification:
      "Certified by Interior Designers Association of Nigeria (IDAN)",
  },
];

const HireProfessionals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-black via-yellow-400 to-black text-white py-16 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Hire Top-Tier Construction Professionals – Anytime, Anywhere
        </h2>
        <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
          At Parker Integrated Engineering Ltd, we offer access to a pool of
          highly skilled and nationally certified professionals ready to meet
          your project needs — from groundbreaking to completion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {professionals.map((pro, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-black p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                {pro.title}
              </h3>
              <p className="text-gray-800">{pro.certification}</p>
            </motion.div>
          ))}
        </div>

        {/* Hire Now Button - pushed slightly above */}
        <div className="text-center mb-12">
          <Link to="/hire-now-form">
            <button className="mt-2 px-8 py-3 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-300 transition">
              Hire Now
            </button>
          </Link>
        </div>

        <div className="text-center bg-white text-black py-10 rounded-xl shadow-inner mb-8">
          <h3 className="text-2xl font-semibold mb-4">Just a Call Away</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Need dependable experts on site fast? We’re just a call away. Get in
            touch now and let us deliver the right professionals for your job —
            on time and ready to perform.
          </p>
          <div className="text-lg space-y-2">
            <p>
              📞 Call us on:{" "}
              <span className="font-bold">+234 9035415114</span>
            </p>
            <p>
              📧 Email: <span className="font-bold">contact@parkereng.com</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HireProfessionals;
