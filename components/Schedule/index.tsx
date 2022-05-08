import React from "react";
import Section from "../Layout/Section";
import { Heading2, Heading3, SectionHeader } from "../Layout/styles";
import Image from "next/image";
import Cake from "../../public/assets/cake.svg";
import PlateSVG from "../../public/assets/plate.svg";
import { useTranslations } from "use-intl";

const Schedule = () => {
  const t = useTranslations("Schedule");
  return (
    <Section
      id="schedule"
      className="bg-map-beige text-map-blue font-medium space-y-16 md:space-y-0"
    >
      <SectionHeader className="text-map-blue">{t("title")}</SectionHeader>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-center mb-4 md:p-16 md:m-0 md:flex-1">
          <Heading2>{t("welcome")}</Heading2>
          <h3 className="font-title-sans text-xl font-light">
            {t("welcome_date")}
          </h3>
          <h3 className="font-title-sans text-xl font-light">
            {t("welcome_time")}
          </h3>
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
          <p>AC Hotel Boston North, 95 Station Landing, Medford</p>
          <p className="mt-4">{t("welcome_details")}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-center mb-4 md:p-16 md:m-0 md:flex-1">
          <Heading2>{t("ceremony")}</Heading2>
          <h3 className="font-title-sans text-xl uppercase font-light">
            {t("ceremony_date")}
          </h3>
          <h3 className="font-title-sans text-xl font-light">
            {t("ceremony_time")}
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
          <p>{t("ceremony_location")}</p>
          <p>70 Red Pine Dr. Carlisle, MA</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-center mb-4 md:p-16 md:m-0 md:flex-1">
          <Heading2>{t("reception")}</Heading2>
          <h3 className="font-title-sans text-xl uppercase font-light">
            {t("reception_date")}
          </h3>
          <h3 className="font-title-sans text-xl font-light">
            {t("reception_time")}
          </h3>
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
          <p className="mt-4">{t("reception_details")}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-center mb-4 md:p-16 md:m-0 md:flex-1">
          <Heading2>{t("brunch")}</Heading2>
          <h3 className="font-title-sans text-xl uppercase font-light">
            {t("brunch_date")}
          </h3>
          <h3 className="font-title-sans text-xl font-light">
            {t("brunch_time")}
          </h3>
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
          <p>AC Hotel Boston North, 95 Station Landing, Medford</p>
          <p className="mt-4">{t("brunch_details")}</p>
        </div>
      </div>
    </Section>
  );
};

export default Schedule;
