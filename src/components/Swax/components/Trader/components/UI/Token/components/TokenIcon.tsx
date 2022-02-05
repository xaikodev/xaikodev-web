import { Text, Stack, Button, useColorModeValue, Image } from "@chakra-ui/react";
import { FC } from "react";
import { Token } from "src/components/Swax/models/wax.models";

interface TokenIconProps {
  token: Token;
}
export const TokenIcon: FC<TokenIconProps> = (props) => {
  const { token } = props;
  const color = useColorModeValue("gray.800", "green.400");
  return (
    <Button size="md" variant="outline" color={color} borderColor={color}>
      <Image boxSize="3" m={1} objectFit="cover" src={token.logo.sm} alt={token.name} />
      <Text color={color} m={1} fontSize="xs">
        {token.symbol}
      </Text>
    </Button>
  );
};
