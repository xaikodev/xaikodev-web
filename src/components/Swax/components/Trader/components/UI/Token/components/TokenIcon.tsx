import { Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import { WalletToken } from "src/components/Swax/hooks/useWallet";

interface TokenIconProps {
  token: WalletToken;
  onClick: () => void;
}
export const TokenIcon: FC<TokenIconProps> = (props) => {
  const { token, onClick } = props;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
      }}
    >
      <div>
        <Icon href={token.logo} />
        <Text>{token.symbol}</Text>
      </div>
      <button onClick={onClick}>v</button>
    </div>
  );
};
