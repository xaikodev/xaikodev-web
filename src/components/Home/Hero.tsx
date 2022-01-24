import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Your digital needs{" "}
          <Text as={"span"} color={"green.400"}>
            fulfilled
          </Text>{" "}
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Never miss the oportunity to improve and grow your digital space. You bring the vision and we will make it a reality.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button rounded={"full"} px={6} bg={"green.400"} _hover={{ bg: "green.500" }}>
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Illustration height={{ sm: "24rem", lg: "28rem" }} mt={{ base: 12, sm: 16 }} />
        </Flex>
      </Stack>
    </Container>
  );
};

export const Illustration = (props: IconProps) => {
  return <Icon width="100%" viewBox="0 0 702 448" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}></Icon>;
};
