import { Text, Button, useColorModeValue, Image, PopoverTrigger } from "@chakra-ui/react";
import { FC } from "react";
import { Token } from "src/components/Swax/models/wax.models";

interface TokenIconProps {
  token: Token;
}

export const TokenIcon: FC<TokenIconProps> = (props) => {
  const { token } = props;
  const color = useColorModeValue("gray.800", "green.400");
  return (
    <PopoverTrigger>
      <Button size="md" variant="outline" color={color} borderColor={color}>
        {token.logo.sm && <Image boxSize="3" m={1} objectFit="cover" src={token.logo.sm} />}
        <Text color={color} m={1} fontSize="xs">
          {token.symbol}
        </Text>
      </Button>
    </PopoverTrigger>
  );
};
