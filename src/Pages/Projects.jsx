import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import img1 from "../assets/Background14.jpg";
import img2 from "../assets/Background15.jpg";
import img3 from "../assets/Background10.jpg";
import img4 from "../assets/Background8.jpg";
import img5 from "../assets/Background3.jpg";
import img6 from "../assets/Background12.jpg";
import img7 from "../assets/Background13.jpg";
import img8 from "../assets/Background2.jpg";
import img9 from "../assets/Background5.jpg";
import img10 from "../assets/Background7.jpg";
import img11 from "../assets/Background11.jpg";
import img12 from "../assets/Background6.jpg";
import img13 from "../assets/Road1.jpg";
import img14 from "../assets/Road3.jpg";
import img15 from "../assets/Bridge1.jpg";
import img16 from "../assets/Bridge2.jpg";
import img17 from "../assets/NPA6.jpg";
import img18 from "../assets/NPA2.jpg";
import img19 from "../assets/RoadGutter.jpg";
import img20 from "../assets/Road4.jpg";

const projects = [
  {
    location: "Agbarho, Ughelli, Delta State",
    image: img1,
    description:
      "In Agbarho, Parker Integrated Services successfully commenced the foundation setting of an ultra-modern event hall designed to serve as a hub for social and corporate gatherings. This project marks a significant step toward enhancing community infrastructure and promoting economic activity in Delta State",
  },
  {
    location: "Ezinaihitte, Mbaise, Imo State",
    image: img2,
    description:
      "Our team delivered a cutting-edge school facility with state-of-the-art classrooms and eco-friendly utilities. The Ezinaihitte project symbolizes our dedication to educational infrastructure and community growth.",
  },
  {
    location: "Rumuokoro, Obio-Akpor, Rivers State",
    image: img3,
    description:
      "In the bustling city of Rumuokoro, we successfully completed a high-capacity commercial complex with integrated fire safety, water, and electrical systems, setting a new standard for commercial construction in the region.",
  },
  {
    location: "Egbeda, Alimosho, Lagos State",
    image: img4,
    description:
      "This ongoing modern residential estate in Egbeda will features premium finishes, solar integration, and smart building technologies, crafted with precision by our skilled engineers for urban comfort and elegance.",
  },
  {
    location: "Apo, Abuja FCT",
    image: img5,
    description:
      "Our Apo project is a flagship office building with contemporary architecture, efficient energy management, and impeccable structural integrity, standing tall as a symbol of innovation and excellence in the capital.",
  },
  {
    location: "Abajah, Nwangele, Imo State",
    image: img6,
    description:
      "We constructed a community health center in Abajah, equipped with modern medical facilities, water supply systems, and sustainable power solutions. This project reflects our commitment to rural development.",
  },
  {
    location: "Area A, New Owerri, Imo State",
    image: img7,
    description:
      "Our urban planning expertise came to life in New Owerri with a different innovation of a luxury apartment block designed for maximum light exposure, comfort, and security, enhancing city living standards.",
  },
  {
    location: "Zuba, Abuja FCT",
    image: img8,
    description:
      "In Zuba, we executed a shopping plaza redesign and reconstruction, incorporating local design sensibilities with modern facilities to boost commerce and enhance traders' convenience and safety.",
  },
  {
    location: "Gbagada, Kosofe, Lagos State",
    image: img9,
    description:
      "Ongoing foundation setting of a multipurpose event center in Gbagada, Lagos with integrated solar lighting, large halls, and recreational space for public use and engagement.",
  },
  {
    location: "Egbu, Owerri North, Imo State",
    image: img10,
    description:
      "In Owerri North, we developed a sustainable housing project offering affordable, secure homes with modern infrastructure for civil servants and mid-income earners.",
  },
  {
    location: "Idu Industrial Area, Abuja FCT",
    image: img11,
    description:
      "We executed the design and build of a logistics warehouse in Idu, incorporating loading bays, inventory systems, and solar backup for industrial-scale distribution.",
  },
  {
    location: "Ogbaku, Mbaitolu, Imo State",
    image: img12,
    description:
      "In Ogbaku, Mbaitoli LGA of Imo State, Parker Integrated Services delivered a tastefully designed private luxury bungalow for a diaspora client—seamlessly combining elegance, comfort, and modern architectural excellence.",
  },
  {
    location: "Ikwerre Road, Port Harcourt, Rivers State",
    image: img13,
    description:
      "We completed a major road construction project along Ikwerre Road, improving transportation flow and ensuring durable pavement quality for both commuters and heavy-duty traffic.",
  },
  {
    location: "Yenagoa Expressway, Bayelsa State",
    image: img14,
    description:
      "Another road project handled with precision and speed, expanding commuter access and strengthening surface grading in Bayelsa State.",
  },
  {
    location: "Isheagu–Ogbonogodo Bridge, Delta State",
    image: img15,
    description:
      "This bridge construction featured deep-pile foundations and precast deck segments to enable uninterrupted access to remote communities in Delta State.",
  },
  {
    location: "Eket Bridge, Akwa Ibom State",
    image: img16,
    description:
      "Bridge reconstruction in Eket enhanced flood resilience and allowed safer passage for both pedestrians and vehicles across critical river points.",
  },
  {
    location: "NPA Compound, Port Harcourt, Rivers State",
    image: img17,
    description:
      "Reinforcement of Nigerian Port Authority compound floor using heavy-grade concrete and steel mesh to support container loads and vehicle movement.",
  },
  {
    location: "Secondary Reinforcement – NPA, Port Harcourt",
    image: img18,
    description:
      "Further reinforcement within the NPA compound ensured structural durability and high-performance flooring for industrial logistics operations.",
  },
  {
    location: "Kirikiri Industrial Layout, Lagos State",
    image: img19,
    description:
      "Road construction with advanced drainage systems was completed in Kirikiri to prevent erosion and enhance industrial zone accessibility.",
  },
  {
    location: "Elekahia Road, Port Harcourt, Rivers State",
    image: img20,
    description:
      "Our team executed another strategic road construction project with emphasis on surfacing and stormwater channeling to reduce flood impact.",
  },
];

const ProjectsSection = () => {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(to bottom, #000000, #facc15, #000000)",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects Executed by Parker Integrated Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.location}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.location}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
