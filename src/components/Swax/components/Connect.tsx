import { Button } from "@chakra-ui/button";
import { Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { useWax } from "../hooks/useWax";
import { Charter } from "./Charter";
import { Trader } from "./Trader/Trader";

export const Connect = () => {
  const { login, isConnected } = useWax();
  return isConnected ? (
    <Stack direction={"row"} minWidth="full" wrap="wrap">
      <Trader />
      <Charter />
    </Stack>
  ) : (
    <Stack direction="column" minWidth="full" alignItems="center" justifyContent="center">
      <Button onClick={login}>
        <Text>Connect Wallet</Text>
      </Button>
    </Stack>
  );
};
