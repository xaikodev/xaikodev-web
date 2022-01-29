import { HStack, VStack } from "@chakra-ui/react";
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
    <VStack
      color={"lime"}
      border={"solid"}
      borderColor={"lime"}
      padding={3}
      borderRadius={25}
      borderWidth={1}
      width={"100%"}
      ref={SearchRef}
    >
      <HStack width={"100%"} justifyContent={"space-between"}>
        <Action text={action} />
        <Wallet token={token} onClick={setMaxValue} />
      </HStack>
      <HStack
        width={"100%"}
        color={"lime"}
        border={"solid"}
        borderWidth={1}
        borderRadius={50}
        padding={1}
        paddingStart={5}
        paddingEnd={5}
        borderColor={"lime"}
      >
        <Input value={value} onChange={setValue} />
        <TokenIcon token={token} onClick={openSearch} />
      </HStack>
      <Search
        opened={OpenedSearch}
        currentToken={token.name}
        selectToken={selectToken}
      />
    </VStack>
  );
};
