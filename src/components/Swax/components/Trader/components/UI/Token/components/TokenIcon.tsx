import { Icon, Text, Stack, Button, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { WalletToken } from "src/components/Swax/hooks/useWallet";

interface TokenIconProps {
  token: WalletToken;
  onClick: () => void;
}
export const TokenIcon: FC<TokenIconProps> = (props) => {
  const { token, onClick } = props;
  const color = useColorModeValue("gray.800", "green.400");
  return (
    <Stack direction="row" alignItems="center">
        <Icon href={token.logo} />
        <Text color={color}>{token.symbol}</Text>
      <Button onClick={onClick} p={1} size="sm" variant="outline" color={color}>v</Button>
    </Stack>
  );
};
