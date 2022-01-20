import { UpDownIcon } from "@chakra-ui/icons";
import { FC, useEffect } from "react";
import { useWax } from "src/components/Swax/hooks/useWax";

interface SwitcherProps {
  onClick?: () => void;
}
export const Switcher: FC<SwitcherProps> = (props) => {
  const { login } = useWax();
  const {} = props;
  return (
    <UpDownIcon
      onClick={login}
      color={"lime"}
      w={20}
      h={20}
      borderColor={"lime"}
      border={"solid"}
      borderWidth={1}
      borderRadius={100}
      padding={4}
      style={{ transition: "all 0.5s ease-in-out" }}
      margin={4}
      _hover={{
        backgroundColor: "#333",
        boxShadow: "0px 0px 10px lime",
        transform: "scale(1.2) rotate(-180deg)"
      }}
    />
  );
};
