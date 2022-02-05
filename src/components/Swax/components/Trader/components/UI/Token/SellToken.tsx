import { Stack, Popover, PopoverTrigger } from "@chakra-ui/react";
import { FC } from "react";
import { useTrade } from "src/components/Swax/hooks/useTrade";
import { Token } from "src/components/Swax/models/wax.models";
import { Action } from "./components/Action";
import { Input } from "./components/Input";
import { Search } from "./components/Search/Search";
import { TokenIcon } from "./components/TokenIcon";
import { Wallet } from "./components/Wallet";

interface TokenProps {}

const TokenComponent: FC<TokenProps> = (props) => {
  const { pairToken, pairValue, changePairToken, changePairValue } = useTrade();

  const setMaxValue = () => {
    changePairValue(pairToken.balance);
  };

  const selectToken = (token: Token) => {
    changePairToken(token);
  };
  return (
    <Stack direction="column">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Action text="Sell" />
        <Wallet token={pairToken} onClick={setMaxValue} />
      </Stack>
      <Popover>
        <PopoverTrigger>
          <Stack direction="row" alignItems="center" justifyContent="space-around">
            <Input value={pairValue} onChange={changePairValue} />
            <TokenIcon token={pairToken} />
          </Stack>
        </PopoverTrigger>
        <Search currentToken={pairToken} selectToken={selectToken} />
      </Popover>
    </Stack>
  );
};

export default TokenComponent;
