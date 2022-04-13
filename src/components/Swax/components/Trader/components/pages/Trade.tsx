import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { useTrade } from "../../../../hooks/useTrade";

import { Switcher } from "../UI/Switcher";
import Token from "../UI/Token/";

interface TradeProps {}
export const Trade: FC<TradeProps> = (props) => {
  const { token, pairToken, value, pairValue, changeValue, changeToken, changePairToken, changePairValue } = useTrade();

  return (
    <Stack minHeight="xs" direction="column" alignItems="center" justifyContent="space-evenly">
      {token && <Token token={token} changeToken={changeToken} action="Buy" value={value} changeValue={changeValue} />}
      <Switcher />
      {pairToken && <Token token={pairToken} changeToken={changePairToken} action="Buy" value={pairValue} changeValue={changePairValue} />}
    </Stack>
  );
};
