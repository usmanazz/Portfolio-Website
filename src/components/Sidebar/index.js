import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  ResumeLink,
} from "./SidebarStyles";
import resume from "../../files/Usman_Naz_resume_Sept_2021_v2.pdf";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
      <Icon>
        <CloseIcon onClick={toggleSidebar} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" offset={-20} onClick={toggleSidebar}>
            About
          </SidebarLink>
          <SidebarLink to="projects" offset={-20} onClick={toggleSidebar}>
            Projects
          </SidebarLink>
          <SidebarLink
            to="leadership experience"
            offset={-20}
            onClick={toggleSidebar}
          >
            Leadership Experience
          </SidebarLink>
          <SidebarLink to="contact" offset={-20} onClick={toggleSidebar}>
            Contact
          </SidebarLink>
          <ResumeLink href={resume} target="_blank" onClick={toggleSidebar}>
            Resume
          </ResumeLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
