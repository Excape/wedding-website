/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import Image from "next/image";
import ScrollDownHint from "./ScrollDownHint";

const Banner = () => {
  const t = useTranslations("Banner");
  return (
    <div className="h-screen w-screen relative">
      <div className="h-screen">
        <img
          className="object-cover h-full w-full min-h-screen"
          alt="vegetable background"
          src="/assets/vegetable-bg2.png"
        />
      </div>
      <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full">
        <div className="border-8 lg:border-16 mx-10 sm:mx-36 lg:mx-64 rounded-lg shadow-md backdrop-filter backdrop-blur-lg border-veg-green">
          <div className="min-h-30 max-w-xl max-h-screen lg:min-h-40 flex flex-col items-center justify-between px-4 py-6 bg-white opacity-70">
            <p className="font-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Save the Date
            </p>
            <p className="font-title-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
              {t("sophie-robin-wedding")}
            </p>
            <div className="w-20 lg:w-28">
              <img
                src="/assets/rings.png"
                alt="rings"
                width="165"
                height="165"
              />
            </div>
            <div className="flex flex-col items-center lg:gap-4">
              <p className="font-title text-3xl md:text-4xl lg:text-5xl">
                {t("june-25-2022")}
              </p>
              <p className="font-title-sans text-2xl md:text-3xl lg:text-4xl">
                Boston, MA, USA
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollDownHint />
    </div>
  );
};

export default Banner;
