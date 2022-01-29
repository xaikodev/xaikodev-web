import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { Page } from "src/components/common/Page";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Page>
          <Component {...pageProps} />
        </Page>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default MyApp;
