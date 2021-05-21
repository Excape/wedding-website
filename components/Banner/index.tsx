import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("Banner");
  return (
    <div className="banner w-screen">
      <style jsx>
        {`
          .banner {
            height: 100vh;
          }
        `}
      </style>
      <img className="object-cover h-full w-full" src="assets/banner-bg.png" />
      <div className="absolute flex items-center top-0 left-0 w-full h-full">
        <div className="w-2/3 h-2/3 max-w-3xl max-h-xl mx-auto border-8 lg:border-16 rounded-md backdrop-filter backdrop-blur-lg border-veg-green">
          <div className="w-full h-full flex flex-col items-center justify-between p-4 bg-white opacity-70">
            <p className="font-title text-10vw lg:text-8xl">Save the Date</p>
            <p className="font-title-sans text-7vw md:text-5xl lg:text-4xl text-center">
              {t("sophie-robin-wedding")}
            </p>
            <img src="assets/rings.png" className="w-1/4" />
            <div className="flex flex-col items-center lg:gap-4">
              <p className="font-title text-7vw md:text-5xl lg:text-5xl">
                June 25th, 2022
              </p>
              <p className="font-title-sans text-7vw md:text-5xl lg:text-5xl">
                Boston, MA, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
