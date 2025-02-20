import BACKEND_URL_APPLICATION from "../utils/index";
// Integrate React app with backend API for dynamic data retrieval and management state

export const API_END_POINTS = {
   
    USER_LOGIN: `${BACKEND_URL_APPLICATION}/api/auth/login`,
    USER_LOGIN_MICROSOFT: `${BACKEND_URL_APPLICATION}/api/auth/microsoft`,
    USER_FORGOT_PASSWORD:`${BACKEND_URL_APPLICATION}/api/auth/forgot-password`,
    USER_RESET_PASSWORD:`${BACKEND_URL_APPLICATION}/api/auth/reset-password`,
    
};

