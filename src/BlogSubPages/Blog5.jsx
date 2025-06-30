import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Blog5 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      className="min-h-screen pt-44 pb-16 px-6 bg-gradient-to-br from-black via-yellow-500 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>Building Materials: What Works Best in Nigeria?</h2>
        <p>
          Choosing durable materials like reinforced concrete, aluminum roofing,
          and treated wood helps structures withstand heat, humidity, and soil
          shifts.
        </p>
        <p>
          Our projects prioritize both quality and availability of materials for
          cost-effective, resilient construction.
        </p>
        <p className="mb-4">
          The Nigerian climate and terrain demand construction materials that
          can perform under extreme environmental stress. In high-rainfall zones
          like the South-South, moisture resistance is key. Reinforced concrete
          with proper water-cement ratios is widely used for its strength and
          longevity, especially in foundations and structural frameworks.
        </p>
        <p className="mb-4">
          Roofing is another critical element. Aluminum and stone-coated metal
          sheets are preferred for their resistance to corrosion, light weight,
          and ease of installation. They also reflect heat, reducing indoor
          temperatures and minimizing cooling costs.
        </p>
        <p className="mb-4">
          Walling materials vary by region. In urban areas, sandcrete blocks are
          common, while laterite bricks are often used in rural settings due to
          their availability and low cost. For premium projects, pre-cast panels
          and insulated blocks offer modern thermal performance and acoustic
          benefits.
        </p>
        <p className="mb-4">
          Timber is still relevant in roofing trusses, doors, and furniture.
          However, only treated and seasoned hardwoods—such as iroko and
          mahogany—should be used to resist termites, rot, and warping.
        </p>
        <p>
          Ultimately, the best building materials in Nigeria are those that
          combine local suitability with durability and availability. At Parker
          Integrated Engineering LTD, our material selections are based on
          proven performance, ease of maintenance, and the long-term value they
          bring to each construction project.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Blog5;
