import React from "react";
import {
  AboutContainer,
  AboutTitle,
  AboutTextContainer,
  AboutText,
  GreenText,
} from "./AboutSectionStyles";

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutTextContainer>
        <AboutText>
          Hey! I'm Usman, I recently graduated from UCLA in December 2020 where
          I majored in Lingusitics and Computer Science. I am currently seeking{" "}
          <GreenText>Software Engineer/Development</GreenText> roles and have a
          passion for <GreenText>Front End</GreenText> and{" "}
          <GreenText>Full Stack Development</GreenText>. I recently{" "}
          <GreenText>completed an internship</GreenText> as a Front End
          Developer for a startup, Minbar.io, in early development where I
          acquireed hands-on experience working in an Agile team environment,
          got exposure to mobile development, and had an integral role in making
          design/feature related decisions. In addition, I am constanly working
          on personal projects to expand and improve my skillset. Check out my
          Github!
          <br />
          <br />
          <GreenText>Relevant courses</GreenText> I took at UCLA include: Data
          Structures, Algorithms and Complexity, Software Construction,
          Programming Languages, Python with Applications, Programming
          Languages, Discrete Mathematics, Artificial Intelligence, Linear
          Algebra and Computational Linguistics. When I'm not coding, I enjoy
          going to the gym, cooking, playing basketball, and reading.
          <br />
          <br />
          Apart from learning, I enjoy helping others learn. I held many
          leadership roles and volunteer in my free time (see volunteer
          experience below). If you're interested in working with me or just
          want to chat, you can reach me via <GreenText>
            email
          </GreenText> or <GreenText>LinkedIn</GreenText>. I'd love to hear from
          you!
        </AboutText>
      </AboutTextContainer>
    </AboutContainer>
  );
};

export default AboutSection;
