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
  const { account } = useWax();
  const [filteredList, setFilteredList] = useState(account.wallet);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setFilteredList(account.wallet.filter((t) => t.name.includes(filter) || t.symbol.includes(filter) || t.contract.includes(filter)));
    }, 800);

    return () => {
      clearTimeout(debounce);
    };
  }, [account.wallet, filter]);

  return (
    <Stack direction="column">
      <List spacing={3}>
        {filteredList.map((token) => (
          <ListItem>
            <Item token={token} select={onSelect} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default SearchList;
