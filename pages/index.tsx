import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Page } from "src/components/common/Page";
import { Hero } from "../src/components/Home/Hero";

const Home: NextPage = () => {
  return (
    <Box>
      <Hero></Hero>
    </Box>
  );
};

export default Home;
