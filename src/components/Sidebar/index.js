import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarStyles";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
      <Icon>
        <CloseIcon onClick={toggleSidebar} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleSidebar}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggleSidebar}>
            Projects
          </SidebarLink>
          <SidebarLink to="volunteer experience" onClick={toggleSidebar}>
            Volunteer Experience
          </SidebarLink>
          <SidebarLink to="resume" onClick={toggleSidebar}>
            Resume
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggleSidebar}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
