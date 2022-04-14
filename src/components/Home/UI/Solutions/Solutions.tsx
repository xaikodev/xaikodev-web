import { As, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import {
  FaAndroid,
  FaApple,
  FaShoppingBasket,
  FaStripeS,
} from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { MdDesignServices, MdOutlineFeaturedVideo, MdOutlineWebAsset } from "react-icons/md";
import { VscMultipleWindows } from "react-icons/vsc";
import { SiSocketdotio, SiSolidity } from "react-icons/si";
import { BiWallet } from "react-icons/bi";
type Explanation = {
  icon: As<any>;
  text: string;
};

type Solution = {
  title: string;
  explenations: Explanation[];
};

export const Solutions: FC = () => {
  const solutions: Solution[] = [
    {
      title: "Hybrid Mobile App 📱",
      explenations: [
        { icon: FaApple, text: "iOS Mobile App" },
        { icon: FaAndroid, text: "Android Mobile App" },
        { icon: FaShoppingBasket, text: "In-App Purchases" },
        { icon: FaStripeS, text: "Stripe Integration" },
        { icon: AiFillApi, text: "Custom API Integration" },
      ],
    },
    {
      title: "Desktop Application 🖥️",
      explenations: [
        { icon: MdOutlineWebAsset, text: "Single-Page Application" },
        { icon: VscMultipleWindows, text: "Multi-Page Application" },
        { icon: BiWallet, text: "EOSIO / WAX / Ethereum Wallet" },
        { icon: MdDesignServices, text: "Personalized Design" },
        { icon: MdOutlineFeaturedVideo, text: "Custom Features" },
      ],
    },
    {
      title: "Web Application 🌐",
      explenations: [
        { icon: MdOutlineWebAsset, text: "Single-Page Application" },
        { icon: VscMultipleWindows, text: "Multi-Page Application" },
        { icon: SiSocketdotio, text: "Websockets / WebRTC integration" },
        { icon: SiSolidity, text: "EOSIO / WAX / Ethereum Blockchain Integration" },
        { icon: AiFillApi, text: "Custom API Integration" },
      ],
    },
  ];

  return (
    <Stack
      minW={{ base: "md", md: "lg", lg: "3xl", xl: "7xl" }}
      backgroundColor={useColorModeValue("gray.600", "blackAlpha.500")}
      marginTop={{ base: "52" }}
      padding={{ base: "32", md: "52" }}
      alignItems={"center"}
    >
      <Stack direction={"row"}>
        <Text
          textAlign={"center"}
          fontSize={{ base: "5xl", md: "7xl" }}
          fontWeight={"extrabold"}
          marginBottom={{ base: "5" }}
          background="linear-gradient(130.09deg, #8aff7d 0%, #88ff82 40.18%, #4e8d3a 77.15%)"
          backgroundClip={"text"}
        >
          Our Expertise
        </Text>
      </Stack>

      <Text
        textAlign={"center"}
        fontSize={{ base: "xl", md: "3xl" }}
        fontWeight={"medium"}
        paddingBottom={"14"}
        width="full"
      >
        Accelerate your goals 🚀 with our diverse skillset 🧠
      </Text>
      <Stack direction={{ base: "column", xl: "row" }} spacing="16">
        {solutions.map((solution, index) => (
          <Stack
            key={index}
            direction={"column"}
            borderRadius={"3xl"}
            minWidth={{base:"xs", md: "sm", lg: "md"}}
            maxW={"md"}
            p={{ base: "6", md: "16" }}
            boxShadow={
              "inset 0 0 2px 1px green, 0 0 10px 1px rgba(50, 255, 50, 0.6)"
            }
          >
            <Text
              fontSize={{ base: "2xl" }}
              fontWeight={{ base: "bold" }}
              textAlign={"center"}
              paddingBottom={"5"}
            >
              {solution.title}
            </Text>
            {solution.explenations.map((explanation, exIndex) => (
              <Stack
                direction={"row"}
                key={exIndex + 100}
                paddingLeft={{ base: "6" }}
              >
                <Icon as={explanation.icon} alignSelf="center"></Icon>
                <Text>{explanation.text}</Text>
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
