/* eslint-disable @next/next/no-img-element */
import React from "react";
import Section from "../Layout/Section";
import { Heading2, Heading3, Link, SectionHeader } from "../Layout/styles";

const Travel = () => {
  return (
    <Section
      id="travel"
      className="bg-map-blue min-h-screen text-map-beige-light"
    >
      <SectionHeader className="">Travel</SectionHeader>
      <div className="space-y-8 text-center">
        <div className="md:w-2/3 md:mx-auto lg:w-1/2">
          <Heading2>By Plane</Heading2>
          <img
            className="w-16 mx-auto"
            src="/assets/paper_airplane.svg"
            alt="Paper airplane"
          />
          <h3 className="text-xl mb-4 p-1">Boston Logan Airport (BOS)</h3>
          <p className="mb-2">
            This is the closest airport. We would recommend booking ASAP. You
            can look through websites such as{" "}
            <Link href="https://www.momondo.com/">momondo.com</Link> or{" "}
            <Link href="https://www.kayak.com/flights">kayak.com</Link> for
            deals on flights.
          </p>
          <p>
            Our hotel blocks are a short cab / Lyft/Uber ride away (about 15
            minutes) or via public transit (about 45 minutes)
          </p>
        </div>
        <div className="md:w-2/3 md:mx-auto lg:w-1/2">
          <Heading2>Getting around</Heading2>
          <p className="mb-4">
            We will have a bus that goes from the hotels to the ceremony,
            ceremony to reception, and reception back to the hotels! But for
            getting around on the other days, here are a few options.
          </p>
        </div>
        <div className="flex flex-col md:w-2/3 md:mx-auto lg:w-full lg:flex-row lg:items-baseline lg:space-x-12">
          <div className="mb-4 flex-1">
            <img
              className="w-16 mx-auto mb-4"
              src="/assets/metro.svg"
              alt="Metro"
            />
            <p className="mb-2">
              Boston is a very walkable city. Lots of interesting things are
              close to each other, making it easier to walk or take public
              transit options to get around most times.
            </p>
            <p className="mb-4">
              The trains and busses (MBTA) are an affordable and extensive way
              to get around Boston. Each ride on subway is $2.40 and bus is
              $1.70. However, if you’re planning to stay for a bit, we’d
              recommend getting a pass. Daily passes are $12.75 for 24 hours of
              travel and $22.50 for a weekly pass.
            </p>
          </div>

          <div className="mb-4 flex-1">
            <img
              className="w-16 mx-auto mb-4"
              src="/assets/taxi.svg"
              alt="Taxi"
            />
            <p>
              Lyfts and Ubers are readily available in Boston, as are taxi cabs.
              This makes a good way to transport a few people around town.
            </p>
          </div>
          <div className="mb-4 flex-1">
            <img
              className="w-16 mx-auto mb-4"
              src="/assets/rental_car.svg"
              alt="Rental Car"
            />
            <p>
              You can rent a car right from the airport if you wish! The parking
              at the hotel blocks is $12.00 overnight and day parking is $6.00.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Travel;
