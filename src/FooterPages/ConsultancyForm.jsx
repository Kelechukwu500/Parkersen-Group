import React, { useState, useRef } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { motion, useInView } from "framer-motion";
import db from "../Firebase"; // ensure correct Firebase config path

const ConsultancyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "consultancy_requests"), {
        ...formData,
        submittedAt: Timestamp.now(),
      });
      setSuccess("Your consultancy request has been submitted successfully.");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setSuccess("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen px-6 py-24 bg-gradient-to-b from-black via-yellow-500 to-black text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto bg-black bg-opacity-70 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">
          Request Professional Consultancy
        </h2>
        <p className="mb-6 text-white text-lg">
          Submit your consultancy request below. Our experts will reach out to
          you shortly with guidance tailored to your project needs.
        </p>

        {success && <p className="mb-4 text-green-400">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-300 focus:outline-none focus:border-yellow-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-300 focus:outline-none focus:border-yellow-500"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-300 focus:outline-none focus:border-yellow-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-300 focus:outline-none focus:border-yellow-500"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="service"
            placeholder="Type of Consultancy (e.g. Civil, Project Mgmt)"
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-300 focus:outline-none focus:border-yellow-500"
            value={formData.service}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Describe your project or need..."
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-300 focus:outline-none focus:border-yellow-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-yellow-400 text-white font-bold rounded-md hover:bg-yellow-300 transition"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ConsultancyForm;
