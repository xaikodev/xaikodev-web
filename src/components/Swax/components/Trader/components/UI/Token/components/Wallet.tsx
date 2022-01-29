import { Button, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { WalletToken } from "src/components/Swax/hooks/useWallet";

interface WalletProps {
  token: WalletToken;
  onClick: () => void;
}
export const Wallet: FC<WalletProps> = (props) => {
  const { token, onClick } = props;
  return (
    <Button
      variant="outline"
      color={"lime"}
      border={"solid"}
      borderWidth={1}
      borderRadius={50}
      padding={4}
      _hover={{backgroundColor: "#333"}}
      borderColor={"lime"}
      onClick={onClick}
    >
      <Text fontSize='lg'>{token.balance}{" "}</Text>
      <Text fontSize='lg'>{token.symbol}</Text>
    </Button>
  );
};
