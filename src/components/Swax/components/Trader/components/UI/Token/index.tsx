import { Stack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { WalletToken } from "src/components/Swax/hooks/useWallet";
import { useClickOutside } from "src/hooks/useClickOutside";
import { Action } from "./components/Action";
import { Input } from "./components/Input";
import { Search } from "./components/Search/Search";
import { TokenIcon } from "./components/TokenIcon";
import { Wallet } from "./components/Wallet";

interface TokenProps {
  action: string;
  token: WalletToken;
}

export const Token: FC<TokenProps> = (props) => {
  const { token, action } = props;
  const [value, setValue] = useState(0);
  const [OpenedSearch, setOpenedSearch] = useState(false);

  const setMaxValue = () => {};
  const openSearch = () => {
    setOpenedSearch((prevVal) => !prevVal);
  };

  const selectToken = (token: string) => {
    setOpenedSearch(false);
  };

  const cancelSearch = () => {
    setOpenedSearch(false);
  };
  const SearchRef = useClickOutside(cancelSearch);

  return (
    <Stack direction="column" ref={SearchRef}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Action text={action} />
        <Wallet token={token} onClick={setMaxValue} />
      </Stack>
      <Stack direction="row">
        <Input value={value} onChange={setValue} />
        <TokenIcon token={token} onClick={openSearch} />
      </Stack>
      <Search
        opened={OpenedSearch}
        currentToken={token.name}
        selectToken={selectToken}
      />
    </Stack>
  );
};
