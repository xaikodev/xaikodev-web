import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { WalletToken } from "src/components/Swax/hooks/useWallet";
import { Switcher } from "../UI/Switcher";
import { Token } from "../UI/Token";

interface TradeProps {}
export const Trade: FC<TradeProps> = (props) => {
  const token1: WalletToken = {
    account: "eosio.token",
    balance: 0,
    chain: "wax",
    decimals: 8,
    logo: "",
    logo_lg: "",
    name: "WAX",
    symbol: "WAX",
  };
  const token2: WalletToken = {
    account: "alien.worlds",
    balance: 0,
    chain: "wax",
    decimals: 4,
    logo: "",
    logo_lg: "",
    name: "Trilium",
    symbol: "TLM",
  };
  const {} = props;
  return (
    <Stack
      minHeight="xs"
      direction="column"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Token token={token1} action="Buy" />
      <Switcher />
      <Token token={token2} action="Sell" />
    </Stack>
  );
};
