import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-screen relative -mt-4 text-white overflow-hidden">
      {/* Interception line (diagonal white cut) */}
      <div
        className="absolute -top-10 left-0 w-full h-24 bg-white z-10"
        style={{
          clipPath: "polygon(0 100%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      ></div>

      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-black via-yellow-500 to-black"></div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Left: Copyright */}
          <div className="text-sm">
            © {new Date().getFullYear()} Parkersen Group. <br />
            All rights reserved.
          </div>

          {/* Center: Page Links (pushed down) */}
          <div className="flex flex-col text-sm space-y-2 text-center md:text-left mt-4">
            <Link to="/contact-form" className="text-white hover:underline">
              Contact
            </Link>
            <Link to="/data-protection" className="text-white hover:underline">
              Data Protection
            </Link>
            <Link to="/career" className="text-white hover:underline">
              Career
            </Link>
            <Link to="/sitemap" className="text-white hover:underline">
              Sitemap
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://parkerintegrated.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-white text-xl hover:text-blue-300" />
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://parkerintegrated.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-white text-xl hover:text-blue-300" />
            </a>
            <a
              href="https://wa.me/2349035415114?text=Hello%20Parker%20Integrated%20Services!%20I%27d%20love%20to%20learn%20more%20about%20your%20company%20and%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-white text-xl hover:text-green-400" />
            </a>
            <a
              href="https://twitter.com/intent/tweet?text=Hello%20Parker%20Integrated%20Services!%20Can%20we%20strike%20a%20deal?%20Check%20out%20their%20website%20https://parkerintegrated.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-white text-xl hover:text-blue-400" />
            </a>
            <a
              href="https://www.instagram.com/direct/t/17843042747087223/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white text-xl hover:text-pink-400" />
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
