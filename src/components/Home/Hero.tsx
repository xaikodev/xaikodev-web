import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  IconProps
} from "@chakra-ui/react";
import Image from "next/image";
import HeroImage from "../../lib/Hero Image.jpg";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Your digital needs{" "}
          <Text as={"span"} color={"green.400"}>
            fulfilled
          </Text>{" "}
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Never miss the oportunity to improve and grow your digital space. You
          bring the vision and we will make it a reality.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            bg={"green.400"}
            _hover={{ bg: "green.500" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex
          height={{ sm: "25rem", lg: "30rem" }}
          mt={{ base: 12, sm: 16 }}
          boxShadow={`0px 1rem 3rem rgb(72 187 120)`}
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            borderRadius: "20px"
          }}
        > 
          <Illustration />
        </Flex>
      </Stack>
    </Container>
  );
};

export const Illustration = () => {
  return (
    <Image
      className={styles.headerImage}
      src={HeroImage}
      layout="intrinsic"
      alt="Hero Header Image"
    ></Image>
  );
};
