import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ConatcForm from "./Components/ContactForm";
import SearchBar from "./Components/SearchBar";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import ContactUs from "./Pages/ContactUs";



// Sub-Pages Imports
import Profile from "./SubPages/Profile";
import Values from "./SubPages/Values";
import Resources from "./SubPages/Resources";
import BuildingConstruction from "./SubPages/BuildingConstruction";
import ProjectManagement from "./SubPages/ProjectManagement";
import FacilityManagement from "./SubPages/FacilityManagement";
import StructuralEngineering from "./SubPages/StructuralEngineering";
import ProjectOverview from "./SubPages/ProjectOverview";
import ProjectGallery from "./SubPages/ProjectGallery";
import Blog from "./SubPages/Blog";


//Footer Pages
import DataProtection from "./FooterPages/DataProtection";
import Career from "./FooterPages/Career";
import SiteMap from "./FooterPages/SiteMap";
import Consultancy from "./FooterPages/Consultancy";


//Card Button Pages
import ConstructionExpertise from "./CardButtonPages/ConstructionExpertise";
import GroupProductsServices from "./CardButtonPages/GroupProductsServices";
import InvestorRelations from "./CardButtonPages/InvestorRelations";
import Sustainability from "./CardButtonPages/Sustainability";


//Policies Import
import ShareholderEngagementPolicy from "./Policies/ShareholderEngagementPolicy";
import CodeOfConduct from "./Policies/CodeOfConduct";
import CodeOfConductSubContractors from "./Policies/CodeOfConductSubContractors";
import ComplaintsManagementPolicy from "./Policies/ComplaintsManagementPolicy";
import SecuritiesTradingPolicy from "./Policies/SecuritiesTradingPolicy";
import AntiMoneyLaunderingPolicy from "./Policies/AntiMoneyLaunderingPolicy";
import WhistleBlowingPolicy from "./Policies/WhistleBlowingPolicy";
import ThirdPartyGuidelinesPolicy from "./Policies/ThirdPartyGuidelinesPolicy";
import CorporateComplianceProgram from "./Policies/CorporateComplianceProgram";
import CodeOfConductDirectorsMgt from "./Policies/CodeOfConductDirectorsMgt";
import HSEPolicy from "./Policies/HSEPolicy";
import SustainabilityReport from "./Policies/SustainabilityReport";


//Directors
import BoardOfDirectors from "./Directors/BoardOfDirectors";


//Resources Imports
import Brochure from "./Resources/Brochure";
import Reports from "./Resources/Reports";
import SafetyManuals from "./Resources/SafetyManuals";
import TeamDirectory from "./Resources/TeamDirectory";


// Blog Sub-Pages
import Blog1 from "./BlogSubPages/Blog1";
import Blog2 from "./BlogSubPages/Blog2";
import Blog3 from "./BlogSubPages/Blog3";
import Blog4 from "./BlogSubPages/Blog4"; 
import Blog5 from "./BlogSubPages/Blog5";
import Blog6 from "./BlogSubPages/Blog6";




const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/profile" element={<Profile />} />
        <Route path="/about/values" element={<Values />} />
        <Route path="/about/resources" element={<Resources />} />
        <Route path="/contact-form" element={<ConatcForm />} />
        <Route path="/search-bar" element={<SearchBar />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/project-overview" element={<ProjectOverview />} />
        <Route path="/project-gallery" element={<ProjectGallery />} />
        <Route path="/data-protection" element={<DataProtection />} />
        <Route path="/career" element={<Career />} />
        <Route path="/sitemap" element={<SiteMap />} />
        <Route path="/policies/shareholder-engagement" element={<ShareholderEngagementPolicy />} />
        <Route path="/policies/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/policies/code-of-conduct-subcontractors" element={<CodeOfConductSubContractors />} />
        <Route path="/policies/complaints-management" element={<ComplaintsManagementPolicy />} />
        <Route path="/policies/securities-trading" element={<SecuritiesTradingPolicy />} />
        <Route path="/policies/anti-money-laundering" element={<AntiMoneyLaunderingPolicy />} />
        <Route path="/policies/whistle-blowing" element={<WhistleBlowingPolicy />} />
        <Route path="/policies/third-party-guidelines" element={<ThirdPartyGuidelinesPolicy />} />
        <Route path="/policies/corporate-compliance-program" element={<CorporateComplianceProgram/>} />
        <Route path="/policies/code-of-conduct-directors" element={<CodeOfConductDirectorsMgt />} />
        <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/policies/hse-policy" element={<HSEPolicy />} />
        <Route path="/policies/sustainability-report" element={<SustainabilityReport />} />
        <Route path="/resources/brochure" element={<Brochure />} />
        <Route path="/resources/reports" element={<Reports />} />
        <Route path="/resources/safety-manuals" element={<SafetyManuals />} />
        <Route path="/resources/team-directory" element={<TeamDirectory />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/blog/2" element={<Blog2 />} />
        <Route path="/blog/3" element={<Blog3 />} />
        <Route path="/blog/4" element={<Blog4 />} />
        <Route path="/blog/5" element={<Blog5 />} />
        <Route path="/blog/6" element={<Blog6 />} />
        <Route path="/consultancy" element={<Consultancy />} />
        
        {/* Card Button Pages */}

        <Route
          path="/construction-expertise"
          element={<ConstructionExpertise />} />
          <Route
          path="/group-products"
          element={<GroupProductsServices />} />
          <Route
          path="/sustainability"
          element={<Sustainability />} />
          <Route
          path="/investor-relations"
          element={<InvestorRelations />} />
        
        <Route
          path="/services/building-construction"
          element={<BuildingConstruction />}
        />
        <Route path="/services/project-management" element={<ProjectManagement />} />
        <Route path="/services/facility-management" element={<FacilityManagement />} />
        <Route
          path="/services/structural-engineering"
          element={<StructuralEngineering />}
        />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
