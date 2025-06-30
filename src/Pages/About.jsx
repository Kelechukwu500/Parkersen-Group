import React from "react";

const About = () => {
  return (
    <section
      className="w-screen py-20 px-6 md:px-20"
      style={{
        background: "linear-gradient(to bottom, #000000, #facc15, #000000)",
      }}
    >
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-yellow-400 inline-block">
          About Parker Integrated Engineering LTD
        </h2>

        {/* Registration Info Card */}
        <div className="bg-black bg-opacity-80 p-6 rounded-xl shadow-lg mb-10">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
            Company Registration
          </h3>
          <p className="text-white text-lg">
            Parker Integrated Engineering LTD is officially registered under the
            Corporate Affairs Commission of Nigeria with Registration Number:{" "}
            <span className="font-bold text-yellow-300">RC. NO 1561742</span>.
          </p>
        </div>

        {/* Cards Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-yellow-400 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">
              Who We Are
            </h3>
            <p className="text-white text-sm">
              A trusted Nigerian construction and engineering company delivering
              reliable, innovative, and sustainable infrastructure solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-yellow-400 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">
              What We Do
            </h3>
            <p className="text-white text-sm">
              From civil works to facility management, we specialize in
              residential, commercial, and industrial projects across Nigeria.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-yellow-400 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">
              Why Choose Us
            </h3>
            <p className="text-white text-sm">
              We combine top-tier talent, technology, and safety standards to
              execute every project with excellence, transparency, and
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
