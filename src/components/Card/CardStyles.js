import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  background: pink;
  margin-bottom: 1rem;
  padding: 1rem;
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
  padding: 0 0.3rem;
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
`;

export const CardImg = styled.img`
  width: 90%;
  height: 275px;
`;

export const CardInfoContainer = styled.div``;

export const CardTitle = styled.h3``;

export const CardInfo = styled.p``;
