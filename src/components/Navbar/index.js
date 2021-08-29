import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarStyles";
import { FaBars } from "react-icons/fa";

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
              <NavLinks to="resume">Resume</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
