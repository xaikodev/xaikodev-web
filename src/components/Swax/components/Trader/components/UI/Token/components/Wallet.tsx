import { Button, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { Token } from "src/components/Swax/models/wax.models";

interface WalletProps {
  token: Token;
  onClick: () => void;
}
export const Wallet: FC<WalletProps> = (props) => {
  const { token, onClick } = props;
  const textColor = useColorModeValue("gray.800", "green.300");
  const ButtonBackground = useColorModeValue("gray.200", "green.800");
  return (
    <Button p={2} size="xs" onClick={onClick} color={textColor} bg={ButtonBackground}> 
      <Text fontSize={{ base: "sm", md: "md" }} marginEnd="2">
        {token.balance || "N/A"}
      </Text>
      <Text fontSize={{ base: "sm", md: "md" }}>{token.symbol}</Text>
    </Button>
  );
};
