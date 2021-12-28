import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { Page } from "src/components/common/Page";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
