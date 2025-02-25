import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import logoHeader from "../../../asserts/Hofstead-logo-zwart-1 1.png";
import logo from "../../../asserts/Logo.png";
import MicrosoftLogin from "./confignation";
import LoginHeading from "../../loginHeading/heading";

const Login = () => {
    return (
        <>
            <LoginHeading/>

            <Flex
                height="100vh"
                width="100%"
                fontFamily="Poppins"
                fontWeight={600}
                flexDirection={{ base: "column", md: "row" }}
            >
                {/* Left Section */}
                <Box
                    flex={1}
                    bg="#1E3050"
                    color="white"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    p={6}
                    textAlign={{ base: "center", md: "left" }}
                >
                    <Image src={logoHeader} width={{ base: "180px", md: "230.4px" }} height="32px" mb={4} mx={{ base: "auto", md: "0" }} />
                    <Text fontSize="sm" lineHeight="20px" mt="auto">
                        “A lot of people are afraid to say what they want. That’s why they don’t get what they want.”
                    </Text>
                    <Text fontSize="xs" opacity={0.8} mt={2}>Madonna</Text>
                </Box>

                {/* Right Section */}
                <Flex
                    flex={1}
                    bg="white"
                    align="center"
                    justify="center"
                    flexDirection="column"
                    textAlign="center"
                    p={6}
                >
                    <Image src={logo} boxSize={{ base: "40px", md: "50px" }} mb={4} />
                    <Text
                        color="#2B3759"
                        fontSize={{ base: "20px", md: "24px" }}
                        lineHeight="30px"
                        letterSpacing="0%"
                        textAlign="center"
                        mb={6}
                    >
                        WERKBRON ATS
                    </Text>
                    <MicrosoftLogin />
                </Flex>
            </Flex>
        </>
    );
};

export default Login;
