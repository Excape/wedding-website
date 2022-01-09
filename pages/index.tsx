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
        <Banner />
        <LanguageSwitcher lang={router.locale as "de" | "en"} />
        <EmailSubscribe />
        <Venues />
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
