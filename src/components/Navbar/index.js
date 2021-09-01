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

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Naz</NavLogo>
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="volunteer experience">
                Volunteer Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
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
