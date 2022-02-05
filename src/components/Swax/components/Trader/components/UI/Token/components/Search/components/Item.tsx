import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import { FC } from "react";
import { Token } from "src/components/Swax/models/wax.models";

interface ItemProps {
  token: Token;
  select: (token: Token) => void;
}

export const Item: FC<ItemProps> = (props) => {
  const { token, select } = props;
  return (
    <Button onClick={() => select(token)} size="sm" width="full" flex={1} alignItems="center" justifyContent="space-between">
      <Text>{token.contract}</Text>
      <Text>{token.symbol}</Text>
      <Text>{token.balance}</Text>
    </Button>
  );
};
