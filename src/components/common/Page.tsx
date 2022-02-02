import { FC } from "react";
import Head from "next/head";
import { Footer } from "./Footer";
import { Main } from "./Main"; 
import Header from "./Header";
import { Stack } from "@chakra-ui/layout";

export interface PageProps {
  title?: string;
}

export const Page: FC<PageProps> = (props) => {
  return (
    <Stack>
      <Head>
        <title>{props.title ? props.title + " | XaikoDev" : "XaikoDev"}</title>
        <meta name="description" content="Xaiko' personal Website" />
      </Head>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </Stack>
  );
};
