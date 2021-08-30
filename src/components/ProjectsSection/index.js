import React from "react";
import Card from "../Card";
import Project from "../Project";
import { ProjectsContainer, ProjectsHeader } from "./ProjectsSectionStyles";

const ProjectsSection = () => {
  return (
    <ProjectsContainer>
      <ProjectsHeader>Projects</ProjectsHeader>
      <Project />
    </ProjectsContainer>
  );
};

export default ProjectsSection;
