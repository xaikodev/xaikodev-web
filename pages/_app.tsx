import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { Page } from "src/components/common/Page";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
}

export default MyApp;
