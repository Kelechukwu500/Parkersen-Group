import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "../assets/Sustainability.jpg"; // Replace with actual image

const SustainabilityReport = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-yellow-500 to-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-black/80 p-10 rounded-xl shadow-2xl flex flex-col md:flex-row gap-8 mt-10"
        >
          {/* Image Placeholder */}
          <img
            src={Image}
            alt="Sustainability Report"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-xl"
          />

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 text-center md:text-left">
              2023 Sustainability Report
            </h1>

            <div className="space-y-5 text-lg">
              <p>
                At <strong>Parker Integrated Services</strong>, sustainability
                is not an initiative — it is our operating principle. We are
                committed to engineering solutions that balance economic growth,
                environmental responsibility, and social impact.
              </p>

              <p>
                In 2023, we advanced key programs focused on renewable energy
                integration, eco-conscious construction practices, and community
                empowerment. Our commitment to Environmental, Social, and
                Governance (ESG) values is embedded in our business strategy.
              </p>

              <p>
                <strong>Environmental Responsibility:</strong> We minimized
                carbon footprint through efficient site operations, waste
                reduction, and eco-friendly material sourcing.
              </p>

              <p>
                <strong>Social Impact:</strong> We invested in clean water,
                education, and training for underserved communities.
              </p>

              <p>
                <strong>Governance:</strong> Transparency, ethics, and
                accountability drive our corporate culture, aligned with
                international best practices.
              </p>

              <p>
                Parker Integrated Services is building for a better future — one
                that respects people, planet, and prosperity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilityReport;
