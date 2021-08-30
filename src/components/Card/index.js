import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import recipeImg from "../../images/food-spoon-fork-logo.jpeg";
import {
  CardContainer,
  CardLinks,
  Icon,
  CardImg,
  CardTitle,
  CardInfo,
  CardInfoContainer,
  CardImgWrapper,
} from "./CardStyles";

const Card = () => {
  return (
    <CardContainer>
      <CardLinks>
        <Icon>
          <AiOutlineGithub />
        </Icon>
        <Icon>
          <FiExternalLink />
        </Icon>
      </CardLinks>
      <CardImgWrapper>
        <CardImg src={recipeImg} alt="project image" />
      </CardImgWrapper>
      <CardInfoContainer>
        <CardTitle>Recipe Finder</CardTitle>
        <CardInfo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus
          erat, malesuada at libero vitae, ullamcorper porta urna. Morbi
          malesuada, purus ut egestas feugiat, risus turpis volutpat turpis, at
          placerat quam augue eget sem.
        </CardInfo>
      </CardInfoContainer>
    </CardContainer>
  );
};

export default Card;
