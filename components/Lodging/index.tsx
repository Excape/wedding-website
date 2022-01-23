/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslations } from "use-intl";
import Section from "../Layout/Section";
import { Heading2, Link, LinkButton, SectionHeader } from "../Layout/styles";

const Lodging = () => {
  const t = useTranslations("Lodging");
  return (
    <Section
      id="lodging"
      className="bg-map-beige-light text-center text-map-blue"
    >
      <SectionHeader className="text-map-blue">{t("title")}</SectionHeader>
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
          <p>{t("fairfield_price")}</p>
          <p>{t("blocks")}</p>
          <div className="flex flex-col items-center justify-center md:space-x-2 mt-2 md:flex-row">
            <LinkButton href="https://www.marriott.com/events/start.mi?id=1639171160259&key=GRP">
              {t("book")}
            </LinkButton>
            <LinkButton href="https://www.marriott.com/hotels/travel/bosfo-fairfield-boston-medford/">
              {t("website")}
            </LinkButton>
          </div>
        </div>
        <div className="flex-1 md:pl-4 md:border-l border-map-blue">
          <img className="w-16 mx-auto" src="/assets/hotel.svg" alt="Hotel" />
          <Heading2>{t("boston_north")}</Heading2>
          <p className="uppercase">
            <Link href="https://goo.gl/maps/2PMEApmzmGrv9X8z9">
              95 Station Landing, Medford
            </Link>
          </p>
          <p className="mb-4">(781) 819-2090</p>
          <p>{t("boston_north_price")}</p>
          <p>{t("blocks")}</p>
          <div className="flex flex-col items-center justify-center md:space-x-2 mt-2 md:flex-row">
            <LinkButton href="https://www.marriott.com/events/start.mi?id=1639171023239&key=GRP">
              {t("book")}
            </LinkButton>
            <LinkButton href="https://www.marriott.com/hotels/travel/bosac-ac-hotel-boston-north/">
              {t("website")}
            </LinkButton>
          </div>
        </div>
      </div>

      <div className="mt-8 md:w-1/2 md:mx-auto lg:mt-16 lg:w-1/3">
        <img className="w-16 mx-auto" src="/assets/bed.svg" alt="Airbnb" />
        <Heading2>Airbnb</Heading2>
        <p className="mb-2">{t("airbnb_details")}</p>
        <LinkButton href="https://www.airbnb.com/boston-ma/stays">
          {t("airbnb_link")}
        </LinkButton>
      </div>
    </Section>
  );
};

export default Lodging;
