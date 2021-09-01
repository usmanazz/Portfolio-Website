import React from "react";
import {
  VolunteerExpContainer,
  VolunteerHeader,
  CardsContainer,
} from "./VolunteerExpSectionStyles";
import Card from "../Card";
import volunteerExp from "../../data/volunteerExperience";

const VolunteerExpSection = () => {
  return (
    <VolunteerExpContainer id="leadership experience">
      <VolunteerHeader>Leadership Experience</VolunteerHeader>
      <CardsContainer>
        {volunteerExp.map((v, idx) => {
          return (
            <Card
              key={idx}
              title={v.title}
              position={v.position}
              year={v.year}
              link={v.link}
              image={v.image}
              altText={v.altText}
              description={v.description}
            />
          );
        })}
      </CardsContainer>
    </VolunteerExpContainer>
  );
};

export default VolunteerExpSection;
