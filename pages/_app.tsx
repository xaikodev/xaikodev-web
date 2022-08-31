import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { Page } from "src/components/common/Page";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const BaseComponent = Component as any;
  return (
    <ChakraProvider>
      <Page>
        <BaseComponent {...pageProps} />
      </Page>
    </ChakraProvider>
  );
}

export default MyApp;
