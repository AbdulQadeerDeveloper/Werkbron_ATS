import { Box, Button, Flex, FormControl, FormLabel, Input, Image, Heading, Text } from "@chakra-ui/react";
import image from "../../../asserts/WhatsApp Image 2025-02-19 at 4.01.22 PM.jpeg";
import logo from "../../../asserts/Logo.png";
import LoginHeading from "../../loginHeading/heading";

const Login = () => {
  return (
    <>
      <LoginHeading />
      <Flex height="696px" width="100%" direction={{ base: "column", md: "row" }}>
        {/* Left Side - Login Form */}
        <Flex flex={1} align="center" justify="center" p={8} bg="white">
          <Box maxW="md" w="full">
            <Image src={logo} boxSize="50px" mb={4} />
            <Heading size="lg" mb={2}>Get Started</Heading>
            <Text mb={6} color="gray.600">Welcome to Werkbron ATS - Enter your credentials to continue</Text>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter email..." />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter password..." />
            </FormControl>
            <Button width="full" bg="#D40B52" color="white" _hover={{ bg: "#b30942" }}>
              Log In
            </Button>
          </Box>
        </Flex>

        {/* Right Side - Image */}
        <Flex flex={1} display={{ base: "flex", md: "flex" }} align="center" justify="center" p={8} w={{ base: "100%", md: "auto" }}>
          <Image src={image} alt="Dashboard Preview" borderRadius="md" height="100%" boxShadow="lg" w={{ base: "100%", md: "auto" }} />
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
