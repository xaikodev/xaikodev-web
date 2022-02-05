import { Input } from "@chakra-ui/input";
import { ChangeEventHandler, FC } from "react";

interface BarProps {
  value: string;
  onChange: (value: string) => void;
}

export const Bar: FC<BarProps> = (props) => {
  const { value, onChange } = props;
  const changeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    onChange(value);
  };

  return <Input placeholder="WAX" variant="outline" size="sm" type={"search"} value={value} onChange={changeHandler} />;
};
