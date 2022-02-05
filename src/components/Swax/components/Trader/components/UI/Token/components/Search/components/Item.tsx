import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Stack, Text } from "@chakra-ui/layout";
import { FC } from "react";
import { Token } from "src/components/Swax/models/wax.models";

interface ItemProps {
  token: Token;
  select: (token: Token) => void;
}

export const Item: FC<ItemProps> = (props) => {
  const { token, select } = props;
  return (
    <Button onClick={() => select(token)} size="xs" width="full" leftIcon={<Text>{token.symbol}</Text>} rightIcon={<Text>{token.balance}</Text>}>
      <Text>{token.name}</Text>
    </Button>
  );
};
