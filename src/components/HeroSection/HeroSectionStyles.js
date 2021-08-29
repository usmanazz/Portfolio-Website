import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 850px;
  color: #000;
`;

export const HeroTitle = styled.h1`
  font-size: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const HeroSubTitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  white-space: nowrap;
`;

export const HeroSubTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
    padding: 0 0.6rem;
  }
`;

export const HeroLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  padding-top: 3rem;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  cursor: pointer;

  &:visited {
    color: #01bf71;
  }
`;

export const ArrowIcon = styled.div`
  font-size: 3.5rem;
  cursor: pointer;
`;

const animate = keyframes`
    0%{
        opacity: 0;
        transform: translate(0px,-10px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: translate(0px,10px);
    }
`;

export const ArrowAnimation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 3rem;
  animation: ${animate} 2s infinite;

  & ${ArrowIcon}:nth-child(2) {
    animation-delay: -0.2s;
  }

  & ${ArrowIcon}:nth-child(3) {
    animation-delay: -0.4s;
  }
`;
