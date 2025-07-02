import React, { useState, useRef } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { motion, useInView } from "framer-motion";
import db from "../Firebase"; // adjust the path to your firebase config

const HireNowForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    location: "",
    startDate: "",
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
      await addDoc(collection(db, "hire_requests"), {
        ...formData,
        submittedAt: Timestamp.now(),
      });
      setSuccess("Your hiring request has been submitted successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        location: "",
        startDate: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setSuccess("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen px-6 py-24 bg-gradient-to-b from-black via-yellow-400 to-black text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-black bg-opacity-80 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">
          Hire a Construction Professional
        </h2>
        <p className="mb-6 text-white text-lg">
          Submit your request to hire skilled professionals. Our team will reach
          out quickly to confirm availability and logistics.
        </p>

        {success && <p className="mb-4 text-green-400">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-400 focus:outline-none focus:border-yellow-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-400 focus:outline-none focus:border-yellow-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-400 focus:outline-none focus:border-yellow-500"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Role Required (e.g. Site Engineer, Project Manager)"
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-400 focus:outline-none focus:border-yellow-500"
            value={formData.role}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Project Location"
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-400 focus:outline-none focus:border-yellow-500"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-400 focus:outline-none focus:border-yellow-500"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Additional Requirements or Comments..."
            className="w-full px-4 py-2 bg-white text-black border-b border-gray-400 focus:outline-none focus:border-yellow-500"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-yellow-400 text-white font-bold rounded-md hover:bg-yellow-300 transition"
          >
            {loading ? "Submitting..." : "Submit Hire Request"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default HireNowForm;
