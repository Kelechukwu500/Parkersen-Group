import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Blog2 = () => {
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
        <h2>Urban Development Challenges in Nigerian Cities</h2>
        <p>
          Rapid urban growth has led to overcrowded housing, traffic congestion,
          and inadequate infrastructure in cities like Lagos, Port Harcourt, and
          Abuja.
        </p>
        <p>
          Strategic planning, smart zoning, and integrated building solutions
          are essential to meet the demands of growing populations while
          preserving quality of life.
        </p>
        <p>
          One of the critical challenges is the unplanned expansion of informal
          settlements. With housing demand far exceeding supply, many Nigerians
          are forced to live in slums without access to basic services like
          clean water, electricity, and waste management. This puts immense
          pressure on public infrastructure and contributes to public health
          risks.
        </p>
        <p>
          Transportation systems are also struggling to keep up with the pace of
          urbanization. Congested roads, poor public transit options, and
          inadequate pedestrian walkways have made commuting a major concern in
          metropolitan areas. Investment in efficient mass transit systems is
          necessary to ease mobility and reduce environmental impact.
        </p>
        <p>
          Additionally, poor urban governance and inconsistent enforcement of
          building regulations allow for uncontrolled development, often in
          flood-prone or environmentally sensitive zones. Cities must adopt
          comprehensive masterplans that prioritize sustainability, resilience,
          and inclusive growth.
        </p>
        <p>
          Addressing urban development challenges in Nigeria requires
          collaboration between government, private developers, and communities.
          Infrastructure must be expanded strategically, with a focus on
          affordable housing, green spaces, and smart city technologies to
          create livable and future-ready urban environments.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Blog2;
