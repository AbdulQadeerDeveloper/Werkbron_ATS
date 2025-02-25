import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import { store, persistor } from './store/index'; 
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Login from './dashboard/auth/loginComponent/component/atsLoginNew'
import MicrosoftLogin from './dashboard/auth/loginComponent/component/overlayImageMicrosoftLogin';

// import MicrosoftLogin from './dashboard/auth/loginComponent/component/overlayImageMicrosoftLogin';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <MicrosoftLogin/> */}
          {/* <Login/> */}
          {/* <MicrosoftLogin/> */}
          {/* <Login/> */}
          <Login/>
        </PersistGate>
      </Provider>

    </ChakraProvider>

  </React.StrictMode>
);



