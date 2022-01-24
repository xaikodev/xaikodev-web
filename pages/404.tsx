import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, green.400, green.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        colorScheme="green"
        bgGradient="linear(to-r, green.300, green.400, green.500)"
        color="white"
        variant="solid"
      >
        <Link href="/">Back Home</Link>
      </Button>
    </Box>
  );
}
