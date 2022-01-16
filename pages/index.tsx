/* eslint-disable @next/next/no-page-custom-font */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Head from "next/head";
import React, {  } from "react";
import Banner from "../components/Banner";
import LanguageSwitcher from "../components/LanguageSwitcher";
import EmailSubscribe from "../components/EmailSubscribe";
import NavBar from "../components/Layout/NavBar";
import Venues from "../components/Venues";
import styled from "styled-components";
import Schedule from "../components/Schedule";
import Travel from "../components/Travel";
import Lodging from "../components/Lodging";
import OurStory from "../components/OurStory";
import Activities from "../components/Activities";
import FAQ from "../components/FAQ";
import Registry from "../components/Registry";
import Rsvp from "../components/Rsvp";
import ImageBanner from "../components/ImageBanner";
import TitleBanner from "../components/TitleBanner";

const MainContainer = styled.main`
  padding-top: 56px;
`

export default function Home() {
  const t = useTranslations("index");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Rochester&display=swap"
          rel="stylesheet"
        />

      </Head>

      <NavBar />
      <MainContainer>
        <ImageBanner />
        <LanguageSwitcher lang={router.locale as "de" | "en"} />
        <TitleBanner />
        {/* <EmailSubscribe /> */}
        <Venues />
        <Schedule />
        <Travel />
        <Lodging />
        <OurStory />
        <Activities />
        <Rsvp />
        <Registry />
        <FAQ />
      </MainContainer>
    </>
  );
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../i18n/index/${locale}.json`),
    },
  };
}
