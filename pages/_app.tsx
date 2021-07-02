import { Windmill } from "@windmill/react-ui";
import { NextIntlProvider } from "next-intl";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import windmillTheme from "../windmill-theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Windmill theme={windmillTheme}>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </Windmill>
  );
}

export default MyApp;
