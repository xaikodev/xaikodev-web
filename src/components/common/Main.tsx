import { Stack } from "@chakra-ui/layout";
import { FC } from "react";
import styles from "../../styles/Home.module.css";

export const Main: FC = (props) => {
  return (
    <Stack minHeight="lg">
      {props.children}
    </Stack>
  );
};
