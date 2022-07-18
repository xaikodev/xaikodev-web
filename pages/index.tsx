import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Hero } from "../src/components/Home/Hero";
import { Solutions } from "../src/components/Home/Solutions";
import { Team } from "../src/components/Home/Team";

const Home: NextPage = () => {
  return (
    <Box minW={"full"} p={0} m={0}>
      <Hero></Hero>
      <Team></Team>
      <Solutions></Solutions>
    </Box>
  );
};

export default Home;
