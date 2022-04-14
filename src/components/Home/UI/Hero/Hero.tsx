import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";
import HeroImage from "../../lib/Hero Image.jpg";

export const Hero = () => {
  return (
    <Container
      minW={{ base: "md", md: "lg",lg: "3xl", xl: "7xl" }}
      marginTop={{ base: "44", sm: "4xl", md: "5xl" }}
    >
      <Stack
        direction={"row"}
        wrap={"wrap"}
        align={"center"}
        justify={"center"}
      >
        <Stack spacing={{ base: 8, md: 10 }} margin={"10"} marginBottom="16">
          <Heading
            fontWeight={700}
            textAlign={"center"}
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
          >
            Your digital needs
            <Text as={"span"} color={"green.300"}>
              {" "}
              fulfilled{" "}
            </Text>
          </Heading>
          <Text color={"gray.400"} maxW={"xl"} align={"start"} fontSize={"2xl"}>
            Never miss the oportunity to improve and grow your digital space.
            You bring the vision and we will make it a reality.
          </Text>
          <Stack spacing={6} direction={"row"} align="flex-start">
            <Input
              placeholder="your@email.com"
              size="md"
              focusBorderColor={"green.400"}
              borderColor={"green.600"}
            />
            <Button
              size="md"
              rounded={"full"}
              px={6}
              bg={"green.400"}
              _hover={{ bg: "green.600" }}
            >
              Get started
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
