import React from "react";
import Section from "../Layout/Section";
import { SectionHeader } from "../Layout/styles";

const ThingsToDo = () => {
  return (
    <Section id="thingstodo" className="bg-map-beige min-h-screen">
      <SectionHeader className="text-map-red">Things To do</SectionHeader>
    </Section>
  );
};

export default ThingsToDo;
