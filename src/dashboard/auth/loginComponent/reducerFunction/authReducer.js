import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REFRESH_SUCCESS } from "./action";

const initialState = {
  user: null,
  access_token: null,
  id_token: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token,
        id_token: action.payload.id_token,
        isAuthenticated: true,
      };

    case REFRESH_SUCCESS:
      return {
        ...state,
        access_token: action.payload.access_token,
        id_token: action.payload.id_token,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        access_token: null,
        id_token: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authReducer;
