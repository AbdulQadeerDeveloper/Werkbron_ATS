import { combineReducers } from '@reduxjs/toolkit';

import authReducerLogin from '../features/auth/reducers';
import microsoftLoginReducer from '../features/auth/googleReducer';

// Implement Redux for efficient global state management across the app
const reducers = {
    authReducerLogin,
    microsoftLoginReducer,
};

export default combineReducers(reducers);