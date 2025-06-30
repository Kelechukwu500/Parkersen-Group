import React from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Image1 from "../assets/Background24.jpg";
import Image2 from "../assets/Background21.jpg";
import Image3 from "../assets/Background19.jpg";
import Image4 from "../assets/Background22.jpg";

const ProjectManagement = () => {
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
            alt="Lifecycle Management"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Complete Lifecycle Management
          </h2>
          <p className="text-gray-700 text-base leading-7">
            At Parker Integrated Engineering LTD, our project management
            services span from initial concept development to project handover.
            We oversee planning, design coordination, execution, and final
            evaluation—ensuring nothing is overlooked during the project
            lifecycle. Our methodology focuses on minimizing waste, optimizing
            timelines, and aligning outcomes with client objectives.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image2}
            alt="Budget and Time Efficiency"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Budget & Time Efficiency
          </h2>
          <p className="text-gray-700 text-base leading-7">
            Time and cost are critical. Our managers implement advanced
            scheduling tools and financial tracking systems to maintain
            real-time oversight. We ensure optimal resource allocation and
            proactively manage risks that may cause delays or cost
            overruns—delivering on time and within budget without compromising
            quality.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image3}
            alt="Stakeholder Collaboration"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Stakeholder Collaboration
          </h2>
          <p className="text-gray-700 text-base leading-7">
            Success requires coordination. We serve as a single point of contact
            between clients, contractors, consultants, and vendors. Through
            regular reporting and open communication, we ensure that all
            stakeholders remain informed and aligned throughout the project.
            This approach minimizes misunderstandings and enhances trust.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src={Image4}
            alt="Quality and Compliance"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Quality and Compliance Focused
          </h2>
          <p className="text-gray-700 text-base leading-7">
            Our project management framework incorporates continuous quality
            checks and regulatory compliance. From health and safety audits to
            environmental impact monitoring, we adhere strictly to industry
            standards. Our proactive supervision guarantees that all work meets
            technical specifications and client expectations.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectManagement;
