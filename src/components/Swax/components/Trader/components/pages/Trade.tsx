import { Stack } from "@chakra-ui/react";
import { FC } from "react";

import { Switcher } from "../UI/Switcher";
import Buy from "../UI/Token/SellToken";
import Sell from "../UI/Token/BuyToken";

interface TradeProps {}
export const Trade: FC<TradeProps> = (props) => {
  return (
    <Stack minHeight="xs" direction="column" alignItems="center" justifyContent="space-evenly">
      <Buy />
      <Switcher />
      <Sell />
    </Stack>
  );
};
