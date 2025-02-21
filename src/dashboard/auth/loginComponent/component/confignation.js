import React from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { Button, Flex, Heading, Image, Icon } from "@chakra-ui/react"
import MicrosoftIcon from "../../../asserts/Microsoft_Logo.png";

const msalConfig = {
  auth: {
    clientId: "c92d4ed3-a223-4108-969d-a5e0dda35b6b",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "http://localhost:3000",
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const MicrosoftLogin = () => {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      await instance.loginPopup({ scopes: ["User.Read"] });
      alert("Login Successful!");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center"  bg="gray.50">
      <Flex direction="column" p={8} >
      
        <Button
          
          onClick={handleLogin}
          display="flex"
          gap="20px"
          padding="20px"
          position="relative"
          right="100px"
        >
          <img src={MicrosoftIcon} width="30px"/>
          Login with Microsoft
        </Button>
      </Flex>
     
    </Flex>
  );
};

const Microsoft = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <MicrosoftLogin />
    </MsalProvider>
  );
};

export default Microsoft;
