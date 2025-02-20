import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';

// import { store, persistor } from './store/index'; 
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';


// Testing Routes Start-----------------------------------------------------------!

// import CombineRoute from './componentRoute/routes'
// import Login from './dashboard/auth/loginComponent/component/backgroundImageLogin';

//import MicrosoftLogin from './dashboard/auth/loginComponent/component/overlayImageMicrosoftLogin';
// import MicrosoftLogin from './dashboard/auth/registerCompoent/component/overlayImageMicrosoftLogin';
// import MicrosoftLogin from './dashboard/auth/registerCompoent/component/microsoftLogin';
import Dashboard from './dashboard/mianDashboard/dashComponent/dashboard';

// Testing Routes Ending-----------------------------------------------------------!
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <MicrosoftLogin />  */}
      {/* <MicrosoftLogin /> //microsoftLogin */}
      {/* <Login/> //backgroundImageLogin */}
      {/* <Login/> //overlayImageLogin */}
      <Dashboard/> 
    </ChakraProvider>

  </React.StrictMode>
);


{/* <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <CombineRoute />
  </PersistGate>
</Provider> */}

