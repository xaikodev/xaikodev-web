import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../src/components/Footer";
import { Main } from "../src/components/Main";
import styles from "../src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>XaikoDev</title>
        <meta name="description" content="Xaiko' personal Website" />
      </Head>
      <Main>
        <h1>Under construction</h1>
      </Main>
    <Footer/>
    </div>
  );
};

export default Home;
