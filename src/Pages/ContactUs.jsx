import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-gradient-to-b from-black via-yellow-400 to-black text-white pt-[180px] pb-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info Card */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 40 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-black/70 backdrop-blur-lg rounded-xl shadow-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-yellow-300 mb-6">
            Contact Us
          </h2>
          <p className="mb-4 text-lg text-white font-semibold">
            Parker Integrated Engineering LTD
          </p>
          <p className="flex items-center mb-3 text-gray-100">
            <FaMapMarkerAlt className="mr-3 text-yellow-300" />
            Plot 208 Zakari Maimalari Street, Gateway Plaza, Central Area, Abuja
            FCT
          </p>
          <p className="flex items-center mb-3 text-gray-100">
            <FaPhoneAlt className="mr-3 text-yellow-300" />
            +234 9035415114
          </p>
          <p className="flex items-center mb-6 text-gray-100">
            <FaEnvelope className="mr-3 text-yellow-300" />
            info@parkerengineering.com
          </p>

          <div className="flex items-center gap-6 text-2xl mt-4">
            <a
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com/parkerengineering"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>

        {/* Google Map Card */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 40 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/70 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden"
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=Plot+208+Zakari+Maimalari+Street,+Gateway+Plaza,+Central+Area,+Abuja+FCT&output=embed"
            width="100%"
            height="100%"
            className="w-full h-[400px] rounded-xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
