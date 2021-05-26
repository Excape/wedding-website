import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import Banner from "../components/Banner";
import LanguageSwitcher from "../components/LanguageSwitcher";
import MainInfo from "../components/MainInfo";

export default function Home() {
  const t = useTranslations("index");
  const router = useRouter();
  return (
    <div className="">
      <Head>
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Rochester&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Banner />
        <LanguageSwitcher lang={router.locale as "de" | "en"} />
        {/* <MainInfo /> */}
      </main>
    </div>
  );
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../i18n/index/${locale}.json`),
    },
  };
}
