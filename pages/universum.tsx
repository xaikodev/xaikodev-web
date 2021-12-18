import { Box } from "@chakra-ui/layout";
import { Game } from "src/components/Universum/Game/Game";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../src/components/Footer";
import { Main } from "../src/components/Main";
import styles from "../../styles/Home.module.css";

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
