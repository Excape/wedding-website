import Head from "next/head";
import Banner from "../components/Banner";
import MainInfo from "../components/MainInfo";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sophie & Robin's wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
        <MainInfo />
      </main>
    </div>
  );
}
