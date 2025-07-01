import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Career = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const card = {
    title: "Career Opportunities",
    text: "We appreciate your interest in joining our team. At the moment, we are not recruiting. Please check back later or follow us on our social media platforms for updates.\n\nParker Integrated Engineering Limited is committed to building a world-class workforce driven by innovation, ethics, and professionalism. Although we are not currently hiring, we regularly open opportunities for civil engineers, architects, project managers, and administrative support roles. We encourage prospective candidates to stay connected with us for future announcements.",
  };

  const helloMessage = encodeURIComponent(
    "Hello, I want to learn more about Parker Integrated Services"
  );

  return (
    <section
      ref={ref}
      className="min-h-screen px-6 pt-44 pb-16 bg-gradient-to-br from-black via-yellow-500 to-black text-white"
    >
      <motion.div
        className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">
          {card.title}
        </h2>
        <p className="text-lg leading-relaxed whitespace-pre-line mb-6">
          {card.text}
        </p>

        <div className="flex justify-center gap-5 mt-4">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://parkerintegrated.com&summary=${helloMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn: Hello, I want to learn more about Parker Integrated Engineering Limited"
          >
            <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://parkerintegrated.com&quote=${helloMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook: Hello, I want to learn more about Parker Integrated Engineering Limited"
          >
            <FaFacebook className="text-2xl text-blue-600 hover:text-blue-700" />
          </a>
          <a
            href={`https://wa.me/2349035415114?text=${helloMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp: Hello, I want to learn more about Parker Integrated Engineering Limited"
          >
            <FaWhatsapp className="text-2xl text-green-500 hover:text-green-600" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${helloMessage}%20https://parkerintegrated.com`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Twitter: Hello, I want to learn more about Parker Integrated Engineering Limited"
          >
            <FaTwitter className="text-2xl text-blue-400 hover:text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/direct/t/17843042747087223/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram: Hello, I want to learn more about Parker Integrated Engineering Limited"
          >
            <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Career;
