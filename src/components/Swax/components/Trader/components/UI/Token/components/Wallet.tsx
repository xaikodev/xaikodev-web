import { Button, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface WalletProps {
  value: number;
  token: string;
  onClick: () => void;
}
export const Wallet: FC<WalletProps> = (props) => {
  const { value, token, onClick } = props;
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
      <Text fontSize='lg'>{value}</Text>
      <Text fontSize='lg'>{token}</Text>
    </Button>
  );
};
