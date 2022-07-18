import { Stack } from "@chakra-ui/layout";
import { FC } from "react";
export const Main: FC = (props) => {
  return (
    <Stack minHeight="lg">
      {props.children}
    </Stack>
  );
};
