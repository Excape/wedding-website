/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslations } from "use-intl";
import PlaneHearts from "../../public/assets/plane_heart.svg";

const TitleBanner = () => {
  const t = useTranslations("Banner");
  return (
    <>
      <div className="bg-map-blue text-white text-center py-8 px-8">
        <h1 className="font-title text-5xl mb-4 sm:text-6xl md:text-7xl lg:text-8xl">
          Sophie & Robin
        </h1>
        <img
          className="w-48 mx-auto mb-4 md:w-64 lg:w-72"
          src="/assets/plane_heart_white.svg"
          alt="Airplane drawing a heart"
        />
        <h2 className="font-title-sans text-2xl uppercase sm:text-3xl lg:text-4xl">
          {t("getting-married")}
        </h2>
      </div>
      <div className="bg-map-beige-light text-map-blue text-center py-8 px-4">
        <h2 className="font-title text-4xl mb-4 md:text-5xl lg:text-6xl">
          <time dateTime="2022-06-25">{t("june-25-2022")}</time>
        </h2>
        <h3 className="text-3xl font-title-sans lg:text-4xl">
          Boston, MA, USA
        </h3>
      </div>
    </>
  );
};

export default TitleBanner;
