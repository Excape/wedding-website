import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";

type Props = {
  lang: "de" | "en";
};

const LanguageSwitcher = ({ lang }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const otherLang = lang === "en" ? "de" : "en";

  const toggleSwitcher = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const toggleLanguage = (event) => {
    setIsOpen(false);
    document.cookie = `NEXT_LOCALE=${otherLang}`;
  };

  return (
    <div className="fixed top-16 right-8">
      <a
        className="flex items-center bg-white px-2 border-map-blue border-2 rounded-xl shadow-lg"
        onClick={toggleSwitcher}
        href=""
      >
        <LocaleFlag lang={lang} />
        <ChevronDown />
      </a>
      {isOpen && (
        <Link href="" locale={otherLang} scroll={false}>
          <a
            className="relative arrow-up menu--animated flex justify-center mt-3 bg-white border-map-blue border-2 rounded-xl shadow-lg"
            onClick={toggleLanguage}
          >
            <LocaleFlag lang={otherLang} />
            <style jsx>{`
              .arrow-up:after,
              .arrow-up:before {
                content: "";
                position: absolute;
                bottom: 100%;
                left: 50%;
                border: solid transparent;
                width: 0;
                height: 0;
              }

              .arrow-up:after {
                border-color: rgba(255, 255, 255, 0);
                border-bottom-color: #3b727c;
                border-width: 5px;
                margin-left: -5px;
              }

              .arrow-up:before {
                border-color: rgba(194, 225, 245, 0);
                border-bottom-color: #3b727c;
                border-width: 8px;
                margin-left: -8px;
              }
            `}</style>
            <style jsx>{`
              .menu--animated {
                animation: growDown 200ms ease-in-out forwards;
                transform-origin: top center;
              }
              @keyframes growDown {
                0% {
                  transform: scaleY(0);
                }

                80% {
                  transform: scaleY(1.1);
                }

                100% {
                  transform: scaleY(1);
                }
              }
            `}</style>
          </a>
        </Link>
      )}
    </div>
  );
};

const LocaleFlag = ({ lang }: Props) => (
  <span className="text-4xl" role="img" aria-label={lang}>
    {lang === "en" ? "🇺🇸 " : "🇨🇭"}
  </span>
);

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 inline-block"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default LanguageSwitcher;
