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
    <VolunteerExpContainer id="volunteer experience">
      <VolunteerHeader>Volunteer Experience</VolunteerHeader>
      <CardsContainer>
        {volunteerExp.map((v, idx) => {
          return (
            <Card
              key={idx}
              title={v.title}
              position={v.position}
              year={v.year}
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
