import { Box, Button, Flex, FormControl, FormLabel, Input, Image, Heading, Text } from "@chakra-ui/react";
import backgroundImage from "../../../asserts/Rectangle 591.png";
import logo from "../../../asserts/Logo.png";
import LoginHeading from "../../loginHeading/heading";
import overlayImage from "../../../asserts/WhatsApp Image 2025-02-19 at 4.01.22 PM.jpeg";

const Login = () => {
  return (
    <>
      <LoginHeading />
      <Flex 
        minH="100vh" 
        width="100%" 
        direction={{ base: "column", md: "row" }} 
      >
        {/* Left Side - Login Form */}
        <Flex 
          flex={1} 
          align="center" 
          justify="center" 
          p={{ base: 6, md: 8 }} 
          bg="white"
          width={{ base: "100%", md: "50%" }}
        >
          <Box maxW="md" w="full">
            <Image src={logo} boxSize="50px" mb={4} />
            <Heading size="lg" mb={2}>Get Started</Heading>
            <Text mb={6} color="gray.600">
              Welcome to Werkbron ATS - Enter your credentials to continue
            </Text>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter email..." />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter password..." />
            </FormControl>
            <Button 
              width="full" 
              bg="#D40B52" 
              color="white" 
              _hover={{ bg: "#b30942" }}
            >
              Log In
            </Button>
          </Box>
        </Flex>

        {/* Right Side - Image Section */}
        <Box 
          w={{ base: "100%", md: "50%" }} 
          position="relative" 
          overflow="hidden" 
          minH={{ base: "300px", md: "100vh" }} 
        >
          {/* Background Image */}
          <Image
            src={backgroundImage}  
            h="696px"
            w="100%"
            objectFit="cover"
            alt="Background"
          />

          {/* Overlay Image (Tilted Dashboard) */}
          <Image
            src={overlayImage}  
            position="absolute"
            top={{ base: "74%", md: "68%" }}  
            left={{ base: "58%", md: "58%" }}  
            transform="translate(-50%, -50%) rotate(-8deg)"
            boxShadow="2xl"
            borderRadius="xl"
            w={{ base: "100%", md: "100%" }}  
          />
        </Box>
      </Flex>
    </>
  );
};

export default Login;
