import styled from "styled-components";

export const VolunteerExpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px 24px 24px;
`;

export const VolunteerHeader = styled.h2`
  font-size: 2.5rem;
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  padding: 0 35px;
  margin-top: 2rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 835px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    padding: 0 0;
  }
`;
