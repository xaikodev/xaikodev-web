import { FC } from "react";

interface TokenIconProps {
  token: string;
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
        <label>Icon</label>
        <label>{token}</label>
      </div>
      <button onClick={onClick}>v</button>
    </div>
  );
};
