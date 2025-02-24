export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REFRESH_SUCCESS = "REFRESH_SUCCESS";

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const refreshSuccess = (payload) => ({
  type: REFRESH_SUCCESS,
  payload,
});
