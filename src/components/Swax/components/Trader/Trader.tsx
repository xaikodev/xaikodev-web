import { FC } from "react";
import { Trade } from "./components/pages/Trade";
import { Liquidity } from "./components/pages/Liquidity";
import { Arbitrage } from "./components/pages/Arbitrage";
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue } from "@chakra-ui/react";
import { ProvideTrade } from "../../hooks/useTrade";
import { ProvideAlcor } from "../../hooks/useAlcor";

interface TraderProps {}

export const Trader: FC<TraderProps> = (props) => {
  const borderColor = useColorModeValue("gray.800", "green.400");
  const tabBackground = useColorModeValue("gray.100", "gray.800");
  const tabColor = useColorModeValue("gray.600", "green.500");
  const selectedBackground = useColorModeValue("gray.400", "green.800");
  const selectedTextColor = useColorModeValue("gray.800", "green.300");

  return (
    <ProvideAlcor>
      <Tabs minW={{ base: "full", md: "sm" }} m={{ base: "0", md: "4" }} borderRadius="md" borderColor={borderColor} borderStyle="solid" borderWidth="1px" isFitted variant="enclosed" color={tabColor}>
        <TabList borderTopRadius="md" bg={tabBackground}>
          <Tab
            _selected={{
              transition: "all 0.6s ease-in",
              color: selectedTextColor,
              bg: selectedBackground,
            }}
          >
            Swap
          </Tab>
          <Tab
            _selected={{
              transition: "all 0.6s ease-in",
              color: selectedTextColor,
              bg: selectedBackground,
            }}
          >
            Liquidity
          </Tab>
          <Tab
            _selected={{
              transition: "all 0.6s ease-in",
              color: selectedTextColor,
              bg: selectedBackground,
            }}
          >
            Arbitrage
          </Tab>
        </TabList>
        <TabPanels minH="xs">
          <TabPanel>
            <ProvideTrade>
              <Trade />
            </ProvideTrade>
          </TabPanel>
          <TabPanel>
            <Liquidity />
          </TabPanel>
          <TabPanel>
            <Arbitrage />
          </TabPanel>
        </TabPanels>
      </Tabs>1
    </ProvideAlcor>
  );
};
