import { FC } from "react";

interface ListProps {
  filter: string;
  onSelect: (token: string) => void;
  currentToken: string;
}
export const List: FC<ListProps> = (props) => {
  const { filter, onSelect } = props;
  return <div></div>;
};
