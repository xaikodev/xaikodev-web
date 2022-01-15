import { FC, useState } from "react";
import { Action } from "./components/Action";
import { Input } from "./components/Input";
import { Search } from "./components/Search/Search";
import { TokenIcon } from "./components/TokenIcon";
import { Wallet } from "./components/Wallet";

interface TokenProps {
  action: string;
  token: string;
}

export const Token: FC<TokenProps> = (props) => {
  const { token, action } = props;
  const [value, setValue] = useState(0);
  const [OpenedSearch, setOpenedSearch] = useState(false)
  const setMaxValue = () => {};
  const openSearch = () => {
    setOpenedSearch( prevVal => !prevVal);
  };

  const selectToken = (token: string) => {
    setOpenedSearch(false);
  };

  const cancelSearch = () => {
    setOpenedSearch(false);
  }
  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Action text={action} />
        <Wallet value={0.0} token={token} onClick={setMaxValue} />
      </div>
      <div style={{display: "flex", alignContent: "stretch"}}>
        <Input value={value} onChange={setValue}/>
        <TokenIcon token={token} onClick={openSearch}/>
      </div>
        <Search opened={OpenedSearch} currentToken={token} cancel={cancelSearch} selectToken={selectToken}/>
    </div>
  );
};
