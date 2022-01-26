import React from "react";
import { useTranslations } from "use-intl";
import Section from "../Layout/Section";
import { Heading2, Heading3, Link, SectionHeader } from "../Layout/styles";

const ThingsToDo = () => {
  const t = useTranslations("ThingsToDo");
  return (
    <Section id="thingstodo" className="bg-map-green text-center">
      <SectionHeader className="text-map-blue">{t("title")}</SectionHeader>
      <div className="md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
        <div className="mb-4">
          <Heading2 className="text-map-blue">Boston</Heading2>
          <p className="mb-4">{t("intro")}</p>
          <ul className="text-left list-disc list-outside px-4 space-y-2">
            <li>
              <strong>{t("brewery.tours")}</strong>
              --{" "}
              {t.rich("brewery.breweries", {
                downeast: (c) => (
                  <Link href="https://downeastcider.com/pages/visit" accentBlue>
                    {c}
                  </Link>
                ),
                harp: (c) => (
                  <Link
                    href="https://www.harpoonbrewery.com/boston-brewery/"
                    accentBlue
                  >
                    {c}
                  </Link>
                ),
                sam: (c) => (
                  <Link
                    href="https://www.samueladams.com/brewerytours"
                    accentBlue
                  >
                    Sam Adams
                  </Link>
                ),
              })}
            </li>
            <li>
              <Link href="https://bostonducktours.com/" accentBlue>
                Duck Boat tour
              </Link>{" "}
              -- {t("duck")}
            </li>
            <li>
              <strong>
                {t.rich("common", {
                  public: (c) => (
                    <Link
                      href="https://goo.gl/maps/MFhf7YZ8QuynSBwC9"
                      accentBlue
                    >
                      {c}
                    </Link>
                  ),
                })}
              </strong>{" "}
              -- {t("walk")}
            </li>
            <li>
              <Link href="https://www.thefreedomtrail.org/tours" accentBlue>
                Freedom Trail Tour
              </Link>{" "}
              -- {t("history")}
            </li>
            <li>
              <strong>
                {t.rich("copley", {
                  bpl: (c) => (
                    <Link href="https://www.bpl.org/locations/3/" accentBlue>
                      {c}
                    </Link>
                  ),
                })}
              </strong>{" "}
              -- {t("farm")}
            </li>
            <li>
              <strong>
                <Link href="https://www.mfa.org/" accentBlue>
                  Museum of Fine Arts Boston
                </Link>{" "}
                &{" "}
                <Link href="https://www.gardnermuseum.org/" accentBlue>
                  Isabella Stewart Gardner Museum
                </Link>
              </strong>
            </li>
            <li>
              <strong>Chinatown</strong> -- {t("food")}
            </li>
            <li>
              <strong>Fenway Park</strong> -- {t("game")}
            </li>
          </ul>
        </div>
        <div>
          <Heading2 className="text-map-blue">{t("nearby.title")}</Heading2>
          <p className="mb-4">{t("nearby.close")}</p>
          <p>{t("nearby.far")}</p>
        </div>
      </div>
    </Section>
  );
};

export default ThingsToDo;
