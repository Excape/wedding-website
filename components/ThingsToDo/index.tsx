import React from "react";
import Section from "../Layout/Section";
import { SectionHeader } from "../Layout/styles";

const ThingsToDo = () => {
  return (
    <Section id="thingstodo" className="bg-map-green">
      <SectionHeader className="text-map-blue">Things To do</SectionHeader>
      <div>
        <p>Here are some ideas for things to do around Boston!</p>
        <ul>
          <li>Brewery tours</li>
          <li>Duck Boat tour</li>
        </ul>
      </div>
    </Section>
  );
};

export default ThingsToDo;
