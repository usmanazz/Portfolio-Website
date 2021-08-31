import React from "react";
import Project from "../Project";
import { ProjectsContainer, ProjectsHeader } from "./ProjectsSectionStyles";
import projects from "../../data/projects";

const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsHeader>Projects</ProjectsHeader>
      {projects.map((p) => (
        <Project
          title={p.title}
          image={p.image}
          imageWidth={p.imageWidth}
          imageHeight={p.imageHeight}
          altText={p.altText}
          links={p.links}
          description={p.description}
          technologies={p.technologies}
          whatILearned={p.whatILearned}
          difficulty={p.difficulty}
          solution={p.solution}
        />
      ))}
    </ProjectsContainer>
  );
};

export default ProjectsSection;
