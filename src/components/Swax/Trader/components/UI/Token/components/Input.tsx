import { ChangeEventHandler, FC } from "react";

interface InputProps {
  value: number;
  onChange: (value: number) => void;
}

export const Input: FC<InputProps> = (props) => {
  const { value, onChange } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    onChange(Number(value || 0));
  };

  return <input type={"number"} min={0} step={0.00000001} value={value} onChange={handleChange}></input>;
};
