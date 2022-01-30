import { FC } from "react";
import { Trade } from "./components/pages/Trade";
import { Tabs } from "./components/UI/Tabs";
import { Stack } from "@chakra-ui/react";
import { Liquidity } from "./components/pages/Liquidity";
import { Arbitrage } from "./components/pages/Arbitrage";

interface TraderProps {}

export const Trader: FC<TraderProps> = (props) => {
  const {} = props;
  return (
      <Stack p={10} borderRadius={25}>
        <Tabs>
          <Trade />
          <Liquidity />
          <Arbitrage />
        </Tabs>
      </Stack>
  );
};
