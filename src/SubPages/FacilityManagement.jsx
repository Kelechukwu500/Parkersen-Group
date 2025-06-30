import React from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Image1 from "../assets/Background25.jpg";
import Image2 from "../assets/Background26.jpg";
import Image3 from "../assets/Solar1.jpg";
import Image4 from "../assets/Fire1.jpg";

const FacilityManagement = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="min-h-screen pt-44 pb-16 px-6 bg-gradient-to-br from-black via-yellow-400 to-black"
    >
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image1}
            alt="Total Facility Management"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Total Facility Management
          </h2>
          <p className="text-gray-700 text-base leading-7">
            Parker Integrated Engineering LTD offers total facility management
            services designed to optimize your building operations. From daily
            janitorial services to technical maintenance, we provide seamless,
            centralized solutions that ensure maximum uptime and minimal
            disruption to your business.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image2}
            alt="Preventive Maintenance"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Preventive & Reactive Maintenance
          </h2>
          <p className="text-gray-700 text-base leading-7">
            We combine both preventive and reactive maintenance approaches to
            protect your building systems. Regular inspections, timely repairs,
            and smart asset tracking tools help us prevent breakdowns and extend
            the lifespan of your infrastructure.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image3}
            alt="Energy & Utility Efficiency"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Energy & Utility Efficiency
          </h2>
          <p className="text-gray-700 text-base leading-7">
            Our facility managers implement energy-saving strategies that reduce
            operational costs and environmental impact. By auditing energy
            usage, optimizing HVAC systems, and using automation tools, we help
            you achieve sustainability goals while lowering utility bills.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image4}
            alt="Emergency Response & Safety"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Emergency Response & Safety
          </h2>
          <p className="text-gray-700 text-base leading-7">
            We offer 24/7 emergency services to resolve unexpected facility
            issues promptly. From fire safety systems and plumbing bursts to
            power outages, our team is trained to respond fast and effectively
            to minimize downtime and risk.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FacilityManagement;
