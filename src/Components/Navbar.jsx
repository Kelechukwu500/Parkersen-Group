import React, { useState } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { FiSearch, FiMail } from "react-icons/fi";
import image from "../assets/parkersengroup.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false); // News submenu

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAbout = () => setAboutOpen(!aboutOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleProjects = () => setProjectsOpen(!projectsOpen);
  const toggleNews = () => setNewsOpen(!newsOpen); // Toggle news/blog

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-30">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src={image}
                alt="Logo"
                className="h-30 w-80 object-contain rounded-full "
              />
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-5">
              <Link to="/contact-form" onClick={() => setIsOpen(false)}>
                <FiMail
                  size={28}
                  className="text-black cursor-pointer hover:text-gray-700"
                />
              </Link>

              <Link to="/search-bar" onClick={() => setIsOpen(false)}>
                <FiSearch
                  size={28}
                  className="text-black cursor-pointer hover:text-gray-700"
                />
              </Link>

              <button
                onClick={toggleMenu}
                className="text-black bg-white border border-white p-2 rounded-md"
              >
                {isOpen ? <X size={33} /> : <Menu size={33} />}
              </button>
            </div>
          </div>
        </div>

        {/* Sliding Menu */}
        <div
          className={`fixed top-[120px] right-0 h-[calc(100%-120px)] w-1/3 bg-black z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col px-6 pt-6 space-y-6 text-white font-bold text-lg">
            {/* Home */}
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="bg-black text-white px-4 py-2 rounded-md w-full text-left block"
              >
                Home
              </Link>
            </li>

            {/* Projects */}
            <li>
              <button
                onClick={toggleProjects}
                className="w-full flex justify-between items-center"
              >
                Projects {projectsOpen ? <ChevronDown /> : <ChevronRight />}
              </button>
              {projectsOpen && (
                <ul className="mt-3 ml-4 space-y-4 text-base font-medium">
                  <li>
                    <Link
                      to="/project-overview"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-yellow-400"
                    >
                      Project Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/project-gallery"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-yellow-400"
                    >
                      Project Gallery
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Services */}
            <li>
              <button
                onClick={toggleServices}
                className="w-full flex justify-between items-center"
              >
                Services {servicesOpen ? <ChevronDown /> : <ChevronRight />}
              </button>
              {servicesOpen && (
                <ul className="mt-3 ml-4 space-y-4 text-base font-medium">
                  <li>
                    <Link
                      to="/services/building-construction"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-yellow-400"
                    >
                      Building Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/project-management"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-yellow-400"
                    >
                      Project Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/facility-management"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-yellow-400"
                    >
                      Facility Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/structural-engineering"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-yellow-400"
                    >
                      Structural Engineering
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* About */}
            <li>
              <button
                onClick={toggleAbout}
                className="w-full flex justify-between items-center"
              >
                About {aboutOpen ? <ChevronDown /> : <ChevronRight />}
              </button>
              {aboutOpen && (
                <ul className="mt-3 ml-4 space-y-4 text-base font-medium">
                  <li>
                    <Link
                      to="/about/profile"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-yellow-400"
                    >
                      Profile & History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/values"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-yellow-400"
                    >
                      Values
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/resources"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-yellow-400"
                    >
                      Resources
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* News & Blog (New Collapsible) */}
            <li>
              <button
                onClick={toggleNews}
                className="w-full flex justify-between items-center"
              >
                News & Blog {newsOpen ? <ChevronDown /> : <ChevronRight />}
              </button>
              {newsOpen && (
                <ul className="mt-3 ml-4 space-y-4 text-base font-medium">
                  <li>
                    
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-yellow-400"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
