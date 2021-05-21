import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Banner from "../components/Banner";
import MainInfo from "../components/MainInfo";

export default function Home() {
  const t = useTranslations("index");
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
