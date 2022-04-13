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
  token: Token;
  value: number;
  action: string;
  changeToken: (token: Token) => void;
  changeValue: (val: number) => void;
}

const TokenComponent: FC<TokenProps> = (props) => {
  const { token, value, action, changeToken, changeValue } = props;

  const setMaxValue = () => {
    changeValue(token.balance);
  };

  return (
    <Stack direction="column" width="full">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Action text={action} />
        <Wallet token={token} onClick={setMaxValue} />
      </Stack>
      <Popover>
        <Stack direction="row" alignItems="center" justifyContent="space-around">
          <Input value={value} onChange={changeValue} />
          <TokenIcon token={token} />
        </Stack>
        <Search currentToken={token} selectToken={changeToken} />
      </Popover>
    </Stack>
  );
};

export default TokenComponent;
