import React from "react";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import {
  ProjectContainer,
  ProjectRow,
  Column1,
  ProjectTitle,
  ProjectSubtitle,
  ImgWrapper,
  ProjectImg,
  ProjectLinks,
  Icon,
  Link,
  LinkText,
  ProjectText,
  ProjectTech,
  TechList,
  Tech,
  Column2,
  ProjectSubSection,
} from "./ProjectStyles";

const Project = ({
  title,
  image,
  imageWidth,
  imageHeight,
  altText,
  links,
  description,
  technologies,
  whatILearned,
  difficulty,
  solution,
}) => {
  return (
    <>
      <ProjectContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectRow>
          <Column1>
            <ImgWrapper>
              <ProjectImg
                src={image}
                alt={altText}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
              />
            </ImgWrapper>
            <ProjectLinks>
              <Icon>
                <Link
                  hasLink={links.github}
                  href={links.github}
                  target="_blank"
                >
                  <VscSourceControl />
                  <LinkText>Source {!links.github ? "Private" : null}</LinkText>
                </Link>
              </Icon>
              <Icon>
                <Link
                  hasLink={links.project}
                  href={links.project}
                  target="_blank"
                >
                  <FiExternalLink />
                  <LinkText>Live Demo</LinkText>
                </Link>
              </Icon>
            </ProjectLinks>
            <ProjectText>{description}</ProjectText>
            <ProjectTech>
              <ProjectSubtitle>Technologies Used</ProjectSubtitle>
              <TechList>
                {technologies.map((tech, idx) => (
                  <Tech key={idx}>{tech}</Tech>
                ))}
              </TechList>
            </ProjectTech>
          </Column1>
          <Column2>
            <ProjectSubSection>
              <ProjectSubtitle>What I learned</ProjectSubtitle>
              <ProjectText>{whatILearned}</ProjectText>
            </ProjectSubSection>
            <ProjectSubSection>
              <ProjectSubtitle>One Difficult Aspect of Project</ProjectSubtitle>

              <ProjectText>{difficulty}</ProjectText>
            </ProjectSubSection>
            <ProjectSubSection>
              <ProjectSubtitle>My Solution</ProjectSubtitle>
              <ProjectText>{solution}</ProjectText>
            </ProjectSubSection>
          </Column2>
        </ProjectRow>
      </ProjectContainer>
    </>
  );
};

export default Project;
