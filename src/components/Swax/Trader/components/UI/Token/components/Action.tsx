import { Text } from "@chakra-ui/react";
import { FC } from "react";

interface ActionProps {
    text: string;
}
export const Action: FC<ActionProps> = (props) => {
  const {text} = props;
  return <Text paddingLeft={3} fontSize={"xl"}>{text}</Text>;
};
