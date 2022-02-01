import {
  useColorModeValue,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { FC } from "react";

interface InputProps {
  value: number;
  onChange: (value: number) => void;
}

export const Input: FC<InputProps> = (props) => {
  const { value, onChange } = props;
  const InputColor = useColorModeValue("black", "white");
  const handleChange = (valueAsString: string, valueAsNumber: number) => {
    onChange(valueAsNumber);
  };

  return (
    <NumberInput
      color={InputColor}
      precision={8}
      step={1 / 10 ** 8}
      value={value}
      onChange={handleChange}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper>+</NumberIncrementStepper>
        <NumberDecrementStepper>-</NumberDecrementStepper>
      </NumberInputStepper>
    </NumberInput>
  );
};
