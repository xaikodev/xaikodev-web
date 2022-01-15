import { FC } from "react";
import { Trade } from "./components/pages/Trade";
import { Tabs } from "./components/UI/Tabs";
import { Stats } from "src/components/Universum/UI/Interfaces/Stats";
import { Liquidity } from "./components/pages/Liquidity";
import { Arbitrage } from "./components/pages/Arbitrage";

interface TraderProps {}

export const Trader: FC<TraderProps> = (props) => {
  const {} = props;
  return (
    <div>
      <Tabs>
        <Trade />
        <Liquidity />
        <Arbitrage />
      </Tabs>
      <Stats />
    </div>
  );
};
