/* eslint-disable @next/next/no-img-element */
import React from "react";
import Section from "../Layout/Section";
import { Heading2, Link, LinkButton, SectionHeader } from "../Layout/styles";

const Lodging = () => {
  return (
    <Section
      id="lodging"
      className="bg-map-beige-light text-center text-map-blue"
    >
      <SectionHeader className="text-map-blue">Lodging</SectionHeader>
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0">
        <div className="flex-1 md:pr-4">
          <img className="w-16 mx-auto" src="/assets/hotel.svg" alt="Hotel" />
          <Heading2>Fairfield Boston/Medford</Heading2>
          <p className="uppercase">
            <Link href="https://goo.gl/maps/8DjzTWQUA5kAdcgF8">
              85 Station Landing, Medford
            </Link>
          </p>
          <p className="mb-4">(339) 707-0203</p>
          <p>$219 per night</p>
          <p>Room Block Rates available to book at this link:</p>
          <div className="flex flex-col items-center justify-center space-x-2 mt-2 md:flex-row">
            <LinkButton href="https://www.marriott.com/events/start.mi?id=1639171160259&key=GRP">
              Book
            </LinkButton>
            <LinkButton href="https://www.marriott.com/hotels/travel/bosfo-fairfield-boston-medford/">
              Visit Website
            </LinkButton>
          </div>
        </div>
        <div className="flex-1 md:pl-4 md:border-l border-map-blue">
          <img className="w-16 mx-auto" src="/assets/hotel.svg" alt="Hotel" />
          <Heading2>AC Hotel by Marriott Boston North</Heading2>
          <p className="uppercase">
            <Link href="https://goo.gl/maps/2PMEApmzmGrv9X8z9">
              95 Station Landing, Medford
            </Link>
          </p>
          <p className="mb-4">(781) 819-2090</p>
          <p>$259 per night</p>
          <p>Room Block Rates available to book at this link:</p>
          <div className="flex flex-col items-center justify-center md:space-x-2 mt-2 md:flex-row">
            <LinkButton href="https://www.marriott.com/events/start.mi?id=1639171023239&key=GRP">
              Book
            </LinkButton>
            <LinkButton href="https://www.marriott.com/hotels/travel/bosac-ac-hotel-boston-north/">
              Visit Website
            </LinkButton>
          </div>
        </div>
      </div>

      <div className="mt-8 md:w-1/2 md:mx-auto lg:mt-16 lg:w-1/3">
        <img className="w-16 mx-auto" src="/assets/bed.svg" alt="Airbnb" />
        <Heading2>Airbnb</Heading2>
        <p className="mb-2">
          If you are looking for more of an apartment/home instead of a hotel,
          Airbnb is always a good place to start. The hotel is in the medford
          area, but feel free to book a place more in the city there are lots of
          great neighborhoods to look at! Let us know if you need a
          recommendation!
        </p>
        <LinkButton href="https://www.airbnb.com/boston-ma/stays">
          Visit Airbnb
        </LinkButton>
      </div>
    </Section>
  );
};

export default Lodging;
