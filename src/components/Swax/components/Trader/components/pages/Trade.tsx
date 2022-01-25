import { VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useWallet } from "src/components/Swax/hooks/useWallet";
import { ActionButton } from "../UI/ActionButton";
import { Switcher } from "../UI/Switcher";
import { Token } from "../UI/Token/Token";

interface TradeProps {}
export const Trade: FC<TradeProps> = (props) => {
  const { wallet } = useWallet();

  const {} = props;
  return (
    <VStack
      width={"100%"}
      justifyContent={"space-between"}
      height={"100%"}
      border={"solid"}
      borderColor={"lime"}
      padding={5}
      borderRadius={25}
      borderWidth={1}
    >
      {wallet.availableTokens && wallet.availableTokens.length > 0 && (
        <Token
          action="Buy"
          token={wallet.availableTokens.find((token) => token.symbol == "WAX")!}
        />
      )}
      <Switcher />
      {wallet.availableTokens && wallet.availableTokens.length > 0 && (
        <Token
          action="Buy"
          token={wallet.availableTokens.find((token) => token.symbol == "TLM")!}
        />
      )}
      <ActionButton />
    </VStack>
  );
};
