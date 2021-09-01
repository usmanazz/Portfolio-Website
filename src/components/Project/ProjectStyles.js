import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 0 3rem;

  @media screen and (max-width: 805px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 425px) {
    padding: 0 0.5rem;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  text-decoration: underline;
`;

export const ProjectSubtitle = styled.h4`
  font-size: 1.2rem;
  color: #01bf71;
  margin-bottom: 0.2rem;
`;

export const ProjectRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  /* grid-auto-flow: column; */
  column-gap: 3rem;
  align-items: flex-start;
  grid-template-areas: "col1 col2";
  margin-top: 1rem;
  padding: 1rem;
  margin-bottom: 3rem;
  background: #f2f2f7;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
    margin-bottom: 2rem;
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin-bottom: 2rem;
  max-height: 1700px;
`;

export const Column2 = styled.div`
  grid-area: col2;
  max-height: 1700px;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const ProjectImg = styled.img`
  width: ${({ imageWidth }) => imageWidth}px;
  height: ${({ imageHeight }) => imageHeight}px;

  @media screen and (max-width: 495px) {
    width: ${({ imageWidth, imageHeight }) =>
      imageWidth > imageHeight ? 350 : imageWidth}px;
    height: ${({ imageWidth, imageHeight }) =>
      imageWidth > imageHeight ? 275 : imageHeight}px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 1rem;
  color: #01bf71;
`;

export const Link = styled.a`
  color: #01bf71;
  transition: ${({ hasLink }) => (hasLink ? "0.3s ease-out" : null)};
  opacity: ${({ hasLink }) => (hasLink ? null : "0.5")};
  cursor: ${({ hasLink }) => (hasLink ? "pointer" : "default")};
  text-decoration: none;

  &:hover {
    transition: ${({ hasLink }) => (hasLink ? "0.3s ease-out" : null)};
    opacity: 0.5;
  }
`;

export const LinkText = styled.span`
  margin-left: 0.3rem;
`;

export const ProjectText = styled.p`
  max-width: 500px;
`;

export const ProjectTech = styled.div`
  margin-top: 1rem;
`;

export const TechList = styled.ul`
  columns: 2;
  list-style-position: inside;
`;

export const Tech = styled.li`
  &::marker {
    color: #01bf71;
    font-size: 1rem;
  }
`;

export const ProjectSubSection = styled.div`
  margin-bottom: 2rem;
`;
