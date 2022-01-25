/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslations } from "use-intl";
import Section from "../Layout/Section";
import { Heading2, Heading3, Link, SectionHeader } from "../Layout/styles";

const Travel = () => {
  const t = useTranslations("Travel");
  return (
    <Section id="travel" className="bg-map-blue text-map-beige-light">
      <SectionHeader className="">{t("title")}</SectionHeader>
      <div className="space-y-8 text-center">
        <div className="md:w-2/3 md:mx-auto lg:w-1/2">
          <Heading2>{t("plane")}</Heading2>
          <img
            className="w-16 mx-auto"
            src="/assets/paper_airplane.svg"
            alt="Paper airplane"
          />
          <h3 className="text-xl mb-4 p-1">{t("airport")}</h3>
          <p className="mb-2">
            {t.rich("plane_details", {
              momondo: (c) => <Link href="https://www.momondo.com/">{c}</Link>,
              kayak: (c) => (
                <Link href="https://www.kayak.com/flights">{c}</Link>
              ),
            })}
          </p>
          <p>{t("plane_hotel")}</p>
        </div>
        <div className="md:w-2/3 md:mx-auto lg:w-1/2">
          <Heading2>{t("around")}</Heading2>
          <p className="mb-4">{t("around_summary")}</p>
        </div>
        <div className="flex flex-col md:w-2/3 md:mx-auto lg:w-full lg:flex-row lg:items-baseline lg:space-x-12">
          <div className="mb-4 flex-1">
            <img
              className="w-16 mx-auto mb-4"
              src="/assets/metro.svg"
              alt="Metro"
            />
            <p className="mb-2">{t("public_1")}</p>
            <p className="mb-4">
              {t.rich("public_2", {
                mbta: (c) => <Link href="https://www.mbta.com/">{c}</Link>,
              })}
            </p>
          </div>

          <div className="mb-4 flex-1">
            <img
              className="w-16 mx-auto mb-4"
              src="/assets/taxi.svg"
              alt="Taxi"
            />
            <p>{t("taxi")}</p>
          </div>
          <div className="mb-4 flex-1">
            <img
              className="w-16 mx-auto mb-4"
              src="/assets/rental_car.svg"
              alt="Rental Car"
            />
            <p>{t("rental")}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Travel;
