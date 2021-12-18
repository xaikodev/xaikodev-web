import { FC } from "react";
import Head from "next/head";
import { Footer } from "./Footer";
import { Main } from "./Main";
import styles from "../../styles/Home.module.css";

export interface PageProps {
  title?: string;
}

export const Page: FC<PageProps> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.title ? props.title + " | XaikoDev" : "XaikoDev"}</title>
        <meta name="description" content="Xaiko' personal Website" />
      </Head>
      <Main>{props.children}</Main>
      <Footer />
    </div>
  );
};
