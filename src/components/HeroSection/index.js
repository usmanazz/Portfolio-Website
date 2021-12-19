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
  ArrowLink,
} from "./HeroSectionStyles";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import resume from "../../files/Usman_Naz_Resume.pdf";

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
        <ArrowLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-20}
        >
          <ArrowIcon>
            <BsChevronDown />
          </ArrowIcon>
        </ArrowLink>
      </ArrowAnimation>
    </HeroContainer>
  );
};

export default HeroSection;
