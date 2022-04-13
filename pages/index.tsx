import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Hero } from "../src/components/Home/UI/Hero/Hero";
import { Team } from "../src/components/Home/UI/Team/Team";

const Home: NextPage = () => {
  return (
    <Box>
      <Hero></Hero>
      <Team></Team>
    </Box>
  );
};

export default Home;
