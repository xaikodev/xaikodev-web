import { Box } from "@chakra-ui/layout";
import { Tab, TabList, Tabs, TabPanel, TabPanels } from "@chakra-ui/tabs";
import { FC } from "react";
import { Bag } from "../UI/Interfaces/Bag";
import { Character } from "../UI/Interfaces/Character";
import { Missions } from "../UI/Interfaces/Missions";
import { Stats } from "../UI/Interfaces/Stats";

export const User: FC = (props) => {
  return (
    <Box>
      <Tabs isFitted>
        <TabPanels>
          <TabPanel>
            <Character />
          </TabPanel>
          <TabPanel>
            <Bag />
          </TabPanel>
          <TabPanel>
            <Stats />
          </TabPanel>
          <TabPanel>
            <Missions />
          </TabPanel>
        </TabPanels>
        <TabList mb="1em">
          <Tab>Character</Tab>
          <Tab>Bag</Tab>
          <Tab>Stats</Tab>
          <Tab>Missions</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};
