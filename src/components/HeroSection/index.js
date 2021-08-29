import React from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroSubTitleContainer,
  HeroSubTitle,
  HeroLinks,
  Icon,
  ArrowAnimation,
  ArrowIcon,
} from "./HeroSectionStyles";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>USMAN NAZ</HeroTitle>
      <HeroSubTitleContainer>
        <HeroSubTitle>Aspiring Software Engineer</HeroSubTitle>
        <HeroSubTitle>Front End</HeroSubTitle>
        <HeroSubTitle>Full Stack</HeroSubTitle>
        <HeroSubTitle>Foodie</HeroSubTitle>
      </HeroSubTitleContainer>
      <HeroLinks>
        <Icon>
          <AiOutlineGithub />
        </Icon>
        <Icon>
          <FaLinkedin />
        </Icon>
      </HeroLinks>

      <ArrowAnimation>
        <ArrowIcon>
          <BsChevronDown />
        </ArrowIcon>
      </ArrowAnimation>
    </HeroContainer>
  );
};

export default HeroSection;
