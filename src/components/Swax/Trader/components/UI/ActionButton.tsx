import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface ActionButtonProps {
  onClick?: () => void;
}
export const ActionButton: FC<ActionButtonProps> = (props) => {
  const {} = props;
  return (
    <Button
    width={"100%"}
    height={"100%"}
      variant="outline"
      color={"lime"}
      border={"solid"}
      borderWidth={1}
      borderRadius={50}
      padding={4}
      _hover={{ backgroundColor: "#333" }}
      borderColor={"lime"}
      onClick={props.onClick}
    >SWAP</Button>
  );
};
