import React from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Image1 from "../assets/Background24.jpg";
import Image2 from "../assets/Steel1.jpg";
import Image3 from "../assets/Background18.jpg";
import Image4 from "../assets/Background21.jpg";

const StructuralEngineering = () => {
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
            alt="Structural Design"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Structural Design & Analysis
          </h2>
          <p className="text-gray-700 text-base leading-7">
            At Parker Integrated Engineering LTD, we specialize in designing
            robust and sustainable structural systems. Our team uses
            state-of-the-art modeling software to analyze forces, stress points,
            and stability to ensure the integrity of each project. From
            foundations to framing systems, every design is optimized for
            durability and efficiency.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image2}
            alt="Steel and Concrete Structures"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Steel & Concrete Structures
          </h2>
          <p className="text-gray-700 text-base leading-7">
            Whether it’s steel-framed skyscrapers or reinforced concrete
            bridges, we have the expertise to engineer both traditional and
            modern structural solutions. Our designs are tailored to meet local
            building codes while withstanding environmental stresses like wind,
            earthquakes, and heavy loads.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image3}
            alt="Construction Supervision"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Construction Support & Supervision
          </h2>
          <p className="text-gray-700 text-base leading-7">
            We don’t just design—we partner with clients during the construction
            phase to ensure flawless execution. Our engineers conduct on-site
            inspections, adapt designs in real-time, and verify compliance at
            every stage, ensuring that your project progresses safely and
            smoothly.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image4}
            alt="Sustainable Structural Solutions"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Innovative & Sustainable Solutions
          </h2>
          <p className="text-gray-700 text-base leading-7">
            With a focus on innovation, we apply modern techniques like
            pre-stressed concrete, composite systems, and energy-efficient
            structural designs. Our goal is to build smart, sustainable
            structures that reduce environmental impact without sacrificing
            strength or beauty.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default StructuralEngineering;
