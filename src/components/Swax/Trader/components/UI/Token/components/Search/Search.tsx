import { FC, useState } from "react";
import { Bar } from "./components/Bar";
import { List } from "./components/List";

interface SearchProps {
  opened: boolean;
  currentToken: string;
  selectToken: (token: string) => void;
}
export const Search: FC<SearchProps> = (props) => {
  const { opened, currentToken, selectToken } = props;
  const [SearchInput, setSearchInput] = useState(currentToken);

  return (
    <div style={{ display: opened ? "block" : "none" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Bar value={SearchInput} onChange={setSearchInput} />
        <List
          filter={SearchInput}
          onSelect={selectToken}
          currentToken={currentToken}
        />
      </div>
    </div>
  );
};
