import { Stack, Popover, PopoverTrigger } from "@chakra-ui/react";
import { FC } from "react";
import { useTrade } from "src/components/Swax/hooks/useTrade";
import { Token } from "src/components/Swax/models/wax.models";
import { Action } from "./components/Action";
import { Input } from "./components/Input";
import { Search } from "./components/Search/Search";
import { TokenIcon } from "./components/TokenIcon";
import { Wallet } from "./components/Wallet";

interface TokenProps {
}

const TokenComponent: FC<TokenProps> = (props) => {
  const {token, value, changeToken,changeValue} = useTrade()

  const setMaxValue = () => {
    changeValue(token.balance);
  };

  const selectToken = (token: Token) => {
    changeToken(token);
  };
  return (
    <Stack direction="column">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Action text="Buy" />
        <Wallet token={token} onClick={setMaxValue} />
      </Stack>
      <Popover>
        <PopoverTrigger>
          <Stack direction="row" alignItems="center" justifyContent="space-around">
            <Input value={value} onChange={changeValue} />
            <TokenIcon token={token} />
          </Stack>
        </PopoverTrigger>
        <Search currentToken={token} selectToken={selectToken} />
      </Popover>
    </Stack>
  );
};


export default TokenComponent