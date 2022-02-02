import { UpDownIcon } from "@chakra-ui/icons";
import { FC, useEffect } from "react";
import { useWax } from "src/components/Swax/hooks/useWax";

interface SwitcherProps {
  onClick?: () => void;
}
export const Switcher: FC<SwitcherProps> = (props) => {
  const {} = props;
  return (
    <UpDownIcon
      fontSize="5xl"
      style={{ transition: "all 0.5s ease-out" }}
      p="2"
      _hover={{
        borderRadius: "50",
        boxShadow: "0px 0px 10px lime",
        transform: "scale(1.2) rotate(-180deg)"
      }}
    />
  );
};
