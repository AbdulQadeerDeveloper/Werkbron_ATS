import React from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { Button, Flex, Image } from "@chakra-ui/react";
import MicrosoftIcon from "../../../asserts/Microsoft_Logo.png";
import { microsoftLogin } from "../reducerFunction/microsoftLoginAction";
import { useDispatch } from "react-redux";

const msalConfig = {
  auth: {
    clientId: "c92d4ed3-a223-4108-969d-a5e0dda35b6b",
    authority: "https://login.microsoftonline.com/b733bcd9-0265-41a4-8b0c-c6f72d5c7b1e",
    redirectUri: "http://localhost:3000",
  },
};


// clientId: process.env.REACT_APP_MICROSOFT_CLIENT_ID,
// authority: process.env.REACT_APP_MICROSOFT_AUTHORITY,
// redirectUri: process.env.REACT_APP_MICROSOFT_REDIRECT_URI,

const msalInstance = new PublicClientApplication(msalConfig);

const MicrosoftLoginButton = () => {
  const { instance } = useMsal();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(microsoftLogin(instance));
  };

  return (
    <Button onClick={handleLogin} display="flex" gap={3} p={4}>
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
