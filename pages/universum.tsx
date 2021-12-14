import { Box } from "@chakra-ui/layout";
import { Game } from "components/Universum/Game/Game";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

const Universum: NextPage = () => {
  return (
    <Box className={styles.container}>
      <Head>
        <title>Universum</title>
        <meta name="description" content="Universum" />
      </Head>
      <Main>
        <Game/>
      </Main>
    <Footer/>
    </Box>
  );
};

export default Universum;
