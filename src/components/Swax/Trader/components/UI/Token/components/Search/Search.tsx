import { FC, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { SearchList } from "./components/SearchList";

interface SearchProps {
  opened: boolean;
  currentToken: string;
  selectToken: (token: string) => void;
  cancel: () => void;
}
export const Search: FC<SearchProps> = (props) => {
  const { opened, cancel, currentToken, selectToken } = props;
  const [SearchInput, setSearchInput] = useState("");
  const isOpened = opened ? "block" : "none";
  return (
    <div style={{ display: isOpened }}>
      <SearchBar value={SearchInput} onChange={setSearchInput} />
      <SearchList/>
    </div>
  );
};
