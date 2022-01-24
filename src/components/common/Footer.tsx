import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
export const Footer: FC = () => {
  return (
    <footer>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Text fontWeight={600} fontSize={"2xl"}>XaikoDev</Text>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2020 , This app is public on{" "}
          <Link
            color={"green.300"}
            href={"https://github.com/xaikodev/xaikodev-web"}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>{" "}
          feel free to reuse any code
        </Text>
      </Box>
    </footer>
  );
};
