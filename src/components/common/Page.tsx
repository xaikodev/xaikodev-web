import { FC } from "react";
import Head from "next/head";
import { Footer } from "./Footer";
import { Main } from "./Main";
import styles from "../../styles/Home.module.css";
import { Navbar } from "./Navbar";

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
      <Navbar />
      <Main>{props.children}</Main>
      <Footer />
    </div>
  );
};
