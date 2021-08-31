import styled from "styled-components";

export const CardContainer = styled.div`
  background: #f2f2f7;
  margin-bottom: 1rem;
  padding: 0.75rem;
  height: 545px;

  @media screen and (max-width: 600px) {
    height: 450px;
  }
`;

export const CardLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.3s;
  }
`;

export const CardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
`;

export const CardImg = styled.img`
  width: 160px;
  height: 160px;
`;

export const CardInfoContainer = styled.div``;

export const CardTitle = styled.h3`
  text-align: center;
`;

export const CardSubtitle = styled.h4`
  color: #01bf71;
  font-size: 0.8rem;
  text-align: center;
`;

export const CardDate = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin: 0.25rem 0;
`;

export const CardInfo = styled.p`
  text-align: center;
  font-size: 0.8rem;
`;
