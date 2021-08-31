import React, { useState } from "react";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import Sidebar from "../components/Sidebar/";
import VolunteerExpSection from "../components/VolunteerExpSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <VolunteerExpSection />
      <FooterSection />
    </>
  );
};

export default Home;
