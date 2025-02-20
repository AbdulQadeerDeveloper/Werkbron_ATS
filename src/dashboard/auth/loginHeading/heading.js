import { Box, Heading } from "@chakra-ui/react";

const LoginHeading = () => {
  return (
    <Box
      width="100%"
      height="100px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#D40B52"
      marginBottom="20px"
    >
      <Heading
        fontFamily="Montserrat"
        fontWeight="700"
        fontSize="56px"
        lineHeight="60px"
        letterSpacing="-1%"
        textAlign="center"
        color="#FFFFFF" 
      >
        Login
      </Heading>
    </Box>
  );
};

export default LoginHeading;
