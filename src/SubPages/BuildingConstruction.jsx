import React from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Image1 from "../assets/Background16.jpg";
import Image2 from "../assets/Background20.jpg";
import Image3 from "../assets/Background18.jpg";
import Image4 from "../assets/Background26.jpg";

const BuildingConstruction = () => {
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
            alt="Construction Service"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Comprehensive Construction Services
          </h2>
          <p className="text-gray-700 text-base leading-7">
            At Parker Integrated Engineering LTD, we specialize in full-scale
            building construction projects. Whether you're developing luxury
            residences, commercial complexes, or public infrastructure, our team
            provides expert planning, execution, and quality control throughout
            every phase of construction. We bring your vision to life using
            modern equipment, sustainable practices, and cutting-edge design
            solutions tailored to your needs.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image2}
            alt="Workforce & Delivery"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Skilled Workforce & Project Delivery
          </h2>
          <p className="text-gray-700 text-base leading-7">
            Our highly skilled engineers, architects, and builders work
            collaboratively to ensure each structure is safe, functional, and
            built to last. With a commitment to meeting deadlines and budgets,
            we’ve earned a reputation for integrity and excellence across the
            industry. We also implement strict safety standards to protect lives
            and property on all sites.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image3}
            alt="Innovation & Durability"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Innovation Meets Durability
          </h2>
          <p className="text-gray-700 text-base leading-7">
            Using advanced building materials and innovative construction
            methods, we deliver structures that are not only visually appealing
            but also durable and environmentally responsible. From green
            buildings to modern smart homes, we adapt to trends while upholding
            uncompromised quality standards.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image4}
            alt="Client Centered"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Client-Centered Approach
          </h2>
          <p className="text-gray-700 text-base leading-7">
            At the heart of our construction services is our dedication to
            client satisfaction. We listen, advise, and collaborate with our
            clients throughout the project lifecycle, ensuring the final outcome
            aligns perfectly with their expectations and aspirations.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BuildingConstruction;
