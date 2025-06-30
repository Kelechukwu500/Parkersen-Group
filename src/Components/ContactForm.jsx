import React, { useState } from "react";

const ContactForm = () => {
  const [inquiryType, setInquiryType] = useState("");

  const handleInquiryChange = (e) => {
    setInquiryType(e.target.value);
  };

  return (
    <section className="min-h-screen px-6 py-24 bg-gradient-to-br from-black via-yellow-500 to-black text-white">
      <div className="max-w-3xl mx-auto bg-black bg-opacity-60 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-300 mb-6">Contact Us</h2>

        {/* Dropdown Section */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-white text-lg">
            Relations
          </label>
          <select
            value={inquiryType}
            onChange={handleInquiryChange}
            className="w-full px-4 py-2 bg-white text-black rounded-md"
          >
            <option value="">-- Select Inquiry Type --</option>
            <option value="General Inquiries">General Inquiries</option>
            <option value="Technical Inquiries">Technical Inquiries</option>
            <option value="Investors Inquiries">Investors Inquiries</option>
            <option value="Press Inquiries">Press Inquiries</option>
          </select>
        </div>

        {/* Subject Display */}
        {inquiryType && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-yellow-200">Subject:</h3>
            <p className="text-white">{inquiryType}</p>
          </div>
        )}

        {/* Form Fields */}
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white text-black"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              className="w-full px-4 py-2 rounded-md bg-white text-black"
              placeholder="Phone number"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-white text-black"
              placeholder="Email address"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded-md bg-white text-black"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 hover:bg-white-500 text-white font-bold rounded-md transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
