/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import React from "react";
import Section from "../Layout/Section";
import { LinkButton, SectionHeader } from "../Layout/styles";

const Registry = () => {
  const t = useTranslations("Registry");
  return (
    <Section
      id="registry"
      className="bg-map-blue text-map-beige-light text-center"
    >
      <SectionHeader className="text-map-beige-light">
        {t("title")}
      </SectionHeader>
      <div className="md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
        <p className="mb-8">{t("message")}</p>
        <div className="flex flex-col md:flex-row space-y-4 md:justify-around md:space-y-0">
          <div>
            <img
              className="h-16 mb-4 mx-auto"
              src="/assets/gift.svg"
              alt="gift box"
            />
            <LinkButton
              blueBackground
              href="https://www.zola.com/registry/sophieandrobin"
            >
              {t("visit_zola")}
            </LinkButton>
          </div>
          <div>
            <img
              className="h-16 mb-4 mx-auto"
              src="/assets/star_of_david.svg"
              alt="Star of David"
            />
            <LinkButton
              blueBackground
              href="https://kolbo.com/apps/giftregistry/registry/195680"
            >
              {t("visit_kolbo")}
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Registry;
