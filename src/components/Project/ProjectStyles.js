import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 0 3rem;
  /* background: blue; */

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
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
  column-gap: 3rem;
  align-items: center;
  grid-template-areas: "col1 col2";
  margin-top: 0.5rem;
  /* background: blue; */

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  /* background: blue; */
  height: 700px;
  margin-bottom: 2rem;
`;

export const Column2 = styled.div`
  grid-area: col2;
  /* background: green; */
  height: 700px;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProjectImg = styled.img`
  width: 350px;
  height: 350px;

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
  cursor: pointer;
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
