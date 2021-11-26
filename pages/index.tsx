import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

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
