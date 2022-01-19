import React from "react";
import Section from "../Layout/Section";
import { Heading2, Heading3, SectionHeader } from "../Layout/styles";
import Image from "next/image";
import Cake from "../../public/assets/cake.svg";
import PlateSVG from "../../public/assets/plate.svg";

const Schedule = () => {
  return (
    <Section
      id="schedule"
      className="bg-map-beige text-map-blue font-medium min-h-screen space-y-16 md:space-y-0"
    >
      <SectionHeader className="text-map-blue">Schedule</SectionHeader>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-center mb-4 md:p-16 md:m-0 md:flex-1">
          <Heading2>Welcome Event</Heading2>
          <h3 className="font-title-sans text-xl font-light">
            Friday, June 24th
          </h3>
          <h3 className="font-title-sans text-xl font-light">Evening</h3>
        </div>
        <div className="text-center font-title-sans md:p-16 md:flex-1 md:border-l border-map-blue">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <Image
              src="/assets/glasses.png"
              alt="clinking champagne glasses"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>
            Come join us on Friday night when you get in! Details to follow.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-center mb-4 md:p-16 md:m-0 md:flex-1">
          <Heading2>Ceremony</Heading2>
          <h3 className="font-title-sans text-xl uppercase font-light">
            Saturday, June 25th
          </h3>
          <h3 className="font-title-sans text-xl font-light">
            3:30 PM - 4:30 PM
          </h3>
        </div>
        <div className="text-center font-title-sans md:p-16 md:flex-1 md:border-l border-map-blue">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <Image
              src="/assets/rings.png"
              alt="wedding rings"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Laurie and Sol's house</p>
          <p>70 Red Pine Dr. Carlisle, MA</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-center mb-4 md:p-16 md:m-0 md:flex-1">
          <Heading2>Reception</Heading2>
          <h3 className="font-title-sans text-xl uppercase font-light">
            Saturday, June 25th
          </h3>
          <h3 className="font-title-sans text-xl font-light">5:00 PM</h3>
        </div>
        <div className="text-center font-title-sans md:p-16 md:flex-1 md:border-l border-map-blue">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <Image
              src="/assets/plate.svg"
              alt="dinner plate"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Griffin Museum of Photography</p>
          <p>67 Shore Rd, Winchester, MA</p>
          <p className="mt-4">
            There will be a bus to take you from the ceremony to the reception
            venue!
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-center mb-4 md:p-16 md:m-0 md:flex-1">
          <Heading2>Sunday Brunch</Heading2>
          <h3 className="font-title-sans text-xl uppercase font-light">
            Sunday, June 26th
          </h3>
          <h3 className="font-title-sans text-xl font-light">Morning</h3>
        </div>
        <div className="text-center font-title-sans md:p-16 md:flex-1 md:border-l border-map-blue">
          <div className="w-14 h-14 mx-auto mb-4 relative">
            <Image
              src="/assets/croissant.svg"
              alt="Croissant"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Details to follow.</p>
        </div>
      </div>
    </Section>
  );
};

export default Schedule;
