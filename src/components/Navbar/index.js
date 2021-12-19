import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogoContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ResumeLink,
} from "./NavbarStyles";
import { FaBars } from "react-icons/fa";
import resume from "../../files/Usman_Naz_Resume.pdf";
import logo from "../../images/personal_website_logo.png";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggleSidebar }) => {
  const goToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoContainer to="/" onClick={goToTop}>
            <NavLogo src={logo} altText="Usman Naz Logo" />
          </NavLogoContainer>
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              {/* spy enables green border bottom effect */}
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-20}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-20}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="leadership experience"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-20}
              >
                Leadership Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-20}
              >
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <ResumeLink href={resume} target="_blank">
                Resume
              </ResumeLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
