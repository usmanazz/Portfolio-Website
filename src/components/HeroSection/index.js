import React from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroSubTitleContainer,
  HeroSubTitle,
  HeroLinks,
  Icon,
  Link,
  ArrowAnimation,
  ArrowIcon,
} from "./HeroSectionStyles";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import resume from "../../files/Usman_Naz_resume.pdf";

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
      {/* <HeroLinks>
        <Icon>
          <AiOutlineGithub />
        </Icon>
        <Icon>
          <GrMail />
        </Icon>
        <Icon>
          <FaLinkedin />
        </Icon>
        <Icon>
          <ImProfile />
        </Icon>
      </HeroLinks> */}

      <HeroLinks>
        <Icon>
          <Link href="https://github.com/usmanazz" target="_blank">
            <AiOutlineGithub />
          </Link>
        </Icon>
        <Icon>
          <Link href="mailto:usman.naz212@gmail.com">
            <GrMail />
          </Link>
        </Icon>
        <Icon>
          <Link href="https://www.linkedin.com/in/usmannaz24/" target="_blank">
            <FaLinkedin />
          </Link>
        </Icon>
        <Icon>
          <Link href={resume} target="_blank">
            <ImProfile />
          </Link>
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
