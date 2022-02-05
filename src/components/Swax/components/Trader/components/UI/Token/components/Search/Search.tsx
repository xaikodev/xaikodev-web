import { FC, useState } from "react";
import { Bar } from "./components/Bar";
import List from "./components/List";
import { PopoverContent, PopoverHeader, PopoverBody } from "@chakra-ui/react";
import { Token } from "src/components/Swax/models/wax.models";

interface SearchProps {
  currentToken: Token;
  selectToken: (token: Token) => void;
}
export const Search: FC<SearchProps> = (props) => {
  const { currentToken, selectToken } = props;
  const [SearchInput, setSearchInput] = useState(currentToken.name);

  return (
    <PopoverContent minHeight={{ base: "3xs", sm: "2xs" }} maxHeight={{ base: "3xs" }} overflowY="scroll" minWidth={{ base: "2xs", sm: "xs" }} maxWidth={{ base: "2xs", sm: "xs" }}>
      <PopoverHeader>
        <Bar value={SearchInput} onChange={setSearchInput} />
      </PopoverHeader>
      <PopoverBody>
        <List filter={SearchInput} onSelect={selectToken} currentToken={currentToken} />
      </PopoverBody>
    </PopoverContent>
  );
};
