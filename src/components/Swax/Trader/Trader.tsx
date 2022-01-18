import { FC } from "react";
import { Trade } from "./components/pages/Trade";
import { Tabs } from "./components/UI/Tabs";
import { Stats } from "src/components/Universum/UI/Interfaces/Stats";
import { Liquidity } from "./components/pages/Liquidity";
import { Arbitrage } from "./components/pages/Arbitrage";
import { Box, VStack } from "@chakra-ui/react";

interface TraderProps {}

export const Trader: FC<TraderProps> = (props) => {
  const {} = props;
  return (
    <Box p={10} bg="#222" borderRadius={25} height={"full"}>
      <Tabs>
        <Trade />
        {/* <Liquidity /> */}
        {/* <Arbitrage /> */}
      </Tabs>
    </Box>
  );
};
