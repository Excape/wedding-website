import Head from "next/head";
import Banner from "../components/Banner";
import MainInfo from "../components/MainInfo";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sophie & Robin's wedding</title>
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
