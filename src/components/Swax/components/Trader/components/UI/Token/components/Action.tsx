import { Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

interface ActionProps {
  text: string;
}
export const Action: FC<ActionProps> = (props) => {
  const { text } = props;
  const color = useColorModeValue("gray.800","green.300")
  return <Text fontSize={{ base: "sm", md: "md" }} color={color}>{text}</Text>;
};
