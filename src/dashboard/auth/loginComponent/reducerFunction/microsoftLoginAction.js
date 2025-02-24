import { loginSuccess, logoutSuccess, refreshSuccess } from "./action";
import { PublicClientApplication } from "@azure/msal-browser";


// LOGIN
export const microsoftLogin = (instance) => async (dispatch) => {
  try {
    const loginResponse = await instance.loginPopup({ scopes: ["User.Read"] });

    const accessToken = loginResponse.accessToken;
    const idToken = loginResponse.idToken;

    const user = {
      name: loginResponse.account.name,
      email: loginResponse.account.username,
      account_id: loginResponse.account.localAccountId,
    };

    console.log("Access Token:", accessToken);
    console.log("ID Token:", idToken);
    console.log("User Info:", user);

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, access_token: accessToken, id_token: idToken }),
    });

    const data = await response.json();
    console.log("API Response:", data);

    if (response.ok && data.success) {
      dispatch(
        loginSuccess({
          user: data.user,
          access_token: data.access_token,
          id_token: data.id_token,
        })
      );
    } else {
      console.error("Login Failed:", data);
      alert(data.message || "Login Failed!");
    }
  } catch (error) {
    console.error("Login Error:", error);
    alert("An error occurred during login. Please try again.");
  }
};

// REFRESH TOKEN
export const refreshToken = () => async (dispatch, getState) => {
  try {
    const { auth } = getState();

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_token: auth.access_token }),
    });

    const data = await response.json();
    console.log("Token Refresh Response:", data);

    if (response.ok && data.success) {
      dispatch(refreshSuccess({ access_token: data.access_token, id_token: data.id_token }));
    } else {
      console.error("Token Refresh Failed:", data);
    }
  } catch (error) {
    console.error("Refresh Token Error:", error);
  }
};

// LOGOUT
export const logout = () => async (dispatch, getState) => {
  try {
    const { auth } = getState();

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_token: auth.access_token }),
    });

    const data = await response.json();
    console.log("Logout Response:", data);

    if (response.ok) {
      dispatch(logoutSuccess());
    } else {
      console.error("Logout Failed:", data);
    }
  } catch (error) {
    console.error("Logout Error:", error);
  }
};
