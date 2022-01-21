/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslations } from "use-intl";
import Section from "../Layout/Section";
import {
  Heading2,
  Heading3,
  LinkButton,
  SectionHeader,
} from "../Layout/styles";

const Venues = () => {
  const t = useTranslations("Venues");
  return (
    <Section id="venues" className="bg-map-green">
      <SectionHeader className="text-map-blue">{t("venues")}</SectionHeader>
      <div className="flex flex-col items-center md:items-start text-center justify-around md:flex-row">
        <div className="flex-1 mb-12 md:mb-0">
          <img
            className="h-16 m-auto mb-2"
            src="/assets/rings2.png"
            alt="rings"
          />
          <Heading2>{t("ceremony")}</Heading2>
          <Heading3>70 Red Pine Dr. Carlisle, MA</Heading3>
          <LinkButton href="https://goo.gl/maps/khKYeFpAi5XavvuC8">
            {t("directions")}
          </LinkButton>
        </div>
        <div className="flex-1">
          <img
            className="h-16 m-auto mb-2"
            src="/assets/cake.svg"
            alt="wedding cake"
          />
          <Heading2>{t("reception")}</Heading2>
          <Heading3>Griffin Museum of Photography, Winchester, MA</Heading3>
          <div>
            <LinkButton href="https://goo.gl/maps/B6SrD2FpR9HCLYVEA">
              {t("directions")}
            </LinkButton>
          </div>
          <LinkButton href="https://griffinmuseum.org/">
            {t("visitwebsite")}
          </LinkButton>
        </div>
      </div>
    </Section>
  );
};

export default Venues;
