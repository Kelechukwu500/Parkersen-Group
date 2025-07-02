import React, { useRef } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Consultancy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const encodedMessage = encodeURIComponent(
    "Hello, I’m interested in booking a session with you for an interactive consultancy chat. Kindly let me know the available options."
  );

  const cards = [
    {
      title: "Building Construction Consultancy",
      text: "We provide expert guidance in planning, designing, and executing your building projects efficiently and cost-effectively.",
    },
    {
      title: "Bridge & Road Construction Advisory",
      text: "From structural analysis to materials selection, our experts ensure safe and sustainable infrastructure solutions.",
    },
    {
      title: "Drainage & Gutter Engineering Solutions",
      text: "We assist in the planning and implementation of effective drainage and gutter systems for urban and rural projects.",
    },
    {
      title: "Supply Chain & Material Recommendations",
      text: "We guide you in sourcing the right construction materials and establishing a reliable supply chain for timely delivery.",
    },
    {
      title: "Concrete Reinforcement Analysis",
      text: "Get expert advice on reinforcement techniques for long-lasting and structurally sound concrete components.",
    },
    {
      title: "Project Cost Evaluation & Risk Management",
      text: "We help evaluate costs, manage risks, and ensure compliance with industry standards throughout your project.",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen mt-24 px-4 py-12 bg-gradient-to-b from-black via-yellow-500 to-black"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center text-white mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Parker Integrated Engineering LTD <br /> Consultancy Services
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          At Parker Integrated Engineering LTD, we bring decades of expertise in
          civil engineering to your doorstep. Our consultancy services are
          tailored to support your vision, offering expert guidance and
          practical solutions in all aspects of infrastructure development.
          Whether you're planning a residential project or a complex public
          works venture, we are your trusted partner.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              {card.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Contact & Social */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 text-center text-white"
      >
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <div className="flex justify-center gap-4 items-center mb-4 text-lg">
          <FaEnvelope className="text-yellow-300" />
          <a href="mailto:info@parkerengineering.com" className="underline">
            info@parkerengineering.com
          </a>
        </div>
        <div className="flex justify-center gap-4 items-center mb-8 text-lg">
          <FaPhoneAlt className="text-yellow-300" />
          <a href="tel:+2348012345678" className="underline">
            +234 903 541 5114
          </a>
        </div>

        <h4 className="text-xl font-semibold mb-3">
          Connect with us on Social Media
        </h4>
        <p className="mb-4">
          Click any icon below to send us a message or connect directly for your
          consultancy needs.
        </p>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
            title="Connect on LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
            title="Message us on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://wa.me/2349035415114?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href={`https://twitter.com/messages/compose?recipient_id=yourTwitterID&text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
            title="Message on Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400"
            title="Message on Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Consultancy;
