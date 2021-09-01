import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  padding: 1rem 0;
  border-top: 1px solid #e8e8ed;
  width: 100%;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  transition: 0.3s ease-out;

  &:hover {
    transition: 0.3s ease-out;
    opacity: 0.5;
  }
`;

export const GithubContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 650px) {
    margin-top: 0.5rem;
  }
`;

export const Text = styled.p`
  text-align: center;
  padding: ${({ contactText }) => (contactText ? "0 12px" : "0 24px")};
  margin-bottom: 0.5rem;

  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const IconAndText = styled.div`
  display: flex;
  flex-direction: row;
  color: #01bf71;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 1.2rem;
  color: #01bf71;
  cursor: pointer;
`;

export const IconLink = styled.a`
  color: #01bf71;
  transition: 0.3s ease-out;

  &:hover {
    transition: 0.3s ease-out;
    opacity: 0.5;
  }
`;
