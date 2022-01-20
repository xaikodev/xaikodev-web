import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from "@chakra-ui/react";
import { ChangeEventHandler, FC } from "react";

interface InputProps {
  value: number;
  onChange: (value: number) => void;
}

export const Input: FC<InputProps> = (props) => {
  const { value, onChange } = props;

  const handleChange = (valueAsString: string, valueAsNumber: number) => {
    onChange(valueAsNumber);
  };

  return (
    <NumberInput
      width={"100%"}
      defaultValue={15}
      precision={8}
      step={1 / 10 ** 8}
      value={value}
      onChange={handleChange}
      borderColor={"lime"}
      fontSize={"xl"}
      _active={{ borderColor: "lime" }}
      _focus={{ borderColor: "lime" }}
    >
      <NumberInputField />
      <NumberInputStepper borderColor={"lime"}>
        <NumberIncrementStepper borderColor={"lime"} _active={{ bg: "lime" }}>
          +
        </NumberIncrementStepper>
        <NumberDecrementStepper borderColor={"lime"} _active={{ bg: "lime" }}>
          -
        </NumberDecrementStepper>
      </NumberInputStepper>
    </NumberInput>
  );
};
