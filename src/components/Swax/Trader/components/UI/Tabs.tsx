import { Box, Button, HStack, VStack, Wrap } from "@chakra-ui/react";
import { FC } from "react";

interface TabsProps {}
export const Tabs: FC<TabsProps> = (props) => {
  const { children } = props;
  return (
    <VStack
      width={"100%"}
      border={"solid"}
      borderColor={"lime"}
      padding={3}
      borderRadius={25}
      borderWidth={1}
    >
      <Wrap
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        border={"solid"}
        borderColor={"lime"}
        padding={2}
        borderWidth={1}
        width={"100%"}
        borderRadius={100}
      >
        <Button
          width={"160px"}
          _hover={{ backgroundColor: "#666" }}
          borderLeftRadius={100}
          borderRightRadius={30}
          color={"lime"}
          variant="ghost"
          fontSize={"lg"}
          _focus={{ outlineColor: "#00ff00" }}
        >
          Swap
        </Button>
        <Button
          width={"160px"}
          _hover={{ backgroundColor: "#666" }}
          color={"lime"}
          variant="ghost"
          fontSize={"lg"}
          _focus={{ outlineColor: "#00ff00" }}
        >
          Liquidity
        </Button>
        <Button
          width={"160px"}
          _hover={{ backgroundColor: "#666" }}
          borderLeftRadius={30}
          borderRightRadius={100}
          color={"lime"}
          variant="ghost"
          _focus={{ outlineColor: "#00ff00" }}
          fontSize={"lg"}
        >
          Arbitrage
        </Button>
      </Wrap>
      {children}
    </VStack>
  );
};
