import { FC } from "react"

interface WalletProps {
    value: number;
    token: string;
    onClick: () => void;
}
export const Wallet: FC<WalletProps> = (props) => {
const {value,token,onClick} = props
  return (
<div onClick={onClick}>
    <label>{value}</label>
    <label>{token}</label>
</div>
)
}
