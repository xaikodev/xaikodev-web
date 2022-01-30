import { VStack } from "@chakra-ui/react";
import { FC } from "react";

interface TradeProps {}
export const Trade: FC<TradeProps> = (props) => {

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
      borderWidth={1}
    ></VStack>
  );
};
