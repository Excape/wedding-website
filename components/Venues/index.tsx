import Image from "next/image";
import React from "react";
import Section from "../Layout/Section";
import {
  Heading2,
  Heading3,
  LinkButton,
  SectionHeader,
} from "../Layout/styles";

const Venues = () => {
  return (
    <Section id="venues" className="bg-map-beige-light">
      <SectionHeader className="text-map-blue">Venues</SectionHeader>
      <div className="flex flex-col items-center md:items-start text-center justify-around md:flex-row">
        <div className="flex-1 mb-12 md:mb-0">
          <img
            className="h-16 m-auto mb-2"
            src="/assets/rings2.png"
            alt="rings"
          />
          <Heading2>Ceremony</Heading2>
          <Heading3>70 Red Pine Dr. Carlisle, MA</Heading3>
          <LinkButton
            href="https://goo.gl/maps/khKYeFpAi5XavvuC8"
            color="map-blue"
            hoverColor="map-beige-light"
          >
            Get Directions
          </LinkButton>
        </div>
        <div className="flex-1">
          <img
            className="h-16 m-auto mb-2"
            src="/assets/glasses.png"
            alt="clinking champagne glasses"
          />
          <Heading2>Reception</Heading2>
          <Heading3>Griffin Museum of Photography, Winchester, MA</Heading3>
          <div>
            <LinkButton
              href="https://goo.gl/maps/B6SrD2FpR9HCLYVEA"
              color="map-blue"
              hoverColor="map-beige-light"
            >
              Get Directions
            </LinkButton>
          </div>
          <LinkButton
            href="https://griffinmuseum.org/"
            color="map-blue"
            hoverColor="map-beige-light"
          >
            Visit Website
          </LinkButton>
        </div>
      </div>
    </Section>
  );
};

export default Venues;
