import { VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { ActionButton } from "../UI/ActionButton";
import { Switcher } from "../UI/Switcher";
import { Token } from "../UI/Token/Token";

interface TradeProps {}
export const Trade: FC<TradeProps> = (props) => {
  const [Token1, setToken1] = useState({value: 0, token: "HPPOT"});
  const [Token2, setToken2] = useState({value: 0, token: "WAX"});

  const {} = props;
  return (
    <VStack
    width={"100%"}
    justifyContent={"space-between"}
    height={"100%"}
    border={"solid"}
    borderColor={"lime"}
    padding={5}
    borderRadius={25}
    borderWidth={1}>
        <Token action="Buy" token={Token1.token}/>
        <Switcher/>
        <Token action="Sell" token={Token2.token}/>
        <ActionButton/>
    </VStack>);
};
