import React from "react";
import { VscSourceControl } from "react-icons/vsc";
import { GrMail } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  LinkContainer,
  Link,
  GithubContainer,
  IconAndText,
  Text,
  ContactContainer,
  IconsContainer,
  Icon,
} from "./FooterSectionStyles";

const FooterSection = () => {
  return (
    <FooterContainer id="contact">
      <Text>Designed and built by Usman Naz, &copy; 2021</Text>
      <ContactContainer>
        <Text contactText={true}>
          Like what you've seen so far? Feel free to contact me!
        </Text>
        <IconsContainer>
          <Icon>
            <GrMail />
          </Icon>
          <Icon>
            <FaLinkedin />
          </Icon>
        </IconsContainer>
      </ContactContainer>
      <LinkContainer>
        <Link
          href="https://github.com/usmanazz/Portfolio-Website"
          rel="noopener noreferrer"
          target="_blank"
          name="GitHub Link to this websites source."
        >
          <GithubContainer>
            <IconAndText>
              <VscSourceControl />
              <Text>website's source</Text>
            </IconAndText>
          </GithubContainer>
        </Link>
      </LinkContainer>
    </FooterContainer>
  );
};

export default FooterSection;
