import { ChangeEventHandler, FC } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: FC<SearchBarProps> = (props) => {
  const { value, onChange } = props;
  const changeHandler: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    onChange(value);
  };

  return <input type={"search"} value={value} onChange={changeHandler} />;
};
