import { ChangeEventHandler, FC } from "react";

interface BarProps {
  value: string;
  onChange: (value: string) => void;
}

export const Bar: FC<BarProps> = (props) => {
  const { value, onChange } = props;
  const changeHandler: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    onChange(value);
  };

  return <input type={"search"} value={value} onChange={changeHandler} />;
};
