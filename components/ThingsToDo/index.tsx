import React from "react";
import Section from "../Layout/Section";
import { Heading2, Heading3, Link, SectionHeader } from "../Layout/styles";

const ThingsToDo = () => {
  return (
    <Section id="thingstodo" className="bg-map-green text-center">
      <SectionHeader className="text-map-blue">Things To do</SectionHeader>
      <div className="md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
        <div className="mb-4">
          <Heading2 className="text-map-blue">Boston</Heading2>
          <p className="mb-4">
            If you&apos;re planning to stay in and around Boston a little longer
            (which we highly recommend!), here are some ideas of what to do:
          </p>
          <ul className="text-left list-disc list-outside px-4 space-y-2">
            <li>
              <strong>Brewery tours</strong> -- we liked{" "}
              <Link href="https://downeastcider.com/pages/visit">
                Down East cider
              </Link>
              ,{" "}
              <Link href="https://www.harpoonbrewery.com/boston-brewery/">
                Harpoon IPA
              </Link>
              , and{" "}
              <Link href="https://www.samueladams.com/brewerytours">
                Sam Adams
              </Link>
            </li>
            <li>
              <strong>Duck Boat tour</strong> -- a fun way to explore the city!
            </li>
            <li>
              <strong>Public Gardens and Common / State House</strong>
            </li>
            <li>
              <strong>Copley Square and Boston Public Library</strong>
            </li>
            <li>
              <strong>
                Museum of Fine Arts Boston & Isabella Stewart Gardiner Museum
              </strong>
            </li>
            <li>
              <strong>Chinatown</strong> -- lots of great food!
            </li>
            <li>
              <strong>Fenway Park</strong> -- you can even take in a game!
            </li>
            <li>
              <strong>Freedom Trail Tour</strong> -- learn about Boston&apos;s
              history!
            </li>
          </ul>
        </div>
        <div>
          <Heading2 className="text-map-blue">Nearby areas to explore</Heading2>
          <p className="mb-4">
            There are lots of amazing places you can explore with a car in New
            England if you wanted to expand your trip! One of our favorites for
            an outdoor adventure is a trip up to Maine to visit Acadia National
            Park, explore the Green Mountains in Vermont and the White Mountains
            in New Hampshire, or head west to Western Massachusetts and the
            Berkshires (go MHC!)
          </p>
          <p>
            For some other cool cities to explore, there is of course, New York
            City, which is about 4 hours away. More local to New England you
            have cities like North Hampton and Amherst in Western MA,
            Montpellier and Burlington VT, or Portland ME. Part of the journey
            is enjoying the little towns you cross through on the way. If
            you&apos;re looking for even more of an adventure, I can recommend
            DC as another amazing place to visit, but it is 8 hours from Boston
            :)
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ThingsToDo;
