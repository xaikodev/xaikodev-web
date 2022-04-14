import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type Teammate = {
  image?: string;
  name: string;
  role: string;
  secondRole?: string;
};

export const Team = () => {
  const team: Teammate[] = [
    {
      name: "Alexandru Meiroșu",
      role: "Project Manager",
      secondRole: "Marketing Specialist",
    },
    {
      name: "Lucian Petri",
      role: "Founder",
      secondRole: "Lead Software Developer",
    },
    {
      name: "Casandra Potor",
      role: "Project Manager",
      secondRole: "Lead Copywriter",
    },
  ];

  return (
    <Stack
      minW={{ base: "md", md: "lg", lg: "3xl", xl: "full" }}
      backgroundColor={useColorModeValue("gray.600", "blackAlpha.500")}
      direction={"column"}
      marginTop={{ base: "52" }}
      padding={{ base: "52" }}
      alignItems={"center"}
    >
      <Text
        textAlign={"center"}
        fontSize={{ base: "5xl", md: "7xl" }}
        fontWeight={"extrabold"}
        marginBottom={{ base: "20" }}
        background="linear-gradient(130.09deg, #8aff7d 0%, #88ff82 40.18%, #4e8d3a 77.15%)"
        backgroundClip={"text"}
      >
        Meet The Team!
      </Text>
      <Stack
        direction={{ base: "column-reverse", xl: "row-reverse" }}
        spacing={"20"}
      >
        {team.map((teammate, index) => (
          <Stack
            key={index}
            direction={"column"}
            borderRadius={"3xl"}
            minWidth={"xs"}
            p={"4"}
            boxShadow={
              "inset 0 0 2px 1px green, 0 0 10px 1px rgba(50, 255, 50, 0.6)"
            }
          >
            <Image
              alignSelf={"center"}
              boxSize={{ base: "150px", md: "3xs" }}
              objectFit="cover"
              src={`https://robohash.org/${teammate.name.replace(" ", "")}`}
              alt={`${teammate.name}'s Robohash avatar`}
            />
            <Text
              textAlign={"center"}
              fontWeight={"extrabold"}
              fontSize={{ base: "xl", md: "2xl" }}
            >
              {teammate.name}
            </Text>
            <Text
              textAlign={"center"}
              fontWeight={"bold"}
              fontSize={{ base: "xl", md: "xl" }}
            >
              {teammate.role}
            </Text>
            <Text
              textAlign={"center"}
              fontWeight={"hairline"}
              fontSize={{ base: "xl", md: "md" }}
            >
              {teammate.secondRole}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
