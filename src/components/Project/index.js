import React from "react";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import recipeImg from "../../images/food-spoon-fork-logo.jpeg";
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
  ProjectText,
  ProjectTech,
  TechList,
  Tech,
  Column2,
  ProjectSubSection,
} from "./ProjectStyles";

const Project = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectTitle>Recipe Finder</ProjectTitle>
        <ProjectRow>
          <Column1>
            <ImgWrapper>
              <ProjectImg src={recipeImg} alt="project logo" />
            </ImgWrapper>
            <ProjectLinks>
              <Icon>
                <VscSourceControl /> Source
              </Icon>
              <Icon>
                <FiExternalLink /> Live Demo
              </Icon>
            </ProjectLinks>
            <ProjectText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              metus erat, malesuada at libero vitae, ullamcorper porta urna.
              Morbi malesuada, purus ut egestas feugiat, risus turpis volutpat
              turpis, at placerat quam augue eget sem.
            </ProjectText>
            <ProjectTech>
              <ProjectSubtitle>Technologies Used</ProjectSubtitle>
              <TechList>
                <Tech>ReactJS</Tech>
                <Tech>PostgreSQL</Tech>
                <Tech>ExpressJS</Tech>
                <Tech>NodeJS</Tech>
                <Tech>CSS3</Tech>
              </TechList>
            </ProjectTech>
          </Column1>
          <Column2>
            <ProjectSubSection>
              <ProjectSubtitle>What I learned</ProjectSubtitle>
              <ProjectText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                metus erat, malesuada at libero vitae, ullamcorper porta urna.
                Morbi malesuada, purus ut egestas feugiat, risus turpis volutpat
                turpis, at placerat quam augue eget sem.
              </ProjectText>
            </ProjectSubSection>
            <ProjectSubSection>
              <ProjectSubtitle>One Difficult Aspect of Project</ProjectSubtitle>

              <ProjectText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                metus erat, malesuada at libero vitae, ullamcorper porta urna.
                Morbi malesuada, purus ut egestas feugiat, risus turpis volutpat
                turpis, at placerat quam augue eget sem.
              </ProjectText>
            </ProjectSubSection>
            <ProjectSubSection>
              <ProjectSubtitle>My Solution</ProjectSubtitle>
              <ProjectText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                metus erat, malesuada at libero vitae, ullamcorper porta urna.
                Morbi malesuada, purus ut egestas feugiat, risus turpis volutpat
                turpis, at placerat quam augue eget sem.
              </ProjectText>
            </ProjectSubSection>
          </Column2>
        </ProjectRow>
      </ProjectContainer>
    </>
  );
};

export default Project;
