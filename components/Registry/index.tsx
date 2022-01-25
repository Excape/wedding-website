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
      <img
        className="w-16 mb-8 mx-auto"
        src="/assets/gift.svg"
        alt="gift box"
      />
      <p className="mb-8">{t("message")}</p>
      <LinkButton
        blueBackground
        href="https://www.zola.com/registry/sophieandrobin"
      >
        {t("visit")}
      </LinkButton>
    </Section>
  );
};

export default Registry;
