import React, { useState } from "react";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/";

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
    </>
  );
};

export default Home;
