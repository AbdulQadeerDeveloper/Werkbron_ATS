import React from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { Button, Flex, Image } from "@chakra-ui/react";
import MicrosoftIcon from "../../../asserts/Microsoft_Logo.png";

const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_MICROSOFT_CLIENT_ID,
    authority: process.env.REACT_APP_MICROSOFT_AUTHORITY,
    redirectUri: process.env.REACT_APP_MICROSOFT_REDIRECT_URI,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const MicrosoftLoginButton = () => {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      await instance.loginPopup(); // User Microsoft se login karega
      window.location.href = process.env.REACT_APP_TEAMS_REDIRECT; // Teams ka dashboard open karega
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Button onClick={handleLogin} display="flex" gap={3} p={4} bg="blue.500" color="white">
      <Image src={MicrosoftIcon} width="30px" alt="Microsoft Logo" />
      Login with Microsoft
    </Button>
  );
};

const MicrosoftLogin = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <Flex minH="100vh" align="center" justify="center" bg="gray.50">
        <MicrosoftLoginButton />
      </Flex>
    </MsalProvider>
  );
};

export default MicrosoftLogin;
