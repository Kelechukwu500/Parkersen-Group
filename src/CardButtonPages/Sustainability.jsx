import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// Placeholder Images
import img1 from "../assets/Background16.jpg";
import img2 from "../assets/Impact.jpg";
import img3 from "../assets/hse.jpg";
import img4 from "../assets/HumanCapital.jpg";
import img5 from "../assets/CommunityService1.jpg";

const Sustainability = () => {
  const refs = Array.from({ length: 5 }, () => useRef(null));
  const views = refs.map((ref) => useInView(ref, { once: true }));

  return (
    <section className="bg-gradient-to-br from-black via-yellow-500 to-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center">Sustainability</h2>

        {/* Card 1: A Force for Progress */}
        <motion.div
          ref={refs[2]}
          initial={{ opacity: 0, x: -50 }}
          animate={views[2] ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row items-center gap-6"
        >
          <img
            src={img1}
            alt="Progress"
            className="w-full md:w-1/3 max-h-64 object-cover rounded-xl shadow-lg"
          />
          <div className="bg-black/70 rounded-xl p-8 shadow-xl w-full">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              A Force for Progress
            </h3>
            <p className="text-lg mb-6">
              Parker Integrated Engineering LTD continues to lead with
              innovation, responsibility, and inclusive development. We
              integrate sustainability into every layer of our strategy, setting
              the benchmark for socially-conscious engineering in Nigeria. We
              champion resilience and long-term impact by embedding ESG values
              in our projects, planning, and partnerships.
            </p>
            <Link to="/policies/sustainability-report">
              <button className="bg-yellow-400 text-white font-bold px-6 py-2 rounded-lg">
                Sustainability Report 2023
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Card 2: Enabling Progress. Extending Impact */}
        <motion.div
          ref={refs[2]}
          initial={{ opacity: 0, x: -50 }}
          animate={views[2] ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row items-center gap-6"
        >
          <img
            src={img2}
            alt="Impact"
            className="w-full md:w-1/3 max-h-64 object-cover rounded-xl shadow-lg"
          />
          <div className="bg-black/70 rounded-xl p-8 shadow-xl w-full">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              Enabling Progress. Extending Impact
            </h3>
            <p className="text-lg">
              Through every structure we build and every service we provide, we
              empower communities and businesses to thrive. Our projects leave a
              lasting footprint that stretches beyond concrete — into education,
              health, jobs, and innovation. We collaborate with public and
              private partners to magnify positive outcomes.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Health Safety & Environment */}
        <motion.div
          ref={refs[2]}
          initial={{ opacity: 0, x: -50 }}
          animate={views[2] ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row items-center gap-6"
        >
          <img
            src={img3}
            alt="HSE"
            className="w-full md:w-1/3 max-h-64 object-cover rounded-xl shadow-lg"
          />
          <div className="bg-black/70 rounded-xl p-8 shadow-xl w-full">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              Health Safety & Environment
            </h3>
            <p className="text-lg mb-6">
              Our HSE policies prioritize the safety of our workforce,
              environment, and host communities. Every project is executed with
              strict adherence to international safety and environmental
              standards. We ensure all personnel are trained and equipped to
              minimize risks while maintaining operational efficiency.
            </p>
            <Link to="/policies/hse-policy">
              <button className="bg-yellow-400 text-white font-bold px-6 py-2 rounded-lg">
                HSE Policy
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Card 4: Human Capital Development */}
        <motion.div
          ref={refs[3]}
          initial={{ opacity: 0, x: 50 }}
          animate={views[3] ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row items-center gap-6"
        >
          <img
            src={img4}
            alt="Human Capital"
            className="w-full md:w-1/3 max-h-64 object-cover rounded-xl shadow-lg"
          />
          <div className="bg-black/70 rounded-xl p-8 shadow-xl w-full">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              Human Capital Development
            </h3>
            <p className="text-lg">
              We invest in people. Our staff undergo international and local
              training, acquiring certifications and leadership skills to match
              industry demands. Our development culture ensures a smarter,
              safer, and more effective workforce. We create career pathways and
              mentorship opportunities that empower our employees to grow and
              lead within and beyond the organization.
            </p>
          </div>
        </motion.div>

        {/* Card 5: Community Development */}
        <motion.div
          ref={refs[4]}
          initial={{ opacity: 0, y: 40 }}
          animate={views[4] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row items-center gap-6"
        >
          <img
            src={img5}
            alt="Community"
            className="w-full md:w-1/3 max-h-64 object-cover rounded-xl shadow-lg"
          />
          <div className="bg-black/70 rounded-xl p-8 shadow-xl w-full">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              Community Development
            </h3>
            <p className="text-lg">
              We actively engage and uplift our host communities. From building
              access roads and classrooms to providing clean water and job
              opportunities, our social impact footprint is deep, meaningful,
              and enduring. We believe development must be inclusive and
              community-driven, and we work collaboratively with local leaders
              to achieve shared progress.
            </p>
          </div>
        </motion.div>

        {/* Final Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <h4 className="text-3xl font-semibold italic">
            Solving Your Construction Needs with Innovation
          </h4>
        </motion.div>

        {/* Contact Us Button */}
        <div className="text-center mt-10">
          <Link to="/contact-us">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
