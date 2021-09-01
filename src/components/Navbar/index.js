import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ResumeLink,
} from "./NavbarStyles";
import { FaBars } from "react-icons/fa";
import resume from "../../files/Usman_Naz_resume.pdf";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggleSidebar, footerHeight }) => {
  const goToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={goToTop}>
            Naz
          </NavLogo>
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
                offset={-80}
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
                offset={-80}
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
                offset={-80}
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
                offset={-80}
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
