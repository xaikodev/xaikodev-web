import { Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Charter } from "src/components/Swax/components/Charter";
import { Trader } from "src/components/Swax/components/Trader/Trader";
import { WaxProvider } from "src/components/Swax/hooks/useWax";

const Swax: NextPage = () => {
  return (
    <WaxProvider>
      <Stack direction={"row"}>
      <Trader />
      <Charter />
      </Stack>
    </WaxProvider>
  );
};

export default Swax;
