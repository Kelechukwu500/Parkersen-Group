import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Blog6 = () => {
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
        <h2>How Construction Drives Nigeria's Economy</h2>
        <p>
          The construction industry creates jobs, boosts local suppliers, and
          supports infrastructure needed for national development.
        </p>
        <p>
          As Nigeria grows, sustainable and large-scale construction projects
          will continue to be economic drivers across sectors.
        </p>
        <p className="mb-4">
          Construction plays a critical role in stimulating Nigeria’s economy
          through direct and indirect channels. It employs millions of skilled
          and unskilled laborers, from engineers and architects to masons,
          electricians, and transporters. These jobs provide incomes that fuel
          consumer spending, especially in urban and semi-urban areas.
        </p>
        <p className="mb-4">
          Beyond labor, the sector generates significant demand for local
          industries such as cement manufacturing, steel production, paints,
          plumbing materials, and aggregates. This boosts domestic production,
          reduces reliance on imports, and strengthens industrial growth within
          the country.
        </p>
        <p className="mb-4">
          Infrastructure development—roads, bridges, housing, water systems,
          schools, and hospitals—creates the backbone of national development.
          Modern infrastructure enhances trade, reduces travel time, improves
          access to services, and attracts foreign and local investments into
          new regions.
        </p>
        <p className="mb-4">
          Additionally, the construction sector attracts foreign direct
          investment (FDI), especially in public-private partnerships (PPP) for
          large-scale projects such as airports, railways, and energy
          facilities. These projects inject capital into the economy and support
          long-term development goals.
        </p>
        <p>
          As Nigeria continues to urbanize, the demand for commercial buildings,
          residential estates, and infrastructure will rise sharply. Strategic
          investments in the construction sector—especially in sustainable and
          smart infrastructure—will accelerate economic diversification and
          position Nigeria as a major economic force in Sub-Saharan Africa.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Blog6;
