import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>XaikoDev</title>
        <meta name="description" content="Xaiko' personal Website" />
      </Head>

      <main className={styles.main}>
        <h1>Under construction</h1>
      </main>

      <footer className={styles.footer}>
        <p>© 2020 , Code is public on GitHub feel free to steal</p>
      </footer>
    </div>
  );
};

export default Home;
