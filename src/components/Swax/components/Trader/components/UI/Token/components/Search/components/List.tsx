import { Stack, List, ListItem } from "@chakra-ui/layout";
import { FC, useEffect, useState } from "react";
import { useWax } from "src/components/Swax/hooks/useWax";
import { Token } from "src/components/Swax/models/wax.models";
import { Item } from "./Item";

interface ListProps {
  filter: string;
  onSelect: (token: Token) => void;
  currentToken: Token;
}
const SearchList: FC<ListProps> = (props) => {
  const { filter, onSelect } = props;
  const { tokens } = useWax();
  const [filteredList, setFilteredList] = useState(tokens);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setFilteredList(tokens.filter((t) => t.name.includes(filter) || t.symbol.includes(filter) || t.contract.includes(filter)).slice(0, 20));
    }, 800);

    return () => {
      clearTimeout(debounce);
    };
  }, [tokens, filter]);

  return (
    <Stack direction="column">
      <List spacing={3}>
        {filteredList.map((token, index) => (
          <ListItem key={index}>
            <Item token={token} select={onSelect} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default SearchList;
