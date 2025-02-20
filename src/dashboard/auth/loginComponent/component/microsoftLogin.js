import { Box, Button, Flex, FormControl, FormLabel, Input, Image, Heading, Text } from "@chakra-ui/react";
import image from "../../../asserts/WhatsApp Image 2025-02-19 at 4.01.22 PM.jpeg"
import LoginHeading from "../../loginHeading/heading";
import Microsoft from "./confignation";
import Logo from "../../../asserts/Logo.png";

const MicrosoftLogin = () => {
  return (
    <>
      <LoginHeading />
      <Flex direction={{ base: "column", md: "row" }}>
        {/* Left Side - Login Form */}
        <Flex flex={1} align="center" justify="center" p={8} bg="white">
          <Box maxW="md" w="full">
            <Image src={Logo} boxSize="50px" mb={4} />
            <Heading size="lg" mb={2}>Get Started</Heading>
            <Text mb={6} color="gray.600">Welcome to Werkbron ATS - Enter your credentials to continue</Text>
            {/* confignation microsoft import file */}
            <Microsoft />
          </Box>
        </Flex>

        {/* Right Side - Image */}
        <Flex flex={1} display={{ base: "flex", md: "flex" }} align="center" justify="center" p={8} w={{ base: "100%", md: "auto" }}>
          <Image src={image} alt="Dashboard Preview" h="696px" borderRadius="md" boxShadow="lg" w={{ base: "100%", md: "auto" }} />
        </Flex>
      </Flex>
    </>
  );
};

export default MicrosoftLogin;
